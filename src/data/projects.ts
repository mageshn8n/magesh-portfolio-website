// Selected work. Each category maps to a short generic case-study blurb since
// these are representative placeholder engagements — swap in real write-ups,
// screenshots and metrics per project whenever they're ready.

import { caseStudies } from "./caseStudies";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
};

export const categories: Category[] = [
  {
    slug: "design-systems",
    name: "Design Systems",
    blurb:
      "Token-based, documented component libraries built for adoption across multiple teams and brands — the kind of system that outlives the project that funded it.",
  },
  {
    slug: "mobile-apps",
    name: "Mobile Apps",
    blurb:
      "End-to-end mobile product design — from user flows and research through to shipped iOS and Android experiences built for daily use.",
  },
  {
    slug: "web-applications",
    name: "Web Applications",
    blurb:
      "Complex internal and customer-facing web platforms, designed for the density and edge cases that come with real enterprise data.",
  },
  {
    slug: "saas-products",
    name: "SaaS Products",
    blurb:
      "Product strategy and UX for B2B SaaS — from 0-to-1 product bets to scaling design systems around a growing feature set.",
  },
  {
    slug: "social-reels",
    name: "Social Reels",
    blurb:
      "Short-form motion and storytelling built for social platforms — fast-paced, subtitle-first, and designed to hold attention in the first two seconds.",
  },
  {
    slug: "documentary-films",
    name: "Documentary Films",
    blurb:
      "Long-form documentary work — story development, field production and edit, built around real people and real stakes.",
  },
];

export type Project = {
  id: number;
  slug: string;
  title: string;
  meta: string;
  category: string; // category slug
};

const raw: Record<string, [string, string][]> = {
  "mobile-apps": [["Meditation & Wellness App", "Consumer mobile · iOS · Android"]],
  "web-applications": [
    ["Learning Management System", "L&D at scale · Adaptive paths"],
    ["Workflow Automation Platform", "Process ops · Visual builder"],
  ],
  "saas-products": [
    ["Project Management SaaS", "B2B productivity · 0→1 product"],
    ["Customer Success Platform", "Retention & health · Lifecycle UX"],
  ],
  "social-reels": [
    ["Wellness Campaign", "Short-form series · Motion graphics"],
    ["Educational Content Series", "Explainer reels · Subtitled"],
    ["Brand Storytelling Campaign", "Narrative reels · Visual identity"],
    ["Product Launch Reel", "Hype film · Kinetic type"],
    ["Community Impact Stories", "Human stories · Field footage"],
  ],
  "documentary-films": [
    ["Water Conservation", "Documentary film · Story + edit"],
    ["Rural Development Story", "Field documentary · Sound design"],
    ["Volunteer Impact Film", "Human interest · Interviews"],
    ["Environmental Awareness", "Advocacy film · Motion + edit"],
    ["Human Transformation Journey", "Long-form · Cinematic"],
  ],
};

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const projects: Project[] = Object.entries(raw).flatMap(([category, items], catIdx) =>
  items.map(([title, meta], i) => ({
    id: catIdx * 100 + i + 1,
    slug: slugify(`${title}`),
    title,
    meta,
    category,
  }))
);

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export type WorkItem = {
  slug: string;
  title: string;
  meta: string;
  category: string;
  featured: boolean;
};

// Combines the real, in-depth case studies with the placeholder engagements
// into one list for the Work grid — featured studies sort first.
export const getAllWorkItems = (): WorkItem[] => {
  const featured: WorkItem[] = caseStudies.map((c) => ({
    slug: c.slug,
    title: c.title,
    meta: c.meta,
    category: c.category,
    featured: true,
  }));
  const placeholders: WorkItem[] = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    meta: p.meta,
    category: p.category,
    featured: false,
  }));
  return [...featured, ...placeholders];
};

export const getNextWorkItem = (slug: string): WorkItem => {
  const items = getAllWorkItems();
  const index = items.findIndex((item) => item.slug === slug);
  return items[(index + 1) % items.length];
};
