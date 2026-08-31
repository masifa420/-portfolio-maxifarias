"use client";

import { useEffect, useState } from "react";

type RunData = {
  status: string;
  conclusion: string | null;
  runNumber: number;
  createdAt: string;
  updatedAt: string;
  durationMs: number | null;
  htmlUrl: string;
  headCommit: string;
  branch: string;
};

function formatRelative(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

function formatDuration(ms: number | null) {
  if (!ms) return null;
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

export default function CypressStatusWidget() {
  const [run, setRun] = useState<RunData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/cypress-status")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => { setRun(data); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  const pass = run?.conclusion === "success";
  const fail = run?.conclusion === "failure";
  const running = run?.status === "in_progress" || run?.status === "queued";

  return (
    <div
      className="rounded-[6px] border border-border overflow-hidden w-full"
      style={{ background: "var(--surface)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b border-border"
        style={{ background: "var(--surface-2)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{
              background: loading || running
                ? "var(--ocre)"
                : pass
                ? "var(--pass)"
                : fail
                ? "var(--fail)"
                : "var(--text-2)",
              boxShadow: (pass || running) ? `0 0 6px ${pass ? "var(--pass)" : "var(--ocre)"}` : "none",
            }}
          />
          <span className="font-mono text-[0.68rem] text-text-2 uppercase tracking-[0.12em]">
            CI · Cypress E2E
          </span>
        </div>

        {run && (
          <span className="font-mono text-[0.65rem] text-text-3">
            #{run.runNumber}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-5 py-5">
        {loading && (
          <p className="font-mono text-[0.75rem] text-text-3 animate-pulse">
            fetching last run…
          </p>
        )}

        {error && (
          <p className="font-mono text-[0.75rem] text-text-3">
            — could not reach GitHub API
          </p>
        )}

        {run && (
          <div className="flex flex-col gap-4">
            {/* Status + duration */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="font-mono text-[0.72rem] uppercase tracking-[0.1em] px-3 py-[3px] rounded-[3px]"
                style={{
                  background: pass
                    ? "var(--pass-dim)"
                    : fail
                    ? "var(--fail-dim)"
                    : running
                    ? "var(--ocre-dim)"
                    : "var(--surface-2)",
                  color: pass
                    ? "var(--pass)"
                    : fail
                    ? "var(--fail)"
                    : running
                    ? "var(--ocre)"
                    : "var(--text-2)",
                }}
              >
                {pass ? "✓ pass" : fail ? "✕ fail" : running ? "⟳ running" : run.conclusion ?? run.status}
              </span>

              {formatDuration(run.durationMs) && (
                <span className="font-mono text-[0.68rem] text-text-3">
                  {formatDuration(run.durationMs)}
                </span>
              )}

              <span className="font-mono text-[0.68rem] text-text-3">
                {formatRelative(run.updatedAt)}
              </span>
            </div>

            {/* Commit message */}
            {run.headCommit && (
              <p
                className="font-mono text-[0.72rem] leading-[1.6] truncate"
                style={{ color: "var(--text-2)", maxWidth: "100%" }}
                title={run.headCommit}
              >
                {run.headCommit}
              </p>
            )}

            {/* Branch + link */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="font-mono text-[0.65rem] text-text-3">
                branch: {run.branch}
              </span>
              <a
                href={run.htmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.68rem] text-petrol underline underline-offset-2 decoration-dotted hover:opacity-70 transition-opacity"
              >
                view run ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
