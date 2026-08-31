import RevealSection from "./RevealSection";

interface AboutProps {
  label: string;
  heading: string;
  summary: string;
}

export default function About({ label, heading, summary }: AboutProps) {
  const paragraphs = summary.split("\n\n").filter(Boolean);

  return (
    <section id="about" className="py-14 sm:py-22 border-b border-border" style={{ background: "var(--ocre-dim)" }}>
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-11">
            {heading}
          </h2>
          <div className="flex flex-col gap-4 max-w-[66ch]">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[1.05rem] text-text-2 leading-[1.8]">
                {p}
              </p>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
