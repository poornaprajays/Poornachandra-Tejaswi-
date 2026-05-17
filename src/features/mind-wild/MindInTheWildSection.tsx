"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { CinematicSection } from "@/components/primitives/CinematicSection";
import { LiteraryFragment } from "@/components/primitives/LiteraryFragment";
import { SceneLayer } from "@/components/primitives/SceneLayer";
import { kannadaText } from "@/lib/content/kannada";
import { cinematicEase } from "@/lib/motion/easings";

export function MindInTheWildSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const paperY = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);
  const portraitY = useTransform(scrollYProgress, [0, 1], ["14%", "-8%"]);
  const lensScale = useTransform(scrollYProgress, [0.16, 0.58, 1], [0.84, 1.05, 0.92]);
  const lensOpacity = useTransform(scrollYProgress, [0.1, 0.34, 0.72, 1], [0, 0.45, 0.22, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.12, 0.28, 0.5], [0, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.12, 0.5], ["28px", "-34px"]);
  const noteOneOpacity = useTransform(scrollYProgress, [0.35, 0.46, 0.58], [0, 1, 0]);
  const noteTwoOpacity = useTransform(scrollYProgress, [0.52, 0.64, 0.76], [0, 1, 0]);
  const noteThreeOpacity = useTransform(scrollYProgress, [0.68, 0.82, 0.96], [0, 1, 0]);
  const annotationOpacity = useTransform(scrollYProgress, [0.26, 0.82], [0.05, 0.28]);

  return (
    <CinematicSection
      id="mind-wild"
      ref={sectionRef}
      atmosphere="mind-wild-observatory"
      data-soundscape="mist-after-rain-low-room-placeholder"
      className="mind-wild-scene min-h-[340svh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <SceneLayer depth="far" className="mind-wild-room" />
        <SceneLayer
          depth="mid"
          className="mind-wild-paper"
          motionStyle={prefersReducedMotion ? { y: 0 } : { y: paperY }}
        />
        <SceneLayer
          depth="mid"
          className="mind-wild-portrait"
          motionStyle={prefersReducedMotion ? { y: 0 } : { y: portraitY }}
        />
        <SceneLayer
          depth="veil"
          className="mind-wild-annotations"
          motionStyle={{ opacity: prefersReducedMotion ? 0.18 : annotationOpacity }}
        />
        <SceneLayer
          depth="veil"
          className="mind-wild-lens"
          motionStyle={{
            opacity: prefersReducedMotion ? 0.2 : lensOpacity,
            scale: prefersReducedMotion ? 1 : lensScale
          }}
        />

        <div className="relative z-20 flex h-full items-center px-6 md:px-12 lg:px-20">
          <motion.div
            className="mind-wild-title max-w-5xl"
            style={{
              opacity: prefersReducedMotion ? 1 : titleOpacity,
              y: prefersReducedMotion ? 0 : titleY
            }}
          >
            <p className="museum-label mb-7 text-[color:var(--atmosphere-accent)]">
              A MIND IN THE WILD
            </p>
            <h2 className="font-kannada text-[clamp(2.8rem,8.8vw,9.6rem)] font-semibold leading-[1.02] text-[color:var(--atmosphere-fg)]">
              {kannadaText.mindWildTitle}
            </h2>
            <p className="mt-8 max-w-2xl text-balance font-editorial text-xl leading-9 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_66%,transparent)] md:text-2xl">
              The landscape begins to look back. Curiosity becomes a method,
              and observation becomes literature.
            </p>
          </motion.div>

          <LiteraryFragment
            className="left-[8vw] top-[19vh] max-w-[20rem] md:max-w-[28rem]"
            opacity={prefersReducedMotion ? 1 : noteOneOpacity}
            kannada={kannadaText.mindWildFragmentOne}
            english="To observe is already to think."
            variant="note"
          />
          <LiteraryFragment
            className="bottom-[15vh] right-[8vw] max-w-[20rem] md:max-w-[29rem]"
            opacity={prefersReducedMotion ? 1 : noteTwoOpacity}
            kannada={kannadaText.mindWildFragmentTwo}
            english="A question grows inside the forest."
            align="right"
            variant="note"
          />
          <LiteraryFragment
            className="left-[13vw] top-[58vh] max-w-[20rem] md:max-w-[30rem]"
            opacity={prefersReducedMotion ? 1 : noteThreeOpacity}
            kannada={kannadaText.mindWildFragmentThree}
            english="Even the smell of soil becomes a note."
            variant="note"
          />
        </div>

        <motion.div
          className="mind-wild-pause"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.4, ease: cinematicEase }}
        />
      </div>
    </CinematicSection>
  );
}
