"use client";

import { motion, type MotionStyle } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils/cn";

type SceneLayerProps = ComponentPropsWithoutRef<typeof motion.div> & {
  depth?: "far" | "mid" | "near" | "veil" | "content";
  motionStyle?: MotionStyle;
};

const depthIndex = {
  far: "z-[1]",
  mid: "z-[2]",
  near: "z-[3]",
  veil: "z-[4]",
  content: "z-10"
} as const;

export function SceneLayer({
  depth = "mid",
  className,
  motionStyle,
  ...props
}: SceneLayerProps) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute inset-0", depthIndex[depth], className)}
      style={motionStyle}
      {...props}
    />
  );
}
