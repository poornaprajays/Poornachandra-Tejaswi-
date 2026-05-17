import { kannadaText } from "@/lib/content/kannada";

export type BookPortal = {
  id: string;
  englishTitle: string;
  kannadaTitle: string;
  tone: string;
  themes: string[];
  fragmentKannada: string;
  fragmentEnglish: string;
  atmosphere: {
    bg: string;
    accent: string;
    mist: string;
    rain: string;
    glow: string;
    shadow: string;
    texture: string;
  };
  soundMood: string;
  transition: string;
};

export type SecondaryWork = {
  id: string;
  title: string;
  form: string;
  mood: string;
};

export const bookPortals: BookPortal[] = [
  {
    id: "karvalo",
    englishTitle: "Karvalo",
    kannadaTitle: kannadaText.bookKarvalo,
    tone: "wonder, pursuit, ecological mystery",
    themes: ["forest science", "curiosity", "the miraculous ordinary"],
    fragmentKannada: kannadaText.bookKarvaloFragment,
    fragmentEnglish:
      "A search moves through the forest until science begins to feel like wonder.",
    atmosphere: {
      bg: "#08120C",
      accent: "#B6A15F",
      mist: "#9DAE95",
      rain: "#526B63",
      glow: "rgba(168, 183, 112, 0.24)",
      shadow: "rgba(3, 13, 7, 0.88)",
      texture: "forest-specimen"
    },
    soundMood: "distant rain, insects, leaf movement",
    transition: "fog opens like a field path"
  },
  {
    id: "chidambara-rahasya",
    englishTitle: "Chidambara Rahasya",
    kannadaTitle: kannadaText.bookChidambaraRahasya,
    tone: "village mystery, satire, humid suspense",
    themes: ["rural society", "secrecy", "comic darkness"],
    fragmentKannada: kannadaText.bookChidambaraFragment,
    fragmentEnglish:
      "A village holds its breath; mystery gathers in the damp corners of speech.",
    atmosphere: {
      bg: "#130F0A",
      accent: "#C09A55",
      mist: "#A78D70",
      rain: "#5B5650",
      glow: "rgba(192, 136, 70, 0.24)",
      shadow: "rgba(18, 9, 3, 0.9)",
      texture: "smoke-paper"
    },
    soundMood: "low room tone, soft rain on tile",
    transition: "shadow folds into lamplight"
  },
  {
    id: "jugari-cross",
    englishTitle: "Jugari Cross",
    kannadaTitle: kannadaText.bookJugariCross,
    tone: "night road, danger, restless momentum",
    themes: ["thrill", "uncertainty", "moral weather"],
    fragmentKannada: kannadaText.bookJugariFragment,
    fragmentEnglish:
      "A night journey sharpens every sound; the road itself becomes a question.",
    atmosphere: {
      bg: "#070A0B",
      accent: "#A77B4A",
      mist: "#737C7A",
      rain: "#445A62",
      glow: "rgba(83, 106, 116, 0.26)",
      shadow: "rgba(2, 5, 6, 0.92)",
      texture: "wet-road"
    },
    soundMood: "distant engine, night rain, tense silence",
    transition: "headlight passes through rain"
  },
  {
    id: "abachurina-post-office",
    englishTitle: "Abachurina Post Office",
    kannadaTitle: kannadaText.bookAbachurinaPostOffice,
    tone: "rural intimacy, letter, human warmth",
    themes: ["village life", "communication", "small revelations"],
    fragmentKannada: kannadaText.bookAbachurinaFragment,
    fragmentEnglish:
      "A letter carries the quiet pulse of a village from one room to another.",
    atmosphere: {
      bg: "#15110A",
      accent: "#C0A36B",
      mist: "#B1A58D",
      rain: "#716858",
      glow: "rgba(193, 157, 96, 0.25)",
      shadow: "rgba(20, 11, 3, 0.88)",
      texture: "postal-paper"
    },
    soundMood: "paper, afternoon rain, distant human murmur",
    transition: "paper glow rises from darkness"
  }
];

export const secondaryWorks: SecondaryWork[] = [
  {
    id: "mayaloka",
    title: "Mayaloka",
    form: "novel",
    mood: "dream terrain"
  },
  {
    id: "swaroopa",
    title: "Swaroopa",
    form: "novel",
    mood: "inner form"
  },
  {
    id: "yamala-prashne",
    title: "Yamala Prashne",
    form: "drama",
    mood: "question and echo"
  },
  {
    id: "huliyurina-sarahaddu",
    title: "Huliyurina Sarahaddu",
    form: "stories",
    mood: "village edge"
  },
  {
    id: "svagata-lahari",
    title: "Svagata Lahari",
    form: "poems",
    mood: "lyrical memory"
  },
  {
    id: "kannada-nadina-hakkigalu",
    title: "Kannada Nadina Hakkigalu",
    form: "nature writing",
    mood: "bird field-notes"
  },
  {
    id: "hosa-vicharagalu",
    title: "Hosa Vicharagalu",
    form: "essays",
    mood: "restless thought"
  },
  {
    id: "by-the-corner-of-indian-western-ghats",
    title: "By the Corner of Indian Western Ghats",
    form: "nature study",
    mood: "Western Ghats margin"
  }
];
