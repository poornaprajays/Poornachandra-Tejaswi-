"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CinematicSection } from "@/components/primitives/CinematicSection";
import { kannadaText } from "@/lib/content/kannada";
import { revealSoft, revealUp } from "@/lib/motion/variants";
import { cinematicEase } from "@/lib/motion/easings";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const forestY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const mistY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.56], [1, 0]);

  return (
    <CinematicSection
      id="entrance"
      ref={sectionRef}
      atmosphere="mist-forest-night"
      className="hero-scene min-h-[124svh]"
    >
      <div className="sticky top-0 flex h-svh w-full items-end overflow-hidden px-6 pb-[12vh] pt-28 md:px-12 lg:px-20">
        <motion.div className="hero-forest-layer" style={{ y: forestY }} />
        <motion.div className="hero-mist-layer" style={{ y: mistY }} />
        <div className="hero-manuscript-layer" />
        <div className="hero-foreground-leaves" />

        <motion.div
          className="relative z-10 max-w-[1120px]"
          style={{ y: textY, opacity: textOpacity }}
        >
          <motion.p
            className="museum-label mb-6 text-[color:var(--atmosphere-accent)]"
            variants={revealUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.55 }}
          >
            MONSOON LITERARY ARCHIVE
          </motion.p>

          <motion.h1
            className="hero-title font-kannada text-[clamp(3.8rem,13vw,14rem)] font-semibold leading-[0.94] text-[color:var(--atmosphere-fg)]"
            variants={revealSoft}
            initial="hidden"
            animate="visible"
          >
            {kannadaText.tejaswiNameLineOne}
            <span className="block text-[color:color-mix(in_srgb,var(--atmosphere-fg)_82%,var(--atmosphere-accent))]">
              {kannadaText.tejaswiNameLineTwo}
            </span>
          </motion.h1>

          <motion.div
            className="mt-8 grid max-w-4xl gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end"
            initial={{ opacity: 0, y: 24, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, ease: cinematicEase, delay: 1.45 }}
          >
            <p className="max-w-2xl text-balance font-editorial text-xl leading-9 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_78%,transparent)] md:text-2xl">
              Enter a rain-soaked literary world of Malnad forests, curiosity,
              science, mystery, Kannada memory, and thought.
            </p>
            <p className="font-kannada text-lg leading-8 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_66%,transparent)] md:justify-self-end md:text-right">
              {kannadaText.heroThemes}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-thread"
          initial={{ opacity: 0, scaleY: 0.35 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.4, ease: cinematicEase, delay: 2.2 }}
        >
          <span />
        </motion.div>
      </div>
    </CinematicSection>
  );
}
