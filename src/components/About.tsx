import RevealSection from "./RevealSection";

interface AboutProps {
  label: string;
  heading: string;
  summary: string;
}

export default function About({ label, heading, summary }: AboutProps) {
  const paragraphs = summary.split("\n\n").filter(Boolean);

  return (
    <section id="about" data-testid="aboutSection" className="border-b border-border" style={{ background: "var(--ocre-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="aboutHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — paragraphs */}
            <div className="sm:pl-10 flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p key={i} data-testid={`aboutParagraph${i}`} className="text-[1.05rem] text-text-2 leading-[1.8] max-w-[66ch]">
                  {p}
                </p>
              ))}
            </div>

          </div>
        </RevealSection>
      </div>
    </section>
  );
}
