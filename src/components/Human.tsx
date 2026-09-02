import RevealSection from "./RevealSection";

interface HumanProps {
  label: string;
  heading: string;
  body: string[];
}

export default function Human({ label, heading, body }: HumanProps) {
  return (
    <section id="human" data-testid="humanSection" className="border-b border-border" style={{ background: "var(--petrol-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="humanHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — paragraphs */}
            <div className="sm:pl-10 flex flex-col gap-5 max-w-[60ch]">
              {body.map((paragraph, i) => (
                <p
                  key={i}
                  data-testid={`humanParagraph${i}`}
                  className={[
                    "leading-[1.8]",
                    i === 1
                      ? "font-display italic text-[1.2rem] text-text-1"
                      : "text-[1rem] text-text-2",
                  ].join(" ")}
                >
                  {paragraph}
                </p>
              ))}
            </div>

          </div>
        </RevealSection>
      </div>
    </section>
  );
}
