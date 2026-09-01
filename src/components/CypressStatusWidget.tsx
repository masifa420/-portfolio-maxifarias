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

type TcCoverage = {
  total: number;
  automated: number;
  automatedIds: string[];
  coverage: number;
};

type ApiResponse = {
  runs: RunData[];
  tcCoverage: TcCoverage;
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

function computeStats(runs: RunData[]) {
  const completed = runs.filter((r) => r.status === "completed");
  const passed = completed.filter((r) => r.conclusion === "success");
  const successRate = completed.length > 0 ? Math.round((passed.length / completed.length) * 100) : null;

  const durations = completed.map((r) => r.durationMs).filter((d): d is number => d !== null);
  const avgDuration = durations.length > 0
    ? Math.round(durations.reduce((a, b) => a + b, 0) / durations.length)
    : null;

  let streak = 0;
  for (const r of runs) {
    if (r.status === "completed" && r.conclusion === "success") streak++;
    else if (r.status === "completed") break;
  }

  return { successRate, avgDuration, streak, total: completed.length };
}

function StatCard({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div
      className="flex flex-col gap-1 px-4 py-3 rounded-[4px] border border-border flex-1 min-w-0"
      style={{ background: "var(--surface)" }}
    >
      <span
        className="font-mono text-[0.7rem] font-semibold leading-none truncate"
        style={{ color: accent ? "var(--pass)" : "var(--text-1)" }}
      >
        {value}
      </span>
      <span className="font-mono text-[0.6rem] text-text-2 uppercase tracking-[0.1em] truncate">
        {label}
      </span>
    </div>
  );
}

function RunRow({ run, isLatest }: { run: RunData; isLatest: boolean }) {
  const pass = run.conclusion === "success";
  const fail = run.conclusion === "failure";
  const running = run.status === "in_progress" || run.status === "queued";

  return (
    <div
      className="flex flex-col gap-2 py-4 border-b border-border last:border-0"
      style={{ opacity: isLatest ? 1 : 0.55 }}
    >
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className="font-mono text-[0.68rem] uppercase tracking-[0.1em] px-2 py-[2px] rounded-[3px]"
            style={{
              background: pass ? "var(--pass-dim)" : fail ? "var(--fail-dim)" : running ? "var(--ocre-dim)" : "var(--surface-2)",
              color: pass ? "var(--pass)" : fail ? "var(--fail)" : running ? "var(--ocre)" : "var(--text-2)",
            }}
          >
            {pass ? "✓ pass" : fail ? "✕ fail" : running ? "⟳ running" : run.conclusion ?? run.status}
          </span>
          <span className="font-mono text-[0.65rem] text-text-2">#{run.runNumber}</span>
          {formatDuration(run.durationMs) && (
            <span className="font-mono text-[0.65rem] text-text-2">{formatDuration(run.durationMs)}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.63rem] text-text-2">{formatRelative(run.updatedAt)}</span>
          <a
            href={run.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] text-petrol underline underline-offset-2 decoration-dotted hover:opacity-70 transition-opacity"
          >
            ↗
          </a>
        </div>
      </div>
      {run.headCommit && (
        <p className="font-mono text-[0.68rem] leading-[1.5] truncate" style={{ color: "var(--text-2)" }} title={run.headCommit}>
          {run.headCommit}
        </p>
      )}
    </div>
  );
}

export default function CypressStatusWidget() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const load = () =>
      fetch("/api/cypress-status", { cache: "no-store" })
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then((json: ApiResponse) => {
          setData(json);
          setLoading(false);
          const allDone = json.runs.every((r) => r.status === "completed");
          if (allDone && interval) { clearInterval(interval); interval = null; }
        })
        .catch(() => { setError(true); setLoading(false); });

    load();
    interval = setInterval(load, 30_000);
    return () => { if (interval) clearInterval(interval); };
  }, []);

  const runs = data?.runs ?? [];
  const tc = data?.tcCoverage ?? null;
  const stats = runs.length > 0 ? computeStats(runs) : null;
  const latest = runs[0];
  const latestRunning = latest?.status !== "completed";

  return (
    <div className="rounded-[6px] border border-border overflow-hidden w-full" style={{ background: "var(--surface)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border" style={{ background: "var(--surface-2)" }}>
        <div className="flex items-center gap-2">
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{
              background: loading || latestRunning ? "var(--ocre)" : latest?.conclusion === "success" ? "var(--pass)" : latest?.conclusion === "failure" ? "var(--fail)" : "var(--text-2)",
              boxShadow: latestRunning ? "0 0 6px var(--ocre)" : latest?.conclusion === "success" ? "0 0 6px var(--pass)" : "none",
            }}
          />
          <span className="font-mono text-[0.68rem] text-text-2 uppercase tracking-[0.12em]">
            CI · Cypress E2E
          </span>
        </div>
        {stats && (
          <span className="font-mono text-[0.63rem] text-text-2">last {stats.total} runs</span>
        )}
      </div>

      {/* Stats */}
      {(stats || tc) && (
        <div className="flex gap-2 px-5 pt-4 pb-2 flex-wrap">
          {stats && (
            <>
              <StatCard
                label="success rate"
                value={stats.successRate !== null ? `${stats.successRate}%` : "—"}
                accent={stats.successRate === 100}
              />
              <StatCard
                label="avg duration"
                value={formatDuration(stats.avgDuration) ?? "—"}
              />
              <StatCard
                label="pass streak"
                value={stats.streak > 0 ? `${stats.streak} runs` : "—"}
                accent={stats.streak >= 3}
              />
            </>
          )}
          {tc && (
            <StatCard
              label="TCs automated"
              value={`${tc.automated}/${tc.total} · ${tc.coverage}%`}
              accent={tc.coverage === 100}
            />
          )}
        </div>
      )}

      {/* Run list */}
      <div className="px-5">
        {loading && (
          <p className="font-mono text-[0.75rem] text-text-2 animate-pulse py-5">fetching runs…</p>
        )}
        {error && (
          <p className="font-mono text-[0.75rem] text-text-2 py-5">— could not reach GitHub API</p>
        )}
        {runs.slice(0, 3).map((run, i) => (
          <RunRow key={run.runNumber} run={run} isLatest={i === 0} />
        ))}
      </div>
    </div>
  );
}
