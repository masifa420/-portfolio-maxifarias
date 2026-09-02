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
    <section id="training" data-testid="trainingSection" className="border-b border-border" style={{ background: "var(--sage-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="trainingHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — cert groups */}
            <div className="sm:pl-10 flex flex-col gap-10">
              {certifications.map((group, i) => (
                <div key={group.group} data-testid={`trainingGroup${i}`}>
                  <div
                    data-testid={`trainingGroupLabel${i}`}
                    className="font-mono text-[0.68rem] text-text-2 uppercase tracking-[0.1em] pb-[0.6rem] mb-4 border-b border-border"
                  >
                    {group.group}
                  </div>
                  <ul className="list-none flex flex-col gap-[0.7rem]">
                    {group.items.map((cert, j) => (
                      <li
                        key={cert.name}
                        data-testid={`trainingCert-${i}-${j}`}
                        className="flex justify-between items-baseline gap-4 text-[0.95rem]"
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

          </div>
        </RevealSection>
      </div>
    </section>
  );
}
