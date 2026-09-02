import type { WorkExperience } from "@/types";
import RevealSection from "./RevealSection";

interface ExperienceProps {
  label: string;
  heading: string;
  company: string;
  experience: WorkExperience[];
}

export default function Experience({
  label,
  heading,
  company,
  experience,
}: ExperienceProps) {
  return (
    <section id="experience" data-testid="experienceSection" className="border-b border-border" style={{ background: "var(--petrol-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="experienceHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — timeline */}
            <div className="sm:pl-10 flex flex-col gap-12">
              {experience.map((job, i) => (
                <div
                  key={i}
                  data-testid={`experienceJob${i}`}
                  className="grid grid-cols-[120px_1fr] gap-8 max-sm:grid-cols-1 max-sm:gap-1"
                >
                  <div className="font-mono text-[0.76rem] text-text-2 leading-[1.6] pt-[0.3rem]">
                    {job.period}
                  </div>
                  <div>
                    <h3 data-testid={`experienceCompany${i}`} className="font-display text-[1.6rem] text-text-1 leading-[1.15] mb-[0.3rem]">
                      {company}
                    </h3>
                    <p data-testid={`experienceRole${i}`} className="font-mono text-[0.76rem] text-ocre tracking-[0.07em] mb-5">
                      {job.type} · {job.role}
                    </p>
                    <div className="flex flex-col gap-3">
                      {job.bullets.map((bullet, j) => (
                        <p
                          key={j}
                          data-testid={`experienceBullet-${i}-${j}`}
                          className="text-[1rem] text-text-2 leading-[1.8] max-w-[60ch]"
                        >
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </RevealSection>
      </div>
    </section>
  );
}
