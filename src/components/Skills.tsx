"use client";

import { useState, useEffect } from "react";
import type { SkillGroup } from "@/types";
import RevealSection from "./RevealSection";
import { useLanguage } from "@/context/LanguageContext";

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

const BUG_COPY = {
  en: { label: "Bug detected", line1: "Oops! You found a bug.", line2: "Good testing! 🎉" },
  es: { label: "Bug detectado", line1: "¡Ups! Encontraste un bug.", line2: "Buen testeo 🎉" },
};

function BugPopup({ onClose, lang }: { onClose: () => void; lang: "en" | "es" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const t = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3200);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className="absolute left-0 right-0 z-10 px-4 pt-2"
      style={{ top: "100%" }}
    >
      <div
        className="flex items-start gap-3 p-4 rounded-[6px] border border-border shadow-lg transition-all duration-300"
        style={{
          background: "var(--surface)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <span style={{ fontSize: "1.3rem", lineHeight: 1, flexShrink: 0 }}>🐛</span>
        <div className="flex flex-col gap-[3px] flex-1">
          <span className="font-mono text-[0.62rem] text-petrol uppercase tracking-[0.1em]">
            {BUG_COPY[lang].label}
          </span>
          <span className="font-mono text-[0.7rem] text-text-1 leading-[1.5]">
            {BUG_COPY[lang].line1}
          </span>
          <span className="font-mono text-[0.65rem] text-text-2">
            {BUG_COPY[lang].line2}
          </span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); setVisible(false); setTimeout(onClose, 300); }}
          className="font-mono text-[0.65rem] text-text-2 hover:text-text-1 transition-colors flex-shrink-0 cursor-pointer"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>
    </div>
  );
}

function SkillCard({ index, category, items, color }: {
  index: number;
  category: string;
  items: string[];
  color: string;
}) {
  const { lang } = useLanguage();
  const isQA = category.toLowerCase().includes("testing") || category.toLowerCase().includes("qa");
  const [showEgg, setShowEgg] = useState(false);

  const hoverTitle = lang === "es" ? "🔍 Hay algo para descubrir..." : "🔍 There's something to discover...";

  return (
    <div
      data-testid={`skillCategory${index}`}
      className="bg-surface border border-border rounded-[4px] overflow-visible relative"
      style={{ borderLeftColor: color, borderLeftWidth: 3 }}
    >
      <div
        className="flex items-center gap-2 px-5 py-3 border-b border-border"
        style={{
          background: "var(--surface-2)",
          cursor: isQA ? "pointer" : "default",
        }}
        onClick={() => isQA && !showEgg && setShowEgg(true)}
        title={isQA ? hoverTitle : undefined}
      >
        <span
          className="inline-block w-[6px] h-[6px] rounded-[1px] flex-shrink-0"
          style={{ background: color }}
        />
        <span className="font-mono text-[0.67rem] text-petrol uppercase tracking-[0.1em]">
          {category}
        </span>
      </div>

      {showEgg && <BugPopup onClose={() => setShowEgg(false)} lang={lang as "en" | "es"} />}

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
