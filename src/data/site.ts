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
    "I'm a Product Design leader focused on turning complex problems into simple, meaningful, and scalable product experiences.",
    "My work sits at the intersection of product strategy, customer experience, technology, and business outcomes. I partner closely with product, engineering, research, and business teams to identify the right problems, define opportunities, and create experiences that deliver measurable impact.",
    "As a design leader, I care as much about building high-performing teams and strong design systems as I do about the quality of the products we create. I help teams establish a clear design vision, strengthen design processes, develop talent, and create a culture where great design can scale.",
    "I bring a systems-thinking approach to product design—from discovery and strategy through interaction design, design systems, experimentation, and delivery. I'm particularly interested in how emerging technologies and AI are changing the way we design, build, and experience digital products.",
  ],
  aboutFocusAreas: [
    {
      title: "Product Strategy",
      description: "Connecting customer needs, business goals, and product opportunities.",
    },
    {
      title: "Design Leadership",
      description: "Building, mentoring, and enabling high-performing product design teams.",
    },
    {
      title: "Product Experience",
      description: "Creating intuitive, accessible, and cohesive experiences across complex products.",
    },
    {
      title: "Design Systems",
      description: "Establishing scalable foundations that improve consistency, quality, and speed.",
    },
    {
      title: "AI & Emerging Technology",
      description: "Exploring new interaction models and opportunities created by AI.",
    },
    {
      title: "Business Impact",
      description:
        "Connecting design decisions to measurable outcomes such as adoption, conversion, engagement, and retention.",
    },
  ],
  aboutClosing:
    "I believe great product design is not simply about making products easier to use or more beautiful. It is about solving the right problems, creating meaningful value for people, and helping businesses move forward.",
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
