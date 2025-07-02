"use client";

import React, { useEffect, useRef } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import Lenis from "@studio-freight/lenis";

const theme = createTheme();

export default function Providers({ children }: { children: React.ReactNode }) {
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const l = new Lenis({
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
    });

    lenis.current = l;

    const animate = (time: number) => {
      l.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a[href^='#']") as HTMLAnchorElement | null;

      if (link && lenis.current) {
        const hash = link.getAttribute("href")!;
        const el = document.querySelector(hash);
        if (el) {
          e.preventDefault(); // Stop default jump
          lenis.current.scrollTo(el);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      l.destroy();
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <AppRouterCacheProvider options={{ key: "mui", prepend: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}