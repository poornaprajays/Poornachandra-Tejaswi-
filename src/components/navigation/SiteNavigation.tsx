"use client";

import { motion } from "framer-motion";
import { kannadaText } from "@/lib/content/kannada";
import { cinematicEase } from "@/lib/motion/easings";

const navItems = [
  { href: "#entrance", label: "Entrance" },
  { href: "#rain-country", label: "Rain Country" },
  { href: "#mind-wild", label: "Mind" },
  { href: "#books-forests", label: "Books" },
  { href: "#archive-breathes", label: "Archive" },
  { href: "#threshold", label: "Foundation" }
];

export function SiteNavigation() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-40 px-5 py-5 md:px-8"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: cinematicEase, delay: 1.3 }}
    >
      <nav
        className="mx-auto flex max-w-[1680px] items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="#entrance"
          className="font-kannada text-sm tracking-[0.08em] text-[color:color-mix(in_srgb,var(--atmosphere-fg)_78%,transparent)] transition-colors duration-500 hover:text-[color:var(--atmosphere-fg)] md:text-base"
        >
          {kannadaText.tejaswiFullName}
        </a>
        <div className="hidden items-center gap-4 lg:gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="museum-label text-[0.68rem] transition-colors duration-500 hover:text-[color:var(--atmosphere-accent)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
