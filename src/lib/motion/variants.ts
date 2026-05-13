import { cinematicDurations, cinematicEase } from "./easings";

export const revealUp = {
  hidden: {
    opacity: 0,
    y: 36,
    filter: "blur(14px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: cinematicDurations.slow,
      ease: cinematicEase
    }
  }
};

export const revealSoft = {
  hidden: {
    opacity: 0,
    filter: "blur(18px)"
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: cinematicDurations.threshold,
      ease: cinematicEase
    }
  }
};
