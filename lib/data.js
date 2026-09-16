export const profile = {
  name: "Aakash Rayamajhi",
  role: "Full Stack Software Engineer",
  blurb:
    "I design and build full-stack products from concept to deployment — combining reliable backend systems, polished user experiences, and AI-powered workflows. Currently finishing a CSIT degree while shipping scalable applications across the stack.",
  email: "aakashrayamajhi03@gmail.com",
  phone: "+977 9812972024",
  github: "https://github.com/Aakashrayamajhi",
  githubLabel: "github.com/Aakashrayamajhi",
  linkedin: "https://linkedin.com/in/aakash-rayamajhi-09b41a2a8",
  linkedinLabel: "linkedin.com/in/aakash-rayamajhi",
  leetcode: "https://leetcode.com/aakashrayamajhi",
  leetcodeLabel: "leetcode.com/aakashrayamajhi",
};

export const infoStrip = [
  { label: "Nationality", value: "Nepal" },
  { label: "Field of study", value: "Computer Science & IT" },
  { label: "University", value: "Tribhuvan University" },
  { label: "Graduating", value: "2026" },
];

export const languages = [
  { language: "Nepali", level: "Native", detail: "Mother tongue and primary spoken language" },
  { language: "Hindi", level: "Fluent", detail: "Comfortable in conversation, teamwork, and technical discussion" },
  { language: "English", level: "Fluent", detail: "Strong verbal and written communication for professional work" },
];

export const badges = [
  {
    title: "LeetCode",
    detail: "300+ solved",
    sub: "500+ across platforms",
    tone: "navy",
  },
  {
    title: "Hackathon",
    detail: "Runner-up",
    sub: "National Hackathon",
    tone: "red",
  },
  {
    title: "Nepathon",
    detail: "Advisor",
    sub: "Infra & execution",
    tone: "navy",
  },
  {
    title: "Next up",
    detail: "Always building",
    sub: "Open to new challenges",
    tone: "outline",
  },
];

export const stack = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "SQL", "C++", "C"],
  },
  {
    category: "Backend & Distributed Systems",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Webhooks",
      "Apache Kafka",
      "ZooKeeper",
      "Background Workers",
    ],
  },
  {
    category: "Databases, Cloud & DevOps",
    items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "AWS", "Docker", "Kubernetes", "Vercel"],
  },
  {
    category: "Frontend, AI & Data",
    items: ["React", "React Native", "Tailwind CSS", "OpenAI APIs", "LangChain", "RAG", "n8n", "Pandas"],
  },
  {
    category: "Monitoring, Testing & Agile",
    items: ["Prometheus", "Grafana", "JMeter", "k6", "Jira", "Agile / Scrum"],
  },
];

export const journey = [
  {
    period: "2019 — 2022",
    title: "Competitive Free Fire In-Game Leader",
    description:
      "Represented Nepal in international esports tournaments, leading multi-member teams through qualification rounds — the first proving ground for leading under pressure.",
  },
  {
    period: "2022 — 2026",
    title: "B.Sc. CSIT, NePathya College",
    description:
      "Tribhuvan University. Coursework spanning Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Artificial Intelligence, and Computer Architecture.",
  },
  {
    period: "During B.Sc. CSIT",
    title: "National Hackathon Runner-up",
    description:
      "Engineered AI features including speech transcription, automated translation, RAG-based Q&A, and conversational agents.",
  },
  {
    period: "During B.Sc. CSIT",
    title: "Nepathon Advisor",
    description:
      "Supported technical execution and infrastructure planning for a national hackathon, assisting participant engineering teams.",
  },
];

export const projects = [
  {
    slug: "skysearch",
    name: "SkySearch",
    tagline: "A personal search engine with a distributed pipeline.",
    description:
      "A 3-stage search pipeline (crawl, index, rank) split into independently scalable microservices, with Kafka decoupling each stage and a hybrid BM25 + PageRank ranking model for sub-second relevance scoring.",
    bullets: [
      "3-stage pipeline split into independently scalable microservices",
      "2-stage de-duplication using URL normalization + in-memory Redis",
      "Kafka queues decouple crawler, indexer, and ranker for fault isolation",
      "Hybrid BM25 + PageRank relevance scoring",
      "Elasticsearch + background workers for fast async retrieval",
    ],
    tech: ["JavaScript", "Node.js", "Express", "React", "Kafka", "Elasticsearch", "Redis", "PostgreSQL", "Docker"],
    video: "/videos/skysearch.mp4",
    link: "https://github.com/Aakashrayamajhi",
    tone: "navy",
  },
  {
    slug: "e-mistiri",
    name: "e-Mistiri",
    tagline: "A microservices platform for vehicle servicing and garage discovery.",
    description:
      "An independently deployable microservices platform using geohashing and spatial indexes for fast garage discovery, with distributed locks and circuit breakers keeping bookings consistent under load.",
    bullets: [
      "Independently deployable microservices with isolated data stores",
      "Geohashing + PostgreSQL spatial indexes for fast garage discovery",
      "Elasticsearch for location search, PostgreSQL for relational data",
      "Redis + ZooKeeper distributed locks eliminate booking race conditions",
      "Circuit breakers, async queues, and reverse-proxy routing for resiliency",
    ],
    tech: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "PostgreSQL", "Elasticsearch", "ZooKeeper", "Docker"],
    video: "/videos/e-mistiri.mp4",
    link: "https://github.com/Aakashrayamajhi",
    tone: "red",
  },
];
