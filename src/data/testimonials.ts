export type Testimonial = {
  quote: string;
  name?: string;
  initials: string;
  role: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The QMS Team will be forever thankful for your immense contribution to the new QMS portal. Your insights on user experience design and creative input made a real difference — I do not think we could have achieved this ourselves.",
    name: "Yadav S (Sumit) Vikram",
    initials: "YV",
    role: "Global Quality Management Leader",
    context: "Regulatory & Compliance, IBM GBS",
  },
  {
    quote:
      "We had a functional product, but the experience wasn't where we wanted it to be. Magesh helped us rethink the entire user journey and brought a much stronger visual direction to the product. His work made the experience feel more cohesive, professional, and easier to use.",
    name: "Ramesh K",
    initials: "RK",
    role: "Distinguished Engineer",
    context: "IBM GBS",
  },
  {
    quote:
      "Magesh quickly understood what we were trying to achieve and brought structure to the design process. He was comfortable working independently, receptive to feedback, and always thinking about the user as well as the business. The quality and ownership he brought to the project made a big difference.",
    name: "Saravanan",
    initials: "S",
    role: "Founder",
    context: "Startup, New York",
  },
  {
    quote:
      "Working with Magesh was a great experience. He understood our brand and translated the essence of our music and teaching into a modern digital experience. What stood out was his attention to detail and his ability to bring together design, motion, and storytelling.",
    initials: "TMB",
    role: "Founder",
    context: "The Mystic Bamboo",
  },
];
