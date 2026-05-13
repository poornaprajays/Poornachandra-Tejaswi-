import type { AtmosphereId, AtmospherePreset } from "./types";

export const atmospherePresets: Record<AtmosphereId, AtmospherePreset> = {
  "mist-forest-night": {
    id: "mist-forest-night",
    label: "Mist Forest Night",
    colors: {
      background: "#0B0F0C",
      foreground: "#E8DDC6",
      accent: "#B89B5E",
      mist: "#A7ADA3",
      rain: "#52646A"
    },
    fog: {
      density: 0.74,
      speed: 0.18,
      blur: 18
    },
    rain: {
      intensity: 0.58,
      speed: 0.62,
      opacity: 0.34
    },
    grain: {
      opacity: 0.16
    },
    vignette: {
      opacity: 0.72
    }
  },
  "rain-manuscript": {
    id: "rain-manuscript",
    label: "Rain Manuscript",
    colors: {
      background: "#17130F",
      foreground: "#DAC7A5",
      accent: "#B89B5E",
      mist: "#C8BDA7",
      rain: "#86785F"
    },
    fog: {
      density: 0.38,
      speed: 0.12,
      blur: 12
    },
    rain: {
      intensity: 0.34,
      speed: 0.48,
      opacity: 0.2
    },
    grain: {
      opacity: 0.22
    },
    vignette: {
      opacity: 0.58
    }
  },
  "golden-legacy": {
    id: "golden-legacy",
    label: "Golden Legacy",
    colors: {
      background: "#10120D",
      foreground: "#F0E3C7",
      accent: "#C6A86A",
      mist: "#B9B29D",
      rain: "#6F7A66"
    },
    fog: {
      density: 0.44,
      speed: 0.1,
      blur: 14
    },
    rain: {
      intensity: 0.2,
      speed: 0.34,
      opacity: 0.16
    },
    grain: {
      opacity: 0.12
    },
    vignette: {
      opacity: 0.5
    }
  }
};

export const defaultAtmosphere = atmospherePresets["mist-forest-night"];
