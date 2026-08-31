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
    <section id="experience" className="py-14 sm:py-22 border-b border-border" style={{ background: "var(--petrol-dim)" }}>
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-11">
            {heading}
          </h2>

          <div className="flex flex-col gap-12">
            {experience.map((job, i) => (
              <div
                key={i}
                className="grid grid-cols-[150px_1fr] gap-10 max-sm:grid-cols-1 max-sm:gap-1"
              >
                <div className="font-mono text-[0.76rem] text-text-2 leading-[1.6] pt-[0.3rem]">
                  {job.period}
                </div>
                <div>
                  <h3 className="font-display text-[1.55rem] text-text-1 leading-[1.15] mb-[0.3rem]">
                    {company}
                  </h3>
                  <p className="font-mono text-[0.76rem] text-ocre tracking-[0.07em] mb-5">
                    {job.type} · {job.role}
                  </p>
                  <div className="flex flex-col gap-3">
                    {job.bullets.map((bullet, j) => (
                      <p
                        key={j}
                        className="text-[0.95rem] text-text-2 leading-[1.75] max-w-[60ch]"
                      >
                        {bullet}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
