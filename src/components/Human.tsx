import RevealSection from "./RevealSection";

interface HumanProps {
  label: string;
  heading: string;
  body: string[];
}

export default function Human({ label, heading, body }: HumanProps) {
  return (
    <section id="human" className="py-14 sm:py-22 border-b border-border" style={{ background: "var(--petrol-dim)" }}>
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-10">
            {heading}
          </h2>

          <div className="flex flex-col gap-4 max-w-[60ch]">
            {body.map((paragraph, i) => (
              <p
                key={i}
                className={[
                  "leading-[1.8]",
                  i === 1
                    ? "font-display italic text-[1.1rem] text-text-1"
                    : "text-[1rem] text-text-2",
                ].join(" ")}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
