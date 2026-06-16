export type AtmosphereId =
  | "mist-forest-night"
  | "malnad-rain-country"
  | "mind-wild-observatory"
  | "books-forests"
  | "archive-breathes"
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
