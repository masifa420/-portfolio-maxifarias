"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const descRef = useRef<HTMLDivElement>(null);

  function toggle(i: number) {
    setActiveIndex((prev) => (prev === i ? null : i));
  }

  const active = activeIndex !== null ? competencies[activeIndex] : null;

  useLayoutEffect(() => {
    const el = descRef.current;
    if (!el) return;
    el.style.maxHeight = active ? `${el.scrollHeight}px` : "0px";
  }, [active]);

  return (
    <section id="competencies" data-testid="competenciesSection" className="py-14 sm:py-22 border-b border-border" style={{ background: "var(--ocre-dim)" }}>
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 data-testid="competenciesHeading" className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-11">
            {heading}
          </h2>

          {/* Pills */}
          <div className="flex flex-wrap gap-[0.65rem]">
            {competencies.map((c, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={c.name}
                  onClick={() => toggle(i)}
                  aria-expanded={isActive}
                  aria-controls="competency-desc"
                  data-testid={`competencyBtn${i}`}
                  className={[
                    "text-[0.875rem] bg-surface border rounded-full px-4 py-[6px]",
                    "cursor-pointer transition-all duration-200",
                    "focus-visible:outline-2 focus-visible:outline-ocre focus-visible:outline-offset-2",
                    isActive
                      ? "border-petrol text-petrol bg-accent-dim"
                      : "border-border text-text-2 hover:border-sage-l hover:text-text-1",
                  ].join(" ")}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          {/* Description panel */}
          <div
            id="competency-desc"
            data-testid="competencyDesc"
            ref={descRef}
            style={{
              maxHeight: "0px",
              overflow: "hidden",
              transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            aria-live="polite"
          >
            <div className="mt-5 bg-surface border border-petrol rounded-[4px] px-6 py-5">
              {active && (
                <>
                  <p data-testid="competencyActiveTitle" className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.1em] mb-3">
                    {active.name}
                  </p>
                  <p data-testid="competencyActiveBody" className="text-[0.95rem] text-text-2 leading-[1.75] max-w-[60ch]">
                    {active.description}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Languages */}
          <p className="font-mono text-[0.7rem] text-text-2 uppercase tracking-[0.1em] mt-9 mb-4">
            {languagesLabel}
          </p>
          <div className="flex flex-wrap gap-[0.65rem]">
            {languages.map(({ lang, level }, i) => (
              <span
                key={lang}
                data-testid={`competencyLang${i}`}
                className="text-[0.875rem] text-text-2 bg-surface border border-border rounded-full px-4 py-[6px]"
              >
                {lang} — {level}
              </span>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
