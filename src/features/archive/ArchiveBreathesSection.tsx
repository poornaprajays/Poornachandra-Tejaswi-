"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef, useState } from "react";
import { CinematicSection } from "@/components/primitives/CinematicSection";
import { SceneLayer } from "@/components/primitives/SceneLayer";
import { kannadaText } from "@/lib/content/kannada";
import { cinematicEase } from "@/lib/motion/easings";
import { archiveMemories, type ArchiveMemory } from "./archive-data";

export function ArchiveBreathesSection() {
  const [activeMemoryId, setActiveMemoryId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const tableY = useTransform(scrollYProgress, [0, 1], ["7%", "-8%"]);
  const paperY = useTransform(scrollYProgress, [0, 1], ["-4%", "7%"]);
  const dustOpacity = useTransform(scrollYProgress, [0.05, 0.38, 0.88], [0.1, 0.42, 0.22]);
  const titleOpacity = useTransform(scrollYProgress, [0.05, 0.2, 0.38], [0, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0.05, 0.38], ["26px", "-32px"]);
  const collectionOpacity = useTransform(scrollYProgress, [0.24, 0.38, 0.92], [0, 1, 1]);
  const collectionScale = useTransform(scrollYProgress, [0.24, 0.7], [0.96, 1]);
  const lampOpacity = useTransform(scrollYProgress, [0.18, 0.52, 1], [0.16, 0.52, 0.34]);

  return (
    <CinematicSection
      id="archive-breathes"
      ref={sectionRef}
      atmosphere="archive-breathes"
      data-soundscape="archive-breathes-lamplight-rain-silence-placeholder"
      className="archive-breathes-scene min-h-[390svh]"
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <SceneLayer className="archive-room-shadow" depth="far" />
        <SceneLayer
          className="archive-table-field"
          depth="far"
          motionStyle={prefersReducedMotion ? { y: 0 } : { y: tableY }}
        />
        <SceneLayer
          className="archive-paper-weather"
          depth="mid"
          motionStyle={prefersReducedMotion ? { y: 0 } : { y: paperY }}
        />
        <SceneLayer
          className="archive-dust"
          depth="veil"
          motionStyle={{ opacity: prefersReducedMotion ? 0.26 : dustOpacity }}
        />
        <SceneLayer
          className="archive-lamp"
          depth="veil"
          motionStyle={{ opacity: prefersReducedMotion ? 0.38 : lampOpacity }}
        />

        <div className="archive-memory-stage relative z-20 h-full px-6 pb-8 pt-24 md:px-12 lg:px-20">
          <motion.div
            className="archive-intro"
            style={{
              opacity: prefersReducedMotion ? 1 : titleOpacity,
              y: prefersReducedMotion ? 0 : titleY
            }}
          >
            <p className="museum-label mb-6 text-[color:var(--atmosphere-accent)]">
              THE ARCHIVE BREATHES
            </p>
            <h2 className="font-kannada text-[clamp(2.65rem,8.6vw,8.8rem)] font-semibold leading-[1.03] text-[color:var(--atmosphere-fg)]">
              {kannadaText.archiveBreathesTitle}
            </h2>
            <p className="mt-7 max-w-2xl text-balance font-editorial text-xl leading-9 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_66%,transparent)] md:text-2xl">
              {kannadaText.archiveBreathesWhisper}
            </p>
          </motion.div>

          <motion.div
            className="archive-memory-surface"
            data-memory-active={activeMemoryId ? "true" : "false"}
            style={{
              opacity: prefersReducedMotion ? 1 : collectionOpacity,
              scale: prefersReducedMotion ? 1 : collectionScale
            }}
          >
            <div className="archive-breath-line" aria-hidden="true" />
            {archiveMemories.map((memory, index) => (
              <ArchiveObject
                key={memory.id}
                memory={memory}
                index={index}
                active={activeMemoryId === memory.id}
                hasActiveMemory={activeMemoryId !== null}
                onObserve={() => setActiveMemoryId(memory.id)}
                onRelease={() => setActiveMemoryId(null)}
                reducedMotion={Boolean(prefersReducedMotion)}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="archive-vignette"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.42 }}
          transition={{ duration: 1.6, ease: cinematicEase }}
        />
      </div>
    </CinematicSection>
  );
}

type ArchiveObjectProps = {
  memory: ArchiveMemory;
  index: number;
  active: boolean;
  hasActiveMemory: boolean;
  onObserve: () => void;
  onRelease: () => void;
  reducedMotion: boolean;
};

function ArchiveObject({
  memory,
  index,
  active,
  hasActiveMemory,
  onObserve,
  onRelease,
  reducedMotion
}: ArchiveObjectProps) {
  const annotationId = `${memory.id}-annotation`;

  return (
    <motion.article
      tabIndex={0}
      aria-label={`${memory.label}: ${memory.title}`}
      aria-describedby={annotationId}
      className={`archive-memory-object ${memory.className}`}
      data-kind={memory.kind}
      data-active={active}
      data-muted={hasActiveMemory && !active}
      onFocus={onObserve}
      onBlur={onRelease}
      onPointerEnter={onObserve}
      onPointerLeave={onRelease}
      initial={{ opacity: 0, y: 28, filter: "blur(18px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{
        duration: reducedMotion ? 0.01 : 1,
        ease: cinematicEase,
        delay: reducedMotion ? 0 : 0.12 * index
      }}
    >
      <div className="archive-object-light" aria-hidden="true" />
      <ArchiveSurface memory={memory} />

      <div className="archive-object-text">
        <p className="museum-label archive-object-label">{memory.label}</p>
        <h3>{memory.title}</h3>
        <p className="archive-object-meta">{memory.meta}</p>
        <p className="archive-object-kannada font-kannada">{memory.kannada}</p>
      </div>

      <div id={annotationId} className="archive-annotation" aria-live="polite">
        <p>{memory.note}</p>
        <span>{memory.observation}</span>
      </div>

      <ul className="archive-fragment-list" aria-label="Revealed archival traces">
        {memory.fragments.map((fragment) => (
          <li key={fragment}>{fragment}</li>
        ))}
      </ul>
    </motion.article>
  );
}

function ArchiveSurface({ memory }: { memory: ArchiveMemory }) {
  if (memory.kind === "photograph") {
    return (
      <div className="archive-photo-surface" aria-hidden="true">
        <div className="archive-photo-image" />
      </div>
    );
  }

  if (memory.kind === "manuscript") {
    return (
      <div className="archive-manuscript-surface" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (memory.kind === "field-note") {
    return (
      <div className="archive-fieldnote-surface" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div className="archive-label-surface" aria-hidden="true">
      <span />
    </div>
  );
}
