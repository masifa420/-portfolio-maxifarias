"use client";

import { useEffect, useState } from "react";

type JiraIssue = {
  key: string;
  summary: string;
  status: string;
  statusCategory: string;
  url: string;
};

type Sprint = {
  id: number;
  name: string;
  state: string;
  startDate: string | null;
  endDate: string | null;
  completeDate: string | null;
  issues: JiraIssue[];
};

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

function SprintRow({ sprint, defaultOpen }: { sprint: Sprint; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  const done   = sprint.issues.filter((i) => i.statusCategory === "done").length;
  const inProg = sprint.issues.filter((i) => i.statusCategory === "indeterminate").length;
  const toDo   = sprint.issues.filter((i) => i.statusCategory === "new").length;
  const total  = sprint.issues.length;
  const doneW   = total > 0 ? (done / total) * 100 : 0;
  const inProgW = total > 0 ? (inProg / total) * 100 : 0;
  const toDoW   = total > 0 ? (toDo / total) * 100 : 0;
  const isActive = sprint.state === "active";

  return (
    <div className="rounded-[6px] border border-border overflow-hidden" style={{ background: "var(--surface)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-5 py-4 cursor-pointer transition-opacity hover:opacity-80 text-left"
        style={{
          background: "var(--surface-2)",
          borderBottom: open ? "1px solid var(--border)" : "none",
        }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              background: isActive ? "var(--ocre)" : doneW === 100 && total > 0 ? "var(--pass)" : "var(--text-2)",
              boxShadow: isActive ? "0 0 6px var(--ocre)" : doneW === 100 && total > 0 ? "0 0 5px var(--pass)" : "none",
            }}
          />
          <div className="flex flex-col gap-[2px] flex-1 min-w-0">
            <span className="font-mono text-[0.68rem] text-text-1 uppercase tracking-[0.08em] truncate">{sprint.name}</span>
            <span className="font-mono text-[0.58rem] text-text-2">
              {formatDate(sprint.startDate)} → {formatDate(sprint.endDate ?? sprint.completeDate)}
            </span>
          </div>
          {isActive && (
            <span
              className="font-mono text-[0.57rem] uppercase tracking-[0.1em] px-2 py-[2px] rounded-[2px] flex-shrink-0"
              style={{ background: "var(--ocre-dim)", color: "var(--ocre)" }}
            >
              active
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 pl-5 sm:pl-0">
          {total > 0 && (
            <div className="flex items-center gap-[5px]">
              <span className="font-mono text-[0.6rem]" style={{ color: "var(--pass)" }}>{done} done</span>
              <span className="font-mono text-[0.6rem] text-text-2">·</span>
              <span className="font-mono text-[0.6rem]" style={{ color: "var(--ocre)" }}>{inProg} in progress</span>
              <span className="font-mono text-[0.6rem] text-text-2">·</span>
              <span className="font-mono text-[0.6rem] text-text-2">{toDo} to do</span>
            </div>
          )}
          {total === 0 && <span className="font-mono text-[0.6rem] text-text-2">no issues</span>}
          <span
            className="font-mono text-[0.7rem] text-text-2 inline-block transition-transform duration-200"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ↓
          </span>
        </div>
      </button>

      {open && total > 0 && (
        <div>
          {/* Progress bar */}
          <div className="h-[3px] w-full flex overflow-hidden">
            <div style={{ width: `${doneW}%`, background: "var(--pass)", transition: "width 0.6s ease" }} />
            <div style={{ width: `${inProgW}%`, background: "var(--ocre)", transition: "width 0.6s ease" }} />
            <div style={{ width: `${toDoW}%`, background: "var(--border)" }} />
          </div>

          {/* Issues */}
          <div className="flex flex-col">
            {sprint.issues.map((issue, i) => {
              const isDone   = issue.statusCategory === "done";
              const isInProg = issue.statusCategory === "indeterminate";
              return (
                <div
                  key={issue.key}
                  className="flex items-center gap-3 px-5 py-[10px] border-b border-border last:border-0"
                  style={{ background: i % 2 === 0 ? "transparent" : "var(--surface-2)" }}
                >
                  <a
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[0.62rem] text-petrol flex-shrink-0 w-[80px] hover:opacity-70 transition-opacity"
                  >
                    {issue.key} ↗
                  </a>
                  <span
                    className="font-mono text-[0.68rem] text-text-1 flex-1 min-w-0 truncate"
                    title={issue.summary}
                  >
                    {issue.summary}
                  </span>
                  <span
                    className="font-mono text-[0.57rem] uppercase tracking-[0.08em] px-[6px] py-[2px] rounded-[2px] flex-shrink-0"
                    style={{
                      background: isDone ? "var(--pass-dim)" : isInProg ? "var(--ocre-dim)" : "var(--surface-2)",
                      color:      isDone ? "var(--pass)"     : isInProg ? "var(--ocre)"     : "var(--text-2)",
                    }}
                  >
                    {issue.status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SprintBoard() {
  const [sprints, setSprints] = useState<Sprint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/jira-sprints", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => setSprints(data.sprints ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="font-mono text-[0.72rem] text-text-2 animate-pulse py-4">
        fetching sprints…
      </p>
    );
  }

  if (!sprints.length) {
    return (
      <p className="font-mono text-[0.72rem] text-text-2 py-4">— no sprints found</p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {sprints.map((s, i) => (
        <SprintRow key={s.id} sprint={s} defaultOpen={i === 0} />
      ))}
    </div>
  );
}
