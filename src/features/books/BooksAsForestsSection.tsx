"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useMemo, useRef, useState, type CSSProperties } from "react";
import { CinematicSection } from "@/components/primitives/CinematicSection";
import { SceneLayer } from "@/components/primitives/SceneLayer";
import { kannadaText } from "@/lib/content/kannada";
import { cinematicEase } from "@/lib/motion/easings";
import {
  bookPortals,
  literaryWorks,
  secondaryWorks,
  type LiteraryWork
} from "./books-data";

type BookAtmosphereStyle = CSSProperties & {
  "--book-bg": string;
  "--book-accent": string;
  "--book-mist": string;
  "--book-rain": string;
  "--book-glow": string;
  "--book-shadow": string;
};

export function BooksAsForestsSection() {
  const [activeWorkId, setActiveWorkId] = useState(bookPortals[0].id);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const activeWork = useMemo(
    () =>
      literaryWorks.find((work) => work.id === activeWorkId) ?? bookPortals[0],
    [activeWorkId]
  );

  const style = useMemo<BookAtmosphereStyle>(
    () => ({
      "--book-bg": activeWork.atmosphere.bg,
      "--book-accent": activeWork.atmosphere.accent,
      "--book-mist": activeWork.atmosphere.mist,
      "--book-rain": activeWork.atmosphere.rain,
      "--book-glow": activeWork.atmosphere.glow,
      "--book-shadow": activeWork.atmosphere.shadow
    }),
    [activeWork]
  );

  const forestY = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);
  const archiveY = useTransform(scrollYProgress, [0, 1], ["-3%", "9%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.06, 0.22, 0.94], [0, 1, 1]);
  const titleY = useTransform(scrollYProgress, [0.06, 0.55], ["36px", "-18px"]);
  const portalOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);
  const activeSubtitle = [
    activeWork.englishTitle,
    activeWork.form,
    activeWork.year,
    activeWork.origin
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <CinematicSection
      id="books-forests"
      ref={sectionRef}
      atmosphere="books-forests"
      data-soundscape={`book-portal-${activeWork.id}-${activeWork.soundMood}`}
      className="books-forests-scene min-h-[310svh]"
      style={style}
    >
      <div className="sticky top-0 h-svh w-full overflow-hidden">
        <SceneLayer className="books-forest-base" depth="far" />
        <SceneLayer
          className="books-forest-depth"
          depth="far"
          motionStyle={prefersReducedMotion ? { y: 0 } : { y: forestY }}
        />
        <SceneLayer
          className="books-archive-traces"
          depth="mid"
          motionStyle={prefersReducedMotion ? { y: 0 } : { y: archiveY }}
        />
        <SceneLayer className="books-climate-veil" depth="veil" />
        <SceneLayer className="books-portal-light" depth="veil" />

        <div
          className="books-forests-frame relative z-20 h-full px-6 pb-8 pt-24 md:px-12 lg:px-20 lg:pb-10 lg:pt-24"
          data-active-tier={activeWork.tier}
        >
          <motion.div
            className="books-forests-intro"
            style={{
              opacity: prefersReducedMotion ? 1 : titleOpacity,
              y: prefersReducedMotion ? 0 : titleY
            }}
          >
            <h2 className="books-section-title font-kannada font-semibold text-[color:var(--atmosphere-fg)]">
              {kannadaText.booksForestsTitle}
            </h2>
            <p className="museum-label books-section-label mt-4 text-[color:var(--book-accent)]">
              BOOKS AS FORESTS
            </p>
            <p className="books-section-whisper mt-3 max-w-xl text-balance font-editorial text-lg leading-7 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_64%,transparent)] md:text-xl">
              {kannadaText.booksForestsWhisper}
            </p>
          </motion.div>

          <motion.div
            className="books-portal-system"
            style={{ opacity: prefersReducedMotion ? 1 : portalOpacity }}
          >
            <div className="books-active-world" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeWork.id}
                  initial={{ opacity: 0, y: 22, filter: "blur(18px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(18px)" }}
                  transition={{ duration: 0.9, ease: cinematicEase }}
                >
                  <p className="museum-label mb-5 text-[color:var(--book-accent)]">
                    {activeWork.tone}
                  </p>
                  <h3
                    className={
                      activeWork.kannadaTitle
                        ? "book-world-title font-kannada font-semibold text-[color:var(--atmosphere-fg)]"
                        : "book-world-title book-world-title-latin font-editorial font-semibold text-[color:var(--atmosphere-fg)]"
                    }
                  >
                    {activeWork.kannadaTitle ?? activeWork.englishTitle}
                  </h3>
                  <p className="mt-3 font-editorial text-xl text-[color:color-mix(in_srgb,var(--atmosphere-fg)_58%,transparent)] md:text-2xl">
                    {activeSubtitle}
                  </p>
                  {activeWork.fragmentKannada ? (
                    <p className="book-world-fragment mt-7 max-w-2xl font-kannada text-[color:color-mix(in_srgb,var(--atmosphere-fg)_86%,transparent)]">
                      {activeWork.fragmentKannada}
                    </p>
                  ) : null}
                  <p className="mt-5 max-w-xl font-editorial text-lg leading-8 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_62%,transparent)] md:text-xl">
                    {activeWork.fragmentEnglish}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="books-portal-list" aria-label="Select a literary world">
              {bookPortals.map((book, index) => (
                <BookPortalButton
                  key={book.id}
                  work={book}
                  index={index}
                  active={book.id === activeWork.id}
                  onFocus={() => setActiveWorkId(book.id)}
                  onPointerEnter={() => setActiveWorkId(book.id)}
                  onClick={() => setActiveWorkId(book.id)}
                />
              ))}
            </div>

            <div className="books-world-metadata" aria-label="Selected atmosphere">
              <span>{activeWork.transition}</span>
              <span>{activeWork.soundMood}</span>
              <span>{activeWork.atmosphere.texture}</span>
            </div>

            <div className="books-secondary-constellation" aria-label="Additional works">
              <p className="museum-label">ARCHIVAL CONSTELLATION</p>
              <div className="books-secondary-list">
                {secondaryWorks.map((work, index) => (
                  <button
                    key={work.id}
                    type="button"
                    className="books-secondary-work"
                    data-active={work.id === activeWork.id}
                    aria-pressed={work.id === activeWork.id}
                    aria-label={`Explore ${work.englishTitle}`}
                    onFocus={() => setActiveWorkId(work.id)}
                    onPointerEnter={() => setActiveWorkId(work.id)}
                    onClick={() => setActiveWorkId(work.id)}
                    style={{ "--constellation-index": index } as CSSProperties}
                  >
                    <span>{work.englishTitle}</span>
                    <span>{work.form}</span>
                    <span>{work.mood}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </CinematicSection>
  );
}

type BookPortalButtonProps = {
  work: LiteraryWork;
  index: number;
  active: boolean;
  onFocus: () => void;
  onPointerEnter: () => void;
  onClick: () => void;
};

function BookPortalButton({
  work,
  index,
  active,
  onFocus,
  onPointerEnter,
  onClick
}: BookPortalButtonProps) {
  return (
    <motion.button
      type="button"
      className="book-portal"
      aria-pressed={active}
      aria-label={`Enter ${work.englishTitle}`}
      data-active={active}
      onFocus={onFocus}
      onPointerEnter={onPointerEnter}
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.8,
        ease: cinematicEase,
        delay: 0.08 * index
      }}
    >
      <span className="book-portal-index">0{index + 1}</span>
      <span className="book-portal-spine" />
      <span className="book-portal-copy">
        <span className="font-kannada">{work.kannadaTitle}</span>
        <span>{work.englishTitle}</span>
      </span>
    </motion.button>
  );
}
