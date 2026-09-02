"use client";

import type { SkillGroup } from "@/types";
import RevealSection from "./RevealSection";

interface SkillsProps {
  label: string;
  heading: string;
  skills: SkillGroup[];
}

const CATEGORY_COLORS = [
  "var(--petrol)",
  "var(--sage)",
  "var(--ocre)",
  "var(--terra)",
  "var(--sage-l)",
  "var(--petrol-d)",
];

function SkillCard({ index, category, items, color }: {
  index: number;
  category: string;
  items: string[];
  color: string;
}) {
  return (
    <div
      data-testid={`skillCategory${index}`}
      className="bg-surface border border-border rounded-[4px] overflow-hidden"
      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
    >
      <div
        className="flex items-center gap-2 px-5 py-3 border-b border-border"
        style={{ background: "var(--surface-2)" }}
      >
        <span
          className="inline-block w-[6px] h-[6px] rounded-[1px] flex-shrink-0"
          style={{ background: color }}
        />
        <span className="font-mono text-[0.67rem] text-petrol uppercase tracking-[0.1em]">
          {category}
        </span>
      </div>
      <div className="px-5 py-4 flex flex-wrap gap-[0.45rem]">
        {items.map((item, j) => (
          <span
            key={item}
            data-testid={`skillItem-${index}-${j}`}
            className="font-mono text-[0.72rem] bg-surface-2 text-text-1 border border-border rounded-[2px] px-2 py-[3px] leading-[1.4]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills({ label, heading, skills }: SkillsProps) {
  return (
    <section id="skills" data-testid="skillsSection" className="border-b border-border" style={{ background: "var(--sage-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="skillsHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — skill cards grid */}
            <div className="sm:pl-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((group, i) => (
                <SkillCard
                  key={group.category}
                  index={i}
                  category={group.category}
                  items={group.items}
                  color={CATEGORY_COLORS[i % CATEGORY_COLORS.length]}
                />
              ))}
            </div>

          </div>
        </RevealSection>
      </div>
    </section>
  );
}
