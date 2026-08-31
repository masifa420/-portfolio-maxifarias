"use client";

import { useLanguage } from "@/context/LanguageContext";
import { workTranslations } from "@/data/workTranslations";
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

                {/* Empty state */}
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
              </RevealSection>
            </div>
          </section>
        );
      })}
    </>
  );
}
