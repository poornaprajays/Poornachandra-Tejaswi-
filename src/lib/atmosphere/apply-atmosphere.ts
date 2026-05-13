import type { AtmospherePreset } from "./types";

export function applyAtmosphereVariables(
  element: HTMLElement,
  preset: AtmospherePreset
) {
  element.style.setProperty("--atmosphere-bg", preset.colors.background);
  element.style.setProperty("--atmosphere-fg", preset.colors.foreground);
  element.style.setProperty("--atmosphere-accent", preset.colors.accent);
  element.style.setProperty("--atmosphere-mist", preset.colors.mist);
  element.style.setProperty("--atmosphere-rain", preset.colors.rain);
  element.style.setProperty("--fog-density", String(preset.fog.density));
  element.style.setProperty("--fog-speed", `${preset.fog.speed}`);
  element.style.setProperty("--fog-blur", `${preset.fog.blur}px`);
  element.style.setProperty("--rain-intensity", String(preset.rain.intensity));
  element.style.setProperty("--rain-speed", `${preset.rain.speed}`);
  element.style.setProperty("--rain-opacity", String(preset.rain.opacity));
  element.style.setProperty("--grain-opacity", String(preset.grain.opacity));
  element.style.setProperty("--vignette-opacity", String(preset.vignette.opacity));
}
