import { kannadaText } from "@/lib/content/kannada";

export type LiteraryWorkTier = "primary" | "secondary";

export type LiteraryAtmosphere = {
  bg: string;
  accent: string;
  mist: string;
  rain: string;
  glow: string;
  shadow: string;
  texture: string;
};

export type LiteraryWork = {
  id: string;
  tier: LiteraryWorkTier;
  englishTitle: string;
  kannadaTitle?: string;
  form: string;
  year?: number;
  origin?: string;
  tone: string;
  mood: string;
  themes: string[];
  fragmentKannada?: string;
  fragmentEnglish: string;
  atmosphere: LiteraryAtmosphere;
  soundMood: string;
  transition: string;
};

export const bookPortals: LiteraryWork[] = [
  {
    id: "karvalo",
    tier: "primary",
    englishTitle: "Karvalo",
    kannadaTitle: kannadaText.bookKarvalo,
    form: "novel",
    year: 1980,
    tone: "wonder, pursuit, ecological mystery",
    mood: "forest science",
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
    tier: "primary",
    englishTitle: "Chidambara Rahasya",
    kannadaTitle: kannadaText.bookChidambaraRahasya,
    form: "novel",
    tone: "village mystery, satire, humid suspense",
    mood: "humid secrecy",
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
    tier: "primary",
    englishTitle: "Jugari Cross",
    kannadaTitle: kannadaText.bookJugariCross,
    form: "novel",
    tone: "night road, danger, restless momentum",
    mood: "wet road",
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
    tier: "primary",
    englishTitle: "Abachurina Post Office",
    kannadaTitle: kannadaText.bookAbachurinaPostOffice,
    form: "story",
    tone: "rural intimacy, letter, human warmth",
    mood: "postal paper",
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
  },
  {
    id: "missing-link",
    tier: "primary",
    englishTitle: "Missing Link",
    kannadaTitle: kannadaText.bookMissingLink,
    form: "popular science",
    year: 1991,
    origin: "original",
    tone: "evolution, science, accessible wonder",
    mood: "evolutionary question",
    themes: ["evolution", "popular science", "origins"],
    fragmentKannada: kannadaText.bookMissingLinkFragment,
    fragmentEnglish:
      "An accessible science work where evolution, evidence, and wonder meet in the question of origins.",
    atmosphere: {
      bg: "#0A0F10",
      accent: "#A7B46A",
      mist: "#A4B4A5",
      rain: "#5D7370",
      glow: "rgba(155, 182, 116, 0.24)",
      shadow: "rgba(3, 9, 10, 0.9)",
      texture: "evolution-fieldnote"
    },
    soundMood: "quiet laboratory rain, page notes, low forest insects",
    transition: "a fossil trace glows through mist"
  },
  {
    id: "mayaloka",
    tier: "primary",
    englishTitle: "Mayaloka",
    kannadaTitle: kannadaText.bookMayaloka,
    form: "novel",
    tone: "dream terrain, shifting reality",
    mood: "dream terrain",
    themes: ["imagination", "strangeness", "inner weather"],
    fragmentKannada: kannadaText.bookMayalokaFragment,
    fragmentEnglish:
      "A threshold where reality loosens and the landscape becomes inward.",
    atmosphere: {
      bg: "#0C0E0B",
      accent: "#A99A68",
      mist: "#8F967F",
      rain: "#4B554B",
      glow: "rgba(153, 142, 96, 0.2)",
      shadow: "rgba(5, 8, 4, 0.9)",
      texture: "dream-paper"
    },
    soundMood: "soft drone, after-rain stillness",
    transition: "mist turns inward"
  },
  {
    id: "swaroopa",
    tier: "primary",
    englishTitle: "Swaroopa",
    kannadaTitle: kannadaText.bookSwaroopa,
    form: "novel",
    tone: "form, identity, reflective quiet",
    mood: "inner form",
    themes: ["self", "shape", "philosophical reflection"],
    fragmentKannada: kannadaText.bookSwaroopaFragment,
    fragmentEnglish:
      "A reflective chamber where form is not surface, but a question held in low light.",
    atmosphere: {
      bg: "#11100D",
      accent: "#B79A62",
      mist: "#999180",
      rain: "#5A5A52",
      glow: "rgba(181, 145, 88, 0.18)",
      shadow: "rgba(10, 8, 5, 0.9)",
      texture: "ink-form"
    },
    soundMood: "low room tone, paper breath",
    transition: "ink settles into shape"
  },
  {
    id: "kannada-nadina-hakkigalu",
    tier: "primary",
    englishTitle: "Kannada Nadina Hakkigalu",
    kannadaTitle: kannadaText.bookKannadaNadinaHakkigalu,
    form: "nature writing",
    tone: "bird field-notes, patient attention",
    mood: "bird field-notes",
    themes: ["birds", "field observation", "ecology"],
    fragmentKannada: kannadaText.bookKannadaNadinaHakkigaluFragment,
    fragmentEnglish:
      "Attention lifts from the page like a bird call heard through wet leaves.",
    atmosphere: {
      bg: "#08110D",
      accent: "#A7A968",
      mist: "#9FAE98",
      rain: "#52665B",
      glow: "rgba(155, 176, 112, 0.2)",
      shadow: "rgba(2, 10, 6, 0.9)",
      texture: "field-guide"
    },
    soundMood: "distant bird calls, leaf drip",
    transition: "a small call opens the canopy"
  }
];

export const secondaryWorks: LiteraryWork[] = [
  {
    id: "yamala-prashne",
    tier: "secondary",
    englishTitle: "Yamala Prashne",
    form: "drama",
    tone: "question, echo, theatrical shadow",
    mood: "question and echo",
    themes: ["dialogue", "doubt", "performance"],
    fragmentEnglish:
      "A question echoes like a voice from the far end of a darkened room.",
    atmosphere: {
      bg: "#0D0A09",
      accent: "#B28755",
      mist: "#8D8072",
      rain: "#504A45",
      glow: "rgba(178, 120, 78, 0.16)",
      shadow: "rgba(8, 4, 3, 0.92)",
      texture: "stage-paper"
    },
    soundMood: "wooden room, distant rain",
    transition: "shadow pauses before speech"
  },
  {
    id: "huliyurina-sarahaddu",
    tier: "secondary",
    englishTitle: "Huliyurina Sarahaddu",
    form: "stories",
    tone: "village edge, dry wit, social weather",
    mood: "village edge",
    themes: ["village", "boundary", "human comedy"],
    fragmentEnglish:
      "At the edge of the village, small human movements begin to gather weather.",
    atmosphere: {
      bg: "#120F0A",
      accent: "#B9945B",
      mist: "#9B8D76",
      rain: "#5E574B",
      glow: "rgba(174, 129, 75, 0.16)",
      shadow: "rgba(12, 7, 3, 0.9)",
      texture: "village-dust"
    },
    soundMood: "distant voices, soft earth",
    transition: "a boundary appears through dust"
  },
  {
    id: "svagata-lahari",
    tier: "secondary",
    englishTitle: "Svagata Lahari",
    form: "poems",
    tone: "lyrical memory, inward arrival",
    mood: "lyrical memory",
    themes: ["poetry", "arrival", "voice"],
    fragmentEnglish:
      "A softer current of voice moves beneath the larger forest of prose.",
    atmosphere: {
      bg: "#10110C",
      accent: "#C0A46D",
      mist: "#AAA184",
      rain: "#666552",
      glow: "rgba(190, 164, 109, 0.16)",
      shadow: "rgba(8, 9, 4, 0.9)",
      texture: "poem-grain"
    },
    soundMood: "thin rain, quiet breath",
    transition: "a line of light crosses paper"
  },
  {
    id: "hosa-vicharagalu",
    tier: "secondary",
    englishTitle: "Hosa Vicharagalu",
    form: "essays",
    tone: "restless thought, inquiry, critique",
    mood: "restless thought",
    themes: ["ideas", "critique", "curiosity"],
    fragmentEnglish:
      "Thought moves as weather does: restless, unsentimental, searching for pressure.",
    atmosphere: {
      bg: "#0C0D0B",
      accent: "#AD955F",
      mist: "#949486",
      rain: "#565B58",
      glow: "rgba(171, 148, 95, 0.15)",
      shadow: "rgba(5, 6, 4, 0.9)",
      texture: "essay-margin"
    },
    soundMood: "room tone, pen on paper",
    transition: "a margin note warms into view"
  },
  {
    id: "by-the-corner-of-indian-western-ghats",
    tier: "secondary",
    englishTitle: "By the Corner of Indian Western Ghats",
    form: "nature study",
    tone: "Western Ghats margin, ecological attention",
    mood: "Western Ghats margin",
    themes: ["Western Ghats", "landscape", "ecology"],
    fragmentEnglish:
      "The Ghats appear not as scenery, but as a living margin of attention.",
    atmosphere: {
      bg: "#07100C",
      accent: "#9F9F60",
      mist: "#9CAE99",
      rain: "#53695E",
      glow: "rgba(142, 164, 105, 0.17)",
      shadow: "rgba(2, 9, 6, 0.9)",
      texture: "ghats-margin"
    },
    soundMood: "mist, leaf water, far valley",
    transition: "the ridge line darkens softly"
  }
];

export const literaryWorks = [...bookPortals, ...secondaryWorks];
