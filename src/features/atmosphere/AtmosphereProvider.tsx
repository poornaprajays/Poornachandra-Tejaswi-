"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { applyAtmosphereVariables } from "@/lib/atmosphere/apply-atmosphere";
import {
  atmospherePresets,
  defaultAtmosphere
} from "@/lib/atmosphere/presets";
import type { AtmosphereId, AtmospherePreset } from "@/lib/atmosphere/types";

type AtmosphereContextValue = {
  atmosphere: AtmospherePreset;
  setAtmosphere: (id: AtmosphereId) => void;
};

const AtmosphereContext = createContext<AtmosphereContextValue | null>(null);

type AtmosphereProviderProps = {
  children: ReactNode;
};

export function AtmosphereProvider({ children }: AtmosphereProviderProps) {
  const [atmosphereId, setAtmosphereId] =
    useState<AtmosphereId>(defaultAtmosphere.id);

  const atmosphere = atmospherePresets[atmosphereId];

  useEffect(() => {
    applyAtmosphereVariables(document.documentElement, atmosphere);
  }, [atmosphere]);

  const setAtmosphere = useCallback((id: AtmosphereId) => {
    setAtmosphereId(id);
  }, []);

  const value = useMemo(
    () => ({
      atmosphere,
      setAtmosphere
    }),
    [atmosphere, setAtmosphere]
  );

  return (
    <AtmosphereContext.Provider value={value}>
      {children}
    </AtmosphereContext.Provider>
  );
}

export function useAtmosphere() {
  const context = useContext(AtmosphereContext);

  if (!context) {
    throw new Error("useAtmosphere must be used inside AtmosphereProvider.");
  }

  return context;
}
