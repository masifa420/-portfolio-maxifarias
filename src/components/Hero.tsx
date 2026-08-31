import type { Profile } from "@/types";

interface HeroProps {
  profile: Pick<Profile, "name" | "title" | "subtitle" | "location" | "email" | "linkedin">;
  hook: string;
  stats: { value: string; label: string }[];
}

export default function Hero({ profile, hook, stats }: HeroProps) {

  return (
    <section id="hero" className="border-b border-border">
      <div className="max-w-[920px] mx-auto px-5 sm:px-10 pt-12 sm:pt-20 pb-10 sm:pb-16">

        <p className="font-mono text-[0.75rem] text-petrol uppercase tracking-[0.14em] mb-6 sm:mb-7 flex items-center gap-3">
          <span className="inline-block w-7 h-px bg-petrol flex-shrink-0" />
          {profile.title}
        </p>

        <h1 className="font-display text-[clamp(2.6rem,8vw,5.5rem)] leading-[1.02] tracking-[-0.025em] text-text-1 mb-4 sm:mb-5">
          {profile.name}
        </h1>

        <p className="font-display italic text-[1rem] sm:text-[1.1rem] text-text-2 leading-[1.5] mb-5 sm:mb-6 max-w-[40ch]">
          &ldquo;{hook}&rdquo;
        </p>

        <p className="font-mono text-[0.72rem] sm:text-[0.82rem] text-text-2 mb-8 sm:mb-10 tracking-[0.04em]">
          <span style={{ whiteSpace: "nowrap" }}>{profile.subtitle}</span>
        </p>

        {/* Meta — apila verticalmente en mobile */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 items-start sm:items-center">
          <span className="flex items-center gap-[0.45rem] text-[0.85rem] text-text-2">
            <LocationIcon />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-[0.45rem] text-[0.85rem] text-text-2 no-underline transition-colors duration-150 hover:text-petrol break-all"
          >
            <MailIcon />
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-[0.45rem] text-[0.85rem] text-text-2 no-underline transition-colors duration-150 hover:text-petrol"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border grid grid-cols-3 gap-4 sm:gap-6 justify-items-center">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-[1.6rem] sm:text-[2rem] leading-none tracking-[-0.02em] text-text-1">
                {s.value}
              </p>
              <p className="font-mono text-[0.65rem] sm:text-[0.72rem] text-text-2 uppercase tracking-[0.08em] sm:tracking-[0.1em] mt-[5px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, flexShrink: 0 }} aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx={12} cy={9} r={2.5} />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6, flexShrink: 0 }} aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6, flexShrink: 0 }} aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x={2} y={9} width={4} height={12} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}
