import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          black: "#0B0F0C",
          canopy: "#13231A",
          deep: "#08120D"
        },
        earth: {
          bark: "#3A2A1E",
          soil: "#241A13",
          paper: "#D8C7A3"
        },
        mist: {
          DEFAULT: "#A7ADA3",
          cold: "#52646A",
          pale: "#D9DED7"
        },
        gold: {
          muted: "#B89B5E",
          dim: "#7C6843"
        },
        ink: {
          charcoal: "#171717",
          soft: "#25241F"
        }
      },
      fontFamily: {
        kannada: ["var(--font-kannada)", "Noto Serif Kannada", "serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      spacing: {
        "cinema-xs": "clamp(0.75rem, 1vw, 1rem)",
        "cinema-sm": "clamp(1rem, 1.8vw, 2rem)",
        "cinema-md": "clamp(2rem, 4vw, 5rem)",
        "cinema-lg": "clamp(4rem, 8vw, 10rem)",
        "cinema-xl": "clamp(7rem, 14vw, 18rem)"
      },
      boxShadow: {
        "archive-soft": "0 30px 90px rgb(0 0 0 / 0.38)",
        "text-glow": "0 0 38px rgb(216 199 163 / 0.18)"
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        rain: "cubic-bezier(0.33, 0, 0.18, 1)"
      }
    }
  },
  plugins: []
};

export default config;
