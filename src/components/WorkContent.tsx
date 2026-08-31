"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { workTranslations, type BugReportExample, type GherkinLine, type TestCase } from "@/data/workTranslations";
import RevealSection from "./RevealSection";

const SECTION_COLORS: Record<string, { bg: string; border: string }> = {
  bugReports:  { bg: "var(--petrol-dim)", border: "var(--petrol)" },
  testCases:   { bg: "var(--sage-dim)",   border: "var(--sage)"   },
  automation:  { bg: "var(--ocre-dim)",   border: "var(--ocre)"   },
  reports:     { bg: "var(--petrol-dim)", border: "var(--petrol)" },
};

const SECTION_ICONS: Record<string, React.ReactNode> = {
  bugReports: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--petrol)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx={12} cy={12} r={10} />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  testCases: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--sage)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="9 11 12 14 22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  automation: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--ocre)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  reports: (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--petrol)" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
};

const SECTION_KEYS = ["bugReports", "testCases", "automation", "reports"] as const;

function GherkinLines({ lines }: { lines: GherkinLine[] }) {
  return (
    <>
      {lines.map((line, i) => {
        if (line.keyword === "blank") return <span key={i}>{"\n"}</span>;
        if (line.keyword === "feature")
          return <span key={i} style={{ color: "var(--petrol)", fontWeight: 600 }}>{line.text}{"\n"}</span>;
        if (line.keyword === "scenario")
          return <span key={i} style={{ color: "var(--petrol)" }}>{line.text}{"\n"}</span>;
        const match = line.text.match(/^(\s*)(Given|When|Then|But|And)(\s+)(.*)$/i);
        if (match) {
          return (
            <span key={i}>
              <span style={{ color: "var(--text-2)" }}>{match[1]}</span>
              <span style={{ color: "var(--sage)", fontWeight: 600 }}>{match[2]}</span>
              <span style={{ color: "var(--text-2)" }}>{match[3]}</span>
              <span style={{ color: "var(--text-1)" }}>{match[4]}</span>
              {"\n"}
            </span>
          );
        }
        return <span key={i} style={{ color: "var(--text-1)" }}>{line.text}{"\n"}</span>;
      })}
    </>
  );
}

function GherkinMobileList({ lines }: { lines: GherkinLine[] }) {
  return (
    <div className="font-mono text-[0.72rem] leading-[1.9] flex flex-col">
      {lines.map((line, i) => {
        if (line.keyword === "blank") return <div key={i} className="h-[0.6em]" />;
        if (line.keyword === "feature")
          return (
            <div key={i} style={{ color: "var(--petrol)", fontWeight: 600 }}>
              {line.text.trim()}
            </div>
          );
        if (line.keyword === "scenario")
          return (
            <div key={i} style={{ color: "var(--petrol)", paddingLeft: "1rem" }}>
              {line.text.trim()}
            </div>
          );
        const match = line.text.trim().match(/^(Given|When|Then|But|And)(\s+)(.*)$/i);
        if (match) {
          return (
            <div key={i} style={{ paddingLeft: "1.5rem", display: "flex", gap: "0.35em", alignItems: "flex-start" }}>
              <span style={{ color: "var(--sage)", fontWeight: 600, flexShrink: 0, minWidth: "3.5rem" }}>{match[1]}</span>
              <span style={{ color: "var(--text-1)", wordBreak: "break-word" }}>{match[3]}</span>
            </div>
          );
        }
        return (
          <div key={i} style={{ paddingLeft: "1.5rem", color: "var(--text-1)", wordBreak: "break-word" }}>
            {line.text.trim()}
          </div>
        );
      })}
    </div>
  );
}

function GherkinBlock({ lines }: { lines: GherkinLine[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: inline */}
      <pre className="hidden sm:block font-mono text-[0.75rem] leading-[1.9] overflow-x-auto p-4 rounded-[4px] border border-border" style={{ background: "var(--surface-2)" }}>
        <GherkinLines lines={lines} />
      </pre>

      {/* Mobile: trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="sm:hidden w-full flex items-center justify-between px-4 py-3 rounded-[4px] border border-border font-mono text-[0.72rem] text-petrol uppercase tracking-[0.08em] cursor-pointer transition-opacity duration-150 hover:opacity-70"
        style={{ background: "var(--surface-2)" }}
      >
        <span>Ver escenario Gherkin</span>
        <span>↗</span>
      </button>

      {/* Mobile bottom sheet */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-[200] flex flex-col justify-end"
          style={{ background: "rgba(0,0,0,0.55)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="rounded-[14px] border border-border flex flex-col max-h-[80vh] mx-3 mb-3"
            style={{ background: "var(--surface)", boxShadow: "0 -8px 40px rgba(0,0,0,0.25)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border flex-shrink-0">
              <span className="font-mono text-[0.7rem] text-petrol uppercase tracking-[0.1em]">Gherkin scenario</span>
              <button
                onClick={() => setOpen(false)}
                className="font-mono text-[0.7rem] text-text-2 border border-border rounded-[3px] px-3 py-1 bg-transparent cursor-pointer"
              >
                cerrar ×
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-4">
              <GherkinMobileList lines={lines} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function BugReportCard({ report, defaultOpen = true }: { report: BugReportExample; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[6px] border border-border overflow-hidden" style={{ background: "var(--surface)" }}>
      {/* Header — siempre visible, clickeable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 cursor-pointer transition-opacity duration-150 hover:opacity-80"
        style={{ background: "transparent", borderBottom: open ? "1px solid var(--border)" : "none" }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[0.68rem] text-petrol tracking-[0.1em] uppercase flex-shrink-0">{report.id}</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span
                className="font-mono text-[0.65rem] uppercase tracking-[0.1em] px-2 py-[2px] rounded-[2px]"
                style={{ background: "var(--pass-dim)", color: "var(--pass)" }}
              >
                ✓ {report.status}
              </span>
              <span
                className="font-mono text-[0.7rem] text-text-2 transition-transform duration-200 inline-block"
                style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                ▾
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="font-mono text-[0.65rem] uppercase tracking-[0.08em] px-2 py-[2px] rounded-[2px]"
              style={{ background: "var(--petrol-dim)", color: "var(--petrol)" }}
            >
              Severity: {report.severity}
            </span>
            <span
              className="font-mono text-[0.65rem] uppercase tracking-[0.08em] px-2 py-[2px] rounded-[2px]"
              style={{ background: "var(--petrol-dim)", color: "var(--petrol)" }}
            >
              Priority: {report.priority}
            </span>
          </div>
          <p className="font-display text-[0.98rem] text-text-1 leading-[1.35]">{report.title}</p>
        </div>
      </button>

      {/* Body colapsable */}
      {open && (
        <div className="px-5 py-4">
          <div className="flex flex-wrap gap-x-6 gap-y-1 mb-5">
            {[
              ["Env", report.environment],
              ["Device", report.device],
              ["Browser", report.browser],
            ].map(([k, v]) => (
              <p key={k} className="font-mono text-[0.68rem] text-text-2">
                <span className="opacity-60">{k}: </span>{v}
              </p>
            ))}
          </div>
          <GherkinBlock lines={report.gherkin} />
          <div className="mt-4 pt-4 border-t border-border flex gap-2 items-start">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.08em] text-sage mt-[1px] flex-shrink-0">Fix</span>
            <p className="font-mono text-[0.72rem] text-text-2 leading-[1.6]">{report.fix}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function TestCaseCard({ tc }: { tc: TestCase }) {
  const [open, setOpen] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);

  return (
    <div className="rounded-[6px] border border-border overflow-hidden" style={{ background: "var(--surface)" }}>
      {/* Header */}
      <button
        onClick={() => {
          if (open) { setStepsOpen(false); setResultOpen(false); }
          setOpen(!open);
        }}
        className="w-full text-left px-5 py-4 cursor-pointer transition-opacity duration-150 hover:opacity-80"
        style={{ background: "transparent", borderBottom: open ? "1px solid var(--border)" : "none" }}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
              <span className="font-mono text-[0.68rem] text-petrol tracking-[0.1em] uppercase">{tc.id}</span>
              <span className="font-mono text-[0.65rem] px-2 py-[2px] rounded-[2px]" style={{ background: "var(--sage-dim)", color: "var(--sage)" }}>
                Bug: {tc.bugId}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="font-mono text-[0.65rem] px-2 py-[2px] rounded-[2px]" style={{ background: "var(--pass-dim)", color: "var(--pass)" }}>
                ✓ {tc.status}
              </span>
              <span className="font-mono text-[0.7rem] text-text-2 transition-transform duration-200 inline-block" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[0.65rem] px-2 py-[2px] rounded-[2px]" style={{ background: "var(--petrol-dim)", color: "var(--petrol)" }}>Env: {tc.environment}</span>
            <span className="font-mono text-[0.65rem] px-2 py-[2px] rounded-[2px]" style={{ background: "var(--petrol-dim)", color: "var(--petrol)" }}>{tc.device}</span>
            <span className="font-mono text-[0.65rem] px-2 py-[2px] rounded-[2px]" style={{ background: "var(--petrol-dim)", color: "var(--petrol)" }}>Browser: {tc.browser}</span>
          </div>
          <p className="font-display text-[0.98rem] text-text-1 leading-[1.35]">{tc.title}</p>
        </div>
      </button>

      {open && (
        <div className="flex flex-col">
          {/* Metadata grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border" style={{ background: "var(--surface-2)" }}>
            {[
              ["Descubridor", tc.discoverer],
              ["Datos de prueba", tc.testData],
              ["Fix commit", tc.fixCommit],
              ["Browser", tc.browser],
            ].map(([label, val]) => (
              <div key={label} className="px-4 py-3 flex flex-col gap-1 border-r border-border last:border-r-0">
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.1em] opacity-60" style={{ color: "var(--text-2)" }}>{label}</span>
                <span className="font-mono text-[0.7rem] text-text-1">{val}</span>
              </div>
            ))}
          </div>

          {/* Preconditions */}
          <div className="px-5 py-4 border-b border-border">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.1em] mb-3" style={{ color: "var(--sage)" }}>Precondición</p>
            <ul className="flex flex-col gap-2">
              {tc.preconditions.map((p, i) => (
                <li key={i} className="font-mono text-[0.7rem] text-text-2 leading-[1.5] pl-4 relative">
                  <span className="absolute left-0" style={{ color: "var(--sage)" }}>→</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps collapsible */}
          <div className="border-b border-border">
            <button onClick={() => setStepsOpen(!stepsOpen)} className="w-full flex items-center justify-between px-5 py-3 cursor-pointer hover:opacity-80" style={{ background: "var(--surface-2)", border: "none" }}>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-petrol">Pasos de reproducción</span>
              <span className="font-mono text-[0.7rem] text-text-2 transition-transform duration-200 inline-block" style={{ transform: stepsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </button>
            {stepsOpen && (
              <div className="px-5 py-4 flex flex-col gap-0">
                {tc.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex flex-col items-center flex-shrink-0" style={{ width: 24 }}>
                      <div className="w-6 h-6 rounded-full border flex items-center justify-center font-mono text-[0.55rem] font-bold flex-shrink-0" style={{ borderColor: "var(--petrol)", background: "var(--petrol-dim)", color: "var(--petrol)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {i < tc.steps.length - 1 && <div className="w-px flex-1 min-h-[20px]" style={{ background: "var(--border)" }} />}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="font-mono text-[0.72rem] text-text-1 leading-[1.4]">{step.action}</p>
                      <p className="font-mono text-[0.62rem] text-text-2 leading-[1.5] mt-1">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Expected result collapsible */}
          <div>
            <button onClick={() => setResultOpen(!resultOpen)} className="w-full flex items-center justify-between px-5 py-3 cursor-pointer hover:opacity-80" style={{ background: "var(--surface-2)", border: "none" }}>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.1em]" style={{ color: "var(--pass)" }}>Resultado esperado</span>
              <span className="font-mono text-[0.7rem] text-text-2 transition-transform duration-200 inline-block" style={{ transform: resultOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
            </button>
            {resultOpen && (
              <div className="px-5 py-4">
                <ul className="flex flex-col gap-2">
                  {tc.expectedResult.map((r, i) => (
                    <li key={i} className="font-mono text-[0.7rem] text-text-2 leading-[1.5] pl-5 relative">
                      <span className="absolute left-0 font-bold" style={{ color: "var(--pass)" }}>✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function WorkContent() {
  const { lang } = useLanguage();
  const t = workTranslations[lang];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-w-[920px] mx-auto px-5 sm:px-10 pt-12 sm:pt-20 pb-10 sm:pb-16">
          <p className="font-mono text-[0.75rem] text-petrol uppercase tracking-[0.14em] mb-6 flex items-center gap-3">
            <span className="inline-block w-7 h-px bg-petrol flex-shrink-0" />
            {t.hero.label}
          </p>
          <h1 className="font-display text-[clamp(2.6rem,8vw,5rem)] leading-[1.02] tracking-[-0.025em] text-text-1 mb-5">
            {t.hero.heading}
          </h1>
          <p className="font-mono text-[0.82rem] text-text-2 max-w-[52ch] leading-[1.75] tracking-[0.02em]">
            {t.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Sections */}
      {SECTION_KEYS.map((key) => {
        const section = t.sections[key];
        const { bg, border } = SECTION_COLORS[key];
        const icon = SECTION_ICONS[key];

        return (
          <section
            key={key}
            id={key}
            className="py-14 sm:py-20 border-b border-border"
            style={{ background: bg }}
          >
            <div className="max-w-[920px] mx-auto px-5 sm:px-10">
              <RevealSection>
                <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
                  {section.label}
                </p>
                <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-3">
                  {section.heading}
                </h2>
                <p className="font-mono text-[0.8rem] text-text-2 mb-10 max-w-[50ch] leading-[1.7]">
                  {section.description}
                </p>

                {key === "bugReports" ? (
                  <div className="flex flex-col gap-3">
                    {t.bugReports.map((report) => (
                      <BugReportCard key={report.id} report={report} defaultOpen={false} />
                    ))}
                  </div>
                ) : key === "testCases" ? (
                  <div className="flex flex-col gap-3">
                    {t.testCases.map((tc) => (
                      <TestCaseCard key={tc.id} tc={tc} />
                    ))}
                  </div>
                ) : (
                  <div
                    className="rounded-[6px] border-2 border-dashed flex flex-col items-center justify-center py-16 gap-4"
                    style={{ borderColor: border }}
                  >
                    <div
                      className="w-12 h-12 rounded-[6px] flex items-center justify-center"
                      style={{ background: "var(--surface)" }}
                    >
                      {icon}
                    </div>
                    <p className="font-mono text-[0.75rem] text-text-2 tracking-[0.06em]">
                      {section.empty}
                    </p>
                  </div>
                )}
              </RevealSection>
            </div>
          </section>
        );
      })}
    </>
  );
}
