export type ExperienceEntry = {
  company: string;
  duration: string;
  role: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export const experience: ExperienceEntry[] = [
  {
    company: "Art of Living",
    duration: "Present",
    role: "Senior Product Owner",
    description:
      "Leading product strategy, user experience, stakeholder management, and digital transformation initiatives across the organization.",
    tags: ["Product Strategy", "UX", "Stakeholders", "Transformation"],
    current: true,
  },
  {
    company: "IBM",
    duration: "8.4 Years",
    role: "Design Lead",
    description:
      "Led design across enterprise products — from cloud platforms to cognitive software — owning UX strategy and design leadership.",
    tags: ["IBM Cloud", "Cognitive Software Advisor", "Enterprise Apps", "Design Leadership", "UX Strategy"],
  },
  {
    company: "IBM",
    duration: "",
    role: "Senior Information Architect",
    description:
      "Created information architecture, user flows, wireframes, and large-scale enterprise experiences.",
    tags: ["Information Architecture", "User Flows", "Wireframing"],
  },
  {
    company: "IBM",
    duration: "",
    role: "Corporate Webmaster",
    description: "Managed accessibility, usability, and global website experiences at enterprise scale.",
    tags: ["Accessibility", "Usability", "Global Web"],
  },
  {
    company: "Dell",
    duration: "",
    role: "Web Design Advisor",
    description: "Delivered rich media experiences and global digital campaigns for product launches.",
    tags: ["Dell Gaming", "Product Launches", "Rich Media", "Global Campaigns"],
  },
  {
    company: "Early career",
    duration: "",
    role: "Front-End Designer & Developer",
    description: "Developed websites, portals, and web applications using HTML, CSS, and emerging web technologies.",
    tags: ["HTML", "CSS", "Web Apps", "Portals"],
  },
];
