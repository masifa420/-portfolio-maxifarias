import RevealSection from "./RevealSection";

interface CertItem {
  name: string;
  source: string;
  year?: number;
  inProgress?: boolean;
}

interface CertGroupData {
  group: string;
  items: CertItem[];
}

interface TrainingProps {
  label: string;
  heading: string;
  badgeInProgress: string;
  certifications: CertGroupData[];
}

export default function Training({
  label,
  heading,
  badgeInProgress,
  certifications,
}: TrainingProps) {
  return (
    <section id="training" className="py-14 sm:py-22 border-b border-border" style={{ background: "var(--petrol-dim)" }}>
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-11">
            {heading}
          </h2>

          <div className="flex flex-col gap-10">
            {certifications.map((group) => (
              <div key={group.group}>
                <div className="font-mono text-[0.7rem] text-text-2 uppercase tracking-[0.1em] pb-[0.6rem] mb-4 border-b border-border">
                  {group.group}
                </div>
                <ul className="list-none flex flex-col gap-[0.65rem]">
                  {group.items.map((cert) => (
                    <li
                      key={cert.name}
                      className="flex justify-between items-baseline gap-4 text-[0.9rem]"
                    >
                      <span className="text-text-1">
                        {cert.name}
                        {cert.inProgress && (
                          <span className="inline-flex items-center font-mono text-[0.66rem] text-badge-txt bg-badge-bg rounded-[2px] px-[7px] py-[2px] ml-2 tracking-[0.04em]">
                            {badgeInProgress}
                          </span>
                        )}
                      </span>
                      {cert.source && cert.year && (
                        <span className="font-mono text-[0.73rem] text-text-2 whitespace-nowrap flex-shrink-0">
                          {cert.source} · {cert.year}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
