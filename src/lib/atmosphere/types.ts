export type AtmosphereId =
  | "mist-forest-night"
  | "rain-manuscript"
  | "golden-legacy";

export type AtmospherePreset = {
  id: AtmosphereId;
  label: string;
  colors: {
    background: string;
    foreground: string;
    accent: string;
    mist: string;
    rain: string;
  };
  fog: {
    density: number;
    speed: number;
    blur: number;
  };
  rain: {
    intensity: number;
    speed: number;
    opacity: number;
  };
  grain: {
    opacity: number;
  };
  vignette: {
    opacity: number;
  };
};
