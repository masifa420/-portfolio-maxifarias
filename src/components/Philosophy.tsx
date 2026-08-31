import RevealSection from "./RevealSection";

interface PhilosophyProps {
  label: string;
  heading: string;
  cards: { title: string; body: string }[];
}

const CARD_CONFIG = [
  { Icon: ConversationIcon, borderColor: "var(--petrol)",  iconBg: "var(--petrol-dim)" },
  { Icon: DocumentIcon,     borderColor: "var(--ocre)",    iconBg: "var(--ocre-dim)"   },
  { Icon: MindsetIcon,      borderColor: "var(--sage)",    iconBg: "var(--sage-dim)"   },
];

export default function Philosophy({ label, heading, cards }: PhilosophyProps) {
  return (
    <section id="philosophy" className="py-14 sm:py-22 border-b border-border">
      <div className="max-w-[920px] mx-auto px-5 sm:px-10">
        <RevealSection>
          <p className="font-mono text-[0.72rem] text-petrol uppercase tracking-[0.14em] mb-2">
            {label}
          </p>
          <h2 className="font-display text-[1.9rem] sm:text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-text-1 mb-8 sm:mb-11">
            {heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {cards.map((card, i) => {
              const { Icon, borderColor, iconBg } = CARD_CONFIG[i];
              return (
                <RevealSection key={card.title} delay={i * 100}>
                  <div
                    className="bg-surface border border-border rounded-[4px] p-6 h-full flex flex-col gap-4 transition-all duration-200 hover:border-current group"
                    style={{ borderLeftColor: borderColor, borderLeftWidth: 3 }}
                  >
                    <div
                      className="w-10 h-10 rounded-[4px] flex items-center justify-center flex-shrink-0"
                      style={{ background: iconBg }}
                    >
                      <Icon />
                    </div>
                    <h3 className="font-display text-[1.1rem] text-text-1 leading-[1.25] tracking-[-0.01em]">
                      {card.title}
                    </h3>
                    <p className="text-[0.9rem] text-text-2 leading-[1.75] flex-1">
                      {card.body}
                    </p>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function ConversationIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--petrol)"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--ocre)"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function MindsetIcon() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--sage)"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx={11} cy={11} r={8} />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}
