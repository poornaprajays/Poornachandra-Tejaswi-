import { forwardRef, type ComponentPropsWithoutRef, type ReactNode } from "react";
import type { AtmosphereId } from "@/lib/atmosphere/types";
import { cn } from "@/lib/utils/cn";

type CinematicSectionProps = ComponentPropsWithoutRef<"section"> & {
  atmosphere: AtmosphereId;
  children: ReactNode;
};

export const CinematicSection = forwardRef<HTMLElement, CinematicSectionProps>(
  ({ atmosphere, children, className, ...props }, ref) => {
    return (
      <section
        ref={ref}
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
);

CinematicSection.displayName = "CinematicSection";
