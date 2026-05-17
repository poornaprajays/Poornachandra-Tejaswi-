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
import { bookPortals, secondaryWorks, type BookPortal } from "./books-data";

type BookAtmosphereStyle = CSSProperties & {
  "--book-bg": string;
  "--book-accent": string;
  "--book-mist": string;
  "--book-rain": string;
  "--book-glow": string;
  "--book-shadow": string;
};

export function BooksAsForestsSection() {
  const [activeBookId, setActiveBookId] = useState(bookPortals[0].id);
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const activeBook = useMemo(
    () => bookPortals.find((book) => book.id === activeBookId) ?? bookPortals[0],
    [activeBookId]
  );

  const style = useMemo<BookAtmosphereStyle>(
    () => ({
      "--book-bg": activeBook.atmosphere.bg,
      "--book-accent": activeBook.atmosphere.accent,
      "--book-mist": activeBook.atmosphere.mist,
      "--book-rain": activeBook.atmosphere.rain,
      "--book-glow": activeBook.atmosphere.glow,
      "--book-shadow": activeBook.atmosphere.shadow
    }),
    [activeBook]
  );

  const forestY = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);
  const archiveY = useTransform(scrollYProgress, [0, 1], ["-3%", "9%"]);
  const titleOpacity = useTransform(scrollYProgress, [0.06, 0.22, 0.94], [0, 1, 1]);
  const titleY = useTransform(scrollYProgress, [0.06, 0.55], ["36px", "-18px"]);
  const portalOpacity = useTransform(scrollYProgress, [0.12, 0.28], [0, 1]);

  return (
    <CinematicSection
      id="books-forests"
      ref={sectionRef}
      atmosphere="books-forests"
      data-soundscape={`book-portal-${activeBook.id}-${activeBook.soundMood}`}
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

        <div className="relative z-20 grid h-full grid-rows-[auto_1fr] px-6 pb-8 pt-24 md:px-12 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] lg:grid-rows-1 lg:gap-10 lg:px-20 lg:py-24">
          <motion.div
            className="books-forests-intro self-start lg:self-center"
            style={{
              opacity: prefersReducedMotion ? 1 : titleOpacity,
              y: prefersReducedMotion ? 0 : titleY
            }}
          >
            <p className="museum-label mb-6 text-[color:var(--book-accent)]">
              BOOKS AS FORESTS
            </p>
            <h2 className="max-w-4xl font-kannada text-[clamp(2.65rem,7.5vw,8.8rem)] font-semibold leading-[1.02] text-[color:var(--atmosphere-fg)]">
              {kannadaText.booksForestsTitle}
            </h2>
            <p className="mt-7 max-w-xl text-balance font-editorial text-xl leading-9 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_64%,transparent)] md:text-2xl">
              {kannadaText.booksForestsWhisper}
            </p>
          </motion.div>

          <motion.div
            className="books-portal-system self-end lg:self-center"
            style={{ opacity: prefersReducedMotion ? 1 : portalOpacity }}
          >
            <div className="books-active-world" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBook.id}
                  initial={{ opacity: 0, y: 22, filter: "blur(18px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(18px)" }}
                  transition={{ duration: 0.9, ease: cinematicEase }}
                >
                  <p className="museum-label mb-5 text-[color:var(--book-accent)]">
                    {activeBook.tone}
                  </p>
                  <h3 className="book-world-title font-kannada text-[clamp(2.4rem,7vw,7.4rem)] font-semibold leading-[1.03] text-[color:var(--atmosphere-fg)]">
                    {activeBook.kannadaTitle}
                  </h3>
                  <p className="mt-3 font-editorial text-2xl text-[color:color-mix(in_srgb,var(--atmosphere-fg)_58%,transparent)] md:text-3xl">
                    {activeBook.englishTitle}
                  </p>
                  <p className="mt-8 max-w-2xl font-kannada text-[clamp(1.45rem,3.2vw,3.4rem)] leading-[1.22] text-[color:color-mix(in_srgb,var(--atmosphere-fg)_86%,transparent)]">
                    {activeBook.fragmentKannada}
                  </p>
                  <p className="mt-5 max-w-xl font-editorial text-lg leading-8 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_62%,transparent)] md:text-xl">
                    {activeBook.fragmentEnglish}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="books-portal-list" aria-label="Select a literary world">
              {bookPortals.map((book, index) => (
                <BookPortalButton
                  key={book.id}
                  book={book}
                  index={index}
                  active={book.id === activeBook.id}
                  onFocus={() => setActiveBookId(book.id)}
                  onPointerEnter={() => setActiveBookId(book.id)}
                  onClick={() => setActiveBookId(book.id)}
                />
              ))}
            </div>

            <div className="books-world-metadata" aria-label="Selected atmosphere">
              <span>{activeBook.transition}</span>
              <span>{activeBook.soundMood}</span>
              <span>{activeBook.atmosphere.texture}</span>
            </div>

            <div className="books-secondary-constellation" aria-label="Additional works">
              <p className="museum-label">ARCHIVAL CONSTELLATION</p>
              <div className="books-secondary-list">
                {secondaryWorks.map((work) => (
                  <span key={work.id} className="books-secondary-work">
                    <span>{work.title}</span>
                    <span>{work.form}</span>
                    <span>{work.mood}</span>
                  </span>
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
  book: BookPortal;
  index: number;
  active: boolean;
  onFocus: () => void;
  onPointerEnter: () => void;
  onClick: () => void;
};

function BookPortalButton({
  book,
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
      aria-label={`Enter ${book.englishTitle}`}
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
        <span className="font-kannada">{book.kannadaTitle}</span>
        <span>{book.englishTitle}</span>
      </span>
    </motion.button>
  );
}
