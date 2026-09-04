"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { workTranslations } from "@/data/workTranslations";

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const isWork   = pathname === "/work";

  const t  = translations[lang].nav;
  const tw = workTranslations[lang].nav;

  const [scrolled, setScrolled] = useState(false);
  const [linksKey, setLinksKey] = useState(0);
  const prevKey = useRef(0);

  useEffect(() => {
    prevKey.current += 1;
    setLinksKey(prevKey.current);
  }, [isWork, lang]);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 8); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleLang() { setLang(lang === "en" ? "es" : "en"); }

  const portfolioLinks = [
    { label: t.about,      href: "/#about"      },
    { label: t.skills,     href: "/#skills"     },
    { label: t.experience, href: "/#experience" },
    { label: t.training,   href: "/#training"   },
    { label: t.contact,    href: "/#contact"    },
  ];

  const workLinks = [
    { label: tw.sprintBoard, href: "/work#sprintBoard" },
    { label: tw.testCases,   href: "/work#testCases"   },
    { label: tw.bugReports,  href: "/work#bugReports"  },
    { label: tw.automation,  href: "/work#automation"  },
    { label: tw.analytics,   href: "/work#analytics"   },
  ];

  const navLinks = isWork ? workLinks : portfolioLinks;

  return (
    <nav
      data-testid="nav"
      className="sticky top-0 z-50 border-b border-border transition-all duration-300"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bg) 85%, transparent)"
          : "var(--bg)",
        backdropFilter:         scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter:   scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="h-[3px] w-full bg-petrol" />

      <div className="max-w-[920px] mx-auto px-5 sm:px-10 h-[54px] flex items-center justify-between">

        <Link href="/" data-testid="navLogo" className="font-display text-[1.05rem] text-petrol no-underline transition-opacity duration-150 hover:opacity-70">
          MF
        </Link>

        <ul key={linksKey} data-testid="navLinks" className="hidden sm:flex gap-6 list-none items-center nav-links-enter">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                data-testid={`navLink${(href.split('#')[1] || href.replace(/\//g, '')).replace(/^(.)/, (c) => c.toUpperCase())}`}
                className={navLinkClass}
              >
                {label}
              </Link>
            </li>
          ))}
          {/* BUG-001: Work button moved inside hidden sm:flex — not visible on mobile */}
          {isWork ? (
            <li>
              <Link href="/" data-testid="navBtnPortfolio" className={pillLinkClass}>
                <span className={pillSliderClass} aria-hidden />
                <span className="relative">{tw.back}</span>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/work" data-testid="navBtnWork" className={pillLinkClass}>
                <span className={pillSliderClass} aria-hidden />
                <span className="relative">Work →</span>
              </Link>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-2">
          <button
            data-testid="navLangToggle"
            onClick={toggleLang}
            aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
            className="font-mono text-[0.7rem] text-text-2 border border-border rounded-[3px] px-[10px] py-1 bg-transparent cursor-pointer tracking-[0.05em] transition-colors duration-150 hover:border-sage hover:text-sage focus-visible:outline-2 focus-visible:outline-ocre focus-visible:outline-offset-2"
          >
            {t.langToggle}
          </button>
        </div>

      </div>
    </nav>
  );
}

const pillLinkClass =
  "font-mono text-[0.72rem] text-petrol no-underline uppercase tracking-[0.08em] " +
  "border border-petrol rounded-[3px] px-[10px] py-[4px] " +
  "relative overflow-hidden transition-colors duration-200 hover:text-bg group inline-block";

const pillSliderClass =
  "absolute inset-0 bg-petrol transition-transform duration-300 " +
  "ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-full group-hover:translate-x-0";

const navLinkClass =
  "font-mono text-[0.72rem] text-text-2 no-underline uppercase tracking-[0.08em] " +
  "relative pb-[2px] transition-colors duration-150 hover:text-petrol " +
  "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-petrol " +
  "after:transition-[width] after:duration-250 after:ease-out hover:after:w-full";

const accentLinkClass =
  "font-mono text-[0.72rem] text-petrol no-underline uppercase tracking-[0.08em] " +
  "relative pb-[2px] transition-opacity duration-150 hover:opacity-70 " +
  "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-petrol " +
  "after:transition-[width] after:duration-250 after:ease-out hover:after:w-full";
