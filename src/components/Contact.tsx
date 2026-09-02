import RevealSection from "./RevealSection";

interface ContactProps {
  label: string;
  heading: string;
  blurb: string;
  email: string;
  linkedin: string;
}

export default function Contact({
  label,
  heading,
  blurb,
  email,
  linkedin,
}: ContactProps) {
  return (
    <section id="contact" data-testid="contactSection" style={{ background: "var(--sage-dim)" }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-10 py-14 sm:py-20">
        <RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-[260px_1px_1fr]">

            {/* Left — label + heading */}
            <div className="pb-6 sm:pb-0 sm:pr-10 flex flex-col gap-3">
              <p className="font-mono text-[0.63rem] text-ocre uppercase tracking-[0.18em]">
                {label}
              </p>
              <h2
                data-testid="contactHeading"
                className="font-display text-[1.7rem] sm:text-[1.75rem] leading-[1.08] tracking-[-0.02em] text-text-1"
                style={{ textWrap: "balance", wordBreak: "break-word" } as React.CSSProperties}
              >
                {heading}
              </h2>
            </div>

            {/* Divider */}
            <div className="hidden sm:block" style={{ background: "var(--border)" }} />

            {/* Right — blurb + links */}
            <div className="sm:pl-10 flex flex-col gap-8">
              <p data-testid="contactBlurb" className="text-[1.05rem] text-text-2 max-w-[56ch] leading-[1.8]">
                {blurb}
              </p>
              <div className="flex flex-wrap gap-[0.85rem]">
                <a
                  href={`mailto:${email}`}
                  data-testid="contactEmailLink"
                  className="inline-flex items-center gap-2 font-mono text-[0.82rem] text-text-1 no-underline bg-surface border border-border rounded-[4px] px-[18px] py-[10px] transition-colors duration-150 hover:border-petrol hover:text-petrol focus-visible:outline-2 focus-visible:outline-ocre focus-visible:outline-offset-2"
                >
                  <MailIcon />
                  {email}
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contactLinkedinLink"
                  className="inline-flex items-center gap-2 font-mono text-[0.82rem] text-text-1 no-underline bg-surface border border-border rounded-[4px] px-[18px] py-[10px] transition-colors duration-150 hover:border-petrol hover:text-petrol focus-visible:outline-2 focus-visible:outline-ocre focus-visible:outline-offset-2"
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              </div>
            </div>

          </div>
        </RevealSection>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.7, flexShrink: 0 }}
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ opacity: 0.7, flexShrink: 0 }}
      aria-hidden
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x={2} y={9} width={4} height={12} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}
