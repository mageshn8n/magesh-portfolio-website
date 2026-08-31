// Motion / video showcase. Add a `video` (mp4/webm URL) once real reels are
// ready — until then each entry renders an animated gradient placeholder.

export type MotionPiece = {
  id: number;
  title: string;
  category: string;
  year: string;
  gradient: [string, string];
  video?: string;
};

export const motionWork: MotionPiece[] = [
  {
    id: 1,
    title: "Kinetic — Brand Film",
    category: "Brand Film",
    year: "2025",
    gradient: ["#ff6ad5", "#1a0616"],
  },
  {
    id: 2,
    title: "Ledger — Approval Choreography",
    category: "Product Motion",
    year: "2025",
    gradient: ["#dfff00", "#141a00"],
  },
  {
    id: 3,
    title: "Atlas — Reasoning Trace",
    category: "UI Animation",
    year: "2026",
    gradient: ["#c9a6ff", "#12081f"],
  },
  {
    id: 4,
    title: "North — Chart Morphing",
    category: "Micro-interaction",
    year: "2024",
    gradient: ["#8fd3ff", "#071620"],
  },
  {
    id: 5,
    title: "Orbit — Vitals Ring",
    category: "Explainer",
    year: "2023",
    gradient: ["#ff9d6c", "#1f0f04"],
  },
  {
    id: 6,
    title: "Prism — System Reveal",
    category: "Brand Motion",
    year: "2022",
    gradient: ["#5ef2c0", "#031f16"],
  },
];
