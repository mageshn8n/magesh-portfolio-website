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
];

export type Project = {
  id: number;
  slug: string;
  title: string;
  meta: string;
  category: string; // category slug
};

const raw: Record<string, [string, string][]> = {};

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
