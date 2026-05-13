import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { AtmosphereId } from "@/lib/atmosphere/types";
import { cn } from "@/lib/utils/cn";

type CinematicSectionProps = ComponentPropsWithoutRef<"section"> & {
  atmosphere: AtmosphereId;
  children: ReactNode;
};

export function CinematicSection({
  atmosphere,
  children,
  className,
  ...props
}: CinematicSectionProps) {
  return (
    <section
      data-atmosphere={atmosphere}
      className={cn(
        "relative z-10 flex overflow-hidden bg-transparent text-[color:var(--atmosphere-fg)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
