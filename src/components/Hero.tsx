import type { Profile } from "@/types";

interface HeroProps {
  profile: Pick<Profile, "name" | "title" | "subtitle" | "location" | "email" | "linkedin">;
  hook: string;
  stats: { value: string; label: string }[];
}

const PILLARS = [
  { n: "01", label: "Calidad" },
  { n: "02", label: "Metodología" },
  { n: "03", label: "Excelencia" },
  { n: "04", label: "IA aplicada" },
];

export default function Hero({ profile, hook }: HeroProps) {
  return (
    <section
      id="hero"
      data-testid="heroSection"
      className="flex flex-col sm:flex-row"
      style={{ height: "100svh", overflow: "hidden" }}
    >
      {/* ── Left panel — dark teal ── */}
      {/* Mobile: horizontal bar (~80px). Desktop: full-height side panel */}
      <div
        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 sm:gap-6
                   h-[80px] w-full sm:h-full sm:w-[clamp(160px,30%,300px)]"
        style={{ background: "#1B4242", padding: "1rem 1.5rem" }}
      >
        {/* Logo: small on mobile, full size on desktop */}
        <div className="hidden sm:block">
          <LogoMark size={96} />
        </div>
        <div className="sm:hidden">
          <LogoMark size={40} />
        </div>

        <p
          className="hidden sm:block"
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
          }}
        >
          QA · ANALYTIC
        </p>
      </div>

      {/* ── Right panel — warm cream ── */}
      {/* Mobile: flex-1 with overflow-y scroll so content always accessible */}
      <div
        className="flex-1 flex flex-col justify-center overflow-y-auto"
        style={{
          background: "#FAF5EE",
          padding: "clamp(1.8rem,6vw,5rem) clamp(1.5rem,5vw,4.5rem)",
        }}
      >
        {/* Name + role */}
        <p
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.72rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C96A2A",
            marginBottom: "0.25rem",
          }}
        >
          {profile.name}
        </p>
        <p
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#C96A2A",
            marginBottom: "1.4rem",
          }}
        >
          {profile.title}
        </p>

        {/* Headline */}
        <h1
          data-testid="heroName"
          style={{
            fontFamily: "var(--font-display, serif)",
            fontSize: "clamp(1.7rem, 4.5vw, 3.8rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
            marginBottom: "1.2rem",
            maxWidth: "18ch",
          }}
        >
          {hook}
        </h1>

        {/* Orange rule */}
        <div
          style={{
            width: "3rem",
            height: "3px",
            background: "#C96A2A",
            borderRadius: "2px",
            marginBottom: "1.2rem",
          }}
        />

        {/* Subtitle */}
        <p
          data-testid="heroHook"
          style={{
            fontFamily: "var(--font-body, sans-serif)",
            fontSize: "clamp(0.9rem, 1.4vw, 1rem)",
            lineHeight: 1.65,
            color: "#4A5A50",
            maxWidth: "46ch",
            marginBottom: "2rem",
          }}
        >
          {profile.subtitle}
        </p>

        {/* Pillars */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem 1.8rem",
            marginBottom: "2rem",
          }}
        >
          {PILLARS.map(({ n, label }) => (
            <div key={n} style={{ display: "flex", flexDirection: "column", gap: "0.15rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem",
                  color: "#C96A2A",
                  letterSpacing: "0.05em",
                }}
              >
                {n}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-body, sans-serif)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  letterSpacing: "0.01em",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Contact links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <a
            href={`mailto:${profile.email}`}
            data-testid="heroEmailLink"
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.72rem",
              color: "#1B4242",
              textDecoration: "none",
              letterSpacing: "0.04em",
              opacity: 0.8,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
          >
            {profile.email}
          </a>
          <span style={{ color: "#C96A2A", fontSize: "0.6rem" }}>·</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="heroLinkedinLink"
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.72rem",
              color: "#1B4242",
              textDecoration: "none",
              letterSpacing: "0.04em",
              opacity: 0.8,
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
          >
            LinkedIn ↗
          </a>
          <span style={{ color: "#C96A2A", fontSize: "0.6rem" }}>·</span>
          <span
            data-testid="heroLocation"
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.72rem",
              color: "#1B4242",
              opacity: 0.6,
              letterSpacing: "0.04em",
            }}
          >
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}

function LogoMark({ size = 96 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 96 96" fill="none" aria-hidden>
      <circle cx="48" cy="48" r="44" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <circle cx="48" cy="48" r="34" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <circle cx="48" cy="48" r="24" fill="#C96A2A" opacity="0.9" />
      <polyline
        points="38,48 45,55 58,40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="48" cy="4" r="3" fill="rgba(255,255,255,0.5)" />
      <circle cx="92" cy="48" r="3" fill="rgba(255,255,255,0.3)" />
      <circle cx="48" cy="92" r="2" fill="rgba(255,255,255,0.2)" />
      <circle cx="4"  cy="48" r="2" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}
