"use client";

import type { ReactNode } from "react";
import { AtmosphereProvider } from "@/features/atmosphere/AtmosphereProvider";
import { SmoothScrollProvider } from "@/features/scroll/SmoothScrollProvider";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <AtmosphereProvider>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </AtmosphereProvider>
  );
}
