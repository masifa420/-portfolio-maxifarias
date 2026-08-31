"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mf-theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {}
  }, []);

  function toggleTheme() {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    const next = isDark ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("mf-theme", next); } catch {}
  }

  function toggleLang() {
    setLang(lang === "en" ? "es" : "en");
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const navLinks = [
    { label: t.about, href: "#about" },
    { label: t.skills, href: "#skills" },
    { label: t.experience, href: "#experience" },
    { label: t.training, href: "#training" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-bg border-b border-border">
      <div className="h-[3px] w-full bg-petrol" />

      <div className="max-w-[920px] mx-auto px-5 sm:px-10 h-[54px] flex items-center justify-between">
        <a href="#hero" className="font-display text-[1.05rem] text-petrol no-underline">
          MF
        </a>

        {/* Links — se ocultan en mobile */}
        <ul className="hidden sm:flex gap-8 list-none">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-mono text-[0.72rem] text-text-2 no-underline uppercase tracking-[0.08em] transition-colors duration-150 hover:text-petrol"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label={lang === "en" ? "Cambiar a español" : "Switch to English"}
            className="font-mono text-[0.7rem] text-text-2 border border-border rounded-[3px] px-[10px] py-1 bg-transparent cursor-pointer tracking-[0.05em] transition-colors duration-150 hover:border-sage hover:text-sage focus-visible:outline-2 focus-visible:outline-ocre focus-visible:outline-offset-2"
          >
            {t.langToggle}
          </button>

          <button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="font-mono text-[0.7rem] text-text-2 border border-border rounded-[3px] px-[10px] py-1 bg-transparent cursor-pointer tracking-[0.05em] transition-colors duration-150 hover:border-petrol hover:text-petrol focus-visible:outline-2 focus-visible:outline-ocre focus-visible:outline-offset-2"
          >
            {isDark ? "[ light ]" : "[ dark ]"}
          </button>
        </div>
      </div>
    </nav>
  );
}
