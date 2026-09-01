"use client";

import { useEffect, useState } from "react";
import { workTranslations } from "@/data/workTranslations";

type RunData = {
  status: string;
  conclusion: string | null;
  runNumber: number;
  updatedAt: string;
  durationMs: number | null;
  htmlUrl: string;
  branch: string;
};

type TcCoverage = { total: number; automated: number; coverage: number };

type Sprint = {
  id: number;
  name: string;
  state: string;
  startDate: string | null;
  endDate: string | null;
  completeDate: string | null;
};

function formatDuration(ms: number | null) {
  if (!ms) return "—";
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "2-digit" });
}

function runsForSprint(runs: RunData[], sprint: Sprint) {
  if (!sprint.startDate) return runs;
  const start = new Date(sprint.startDate).getTime();
  const end   = sprint.endDate ? new Date(sprint.endDate).getTime() : Date.now();
  return runs.filter((r) => {
    const t = new Date(r.updatedAt).getTime();
    return t >= start && t <= end;
  });
}

function Chip({ children, variant = "neutral" }: { children: React.ReactNode; variant?: "pass" | "fail" | "petrol" | "ocre" | "neutral" }) {
  const styles: Record<string, React.CSSProperties> = {
    pass:    { background: "var(--pass-dim)",   color: "var(--pass)"   },
    fail:    { background: "var(--fail-dim)",   color: "var(--fail)"   },
    petrol:  { background: "var(--petrol-dim)", color: "var(--petrol)" },
    ocre:    { background: "var(--ocre-dim)",   color: "var(--ocre)"   },
    neutral: { background: "var(--surface-2)",  color: "var(--text-2)" },
  };
  return (
    <span className="font-mono text-[0.6rem] uppercase tracking-[0.08em] px-[6px] py-[2px] rounded-[2px]" style={styles[variant]}>
      {children}
    </span>
  );
}

function SprintCard({ sprint, runs, tc, defaultOpen }: {
  sprint: Sprint;
  runs: RunData[];
  tc: TcCoverage | null;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  const completed   = runs.filter((r) => r.status === "completed");
  const passed      = completed.filter((r) => r.conclusion === "success");
  const successRate = completed.length > 0 ? Math.round((passed.length / completed.length) * 100) : null;
  const avgDuration = completed.length > 0
    ? Math.round(completed.reduce((a, r) => a + (r.durationMs ?? 0), 0) / completed.length)
    : null;
  const latestRun = completed[0];

  const tcs      = workTranslations.en.testCases;
  const bugs     = workTranslations.en.bugReports;
  const tcPass   = tcs.filter((t) => t.status === "PASS").length;
  const tcFail   = tcs.filter((t) => t.status !== "PASS").length;
  const bugsFixed = bugs.filter((b) => b.status === "Fixed").length;
  const bugsOpen  = bugs.length - bugsFixed;

  const isActive = sprint.state === "active";
  const allPass  = successRate === 100 && completed.length > 0;

  return (
    <div className="rounded-[6px] border border-border overflow-hidden" style={{ background: "var(--surface)" }}>

      {/* Sprint header — toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 cursor-pointer transition-opacity hover:opacity-80"
        style={{ background: "var(--surface-2)", borderBottom: open ? "1px solid var(--border)" : "none" }}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{
              background: isActive ? "var(--ocre)" : allPass ? "var(--pass)" : completed.length === 0 ? "var(--text-2)" : "var(--fail)",
              boxShadow: isActive ? "0 0 6px var(--ocre)" : allPass ? "0 0 6px var(--pass)" : "none",
            }}
          />
          <span className="font-mono text-[0.68rem] text-text-1 uppercase tracking-[0.1em]">{sprint.name}</span>
          <span className="font-mono text-[0.6rem] text-text-2">
            {formatDate(sprint.startDate)} → {formatDate(sprint.endDate ?? sprint.completeDate)}
          </span>
          {isActive && <Chip variant="ocre">active</Chip>}
          {!isActive && allPass && <Chip variant="pass">✓ all pass</Chip>}
          {!isActive && successRate !== null && !allPass && <Chip variant="fail">✕ failures</Chip>}
          {completed.length === 0 && <Chip variant="neutral">no runs</Chip>}
        </div>
        <span className="font-mono text-[0.7rem] text-text-2 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
          ↓
        </span>
      </button>

      {/* Sprint body */}
      {open && (
        <div>
          {/* Meta bar */}
          <div className="flex items-center gap-5 px-5 py-[10px] border-b border-border flex-wrap" style={{ background: "var(--surface-2)" }}>
            {[
              { label: "ci runs",    value: `${completed.length} completed` },
              { label: "ci rate",    value: successRate !== null ? `${successRate}% (${passed.length}/${completed.length})` : "—", accent: successRate === 100 },
              { label: "avg ci dur", value: formatDuration(avgDuration) },
              ...(latestRun ? [{ label: "last run", value: `#${latestRun.runNumber}`, link: latestRun.htmlUrl }] : []),
            ].map(({ label, value, accent, link }) => (
              <div key={label} className="flex items-center gap-[6px]">
                <span className="font-mono text-[0.57rem] text-text-2 uppercase tracking-[0.1em]">{label}</span>
                {link ? (
                  <a href={link} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-[0.65rem] text-petrol underline underline-offset-2 decoration-dotted hover:opacity-70">
                    {value} ↗
                  </a>
                ) : (
                  <span className="font-mono text-[0.65rem]" style={{ color: accent ? "var(--pass)" : "var(--text-2)" }}>{value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderBottom: "1px solid var(--border)" }}>

            <div className="flex flex-col gap-2 p-5 border-r border-border sm:border-b-0 border-b">
              <span className="font-mono text-[0.58rem] text-text-2 uppercase tracking-[0.12em]">Test Cases</span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[1.5rem] font-semibold leading-none text-text-1" style={{ fontVariantNumeric: "tabular-nums" }}>{tcs.length}</span>
                <span className="font-mono text-[0.65rem] text-text-2">/ {tcs.length} total</span>
              </div>
              <div className="flex gap-[5px] flex-wrap">
                <Chip variant="pass">✓ {tcPass} pass</Chip>
                {tcFail > 0 && <Chip variant="fail">✕ {tcFail} fail</Chip>}
              </div>
            </div>

            <div className="flex flex-col gap-2 p-5 border-r border-border sm:border-b-0 border-b">
              <span className="font-mono text-[0.58rem] text-text-2 uppercase tracking-[0.12em]">Bugs Tracked</span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[1.5rem] font-semibold leading-none text-text-1" style={{ fontVariantNumeric: "tabular-nums" }}>{bugs.length}</span>
                <span className="font-mono text-[0.65rem] text-text-2">reported</span>
              </div>
              <div className="flex gap-[5px] flex-wrap">
                <Chip variant="pass">✓ {bugsFixed} fixed</Chip>
                {bugsOpen > 0 ? <Chip variant="fail">{bugsOpen} open</Chip> : <Chip variant="neutral">0 open</Chip>}
              </div>
            </div>

            <div className="flex flex-col gap-2 p-5">
              <span className="font-mono text-[0.58rem] text-text-2 uppercase tracking-[0.12em]">Automation Coverage</span>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-[1.5rem] font-semibold leading-none text-text-1">{tc ? `${tc.coverage}%` : "—"}</span>
              </div>
              {tc && (
                <>
                  <div className="flex gap-[5px] flex-wrap">
                    <Chip variant="petrol">{tc.automated}/{tc.total} TCs</Chip>
                    <Chip variant="ocre">Cypress E2E</Chip>
                  </div>
                  <div className="h-[3px] rounded-[2px] overflow-hidden mt-1" style={{ background: "var(--border)" }}>
                    <div className="h-full rounded-[2px] transition-all duration-700"
                      style={{ width: `${tc.coverage}%`, background: tc.coverage === 100 ? "var(--pass)" : "var(--ocre)" }} />
                  </div>
                </>
              )}
            </div>

          </div>

          {/* Details */}
          <div className="flex items-center gap-6 px-5 py-3 border-b border-border flex-wrap">
            {[
              { label: "browser",   value: "Chrome" },
              { label: "viewport",  value: "390 × 844 · mobile" },
              { label: "env",       value: "Production · Vercel" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-[6px]">
                <span className="font-mono text-[0.57rem] text-text-2 uppercase tracking-[0.1em]">{label}</span>
                <span className="font-mono text-[0.65rem] text-text-2">{value}</span>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}

export default function ExecutionSummaryReport() {
  const [sprints, setSprints]   = useState<Sprint[]>([]);
  const [runs, setRuns]         = useState<RunData[]>([]);
  const [tc, setTc]             = useState<TcCoverage | null>(null);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/jira-sprints",    { cache: "no-store" }).then((r) => r.ok ? r.json() : Promise.reject()),
      fetch("/api/cypress-status",  { cache: "no-store" }).then((r) => r.ok ? r.json() : Promise.reject()),
    ])
      .then(([jira, ci]) => {
        setSprints(jira.sprints ?? []);
        setRuns(ci.runs ?? []);
        setTc(ci.tcCoverage ?? null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <p className="font-mono text-[0.75rem] text-text-2 animate-pulse py-6">
        fetching sprints…
      </p>
    );
  }

  if (sprints.length === 0) {
    return (
      <p className="font-mono text-[0.75rem] text-text-2 py-6">
        — no sprints found in Jira
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {sprints.map((sprint, i) => (
        <SprintCard
          key={sprint.id}
          sprint={sprint}
          runs={runsForSprint(runs, sprint)}
          tc={tc}
          defaultOpen={i === 0}
        />
      ))}
    </div>
  );
}
