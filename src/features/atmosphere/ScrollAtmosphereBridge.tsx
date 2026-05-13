"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAtmosphere } from "./AtmosphereProvider";
import type { AtmosphereId } from "@/lib/atmosphere/types";

export function ScrollAtmosphereBridge() {
  const { setAtmosphere } = useAtmosphere();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>("[data-atmosphere]");
    const triggers = sections.map((section) => {
      const atmosphere = section.dataset.atmosphere as AtmosphereId;

      return ScrollTrigger.create({
        trigger: section,
        start: "top 62%",
        end: "bottom 38%",
        onEnter: () => setAtmosphere(atmosphere),
        onEnterBack: () => setAtmosphere(atmosphere)
      });
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [setAtmosphere]);

  return null;
}
