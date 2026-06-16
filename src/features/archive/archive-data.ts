import { kannadaText } from "@/lib/content/kannada";

export type ArchiveMemoryKind =
  | "photograph"
  | "manuscript"
  | "field-note"
  | "label";

export type ArchiveMemory = {
  id: string;
  kind: ArchiveMemoryKind;
  label: string;
  title: string;
  meta: string;
  kannada: string;
  note: string;
  observation: string;
  fragments: string[];
  className: string;
};

export const archiveMemories: ArchiveMemory[] = [
  {
    id: "rainprint",
    kind: "photograph",
    label: "PHOTOGRAPH / MONSOON EDGE",
    title: "A photograph still holding the weather",
    meta: "Malnad, rain light, undated",
    kannada: kannadaText.archivePhotoNote,
    note:
      "The emulsion has gone soft at the corners, as if the forest kept breathing through it after the rain stopped.",
    observation: "silver stain / wet leaf shadow / thumb warmth",
    fragments: ["faint ridge line", "fingerprint on the border", "rain lifted the black"],
    className: "archive-object-rainprint"
  },
  {
    id: "margin",
    kind: "manuscript",
    label: "MANUSCRIPT SCRAP / REVISION",
    title: "A sentence paused before becoming literature",
    meta: "Ink, paper fibre, late-night draft",
    kannada: kannadaText.archiveManuscriptNote,
    note:
      "A line begins, crosses itself out, returns as a quieter line. The page remembers the hesitation more tenderly than the sentence.",
    observation: "amber ink / pressed crease / breath mark",
    fragments: ["word under erasure", "margin folded twice", "lamp soot at the top edge"],
    className: "archive-object-margin"
  },
  {
    id: "field-note",
    kind: "field-note",
    label: "FIELD NOTE / OBSERVATION",
    title: "The forest entered through small facts",
    meta: "Soil smell, dusk, after rainfall",
    kannada: kannadaText.archiveFieldNote,
    note:
      "A brief note about wings, mud, and a sound near the path. It feels less like data than a person leaning closer to the world.",
    observation: "termite wing / red soil / listening",
    fragments: ["pencil pressure deepens", "one Kannada word darkened", "leaf grit trapped in fold"],
    className: "archive-object-field"
  },
  {
    id: "drawer-label",
    kind: "label",
    label: "DRAWER LABEL / LOCATION REMNANT",
    title: "A place name kept in a drawer",
    meta: "Hand label, cotton thread, old paste",
    kannada: kannadaText.archiveLocationNote,
    note:
      "Not a map, only a small proof that someone once named the damp road carefully enough to keep it.",
    observation: "old paste / thread shadow / quiet index",
    fragments: ["edge browned by touch", "pin hole at left", "paper lifted from backing"],
    className: "archive-object-drawer"
  }
];
