"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.registerPlugin(ScrollTrigger);
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.28,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.1
    });

    lenis.on("scroll", ScrollTrigger.update);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href^='#']");
      const hash = anchor?.getAttribute("href");

      if (!anchor || !hash || hash === "#") {
        return;
      }

      const scrollTarget = document.querySelector<HTMLElement>(hash);

      if (!scrollTarget) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", hash);
      lenis.scrollTo(scrollTarget, {
        offset: 0,
        duration: 1.4
      });
    };

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };

    document.addEventListener("click", handleAnchorClick);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return children;
}
