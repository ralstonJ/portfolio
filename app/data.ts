export type Project = {
  name: string;
  url: string;
  domain: string;
  category: string;
  tagline: string;
  description: string;
  tags: string[];
  accent: string;
  /** Optional: drop your own screenshot in /public/projects and point to it here. */
  image?: string;
};

export const profile = {
  name: "Ralston Almeida",
  first: "Ralston",
  role: "Software Engineer",
  location: "Dubai, UAE",
  headline: "Software engineer building products people rely on.",
  intro:
    "I design and ship web products end to end, from high-traffic consumer travel platforms to focused SaaS tools that help founders grow revenue.",
  email: "ralstonalmeida@gmail.com",
  available: true,
  links: [
    { label: "GitHub", href: "https://github.com/ralstonJ" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ralston-almeida-3064453a/" },
  ],
};

export const projects: Project[] = [
  {
    name: "Priceline",
    url: "https://www.priceline.com/",
    domain: "priceline.com",
    category: "Consumer travel",
    tagline: "Travel booking at global scale",
    description:
      "One of the largest online travel agencies, helping millions of travelers book hotels, flights, rental cars and packages.",
    tags: ["Web platform", "E-commerce", "High traffic"],
    accent: "#0068ef",
    image: "/projects/priceline.jpg",
  },
  {
    name: "ParityKit",
    url: "https://www.paritykit.com/",
    domain: "paritykit.com",
    category: "SaaS · Payments",
    tagline: "Purchasing-power pricing for SaaS",
    description:
      "Connects to Stripe, Paddle, Lemon Squeezy and Polar to apply country-specific discounts based on purchasing power, with localized offer banners for every visitor.",
    tags: ["SaaS", "Payments integrations", "Pricing"],
    accent: "#0f9d74",
    image: "/projects/paritykit.jpg",
  },
  {
    name: "ProofyBubble",
    url: "https://proofybubble.com/",
    domain: "proofybubble.com",
    category: "SaaS · Growth",
    tagline: "Social proof that converts",
    description:
      "A no-code widget that shows real-time notifications for recent sales, sign-ups and visitor activity, building trust and lifting conversions.",
    tags: ["SaaS", "Embeddable widget", "No-code"],
    accent: "#ef5a24",
    image: "/projects/proofybubble.jpg",
  },
];

export const demo = {
  title: "Product walkthrough",
  description:
    "A recorded demo of software I worked on, from the key flows to the details.",
  youtubeId: "6WYfQPVm3kY",
  start: 519, // 8:39
  watchUrl: "https://youtu.be/6WYfQPVm3kY?t=519",
};

// TODO: tune these to your real strengths.
export const capabilities = [
  {
    title: "Product engineering",
    body: "Taking features from idea to production: scoping, building, measuring and iterating with the team.",
  },
  {
    title: "Frontend & web performance",
    body: "Fast, accessible interfaces with React and Next.js that hold up under real-world traffic.",
  },
  {
    title: "Integrations & SaaS",
    body: "Payments, third-party APIs and embeddable widgets that drop cleanly into other people's products.",
  },
];
