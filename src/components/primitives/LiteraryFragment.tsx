"use client";

import { motion, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils/cn";

type LiteraryFragmentProps = {
  className?: string;
  opacity?: number | MotionValue<number>;
  y?: number | string | MotionValue<number> | MotionValue<string>;
  kannada: string;
  english: string;
  align?: "left" | "right";
  variant?: "mist" | "note";
};

export function LiteraryFragment({
  className,
  opacity = 1,
  y = 0,
  kannada,
  english,
  align = "left",
  variant = "mist"
}: LiteraryFragmentProps) {
  return (
    <motion.div
      className={cn(
        "literary-fragment absolute",
        align === "right" && "text-right",
        variant === "note" && "literary-fragment-note",
        className
      )}
      style={{ opacity, y }}
    >
      <p className="font-kannada text-[clamp(1.55rem,3.8vw,4.2rem)] leading-[1.13] text-[color:var(--atmosphere-fg)]">
        {kannada}
      </p>
      <p className="mt-4 font-editorial text-base leading-7 text-[color:color-mix(in_srgb,var(--atmosphere-fg)_58%,transparent)] md:text-lg">
        {english}
      </p>
    </motion.div>
  );
}
