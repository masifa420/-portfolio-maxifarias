"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname     = usePathname();
  const prevPath     = useRef(pathname);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (pathname === prevPath.current) return;

    const goingToWork = pathname === "/work";
    const enterClass  = goingToWork ? "page-from-right" : "page-from-left";
    const el          = containerRef.current;
    if (!el) return;

    el.classList.remove("page-from-right", "page-from-left");
    el.classList.add(enterClass);
    prevPath.current = pathname;

    const t = setTimeout(() => el.classList.remove(enterClass), 600);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <div ref={containerRef} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
}
