export type Testimonial = {
  quote: string;
  initials: string;
  role: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Magesh reframed our entire product around the user. The design system he built still anchors every release two years later.",
    initials: "SF",
    role: "Startup Founder",
    context: "Seed-stage SaaS",
  },
  {
    quote:
      "Rare blend of strategic thinking and hands-on craft. He turned ambiguous requirements into a roadmap the whole team could rally behind.",
    initials: "PM",
    role: "Product Manager",
    context: "Enterprise platform",
  },
  {
    quote:
      "Our documentary moved people to act. Magesh understood the story before we did, and shaped every frame around it.",
    initials: "NL",
    role: "NGO Leader",
    context: "Social impact",
  },
  {
    quote:
      "Enterprise-grade rigor without the bureaucracy. Stakeholders aligned faster because the work spoke for itself.",
    initials: "ES",
    role: "Enterprise Stakeholder",
    context: "Global organization",
  },
];
