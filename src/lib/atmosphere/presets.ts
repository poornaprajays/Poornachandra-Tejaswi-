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
  "malnad-rain-country": {
    id: "malnad-rain-country",
    label: "Malnad Rain Country",
    colors: {
      background: "#07100B",
      foreground: "#E3DAC3",
      accent: "#A99155",
      mist: "#AEB8AD",
      rain: "#637477"
    },
    fog: {
      density: 0.86,
      speed: 0.16,
      blur: 24
    },
    rain: {
      intensity: 0.72,
      speed: 0.78,
      opacity: 0.42
    },
    grain: {
      opacity: 0.18
    },
    vignette: {
      opacity: 0.78
    }
  },
  "mind-wild-observatory": {
    id: "mind-wild-observatory",
    label: "Mind In The Wild Observatory",
    colors: {
      background: "#0E100B",
      foreground: "#E5D6BA",
      accent: "#B18C52",
      mist: "#A39D8E",
      rain: "#4C5957"
    },
    fog: {
      density: 0.48,
      speed: 0.1,
      blur: 16
    },
    rain: {
      intensity: 0.24,
      speed: 0.36,
      opacity: 0.18
    },
    grain: {
      opacity: 0.24
    },
    vignette: {
      opacity: 0.68
    }
  },
  "books-forests": {
    id: "books-forests",
    label: "Books As Forests",
    colors: {
      background: "#080908",
      foreground: "#E8D8B8",
      accent: "#B18E50",
      mist: "#8E9688",
      rain: "#3C4A46"
    },
    fog: {
      density: 0.58,
      speed: 0.08,
      blur: 20
    },
    rain: {
      intensity: 0.18,
      speed: 0.28,
      opacity: 0.14
    },
    grain: {
      opacity: 0.25
    },
    vignette: {
      opacity: 0.76
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
