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
      <div
        className="flex-shrink-0 flex flex-col items-center justify-center gap-2 sm:gap-6
                   h-[80px] w-full sm:h-full sm:w-[clamp(160px,30%,300px)]"
        style={{ background: "#1B4242", padding: "1rem 1.5rem" }}
      >
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
      <div
        className="flex-1 flex flex-col justify-center overflow-y-auto"
        style={{
          background: "#FAF5EE",
          padding: "clamp(1.8rem,6vw,5rem) clamp(1.5rem,5vw,4.5rem)",
        }}
      >
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

        <div
          style={{
            width: "3rem",
            height: "3px",
            background: "#C96A2A",
            borderRadius: "2px",
            marginBottom: "1.2rem",
          }}
        />

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

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
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
      <style>{`
        @keyframes lm-draw  { to { stroke-dashoffset: 0; } }
        @keyframes lm-fade  { to { opacity: 1; } }
        @keyframes lm-check { to { stroke-dashoffset: 0; } }
        @keyframes lm-state {
          0%   { opacity: 0; }
          15%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes lm-center-color {
          0%   { fill: #6B1A1A; }
          35%  { fill: #6B1A1A; }
          42%  { fill: #5C3610; }
          70%  { fill: #5C3610; }
          77%  { fill: #64731e; }
          100% { fill: #64731e; }
        }
        @keyframes lm-spin-cw  { to { transform: rotate(360deg);  } }
        @keyframes lm-spin-ccw { to { transform: rotate(-360deg); } }

        .lm-orbit-group-outer,
        .lm-orbit-group-inner {
          transform-box: fill-box;
          transform-origin: center;
        }
        /* Giran durante el X+pause (1.2s → 2.5s = 1.3s), luego quedan estáticas */
        .lm-orbit-group-outer {
          animation: lm-spin-cw  1.05s cubic-bezier(0.4,0,0.05,1) 0.96s forwards;
        }
        .lm-orbit-group-inner {
          animation: lm-spin-ccw 1.05s cubic-bezier(0.4,0,0.05,1) 0.96s forwards;
        }

        .lm-orbit-outer {
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: lm-draw 0.53s cubic-bezier(0.4,0,0.2,1) 0.09s forwards;
        }
        .lm-orbit-inner {
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: lm-draw 0.44s cubic-bezier(0.4,0,0.2,1) 0.48s forwards;
        }

        .lm-center {
          opacity: 0;
          animation:
            lm-fade         0.24s ease-out    0.89s forwards,
            lm-center-color 1.61s ease-in-out 0.89s forwards;
        }

        .lm-dot { opacity: 0; }
        .lm-dot-1 { animation: lm-fade 0.15s ease-out 0.28s forwards; }
        .lm-dot-2 { animation: lm-fade 0.15s ease-out 0.60s forwards; }
        .lm-dot-3 { animation: lm-fade 0.15s ease-out 0.76s forwards; }
        .lm-dot-4 { animation: lm-fade 0.15s ease-out 0.84s forwards; }

        .lm-symbol-x {
          opacity: 0;
          animation: lm-state 0.60s ease-in-out 0.96s forwards;
        }
        .lm-symbol-pause {
          opacity: 0;
          animation: lm-state 0.56s ease-in-out 1.45s forwards;
        }
        .lm-check {
          stroke-dasharray: 1; stroke-dashoffset: 1;
          animation: lm-check 0.49s cubic-bezier(0.22,1,0.36,1) 2.01s forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .lm-orbit-outer, .lm-orbit-inner, .lm-check {
            stroke-dashoffset: 0 !important; animation: none;
          }
          .lm-orbit-group-outer, .lm-orbit-group-inner { animation: none; }
          .lm-center {
            opacity: 1 !important; fill: #64731e !important; animation: none;
          }
          .lm-dot { opacity: 1 !important; animation: none; }
          .lm-symbol-x, .lm-symbol-pause { display: none; }
        }
      `}</style>

      {/* Órbita exterior + sus 4 puntos — gira horario */}
      <g className="lm-orbit-group-outer">
        <circle className="lm-orbit-outer" cx="48" cy="48" r="44"
          stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" pathLength="1" />
        <circle className="lm-dot lm-dot-1" cx="48" cy="4"  r="3" fill="rgba(255,255,255,0.5)" />
        <circle className="lm-dot lm-dot-2" cx="92" cy="48" r="3" fill="rgba(255,255,255,0.3)" />
        <circle className="lm-dot lm-dot-3" cx="48" cy="92" r="2" fill="rgba(255,255,255,0.2)" />
        <circle className="lm-dot lm-dot-4" cx="4"  cy="48" r="2" fill="rgba(255,255,255,0.2)" />
      </g>

      {/* Órbita interior — gira anti-horario */}
      <g className="lm-orbit-group-inner">
        <circle className="lm-orbit-inner" cx="48" cy="48" r="34"
          stroke="rgba(255,255,255,0.1)" strokeWidth="1" pathLength="1" />
      </g>

      {/* Centro — color anima con cada estado QA */}
      <circle className="lm-center" cx="48" cy="48" r="24" fill="#6B1A1A" />

      {/* ✗ FAIL — coral sobre bordeaux */}
      <g className="lm-symbol-x">
        <line x1="40" y1="40" x2="56" y2="56" stroke="#FF7070" strokeWidth="3" strokeLinecap="round" />
        <line x1="56" y1="40" x2="40" y2="56" stroke="#FF7070" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ‖ EN PROCESO — ámbar sobre marrón oscuro */}
      <g className="lm-symbol-pause">
        <line x1="43" y1="39" x2="43" y2="57" stroke="#FFC060" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="53" y1="39" x2="53" y2="57" stroke="#FFC060" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* ✓ PASS — oliva claro sobre verde oliva */}
      <polyline className="lm-check"
        points="38,48 45,55 58,40"
        stroke="#C4D96E" strokeWidth="3"
        strokeLinecap="round" strokeLinejoin="round"
        pathLength="1" />
    </svg>
  );
}
