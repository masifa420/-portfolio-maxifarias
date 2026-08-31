"use client";

import { useRef, useState } from "react";
import type { SkillGroup } from "@/types";
import RevealSection from "./RevealSection";

interface SkillsProps {
  label: string;
  heading: string;
  skills: SkillGroup[];
}

// One color per skill category — follows the QA Analytic palette
const CATEGORY_COLORS = [
  "var(--petrol)",   // Testing & QA
  "var(--sage)",     // Automation
  "var(--ocre)",     // API & Integration
  "var(--terra)",    // Cloud & DevOps
  "var(--sage-l)",   // Programming
  "var(--petrol-d)", // Tools
];

interface AccordionItemProps {
  index: number;
  category: string;
  items: string[];
  isOpen: boolean;
  color: string;
  onToggle: () => void;
}

function AccordionItem({ index, category, items, isOpen, color, onToggle }: AccordionItemProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div
      data-testid={`skillCategory${index}`}
      className="bg-surface border border-border rounded-[4px] overflow-hidden transition-colors duration-200"
      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
    >
      <button
        data-testid={`skillToggle${index}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-6 py-5 cursor-pointer bg-transparent border-none text-left group"
      >
        <div className="font-mono text-[0.68rem] text-petrol uppercase tracking-[0.1em] flex items-center gap-[0.45rem]">
          <span
            className="inline-block w-[6px] h-[6px] rounded-[1px] flex-shrink-0"
            style={{ background: color }}
          />
          {category}
        </div>
        <svg
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-2 flex-shrink-0 transition-transform duration-300 ease-in-out"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div
        ref={bodyRef}
        style={{
          maxHeight: isOpen
            ? bodyRef.current
              ? `${bodyRef.current.scrollHeight}px`
              : "400px"
            : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="px-6 pb-5 flex flex-wrap gap-[0.45rem]">
          {items.map((item, j) => (
            <span
              key={item}
              data-testid={`skillItem-${index}-${j}`}
              className="font-mono text-[0.7rem] bg-surface-2 text-text-1 border border-border rounded-[2px] px-2 py-[3px] leading-[1.4]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ label, heading, skills }: SkillsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="skills" data-testid="skillsSection" className="py-14 sm:py-22 border-b border-border" style={{ background: "var(--sage-dim)" }}>
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 data-testid="skillsHeading" className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-11">
            {heading}
          </h2>

          <div className="flex flex-col gap-[0.6rem]">
            {skills.map((group, i) => (
              <AccordionItem
                key={group.category}
                index={i}
                category={group.category}
                items={group.items}
                isOpen={openIndex === i}
                color={CATEGORY_COLORS[i % CATEGORY_COLORS.length]}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
