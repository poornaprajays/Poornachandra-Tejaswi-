"use client";

import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { CinematicSection } from "@/components/primitives/CinematicSection";
import { SceneLayer } from "@/components/primitives/SceneLayer";
import { kannadaText } from "@/lib/content/kannada";
import { cinematicEase } from "@/lib/motion/easings";

export function RainCountrySection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const farY = useTransform(scrollYProgress, [0, 1], ["-5%", "9%"]);
  const midY = useTransform(scrollYProgress, [0, 1], ["7%", "-12%"]);
  const nearY = useTransform(scrollYProgress, [0, 1], ["12%", "-22%"]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.2, 0.55, 1], [0.22, 0.74, 0.5, 0.86]);
  const rainOpacity = useTransform(scrollYProgress, [0, 0.34, 0.68, 1], [0.12, 0.34, 0.52, 0.26]);
  const paperOpacity = useTransform(scrollYProgress, [0, 0.45, 0.78, 1], [0.04, 0.13, 0.22, 0.08]);
  const titleOpacity = useTransform(scrollYProgress, [0.02, 0.16, 0.4], [0, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.02, 0.4], ["18px", "-36px"]);
  const fragmentOneOpacity = useTransform(scrollYProgress, [0.32, 0.42, 0.56], [0, 1, 0]);
  const fragmentTwoOpacity = useTransform(scrollYProgress, [0.5, 0.62, 0.76], [0, 1, 0]);
  const fragmentThreeOpacity = useTransform(scrollYProgress, [0.7, 0.82, 0.96], [0, 1, 0]);
  const finalGlowOpacity = useTransform(scrollYProgress, [0.74, 1], [0, 0.32]);

  const staticStyle = prefersReducedMotion ? { y: 0 } : undefined;

  return (
    <CinematicSection
      id="rain-country"
      ref={sectionRef}
      atmosphere="malnad-rain-country"
      data-soundscape="rain-country-distant-rain-placeholder"
      className="rain-country-scene min-h-[360svh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <SceneLayer
          depth="far"
          className="rain-country-sky"
          motionStyle={prefersReducedMotion ? staticStyle : { y: farY }}
        />
        <SceneLayer
          depth="far"
          className="rain-country-ridges"
          motionStyle={prefersReducedMotion ? staticStyle : { y: farY }}
        />
        <SceneLayer
          depth="mid"
          className="rain-country-canopy"
          motionStyle={prefersReducedMotion ? staticStyle : { y: midY }}
        />
        <SceneLayer
          depth="near"
          className="rain-country-trunks"
          motionStyle={prefersReducedMotion ? staticStyle : { y: nearY }}
        />
        <SceneLayer
          depth="veil"
          className="rain-country-fog"
          motionStyle={{ opacity: prefersReducedMotion ? 0.46 : fogOpacity }}
        />
        <SceneLayer
          depth="veil"
          className="rain-country-rain"
          motionStyle={{ opacity: prefersReducedMotion ? 0.16 : rainOpacity }}
        />
        <SceneLayer
          depth="veil"
          className="rain-country-manuscript"
          motionStyle={{ opacity: prefersReducedMotion ? 0.12 : paperOpacity }}
        />
        <SceneLayer
          depth="veil"
          className="rain-country-low-light"
          motionStyle={{ opacity: prefersReducedMotion ? 0.2 : finalGlowOpacity }}
        />

        <div className="relative z-20 flex h-full items-center px-6 md:px-12 lg:px-20">
          <motion.div
            className="rain-country-title-block max-w-5xl"
            style={{
              opacity: prefersReducedMotion ? 1 : titleOpacity,
              y: prefersReducedMotion ? 0 : titleY
            }}
          >
            <p className="museum-label mb-7 text-[color:var(--atmosphere-accent)]">
              THE RAIN COUNTRY
            </p>
            <h2 className="font-kannada text-[clamp(3.1rem,11vw,12rem)] font-semibold leading-[0.96] text-[color:var(--atmosphere-fg)]">
              {kannadaText.rainCountryTitle}
            </h2>
            <p className="mt-8 max-w-2xl text-balance font-editorial text-xl leading-9 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_70%,transparent)] md:text-2xl">
              Before the books, before the questions, there is rain moving
              through the dark green memory of Malnad.
            </p>
          </motion.div>

          <PoeticFragment
            className="left-[8vw] top-[18vh] max-w-[18rem] md:max-w-[24rem]"
            opacity={prefersReducedMotion ? 1 : fragmentOneOpacity}
            kannada={kannadaText.rainCountryFragmentOne}
            english="The forest breathes before it speaks."
          />
          <PoeticFragment
            className="bottom-[16vh] right-[7vw] max-w-[19rem] text-right md:max-w-[27rem]"
            opacity={prefersReducedMotion ? 1 : fragmentTwoOpacity}
            kannada={kannadaText.rainCountryFragmentTwo}
            english="Rain writes inside silence."
          />
          <PoeticFragment
            className="left-[12vw] top-[58vh] max-w-[18rem] md:max-w-[26rem]"
            opacity={prefersReducedMotion ? 1 : fragmentThreeOpacity}
            kannada={kannadaText.rainCountryFragmentThree}
            english="Mist turns the earth into memory."
          />
        </div>

        <motion.div
          className="rain-country-breath"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.6, ease: cinematicEase }}
        />
      </div>
    </CinematicSection>
  );
}

type PoeticFragmentProps = {
  className: string;
  opacity: number | MotionValue<number>;
  kannada: string;
  english: string;
};

function PoeticFragment({
  className,
  opacity,
  kannada,
  english
}: PoeticFragmentProps) {
  return (
    <motion.div
      className={`rain-country-fragment absolute ${className}`}
      style={{ opacity }}
    >
      <p className="font-kannada text-[clamp(1.75rem,4.5vw,4.8rem)] leading-[1.12] text-[color:var(--atmosphere-fg)]">
        {kannada}
      </p>
      <p className="mt-4 font-editorial text-base leading-7 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_58%,transparent)] md:text-lg">
        {english}
      </p>
    </motion.div>
  );
}
