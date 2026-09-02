"use client";

import RevealSection from "./RevealSection";

interface CompetencyItem {
  name: string;
  description: string;
}

interface CompetenciesProps {
  label: string;
  heading: string;
  languagesLabel: string;
  competencies: CompetencyItem[];
  languages: { lang: string; level: string }[];
}

export default function Competencies({
  label,
  heading,
  languagesLabel,
  competencies,
  languages,
}: CompetenciesProps) {
  return (
    <section id="competencies" data-testid="competenciesSection" className="border-b border-border" style={{ background: "var(--ocre-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="competenciesHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — cards + languages */}
            <div className="sm:pl-10 flex flex-col gap-8">

              {/* Competency cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {competencies.map((c, i) => (
                  <div
                    key={c.name}
                    data-testid={`competencyBtn${i}`}
                    className="bg-surface border border-border rounded-[4px] p-5 flex flex-col gap-2"
                    style={{ borderLeftColor: "var(--petrol)", borderLeftWidth: 3 }}
                  >
                    <p className="font-mono text-[0.67rem] text-petrol uppercase tracking-[0.1em]">
                      {c.name}
                    </p>
                    <p className="text-[0.9rem] text-text-2 leading-[1.75]">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div>
                <p className="font-mono text-[0.63rem] text-text-2 uppercase tracking-[0.14em] mb-3">
                  {languagesLabel}
                </p>
                <div className="flex flex-wrap gap-[0.6rem]">
                  {languages.map(({ lang, level }, i) => (
                    <span
                      key={lang}
                      data-testid={`competencyLang${i}`}
                      className="text-[0.9rem] text-text-2 bg-surface border border-border rounded-full px-4 py-[7px]"
                    >
                      {lang} — {level}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
