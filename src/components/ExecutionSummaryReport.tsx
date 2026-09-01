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

type TcCoverage = {
  total: number;
  automated: number;
  coverage: number;
};

type ApiResponse = {
  runs: RunData[];
  tcCoverage: TcCoverage;
};

function formatDuration(ms: number | null) {
  if (!ms) return "—";
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "2-digit",
  });
}

function Chip({ children, variant = "neutral" }: { children: React.ReactNode; variant?: "pass" | "fail" | "petrol" | "ocre" | "neutral" }) {
  const styles: Record<string, React.CSSProperties> = {
    pass:    { background: "var(--pass-dim)",    color: "var(--pass)"    },
    fail:    { background: "var(--fail-dim)",    color: "var(--fail)"    },
    petrol:  { background: "var(--petrol-dim)",  color: "var(--petrol)"  },
    ocre:    { background: "var(--ocre-dim)",    color: "var(--ocre)"    },
    neutral: { background: "var(--surface-2)",   color: "var(--text-2)"  },
  };
  return (
    <span
      className="font-mono text-[0.6rem] uppercase tracking-[0.08em] px-[6px] py-[2px] rounded-[2px]"
      style={styles[variant]}
    >
      {children}
    </span>
  );
}

function StatCell({ title, main, sub, chips, progress }: {
  title: string;
  main: string;
  sub?: string;
  chips?: React.ReactNode;
  progress?: number;
}) {
  return (
    <div className="flex flex-col gap-2 p-5 border-r border-b border-border last:border-r-0" style={{ minWidth: 0 }}>
      <span className="font-mono text-[0.58rem] text-text-2 uppercase tracking-[0.12em]">{title}</span>
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-[1.5rem] font-semibold leading-none text-text-1" style={{ fontVariantNumeric: "tabular-nums" }}>
          {main}
        </span>
        {sub && <span className="font-mono text-[0.65rem] text-text-2">{sub}</span>}
      </div>
      {chips && <div className="flex gap-[5px] flex-wrap">{chips}</div>}
      {progress !== undefined && (
        <div className="h-[3px] rounded-[2px] overflow-hidden mt-1" style={{ background: "var(--border)" }}>
          <div
            className="h-full rounded-[2px] transition-all duration-700"
            style={{ width: `${progress}%`, background: progress === 100 ? "var(--pass)" : "var(--ocre)" }}
          />
        </div>
      )}
    </div>
  );
}

export default function ExecutionSummaryReport() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cypress-status", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((json: ApiResponse) => { setData(json); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const tcs      = workTranslations.en.testCases;
  const bugs     = workTranslations.en.bugReports;
  const tcPass   = tcs.filter((t) => t.status === "PASS").length;
  const tcFail   = tcs.filter((t) => t.status !== "PASS").length;
  const bugsFixed = bugs.filter((b) => b.status === "Fixed").length;
  const bugsOpen  = bugs.length - bugsFixed;

  const latestRun   = data?.runs.find((r) => r.status === "completed");
  const completedRuns = data?.runs.filter((r) => r.status === "completed") ?? [];
  const passedRuns  = completedRuns.filter((r) => r.conclusion === "success");
  const successRate = completedRuns.length > 0
    ? Math.round((passedRuns.length / completedRuns.length) * 100)
    : null;
  const avgDuration = completedRuns.length > 0
    ? Math.round(completedRuns.reduce((acc, r) => acc + (r.durationMs ?? 0), 0) / completedRuns.length)
    : null;
  const tc = data?.tcCoverage;

  const isPass = latestRun?.conclusion === "success";

  return (
    <div className="rounded-[6px] border border-border overflow-hidden w-full" style={{ background: "var(--surface)" }}>

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border flex-wrap gap-2" style={{ background: "var(--surface-2)" }}>
        <div className="flex items-center gap-2">
          <span
            className="w-[7px] h-[7px] rounded-full flex-shrink-0"
            style={{
              background: loading ? "var(--ocre)" : isPass ? "var(--pass)" : "var(--fail)",
              boxShadow: isPass ? "0 0 7px var(--pass)" : "none",
            }}
          />
          <span className="font-mono text-[0.65rem] text-text-2 uppercase tracking-[0.14em]">
            Execution Report · Sprint 1
          </span>
        </div>
        <div className="flex items-center gap-3">
          {!loading && isPass && <Chip variant="pass">✓ all pass</Chip>}
          {!loading && latestRun && (
            <a
              href={latestRun.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.62rem] text-petrol underline underline-offset-2 decoration-dotted hover:opacity-70 transition-opacity"
            >
              CI run #{latestRun.runNumber} ↗
            </a>
          )}
        </div>
      </div>

      {/* Sprint meta bar */}
      <div className="flex items-center gap-5 px-5 py-[10px] border-b border-border flex-wrap" style={{ background: "var(--surface-2)" }}>
        {[
          { label: "date",    value: latestRun ? formatDate(latestRun.updatedAt) : "—" },
          { label: "env",     value: "Production · Vercel" },
          { label: "branch",  value: latestRun?.branch ?? "main" },
          { label: "ci rate", value: successRate !== null ? `${successRate}% (${passedRuns.length}/${completedRuns.length})` : "—", accent: successRate === 100 },
        ].map(({ label, value, accent }) => (
          <div key={label} className="flex items-center gap-[6px]">
            <span className="font-mono text-[0.57rem] text-text-2 uppercase tracking-[0.1em]">{label}</span>
            <span className="font-mono text-[0.65rem]" style={{ color: accent ? "var(--pass)" : "var(--text-2)" }}>{value}</span>
          </div>
        ))}
      </div>

      {/* Stats grid — 3 cols */}
      <div className="grid grid-cols-1 sm:grid-cols-3" style={{ borderBottom: "1px solid var(--border)" }}>
        <StatCell
          title="Test Cases"
          main={String(tcs.length)}
          sub={`/ ${tcs.length} total`}
          chips={<><Chip variant="pass">✓ {tcPass} pass</Chip>{tcFail > 0 && <Chip variant="fail">✕ {tcFail} fail</Chip>}</>}
        />
        <StatCell
          title="Bugs Tracked"
          main={String(bugs.length)}
          sub="reported"
          chips={<><Chip variant="pass">✓ {bugsFixed} fixed</Chip>{bugsOpen > 0 ? <Chip variant="fail">{bugsOpen} open</Chip> : <Chip variant="neutral">0 open</Chip>}</>}
        />
        <StatCell
          title="Automation Coverage"
          main={tc ? `${tc.coverage}%` : "—"}
          chips={tc ? <><Chip variant="petrol">{tc.automated}/{tc.total} TCs</Chip><Chip variant="ocre">Cypress E2E</Chip></> : undefined}
          progress={tc?.coverage}
        />
      </div>

      {/* Details row */}
      <div className="flex items-center gap-6 px-5 py-3 border-b border-border flex-wrap">
        {[
          { label: "browser",   value: "Chrome" },
          { label: "viewport",  value: "390 × 844 · mobile" },
          { label: "avg duration", value: loading ? "…" : formatDuration(avgDuration) },
        ].map(({ label, value }) => (
          <div key={label} className="flex items-center gap-[6px]">
            <span className="font-mono text-[0.57rem] text-text-2 uppercase tracking-[0.1em]">{label}</span>
            <span className="font-mono text-[0.65rem] text-text-2">{value}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-5 py-[10px] flex-wrap gap-2" style={{ background: "var(--surface-2)" }}>
        <span className="font-mono text-[0.58rem] text-text-2">
          live data · refreshes on CI run
        </span>
        <div className="flex gap-4">
          {latestRun && (
            <a href={latestRun.htmlUrl} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[0.6rem] text-petrol underline underline-offset-2 decoration-dotted hover:opacity-70 transition-opacity">
              GitHub Actions ↗
            </a>
          )}
        </div>
      </div>

    </div>
  );
}
