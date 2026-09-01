// Central place for identity, bio, contact and social details.
// Edit these values any time — every component reads from here.

export const site = {
  name: "Magesh K Palani",
  initials: "MP",
  title: "Senior UX/UI Product Designer & Visual Storyteller",
  location: "Bengaluru, India",
  locationSuffix: "Working globally",
  timezone: "Asia/Kolkata",
  availability: "Available for consulting & select projects — 2026",
  isAvailable: true,
  email: "8282design@gmail.com",
  phone: "+91 99014 00885",
  yearsExperience: 18,
  metaDescription:
    "Magesh K Palani is a Senior UX/UI Product Designer, Design Strategist and Visual Storyteller with 18+ years of experience creating digital products and design systems for global organizations.",

  heroHeadline: "Designing products, systems & stories that create meaningful human experiences.",
  heroSubline:
    "18+ years helping organizations transform complex ideas into intuitive digital products, scalable design systems, and engaging visual experiences.",
  heroPrimaryCta: "Book a discovery call",
  heroSecondaryCta: "View my work",

  trustedTags: ["Ex IBM", "Ex Dell", "Senior Product Owner", "UX Consultant"],

  aboutEyebrow: "Meet Magesh",
  aboutParagraphs: [
    "A Senior UX/UI Product Designer, Design Strategist, and Visual Storyteller with more than 18 years of experience creating digital experiences for global organizations.",
    "My journey began with graphic design and front-end development and evolved into a deep specialization in user experience, product strategy, information architecture, and human-centered design.",
    "Having worked with industry leaders including IBM and Dell, I bring enterprise-grade design thinking, systems thinking, and strategic problem-solving to every project.",
    "Today, alongside my role as Senior Product Owner at Art of Living, I partner with startups, NGOs, SaaS companies, and enterprises to design products, build design systems, and craft meaningful digital experiences.",
  ],
  aboutBadge: "Psychology & neuroscience-informed practice",
  aboutCta: "Download resume",

  contactEyebrow: "Let's Collaborate",
  contactHeadline: "Let's build something meaningful together.",
  contactSubline:
    "Whether you're launching a product, improving an existing experience, or creating a design system — I'd love to collaborate.",
} as const;

export const stats = [
  { value: 18, suffix: "+", label: "Years of experience" },
  { value: 8.4, suffix: "", label: "Years leading design at IBM" },
  { value: 30, suffix: "+", label: "Products & case studies" },
  { value: 6, suffix: "", label: "Disciplines, one practice" },
] as const;

export const contactChannels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  {
    label: "LinkedIn",
    value: "/in/magesh-palani-51836727",
    href: "https://www.linkedin.com/in/magesh-palani-51836727/",
  },
  { label: "YouTube", value: "@mageshpalani", href: "https://youtube.com/@mageshpalani" },
] as const;

export const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;
