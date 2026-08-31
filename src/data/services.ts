export type Service = {
  index: string;
  title: string;
  price: string;
  tags: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "UX/UI Design Consulting",
    price: "Starting at ₹75,000 / project",
    tags: ["UX Audit", "Journey Mapping", "Wireframes", "Prototypes", "UI Design", "Dev Handoff"],
  },
  {
    index: "02",
    title: "Design System Creation",
    price: "Starting at ₹1,50,000 / project",
    tags: ["Design Tokens", "Component Libraries", "Documentation", "Governance", "Figma Libraries"],
  },
  {
    index: "03",
    title: "SaaS Product Design",
    price: "Starting at ₹2,50,000 / project",
    tags: ["Product Strategy", "User Research", "UX Design", "Dashboards", "Design Systems", "Scaling"],
  },
  {
    index: "04",
    title: "Mobile App Design",
    price: "Starting at ₹1,25,000 / project",
    tags: ["User Flows", "UX Research", "UI Design", "Prototyping", "Design QA"],
  },
  {
    index: "05",
    title: "Documentary Production",
    price: "Starting at ₹50,000 / project",
    tags: ["Story Development", "Script Writing", "Motion Graphics", "Editing", "Sound Design"],
  },
  {
    index: "06",
    title: "Social Media Video",
    price: "Starting at ₹5,000 / video",
    tags: ["Reels", "Motion Graphics", "Subtitles", "Visual Storytelling", "Short-form Editing"],
  },
];
