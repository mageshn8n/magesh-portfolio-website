// Real, detailed case studies — content extracted from the original write-ups,
// re-presented in the site's own visual language. Add a new entry here any
// time a fresh case study is ready; it automatically appears in the Work grid.

export type Stat = { value: string; label: string };
export type NamedBlock = { title: string; description: string };

// A single nested case study within a larger design-system case study — either
// a metric-driven card (EMS-style) or a challenge/decision/outcome triad
// (Whispering Infinity DS-style). Fields are optional so one shape covers both.
export type SubCaseStudy = {
  title: string;
  meta?: string;
  description?: string;
  challenge?: string;
  decision?: string;
  outcome?: string;
  metrics?: Stat[];
  tags?: string[];
};

export type FeaturedCaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  category: string; // matches a slug in projects.ts categories
  meta: string; // short line shown on the grid card
  role: string;
  duration: string;
  client: string;
  tags: string[];
  highlights: Stat[];
  overview: string;
  challenge: string;
  challengeList?: string[];
  approach: string;
  process?: NamedBlock[];
  features?: NamedBlock[];
  featuresLabel?: string;
  subCaseStudies?: SubCaseStudy[];
  subCaseStudiesLabel?: string;
  outcome: string;
  outcomeMetrics?: Stat[];
  learnings?: NamedBlock[];
  quote?: { text: string; attribution: string };
};

export const caseStudies: FeaturedCaseStudy[] = [
  {
    slug: "quality-management-process-library",
    title: "Quality Management & Process Library",
    tagline:
      "Redesigning an enterprise portal with 1,000+ pages into an intuitive, well-structured system aligned with IBM Northstar.",
    category: "design-systems",
    meta: "Enterprise portal redesign · IBM Northstar · 1,000+ pages restructured",
    role: "Lead Designer & Project Lead",
    duration: "6-week design sprint",
    client: "Global Quality Management, IBM GBS",
    tags: ["Information Architecture", "Design Systems", "Enterprise UX", "IBM Northstar"],
    highlights: [
      { value: "1,000+", label: "Existing static pages" },
      { value: "4", label: "Distinct user audiences" },
      { value: "6", label: "Week design sprint" },
      { value: "2", label: "Team members directed" },
    ],
    overview:
      "The On-Demand Process Asset Library (OPAL) is a web portal covering the processes an organization follows to meet its quality policy and customer requirements. In its existing form it had grown into a sprawling library of static HTML pages with little underlying structure — the task was to rethink the information architecture and visual design so people could find what they needed without wading through a thousand pages to get there.",
    challenge:
      "The portal was exhaustive — 1,000+ pages of documentation published mostly as static HTML — and the Global Quality Management team needed the information to feel less overwhelming, while the whole experience aligned with IBM Northstar, the design system built on IBM's design principles.",
    challengeList: [
      "How to link related content together across the portal",
      "How to expose content in different areas of the site",
      "The relative priority of different content types and features",
      "Which concepts serve as central \"home\" areas of the portal",
      "Which concepts provide context for viewing other information",
    ],
    approach:
      "As the sole UX designer, I directed a small, focused team — one UI designer and one information architect — through research, structure and visual design, while also owning end-to-end project management: scoping the sprint, coordinating stakeholder input, and keeping research, design and delivery moving in step.",
    process: [
      { title: "Week 1 — Discover", description: "Audit the existing portal and its content." },
      { title: "Week 2–3 — Define", description: "Synthesize research and frame the core problem." },
      { title: "Week 4 — Empathize", description: "Build personas and map the user journey for four audiences." },
      { title: "Week 5 — Ideate", description: "Develop scenario-based user flows per audience." },
      { title: "Week 6 — Design", description: "Produce high-fidelity desktop and mobile mockups." },
    ],
    featuresLabel: "What the redesign delivered",
    features: [
      { title: "Simplified navigation", description: "Intuitive navigation for both desktop and mobile, replacing the sprawling static page structure." },
      { title: "Stronger information hierarchy", description: "A consistent structure that reduces the cognitive load of processing information." },
      { title: "A consistent design language", description: "Reusable content types — calls to action, blurbs and more — establish a shared visual vocabulary." },
      { title: "Improved visuals & infographics", description: "Clearer imagery and infographics support comprehension across dense process content." },
      { title: "Accessibility & standards aligned", description: "The redesign aligns with IBM's accessibility guidelines and broader web standards." },
      { title: "Segmented, searchable content", description: "Information split into clear categories, with intuitive navigation and search to jump straight to what's needed." },
    ],
    outcome:
      "Within two quarters of rollout, the redesign gave four very different audiences — executives, partner/sales, practitioners and quality leaders — a portal built around a minimalist top navigator, strong visual hierarchy, generous white space, and a color scheme consistent with GBS Quality and Methods styling guidelines.",
    quote: {
      text: "The portal is exhaustive — 1,000+ pages of documentation published mostly as static HTML. The challenge is to make the information less overwhelming by reducing the number of pages and the amount of information on each page, to give people a seamless experience.",
      attribution: "Global Quality Management Team",
    },
  },
  {
    slug: "mystic-bamboo-digital-gurukul",
    title: "The Mystic Bamboo",
    tagline:
      "Building a digital gurukul for Hindustani Bansuri — from market research and a Business Model Canvas to 80+ produced videos and 918 paying subscriptions in year one.",
    category: "web-applications",
    meta: "E-learning CMS portal · Business design · 918 subscriptions in year one",
    role: "Creative Director & UX Lead",
    duration: "October 2018 – Present",
    client: "Himanshu Nanda / The Mystic Bamboo",
    tags: ["Strategy", "Web Design & Development", "Video Production", "Digital Marketing"],
    highlights: [
      { value: "5", label: "Disciplines spanned" },
      { value: "80+", label: "Instructional videos produced" },
      { value: "24+", label: "Learners surveyed" },
      { value: "918", label: "Year-one subscriptions" },
    ],
    overview:
      "Himanshu Nanda is an accomplished Hindustani classical flutist and Director for Music at Chinmaya Naada Bindu, and one of the prominent disciples of Pandit Hariprasad Chaurasia. Like most classical music instruction in India, his teaching lived entirely offline — bound by geography, batch size and travel. The objective was to build The Mystic Bamboo: an online platform giving bansuri enthusiasts anywhere in the world access to a genuinely comprehensive, level-by-level curriculum.",
    challenge:
      "Translating two decades of Guru–Shishya pedagogy into a structured, self-paced online course — without losing the rigor of the tradition — on a platform that had to run on any browser, on any device.",
    approach:
      "Before a single screen was designed, the team used a Business Model Canvas to pressure-test the whole product cycle, then a mental-model exercise to sequence the curriculum from basic to advanced. Research began with a survey of more than 24 flute enthusiasts across age groups, followed by three whiteboard workshops to pressure-test possible solutions — pointing to a real but under-served audience of an estimated 50,000–60,000 Hindustani bansuri learners worldwide.",
    process: [
      { title: "Discover", description: "Surveys, interviews & whiteboard workshops with learners." },
      { title: "Strategize", description: "Business Model Canvas + curriculum mental model." },
      { title: "Design", description: "Wireframe sketches through to high-fidelity mockups." },
      { title: "Produce", description: "80+ instructional videos shot & edited in-house." },
      { title: "Build", description: "Cross-browser front end + e-learning CMS." },
      { title: "Grow", description: "Organic social, workshops & subscription growth." },
    ],
    featuresLabel: "Business model highlights",
    features: [
      { title: "Value proposition", description: "The most detailed, structured, level-by-level online Hindustani bansuri course — bringing Guru–Shishya rigor to a self-paced, browser-based format." },
      { title: "Customer segments", description: "Beginner-to-advanced bansuri enthusiasts, age 19–45, worldwide." },
      { title: "Channels", description: "themysticbamboo.com, YouTube, Facebook, and word-of-mouth through the classical music community." },
      { title: "Revenue streams", description: "Tiered course subscriptions — Introductory, Beginner, Intermediate, Advanced, Bundle — plus in-person workshops." },
    ],
    outcome:
      "The platform reached 918 subscriptions against a 1,000-subscription goal for year one — roughly three new learners a day, reached organically with no paid social promotion, with two months still to go. In-person workshops ran in Nasik, Gujarat and Kerala, with Guwahati announced, generating offline momentum alongside the platform.",
    outcomeMetrics: [
      { value: "918", label: "Of a 1,000-subscription goal" },
      { value: "4", label: "Cities workshopped (incl. announced)" },
      { value: "80+", label: "Videos produced" },
    ],
  },
  {
    slug: "namma-transit-service-design",
    title: "Namma Transit",
    tagline:
      "A service design exploration into why Bengaluru's public transport loses riders to private vehicles — and a concept for unified commuting across bus, metro and last-mile feeders.",
    category: "mobile-apps",
    meta: "Service design concept · Public transportation · Bengaluru",
    role: "Service Design (self-directed research)",
    duration: "Concept exploration",
    client: "Speculative / self-initiated project",
    tags: ["Service Design", "Public Transportation", "Journey Mapping", "Concept App"],
    highlights: [
      { value: "1.2 Cr", label: "Bengaluru population" },
      { value: "6,650", label: "BMTC buses citywide" },
      { value: "28 L", label: "People served by public transport" },
      { value: "560%", label: "Vehicle ownership growth in 21 years" },
    ],
    overview:
      "Vehicle ownership in Bengaluru grew 560% in 21 years while public transit capacity barely moved — leaving only 28 lakh of the city's 1.2 crore residents realistically served by public transport today. This project explores why, and what a unified, end-to-end commuting experience across bus, metro and last-mile feeders could look like.",
    challenge:
      "Bengalureans avoid public transport for concrete, recurring reasons: no end-to-end service for every citizen, average bus wait times exceeding 30 minutes, confusing routes and bus numbers for newcomers, overcrowding during office hours, service updates that rarely reach riders, and language barriers for non-Kannada speakers.",
    challengeList: [
      "No end-to-end service for every citizen",
      "Average bus wait time exceeds 30 minutes",
      "Confusing routes and bus numbers, especially for newcomers",
      "Overcrowding during office hours on both bus and metro",
      "Service updates rarely reach riders through any channel",
      "Language barriers for non-Kannada speaking riders",
    ],
    approach:
      "A stakeholder map surfaced who holds power over the system versus who actually depends on it, while transport emerged as the single largest source of the city's air pollution at 26%. Two personas anchored the design: the Frequent Traveller who knows the system's quirks, and the Non-Frequent Traveller who needs it to explain itself.",
    process: [
      { title: "01 · Research", description: "Secondary research into population, BMTC and Namma Metro service data." },
      { title: "02 · Discovery", description: "Mapped why riders avoid public transport, through journey maps for two rider types." },
      { title: "03 · Problem framing", description: "Stakeholder power/interest mapping and pollution-source analysis." },
      { title: "04 · Solution", description: "Persona-led design across primary modes and last-mile feeders." },
      { title: "05 · Concept", description: "Namma Transit — a unified commute companion app." },
      { title: "06 · Impact", description: "Opportunities mapped for commuters and for system efficiency." },
    ],
    featuresLabel: "The concept app",
    features: [
      { title: "Plan a trip", description: "Search once, see every mode — bus, metro and feeder — in one result." },
      { title: "Compare routes", description: "Fare, time and crowd level shown side by side across route options." },
      { title: "Live tracking", description: "Real ETA and crowd level, not a timetable guess." },
      { title: "One tap to pay", description: "A single cardless smart card, valid on every mode from bus to feeder." },
    ],
    outcome:
      "The exploration surfaced two aligned opportunity sets: for commuters — efficiency, clarity on routes and timings, safety, near door-to-door service, and a feedback loop that's acted on; and for system efficiency — one single authority, coordination between services, demand-based supply, and adaptability to changing demand.",
    quote: {
      text: "Seamless connectivity, choice of transport mode, and integrated pricing are the mechanisms through which we create equality in our public spaces.",
      attribution: "Design rationale, Namma Transit concept",
    },
  },
  {
    slug: "jamie-cognitive-assistant",
    title: "Jamie",
    tagline:
      "A cognitive assistant that helps IBM Spectrum Protect customers find product & license answers in seconds.",
    category: "saas-products",
    meta: "Conversational & cognitive UX · IBM Spectrum Protect",
    role: "UX / Conversational Design",
    duration: "Concept-to-prototype",
    client: "IBM Spectrum Protect",
    tags: ["Conversational UX", "Cognitive Design", "Prototyping"],
    highlights: [
      { value: "3", label: "Interface directions prototyped" },
      { value: "4", label: "Unmet user goals addressed" },
      { value: "1", label: "Consolidated final direction" },
    ],
    overview:
      "A licensing question that used to take a support ticket and a long phone call now takes one sentence. The team designed and prototyped three interface directions for \"Jamie,\" a conversational software advisor, then combined the strongest parts of each into a single, repeatable experience.",
    challenge:
      "The whole project anchored on one representative user — John Doe — a customer who needs IBM Spectrum Protect product and license information right now, without becoming an expert in the product first: he wants speed over completeness, guided paths rather than a blank chat box, discoverability of things he didn't know to ask for, and continuity to return to information later without repeating every step.",
    approach:
      "Rather than commit early, the team prototyped three distinct interaction models and reviewed each against John's goals — flagging exactly where a pattern broke down before deciding what to keep.",
    process: [
      { title: "1 · The Jamie Interface", description: "A conversational front door — personalized greeting, voice-or-text input, and starter questions instead of a blank page. Bubble-style suggestions read as decorative rather than tappable, and were redesigned as flat, high-contrast chips." },
      { title: "2 · The Dynamic Interface", description: "Product, version and license shown as a map, with Spectrum Protect at the center. The radial \"bubble\" layout read as static on a touchscreen, so the same mental model shipped as tappable cards and a flattened license list instead." },
      { title: "3 · The Menu Interface", description: "The final direction: a structured, always-visible menu on one side and Jamie's conversational panel on the other, so John can ask a question or simply browse and land in the same place either way." },
    ],
    featuresLabel: "What changed, round by round",
    features: [
      { title: "Bubble-style suggestions → flat suggestion chips", description: "High-contrast, clearly interactive starter questions replaced decorative bubbles." },
      { title: "No path back to the start → persistent menu access", description: "A menu control is always reachable, on every screen." },
      { title: "Radial bubble map → card-based product picker", description: "Kept the \"product at the center\" mental model, made it tappable." },
      { title: "Chat-only window → integrated menu + chat view", description: "Structured browsing sits beside the conversation, not instead of it." },
    ],
    outcome:
      "The final design answered all four of John's goals: fast by default with starter questions and search, never a dead end since the menu is always one tap away, surfacing unexpected related information, and repeatable because the structure is a stable menu rather than a one-off conversation thread — with voice or text input and personal settings adapting to him.",
    quote: {
      text: "The best answer to 'chat or menu?' was both. Conversation handles the question John already knows how to ask; the menu handles everything he doesn't know exists yet.",
      attribution: "Design rationale, Jamie cognitive assistant project",
    },
  },
  {
    slug: "sahaj-ttp-review-portal",
    title: "Sahaj TTP Review Portal",
    tagline:
      "A multi-role review portal that took Sahaj's Teacher Training Program from scattered emails to one accountable, auditable workflow.",
    category: "web-applications",
    meta: "Workflow engineering · 5 stakeholder roles · Multi-country",
    role: "UX Design & Workflow Engineering",
    duration: "Concept-to-build",
    client: "Sahaj TTP Programme",
    tags: ["Workflow Design", "Role-Based Access", "Audit Logging"],
    highlights: [
      { value: "5", label: "Coordinated reviewer roles" },
      { value: "100%", label: "Decisions carry logged remarks" },
      { value: "2", label: "Federated login systems unified" },
    ],
    overview:
      "Sahaj's Teacher Training Program is reviewed by five stakeholder groups spread across countries — teachers who recommend applicants, evaluators who assess audio/video submissions, country coordinators, and two India-based desks who finalize every decision. The portal turns that chain of hand-offs into a structured, role-based workflow.",
    challenge:
      "Coordinating the review by email meant no single reviewer could see what the others had said, remarks were easy to lose, rejections had no clear record of why, and there was no way to track how many applications were stuck at which stage.",
    approach:
      "Rather than a one-size-fits-all approval tool, each stakeholder's actual responsibilities were mapped into a dedicated workspace, letting a decision at one stage automatically carry its remarks forward to the next. The Evaluator step is optional — invoked only when a Recommending Teacher needs a second opinion on a recording — while every other stage is sequential and mandatory.",
    process: [
      { title: "1 · Recommending Teacher", description: "First eligibility review." },
      { title: "+ Evaluator (optional)", description: "Reviews Guru Pooja audio/video recordings when a second opinion is needed." },
      { title: "2 · Country Coordinator", description: "Consolidates local review." },
      { title: "3 · India Sahaj Desk", description: "Central review." },
      { title: "4 · India TTP Desk", description: "Final decision, with the authority to reverse an earlier rejection." },
    ],
    featuresLabel: "Key capabilities",
    features: [
      { title: "Federated login by country", description: "Teachers and coordinators sign in with Harmony credentials; India-based desks use India CRM." },
      { title: "Sequential approve / reject", description: "Every stage requires a decision plus mandatory remarks, with rejections routed straight to the India TTP Desk." },
      { title: "Audio/video evaluation", description: "Evaluators play back Guru Pooja recordings against a visible rubric, with annotated feedback." },
      { title: "Consolidated remarks trail", description: "Every downstream reviewer sees the full history of prior feedback in one structured view." },
      { title: "TTP Desk override", description: "The final desk can reopen and reverse an earlier rejection without losing the original record." },
      { title: "Dashboards & audit log", description: "Each role gets a live count of reviewed, pending and forwarded applications; every action is permanently logged." },
    ],
    outcome:
      "The portal replaced an email-based hand-off with a single system of record. Five previously siloed reviewer groups now share one workflow and one audit trail, every decision carries mandatory attributable remarks, and role-specific dashboards give each stakeholder group visibility into their own queue without exposing others' data.",
  },
  {
    slug: "jan-seva-constituency-management",
    title: "Jan Seva",
    tagline:
      "A role-based grievance management platform turning every paper petition handed to a Minister, MLA or MP's office into a trackable digital case.",
    category: "mobile-apps",
    meta: "Smart Constituency Management System · Flutter · 8 user roles",
    role: "Product definition, UX design & solution architecture (concept)",
    duration: "8 weeks, concept through clickable prototype",
    client: "Concept case study",
    tags: ["Flutter", "Service Design", "Solution Architecture"],
    highlights: [
      { value: "8", label: "User roles supported" },
      { value: "20+", label: "Grievance categories" },
      { value: "14", label: "Ticket status states" },
      { value: "3", label: "App targets — Citizen, Field, Admin/Web" },
    ],
    overview:
      "Every day, hundreds of citizens walk into a constituency office with a problem and a paper file — drinking water, electricity, road repair, pensions, land disputes, scholarships and more, all living on paper today. Jan Seva turns every one of those petitions into a single digital record that each of eight roles sees a permission-scoped slice of.",
    challenge:
      "Paper petitions have no backup and no version history; citizens have no way to check status short of another office visit; nothing flags a case sitting untouched with a department for weeks; and the MLA's office can't see patterns across villages, departments or issues.",
    challengeList: [
      "Files get lost — no backup, no version history",
      "Zero visibility for citizens beyond another office visit",
      "No accountability for cases stuck with a department",
      "No data or dashboard to see patterns across the constituency",
    ],
    approach:
      "The existing manual process — walk-in, verbal complaint, paper file, hand-carried folder — became the backbone of the digital ticket lifecycle. Nothing was invented; the paper steps were digitized one at a time, informed by six personas spanning citizens, staff, field officers and administrators.",
    process: [
      { title: "1 · Citizen walks in", description: "Describes the issue in person." },
      { title: "2 · Ticket created", description: "Docs scanned, photo, voice note, GPS tag captured." },
      { title: "3 · Secretary verifies", description: "Category and priority confirmed." },
      { title: "4 · MLA reviews", description: "Assigns the ticket to a department." },
      { title: "5 · Officer resolves", description: "Site photos and progress notes logged." },
      { title: "6 · Citizen notified", description: "SMS / WhatsApp updates at every step." },
      { title: "7 · Feedback & closure", description: "Citizen confirms and the case closes." },
    ],
    featuresLabel: "Six connected capabilities",
    features: [
      { title: "Ticketing core", description: "Unique ticket ID and QR code, priority and SLA rules, auto department routing, full audit trail." },
      { title: "Rich evidence capture", description: "Photo, video and voice notes, digital signature, GPS geo-tagging, offline capture with background sync." },
      { title: "Multi-channel alerts", description: "SMS, WhatsApp, push and email updates triggered on every status change." },
      { title: "AI-assisted triage", description: "OCR on scanned letters, auto department recommendation, duplicate-complaint detection, auto-translation." },
      { title: "Role-based dashboards", description: "MLA, Secretary, Officer and Citizen views, ageing and SLA breach reports, officer performance scoring." },
      { title: "Security & access", description: "Role-based access across 8+ roles, OTP and biometric login, encrypted storage, full audit logging." },
    ],
    outcome:
      "Built as a self-directed concept — not yet deployed — the system was designed around four goals: 100% case traceability from the day a complaint is raised, status checks without a repeat office visit, automatic ageing and SLA visibility for stuck cases, and a mandatory citizen feedback step before any case closes.",
    learnings: [
      { title: "Permissions before pixels", description: "With 8+ roles sharing one case record, the access matrix had to be locked down before a single screen was drawn." },
      { title: "Offline isn't a checkbox", description: "Field officers needed offline-first capture with background sync, not a \"works offline\" afterthought." },
      { title: "Speak the office's language", description: "Status labels like \"Work In Progress\" came directly from how constituency staff already describe cases." },
      { title: "Design for low bandwidth first", description: "AI features stayed assistive, not blocking — the core flow works even when an AI call fails or times out." },
    ],
  },
  {
    slug: "scope-plus-heuristic-usability-review",
    title: "SCOPE Plus",
    tagline:
      "Untangling two merged enterprise tools into one usable platform through an 8-point heuristic evaluation.",
    category: "web-applications",
    meta: "Heuristic usability review · IT asset management · 20+ issues found",
    role: "UX Research & Interaction Design",
    duration: "—",
    client: "Enterprise IT infrastructure & asset-management tool",
    tags: ["Heuristic Evaluation", "Usability Research", "Interaction Design"],
    highlights: [
      { value: "2", label: "Legacy tools merged" },
      { value: "8", label: "Heuristic categories audited" },
      { value: "20+", label: "Usability issues identified" },
      { value: "~11", label: "Estimated fix effort, in days" },
    ],
    overview:
      "SCOPE Plus is a web application formed by merging two long-running internal tools for tracking client IT infrastructure: Bluebench, a legacy desktop app, and SCOPE, a browser-based tool — both collecting the same kind of data for different teams, in different shapes. With the merged platform nearing completion, it needed a usability pass before rollout: proof that combining two systems had produced something better than either alone.",
    challenge:
      "The same patterns of friction kept showing up across both legacy tools and the merged interface: users struggled to find functionality, features were buried behind multiple screens, similar actions were labeled differently, icons lacked a consistent visual language, navigation grouping was unclear, and excess white space forced unnecessary scrolling.",
    challengeList: [
      "Users struggle to find the functionality or options they need",
      "Many features are hidden, or buried behind multiple screens to reach",
      "Some functions are duplicated, while similar actions are labeled differently",
      "Icons and buttons don't share a consistent visual language",
      "Navigation menu content and grouping is unclear",
      "Excess white space forces unnecessary scrolling on every page",
    ],
    approach:
      "Rather than testing with end users first, the interface was audited by hand against eight established usability heuristics — Navigation, Search, Control & Feedback, Forms, Errors, Context & Text, Performance, and Features & Functionality — to surface structural issues quickly and cheaply, before they shipped. Each issue was logged with a specific recommendation and, where relevant, a redesigned screen, so engineering could evaluate exact effort rather than abstract feedback.",
    featuresLabel: "What the audit found — and fixed",
    features: [
      { title: "A menu that hid the destination behind the door", description: "Import, Export, Reporting and Administration each opened multi-level dropdowns. Fix: each major function got its own dedicated page instead of a nested dropdown." },
      { title: "The breadcrumb followed the title instead of leading it", description: "Breadcrumb order was inconsistent across the app. Fix: standardized breadcrumb-first, title-second everywhere, with a cleaner icon-plus-label top nav." },
      { title: "Icons that looked the same but meant different things", description: "Icons varied screen to screen with no labels, and links leaned on internal jargon. Fix: every icon paired with a short, consistent label; jargon replaced with plain terms like \"Filter.\"" },
      { title: "Three different systems, all pretending to be search", description: "Search, the main menu and \"List View\" behaved like three overlapping systems. Fix: consolidated into a single contextual panel that responds to the filters actually set." },
      { title: "Actions that happened silently", description: "No success or failure message appeared after actions like importing a file. Fix: explicit feedback naming what changed and how many records were affected." },
      { title: "Long, undifferentiated forms with no map", description: "Multi-step processes had no visible progress or guidance. Fix: staged forms, minimum required fields justified, right input types, inline help." },
    ],
    outcome:
      "The heuristic review turned scattered user complaints into a structured, prioritized set of fixes — each backed by a specific screen, a specific recommendation, and a specific cost. Instead of asking leadership to trust that a redesign was worth it, the roadmap showed exactly how much it would take: about 11 days to bring every screen in line with the new pattern language, with only the List View requiring a true rebuild.",
    outcomeMetrics: [
      { value: "20+", label: "Issues identified" },
      { value: "8", label: "Heuristics audited" },
      { value: "7", label: "Screens redesigned" },
      { value: "~11d", label: "Estimated build effort" },
    ],
  },
];

caseStudies.push({
  slug: "whispering-infinity-teacher-app",
  title: "Whispering Infinity",
  tagline:
    "A teacher's companion for course resources, built to work offline — from sign-in to a finished playlist, across iOS, Android and Microsoft Store.",
  category: "mobile-apps",
  meta: "Cross-platform mobile app · Offline-first · Art of Living",
  role: "Mobile Product & UX Design",
  duration: "Planning & build phase",
  client: "Art of Living",
  tags: ["Cross-Platform", "Offline-First", "React Native / Flutter"],
  highlights: [
    { value: "3", label: "Target platforms from one codebase" },
    { value: "6.0+", label: "Minimum supported Android version" },
    { value: "3 hrs", label: "Offline cache window" },
    { value: "<3s", label: "Target app startup time" },
  ],
  overview:
    "Art of Living teachers around the world already had access to official course audio, but no single mobile experience to reach it. Materials sat behind country-specific logins tied to the organization's existing Harmony system, and many teachers needed to review sessions in places without a reliable connection — while travelling, at retreat centers, or between classes.",
  challenge:
    "The brief called for one codebase covering iOS, Android and Microsoft Store, authentication that could flex per country — India's teachers sign in with a username rather than an email — and an offline model teachers could rely on rather than work around.",
  approach:
    "Rather than branching the whole flow per country, the design isolates each region's differences to the sign-in step and keeps everything downstream — course groups, playback, playlists — identical everywhere. Authentication and resource retrieval run through Art of Living's existing Harmony login system, with native modules bridging in for Android location services and file-system access, built in three phases from core access to a fully offline library.",
  process: [
    { title: "1 · Core functionality", description: "Authentication, course group listing, and basic media file listing and playback." },
    { title: "2 · Enhanced features", description: "Download management, offline access, and basic playlist functionality." },
    { title: "3 · Advanced features", description: "Advanced playlist management, performance optimization, and cross-platform polish." },
  ],
  featuresLabel: "What the app needed to get right",
  features: [
    { title: "Reach every teacher, one codebase", description: "iOS, Android and Microsoft Store from a shared React Native / Flutter foundation, with native modules where the platform requires it." },
    { title: "Make offline the default", description: "Downloaded course resources stay usable without a connection, with a clear cache model and an offline status that's always visible." },
    { title: "Bend to each country's rules", description: "From India's username-based sign-in to per-country help-desk contacts, without turning every other market into a special case." },
  ],
  outcome:
    "The plan commits to four screens carrying a teacher from sign-in to a finished playlist: country-aware sign-in, course groups organized by resource, a background-capable media player, and playlists with a clear offline badge. Figures are drawn directly from the technical requirements and QA benchmarks — the app is in the planning and build phase, so these describe scope and targets rather than production analytics.",
  learnings: [
    { title: "Isolate the difference, not the flow", description: "India's username-based sign-in stays contained to one step rather than branching the whole app per country." },
    { title: "Design tokens and cache together", description: "Preventing simultaneous logins while keeping downloads usable through a 3-hour offline window meant designing session and cache logic as one system, not two modes bolted together." },
  ],
  quote: {
    text: "Offline shouldn't feel like a fallback — it should feel like the default the app was actually designed for.",
    attribution: "Design principle guiding the offline-first architecture",
  },
});

caseStudies.push({
  slug: "engagement-management-system",
  title: "Engagement Management System",
  tagline:
    "An internal cost-visibility platform that turned informal cross-department work into tracked, billable engagements — recovering $543K+ across four departments.",
  category: "design-systems",
  meta: "Enterprise design system · Cost Center Services Platform · $543K+ recovered",
  role: "Product Design & Design Systems",
  duration: "Ongoing platform",
  client: "Cost Center Services Team",
  tags: ["Design Systems", "Enterprise UX", "Data Visualization", "Governance"],
  highlights: [
    { value: "5", label: "Documented case studies" },
    { value: "$543K+", label: "Value demonstrated" },
    { value: "4 / 4", label: "Departments covered" },
    { value: "74%", label: "Avg. bench reduction" },
  ],
  overview:
    "The Engagement Management System (EMS) gives cost center admins, department requesters and engagement managers one system for tracking cross-department work — resourcing, time, billing and budget — that used to live in spreadsheets and informal agreements. I designed both the product and the token-based design system underneath it, then tracked its adoption across four departments as a set of internal case studies.",
  challenge:
    "Cross-department work was tracked informally or not at all — shadow billing meant real costs went unrecorded, bench time between engagements was invisible, and departments had no audit trail for internal billing. Four departments needed the same system to fit four very different workflows without fragmenting the interface.",
  approach:
    "I built the interface on a shared design system first — one set of tokens, components and department-color conventions — so every module (Engagements, Resources, Skills & Talent Pool, Time Tracking, Invoicing) inherited the same interaction and visual language by default, rather than each team improvising its own.",
  featuresLabel: "The design system",
  features: [
    {
      title: "Token-based color system",
      description:
        "Primary, semantic (success / warning / error) and department-specific color scales, so a department's identity is legible everywhere its data appears.",
    },
    {
      title: "Typography & data hierarchy",
      description:
        "An Inter-based type scale tuned for dense dashboards — distinguishing headline metrics from supporting labels at a glance.",
    },
    {
      title: "Component library",
      description:
        "Buttons, badges, alerts, form inputs and stat cards documented in every state — default, hover, focused, disabled — before a single screen was built.",
    },
    {
      title: "Data & chart primitives",
      description:
        "Shared bar, gauge and table components so budget, utilization and audit data all read consistently across every module.",
    },
  ],
  subCaseStudiesLabel: "Case studies — real outcomes across four departments",
  subCaseStudies: [
    {
      title: "Eliminating Shadow Billing in TAOL Cross-Functional Projects",
      meta: "TAOL · Cost Recovery · Q3 2025 – Q4 2025",
      description:
        "How structured engagement tracking recovered $280K in unaccounted cross-departmental work.",
      metrics: [
        { value: "$0", label: "Unrecovered costs" },
        { value: "4 days", label: "Invoice cycle time" },
      ],
      tags: ["Chargeback Recovery", "Cross-Department", "Invoice Automation"],
    },
    {
      title: "Reducing Resource Bench Time Across SSWB Engineering",
      meta: "SSWB · Efficiency · Q1 2026 – Q2 2026",
      description: "Skills & Talent Pool matching cut average bench time from 23 days to 6 days.",
      metrics: [
        { value: "6 days", label: "Avg. bench time" },
        { value: "87%", label: "Billable utilisation" },
      ],
      tags: ["Bench Reduction", "Skills Matching", "Contractor Replacement"],
    },
    {
      title: "Full Audit Trail for SSPT Compliance Engagements",
      meta: "SSPT · Governance · Q4 2025",
      description: "Achieving zero audit findings on internal billing for the first time in SSPT's history.",
      metrics: [
        { value: "0 findings", label: "Audit findings" },
        { value: "$0", label: "Remediation cost" },
      ],
      tags: ["Compliance", "Audit Trail", "Governance"],
    },
    {
      title: "Scaling WCAF's Budget Visibility During Rapid Headcount Growth",
      meta: "WCAF · Governance · Q2 2025 – Q3 2025",
      description:
        "From spreadsheet chaos to real-time budget dashboards during a 40% team expansion.",
      metrics: [
        { value: "0", label: "Budget overruns since adoption" },
        { value: "Real-time", label: "Budget visibility lag" },
      ],
      tags: ["Budget Visibility", "Real-Time Tracking", "Leadership Dashboards"],
    },
    {
      title: "Launching the First Cross-Department Innovation Sprint",
      meta: "TAOL · Growth · Q1 2026",
      description:
        "EMS enabled a 6-week, 4-department, 14-person sprint with full cost accountability from day one.",
      metrics: [
        { value: "91%", label: "Of budget used" },
        { value: "4", label: "Departments coordinated simultaneously" },
      ],
      tags: ["Innovation Sprint", "Multi-Department", "Cross-Functional"],
    },
  ],
  outcome:
    "Five documented case studies across four departments demonstrated $543K+ in recovered or protected value, with an average 74% reduction in resource bench time. Every rollout ran on the same shared design system, so departments could compare their dashboards directly instead of translating between four different tools.",
  learnings: [
    {
      title: "Formalise before you track",
      description:
        "Every successful adoption started with converting informal arrangements into formal engagements — even retroactively. The system only works when every resource relationship has an official record.",
    },
    {
      title: "Alerts replace reporting",
      description:
        "Departments that set up threshold alerts (70% / 85% budget consumption) had zero overruns. Real-time signals are more effective than weekly reports for budget governance.",
    },
    {
      title: "Role clarity unlocks speed",
      description:
        "The approval workflow only accelerated once every stakeholder understood their specific role. Confusion between Department Requester and Engagement Manager was the most common onboarding friction point.",
    },
    {
      title: "Cross-department trust is the hardest part",
      description:
        "The TAOL shadow billing case succeeded because all four departments agreed upfront on billing rates and scope. Technical implementation was straightforward; stakeholder alignment took the most time.",
    },
  ],
});

caseStudies.push({
  slug: "whispering-infinity-design-system",
  title: "Whispering Infinity — Design System",
  tagline:
    "The visual and interaction system behind Whispering Infinity's app — and eight real UX problems it was built to solve.",
  category: "design-systems",
  meta: "Consumer app design system · 8 documented UX case studies",
  role: "Design Systems & Product Design",
  duration: "Ongoing",
  client: "Art of Living",
  tags: ["Design Systems", "Accessibility", "Mobile UX", "Component Library"],
  highlights: [
    { value: "8", label: "Case studies documented" },
    { value: "3", label: "Navigation tiers" },
    { value: "4.6:1", label: "Avg. contrast ratio" },
    { value: "27", label: "Components documented" },
  ],
  overview:
    "Alongside the Whispering Infinity mobile app itself, I built the design system it runs on — a purple-to-pink brand language expressed as tokens, components and documented patterns — then used it to work through eight concrete interface problems the app had outgrown, from navigation architecture to color accessibility.",
  challenge:
    "The app's vibrant purple-pink identity looked distinctive in mockups but broke down in practice: three navigation systems competed for the same job, five overlay patterns had no shared behavior, and text contrast on brand gradients fell below WCAG AA in places.",
  approach:
    "Rather than patch each screen individually, I treated every recurring problem as a design-system decision — documented as its own mini case study with the challenge, the decision, and the measured outcome, so the same reasoning could be reused the next time a similar pattern was needed.",
  featuresLabel: "The design system",
  features: [
    {
      title: "Purple / pink token scale",
      description:
        "A full 50–900 purple scale plus a dedicated pink accent, with a separate dark-text tier reserved for anything that needs to pass contrast checks.",
    },
    {
      title: "Typography & spacing scale",
      description: "A display-to-caption type ramp and a consistent spacing scale shared across every screen and component.",
    },
    {
      title: "Component library",
      description: "Buttons, badges, form inputs, alerts, cards and avatars documented in every variant, size and state.",
    },
    {
      title: "A curated icon set",
      description:
        "27 Lucide icons mapped to the app's actual actions — play, save, share, filter — instead of the full icon library.",
    },
  ],
  subCaseStudiesLabel: "Eight design-system case studies",
  subCaseStudies: [
    {
      title: "DS-01 · Content Card System",
      description: "Displaying three content variants — audio, video, live streams — inside one card family.",
      challenge:
        "Three content types (audio, video, live) needed visually distinct treatment while remaining part of the same card family.",
      decision:
        "A unified card layout with a type-specific icon badge and accent color, and consistent metadata placement across every variant.",
      outcome: "Users instantly recognize content type, with a consistent scanning pattern across mixed-content grids.",
      tags: ["Content Model", "Icon System", "Card Variants"],
    },
    {
      title: "DS-02 · Navigation Architecture",
      description: "Three nav systems doing overlapping jobs, but users still couldn't find things.",
      challenge:
        "Bottom nav, side drawer and top tabs all competed for the same wayfinding job across programs, categories, library and search.",
      decision:
        "A three-tier IA: primary nav (5 items), secondary program tabs, and tertiary content filters — each level owns exactly one decision.",
      outcome: "Users find new content noticeably faster, with consistent navigation patterns eliminating confusion.",
      tags: ["Information Architecture", "Wayfinding", "Nav Tiers"],
    },
    {
      title: "DS-03 · Media Player UX",
      description: "One player needed to feel native to both quick clips and hour-long practice sessions.",
      challenge:
        "Users skip quickly through short clips, but full-immersion sessions need minimal, distraction-free controls.",
      decision:
        "An adaptive player: compact controls for content under 5 minutes, an immersive full-screen mode with auto-hiding controls for longer sessions.",
      outcome: "Session completion improved, with fewer accidental exits during meditation sessions.",
      tags: ["Adaptive UI", "Media Controls", "Session Design"],
    },
    {
      title: "DS-04 · Modal & Overlay Layer",
      description: "Five different overlay patterns, with no shared elevation or animation language.",
      challenge:
        "Confirmations, settings, program details and full-screen players each shipped their own overlay pattern with no shared elevation or animation.",
      decision:
        "A single overlay component with three elevation tiers — sheet, modal, full-screen — and one consistent enter/exit motion curve.",
      outcome: "Users understand overlay hierarchy instantly, with consistent dismiss gestures across every context.",
      tags: ["Elevation System", "Motion Curves", "Dismiss Patterns"],
    },
    {
      title: "DS-05 · Playlist Management",
      description: "Adding to a playlist took 4 taps; power users create dozens of playlists a month.",
      challenge:
        "Adding to a playlist took 4 taps across two screens, and power users who create dozens of playlists monthly abandoned the flow.",
      decision:
        "A long-press quick-add with inline playlist creation, drag reordering, and recently-used playlist shortcuts.",
      outcome: "Average playlist creation time dropped sharply, and playlist engagement roughly doubled among daily active users.",
      tags: ["Quick Actions", "Drag Reorder", "Long-Press Gestures"],
    },
    {
      title: "DS-06 · Search & Discovery",
      description: "One search box had to span programs, categories, teachers, session names and free text.",
      challenge:
        "A single search box needed to span programs, categories, teacher names, session titles and free-text queries without overwhelming results.",
      decision:
        "Scoped search with live category suggestions, recent searches, and zero-state guided prompts before typing even starts.",
      outcome: "Search abandonment dropped, and users discover content outside their usual programs more often.",
      tags: ["Scoped Search", "Zero-State Design", "Query Suggestions"],
    },
    {
      title: "DS-07 · Color & Accessibility",
      description: "Vibrant purple-pink gradients looked stunning, but text contrast fell below WCAG AA in key areas.",
      challenge:
        "The brand's vibrant purple/pink gradients looked stunning but text contrast fell below WCAG AA in several key areas.",
      decision:
        "An extended purple scale with a dedicated dark-text tier, with gradient overlays reserved for non-text surfaces only.",
      outcome: "Every text/background combination now passes WCAG AA, with brand vibrancy preserved on decorative surfaces.",
      tags: ["WCAG AA", "Contrast Ratios", "Semantic Tokens"],
    },
    {
      title: "DS-08 · Responsive Layout System",
      description: "A 320px-wide phone and an iPad Pro shared the same component library — and neither felt native.",
      challenge:
        "Phones and tablets used identical layouts, wasting space on tablets and cramming content on phones.",
      decision:
        "Four breakpoint tiers with column-count and spacing tokens that scale independently of component sizing.",
      outcome: "Content per screen is now optimized for each device class, and the system scales without per-device rework.",
      tags: ["Breakpoints", "Grid System", "Device Scaling"],
    },
  ],
  outcome:
    "The eight case studies became the design system's own changelog: navigation now resolves in three clear tiers, every overlay shares one elevation and motion language, and every text/background pairing in the app passes WCAG AA at an average 4.6:1 contrast ratio.",
});

caseStudies.push({
  slug: "pkisecops-design-system",
  title: "PKISecOPS Design System",
  tagline:
    "A twelve-section design system — from grid and tokens to governance — built for a security operations platform where analysts scan dense data under pressure.",
  category: "design-systems",
  meta: "Enterprise design system · Security operations platform · 12 documented sections",
  role: "Design Systems Lead",
  duration: "Ongoing",
  client: "PKISecOPS — Security Operations Platform",
  tags: ["Design Systems", "Enterprise UX", "Accessibility", "Governance"],
  highlights: [
    { value: "12", label: "Documented system sections" },
    { value: "10+", label: "Core components specified" },
    { value: "WCAG 2.1 AA", label: "Accessibility compliance target" },
    { value: "6-stage", label: "Governance & contribution workflow" },
  ],
  overview:
    "PKISecOPS is a security operations platform for enterprise threat detection and response. I built its design system as the foundation the entire product runs on — twelve documented sections spanning grid and spacing foundations, design tokens, a full component library, layout patterns, data visualization standards, motion, accessibility and the governance model that keeps it all maintained.",
  challenge:
    "A security operations dashboard lives or dies on dense, fast-scanning data — tables, charts, real-time alerts, severity badges — and every one of those patterns needed to be accessible, consistent and fast enough for analysts working under pressure, across a growing team of contributors.",
  approach:
    "Rather than starting from components, I started from tokens — color, spacing, typography, radius, shadow and motion — then built the component library, layout system and chart guidelines on top of that shared foundation, and closed the loop with a governance model so the system stays coherent as new contributors add to it.",
  featuresLabel: "The design system",
  features: [
    {
      title: "Twelve documented sections",
      description:
        "From foundational tokens through governance, every layer of the system is documented in one place — nothing lives only in a designer's head.",
    },
    {
      title: "Token-first architecture",
      description:
        "Every visual decision — color, spacing, type, motion — is defined once as a token and consumed everywhere, in CSS, JSON and Figma variables.",
    },
    {
      title: "Built for security operations",
      description:
        "Dense data tables, real-time alerts and threat-severity color coding are first-class citizens, not generic enterprise chrome.",
    },
    {
      title: "A governance model, not just a library",
      description:
        "A six-stage contribution workflow and an approval matrix mean the system can grow with the product instead of drifting from it.",
    },
  ],
  subCaseStudiesLabel: "Eight pillars of the system",
  subCaseStudies: [
    {
      title: "Foundations",
      description:
        "The base layer — a 12-column grid, 8px spacing scale, color system and typography scale that everything else builds on.",
      metrics: [
        { value: "12-col", label: "Grid system" },
        { value: "8px", label: "Base spacing unit" },
      ],
      tags: ["Grid System", "Spacing Scale", "Color System"],
    },
    {
      title: "Design Tokens",
      description:
        "Every foundational value — color, spacing, typography, radius, shadow, motion — expressed as CSS variables and JSON tokens so design and code never drift.",
      tags: ["CSS Variables", "JSON Tokens", "Figma Variables"],
    },
    {
      title: "Component Library",
      description:
        "Buttons, inputs, form controls, badges, cards, tables, alerts and empty states, each documented with every variant, size and state before a single screen ships.",
      metrics: [{ value: "10+", label: "Core components documented" }],
      tags: ["Buttons", "Forms", "Data Tables"],
    },
    {
      title: "Layout System",
      description:
        "A standard app-shell — collapsible sidebar, header, content container — with a defined breakpoint strategy from 768px tablets up to 1440px desktops.",
      tags: ["App Shell", "Sidebar Behavior", "Responsive Breakpoints"],
    },
    {
      title: "Data Visualization",
      description:
        "A dedicated chart color palette, four chart types with usage guidance, and shared specs for legends, tooltips and gridlines so every dashboard chart reads consistently.",
      tags: ["Chart Palette", "Legends", "Tooltips"],
    },
    {
      title: "Interactions & Motion",
      description:
        "A duration and easing scale, documented micro-interactions for every input and button state, and page-transition patterns — with explicit guidance on respecting reduced-motion preferences.",
      tags: ["Motion Tokens", "Micro-Interactions", "Page Transitions"],
    },
    {
      title: "Accessibility",
      description:
        "WCAG 2.1 AA contrast ratios, keyboard navigation patterns for every complex component, and an ARIA attribute reference, plus a manual and automated testing checklist.",
      metrics: [{ value: "WCAG 2.1 AA", label: "Compliance target" }],
      tags: ["Contrast Ratios", "Keyboard Navigation", "ARIA"],
    },
    {
      title: "Governance",
      description:
        "A six-stage contribution workflow, defined team roles, semantic versioning, an approval matrix by change type, and health metrics for tracking adoption over time.",
      tags: ["Contribution Workflow", "Versioning", "Approval Matrix"],
    },
  ],
  outcome:
    "The result is a fully documented system spanning foundations through governance: a 12-column grid and 8px spacing scale, 10+ core components in every state, WCAG 2.1 AA-compliant color and keyboard patterns, a dedicated data-visualization palette for security dashboards, and a six-stage contribution workflow with its own approval matrix — so design and engineering share one source of truth instead of reverse-engineering each other's work.",
});

caseStudies.push({
  slug: "mybud-ux-teardown",
  title: "MyBUD",
  tagline:
    "An independent UX teardown of a mood-aware wellness app — tracing how five quick questions turn into one personalized recommendation, screen by screen.",
  category: "mobile-apps",
  meta: "Independent UX teardown · Mental wellness app · 16 screens audited",
  role: "UX Research & Design Review",
  duration: "Independent review",
  client: "Prepared for PahelTrust",
  tags: ["UX Audit", "Heuristic Review", "Onboarding", "Design Systems"],
  highlights: [
    { value: "16", label: "Screens mapped across onboarding, intake & home" },
    { value: "7", label: "Languages offered, led by Hindi & regional scripts" },
    { value: "5", label: "Intake signals behind every recommendation" },
    { value: "10", label: "Palette explorations reviewed in the file" },
  ],
  overview:
    "MyBUD is a mood-aware mental wellness app that pairs short-form guru-led teaching content with a structured mood check-in and recommendation engine. I conducted an independent UX teardown of the product's Figma file — walking all 16 screens across onboarding, intake and home — to assess whether the app's personalization funnel, design system and content actually hold together ahead of a build.",
  challenge:
    "Before a user ever reaches the home screen, MyBUD asks for a language, a stated goal, a location, a time budget and a felt emotion — a nine-step funnel with real drop-off risk, and the one step with no skip option is the mood check-in itself.",
  challengeList: [
    "Splash + carousel — brand intro, 5 value screens",
    "Sign up / sign in — name, email, password",
    "Language — English + 6 Indian languages",
    "5-minute quiz — skippable personalization quiz",
    "Goal — sleep, stress, focus, resilience…",
    "Where are you — home, work, travelling, public",
    "Time available — 5 / 10 / 15 minutes or other",
    "Mood check-in — 10-emotion grid + % slider, no skip",
    "Home — the first personalized dashboard",
  ],
  approach:
    "I walked the file screen by screen — onboarding through home, recommendations and session close — mapping the information architecture, sampling the actual color system from exported screens rather than estimating it, and cross-referencing the ten palette explorations and Play Store mock-up against what the team ultimately shipped.",
  featuresLabel: "What's working",
  features: [
    {
      title: "A restrained, purposeful palette",
      description:
        "One primary action color (orange) and one reflection accent (lavender), explored across 10 variations before landing on this pair — warm says 'do something,' cool says 'pause and reflect.'",
    },
    {
      title: "Personalization feels earned, not creepy",
      description:
        "Every question the app asks — mood, time, location, ability — visibly pays off in what's recommended next, so users can trace the 'why' behind each suggestion.",
    },
    {
      title: "No dark patterns in the exit paths",
      description:
        "Skip, 'May be later,' and a plain 'Go back to Home' appear consistently — the flow never traps or guilt-trips the user.",
    },
    {
      title: "A distinctive content hook",
      description:
        "On-camera guru-style teaching content differentiates the recommendation output from generic stock meditation audio.",
    },
  ],
  subCaseStudiesLabel: "Opportunities — what I'd fix next",
  subCaseStudies: [
    {
      title: "Proof-read before build",
      description:
        "Two typos ('acces', 'excercises') on Sign In and a dropped word on the mood-percentage slider sit on high-visibility screens — quick fixes with outsized visibility.",
      tags: ["Content QA", "Copywriting"],
    },
    {
      title: "Give the tab bar an active state",
      description:
        "All five tabs sit on a solid orange bar with white icons at every state, so color alone can't signal which tab is selected.",
      tags: ["Navigation", "Accessibility"],
    },
    {
      title: "Shorten the pre-Home funnel",
      description:
        "Nine steps before Home is a lot — consider deferring the 5-minute quiz until after a user's first session, once they already see value.",
      tags: ["Onboarding", "Drop-off Risk"],
    },
    {
      title: "Reconsider the no-skip mood check",
      description:
        "Mood check-in is the one required, non-skippable step; a lightweight 'prefer not to say' option would protect users who open the app but aren't ready to name a feeling.",
      tags: ["Accessibility", "User Control"],
    },
    {
      title: "Resolve the store-listing name",
      description:
        "The Play Store mock-up reads 'Self Care — Sleep, Meditation,' which doesn't match the in-app MyBUD branding — worth confirming before it reaches real store assets.",
      tags: ["Branding", "Launch Readiness"],
    },
    {
      title: "Tidy duplicate layers",
      description:
        "Two nearly identical layers are named 'Recommendations' and 'REcommendations' — harmless to end users, but worth a naming pass before engineering handoff.",
      tags: ["File Hygiene", "Dev Handoff"],
    },
  ],
  outcome:
    "The intake funnel is the real product here — five short questions that make the first real screen feel already personalized, powered by an entirely rule-based recommendation engine that keeps every suggestion traceable back to a specific answer. The design system is mature enough to critique: a sampled color system, a reused illustration set and a documented palette-exploration page all suggest a file organized enough to hand to engineering. What stands between this file and a polish-ready v1 is small — two typos, one missing word, and a possibly-placeholder store name.",
  quote: {
    text: "The intake funnel is the product — the sequence of five short questions makes the first real screen feel already personalized.",
    attribution: "Design review takeaway, independent MyBUD teardown",
  },
});

export const getFeaturedBySlug = (slug: string) => caseStudies.find((c) => c.slug === slug);
