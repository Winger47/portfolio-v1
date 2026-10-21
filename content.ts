// ──────────────────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE. This is the only file you need to touch for copy.
// Anything marked TODO needs your real value before you ship.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Shikhar Pandav",
  initials: "SP",
  role: "Backend & GenAI Engineer",
  roleMono: "BACKEND & GENAI ENGINEER",
  location: "Meerut / Agra, India",
  status: "Open to SDE-2 roles",
  codeforcesRank: "Expert",
  tagline:
    "I build production backend systems and applied GenAI — RAG pipelines, multi-agent LLM systems, and the distributed infrastructure that makes them reliable instead of demos.",

  // Drop real raster images into /public/images/ and set these paths to switch
  // from the generated fallbacks to next/image. Leave null to keep fallbacks.
  coverUrl: null as string | null, // TODO: add /public/images/cover.jpg → set "/images/cover.jpg"
  avatarUrl: null as string | null, // TODO: add /public/images/avatar.jpg → set "/images/avatar.jpg"

  resumeUrl: "/resume.pdf",
  links: {
    github: "https://github.com/Winger47",
    linkedin: "https://www.linkedin.com/in/shikhar-pandav-32a90624b/",
    codeforces: "https://codeforces.com/profile/rs27_cris",
    leetcode: "https://leetcode.com/u/rs_cris/",
    email: "shikharrs27work@gmail.com",
  },
};

// Three short bullet paragraphs for the hero About block.
export const about: string[] = [
  "Backend engineer at the intersection of distributed systems and applied GenAI. I build the production infrastructure — async pipelines, vector stores, observability — that makes AI features reliable instead of demos.",
  "My foundation is production backend: services for a banking client at Infosys on .NET, and a Python backend for an e-commerce client with a gRPC migration and event-driven flows on RabbitMQ + Redis.",
  "My projects are where the AI work lives: semantic code search with cross-encoder re-ranking, a multi-agent interview platform, and an agentic coding CLI on a self-built LLM gateway.",
];

// ── Projects ────────────────────────────────────────────────────────────────
export type ProjectStatus = "live" | "wip";
export type ProjectCategory = "Backend" | "GenAI" | "Full-stack";

export type Project = {
  name: string;
  blurb: string; // ~2 lines, shown on the card
  category: ProjectCategory;
  status: ProjectStatus;
  latency?: string; // optional motif for live projects, e.g. "p99 42ms" — no invented numbers
  year: string;
  tags: string[];
  github?: string;
  demo?: string;
  imageUrl?: string | null; // /images/projects/<name>.jpg, or null for the fallback
  // Engineering details — write these yourself; TODO placeholders for now.
  details: {
    architecture: string;
    decisions: string;
    tradeoffs: string;
  };
};

const TODO_DETAILS = {
  architecture: "TODO: describe the architecture (components, data flow, boundaries).",
  decisions: "TODO: the key decisions you made and why.",
  tradeoffs: "TODO: the tradeoffs you accepted and what you'd revisit.",
};

export const projects: Project[] = [
  {
    name: "FORGE",
    blurb:
      "An agentic coding CLI that loops think → act → observe, with every model call routed through a self-built OpenAI-compatible gateway (two-tier cache, token-bucket limiter, failover).",
    category: "Backend",
    status: "wip", // TODO: set "live" + add demo URL if deployed
    year: "2026",
    tags: ["Python", "LLM Gateway", "Redis", "MCP", "Streaming", "Async"],
    github: "https://github.com/Winger47/forge",
    imageUrl: null, // TODO: add /public/images/projects/forge.jpg
    details: { ...TODO_DETAILS },
  },
  {
    name: "CodeQuery AI",
    blurb:
      "Production RAG over codebases — AST-aware chunking, hybrid retrieval fused with reciprocal rank fusion, cross-encoder re-ranking, and WebSocket-streamed answers.",
    category: "GenAI",
    status: "wip", // TODO: set "live" + add demo URL if deployed
    year: "2025",
    tags: ["Python", "Django", "ChromaDB", "Tree-sitter", "Cross-Encoder", "Celery"],
    github: "https://github.com/Winger47/Code-Helper",
    imageUrl: null, // TODO: add /public/images/projects/codequery.jpg
    details: { ...TODO_DETAILS },
  },
  {
    name: "PrepMind",
    blurb:
      "A real-time mock-interview platform orchestrating multiple LLM agents, with a ChromaDB-backed question bank and low-latency Groq inference.",
    category: "GenAI",
    status: "wip", // TODO: set "live" + add demo URL if deployed
    year: "2025",
    tags: ["Python", "WebSocket", "PostgreSQL", "ChromaDB", "Groq", "JWT"],
    github: "https://github.com/Winger47/PrepMind",
    imageUrl: null, // TODO: add /public/images/projects/prepmind.jpg
    details: { ...TODO_DETAILS },
  },
  {
    name: "MyTube",
    blurb:
      "A video platform with upload, processing, and streaming, plus a creator-facing experience.",
    category: "Full-stack",
    status: "wip", // TODO: set "live" + add demo URL if deployed
    year: "2024",
    // TODO: confirm this description + tags + year match your actual my-tube repo
    tags: ["TypeScript", "Next.js", "PostgreSQL"], // TODO: replace with your real stack
    github: "https://github.com/Winger47/my-tube",
    imageUrl: null, // TODO: add /public/images/projects/mytube.jpg
    details: { ...TODO_DETAILS },
  },
  {
    name: "RushOrder",
    // TODO: RushOrder is a scaffold — fill in everything below.
    blurb: "TODO: one–two line description of RushOrder.",
    category: "Backend", // TODO: confirm category (Backend / GenAI / Full-stack)
    status: "wip",
    year: "TODO", // TODO: year
    tags: [], // TODO: tech tags
    github: undefined, // TODO: repo URL
    demo: undefined, // TODO: live URL if any
    imageUrl: null, // TODO: add /public/images/projects/rushorder.jpg
    details: { ...TODO_DETAILS },
  },
];

export const projectCategories = ["All", "Backend", "GenAI", "Full-stack"] as const;

// ── Experience ───────────────────────────────────────────────────────────────
export type Engagement = {
  client: string;
  stack: string[];
  points: string[];
};

export const experience = {
  company: "Infosys",
  title: "Specialist Programmer",
  period: "Jul 2024 – Apr 2026",
  location: "Pune",
  engagements: [
    {
      client: "Banking client",
      stack: [".NET", ".NET Core"],
      points: [
        "TODO: what you built / owned for the banking client on .NET / .NET Core.",
        "TODO: impact metric — do not invent a number.",
      ],
    },
    {
      client: "E-commerce client",
      stack: ["Python", "FastAPI", "gRPC", "RabbitMQ", "Redis", "GCP"],
      points: [
        "Led migration of internal APIs to gRPC for lower-latency service-to-service calls.",
        "Designed event-driven flows on RabbitMQ + Redis, decoupling request paths from background processing.",
        "Drove GCP profiling, CI/CD, and observability improvements to surface and fix production bottlenecks.",
        "TODO: impact metric — do not invent a number.",
      ],
    },
  ] as Engagement[],
};

// 3 stat cards under the experience timeline. Use "TODO" for anything unverified.
export const expStats = [
  { value: "Expert", label: "Codeforces rank" },
  { value: "TODO", label: "Projects shipped" }, // TODO: real count
  { value: "TODO", label: "Years experience" }, // TODO: real figure
];

// ── Stack (tabs must match these group names) ────────────────────────────────
export const stackTabs = ["Languages", "Backend", "AI-ML", "Databases", "DevOps"] as const;

export const skills: { group: (typeof stackTabs)[number]; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C++", "C#", "SQL"] },
  {
    group: "Backend",
    items: [
      "FastAPI",
      "Django",
      ".NET Core",
      "gRPC",
      "REST",
      "WebSocket",
      "SQLAlchemy",
      "RabbitMQ",
      "Celery",
      "Async I/O",
      "Event-Driven Architecture",
      "System Design",
      "Microservices",
      "Clean / Hexagonal Architecture",
    ],
  },
  {
    group: "AI-ML",
    items: [
      "RAG",
      "LangChain",
      "LangGraph",
      "Multi-Agent Systems",
      "Vector Databases",
      "Embeddings",
      "Cross-Encoder Re-ranking",
      "RAG Evaluation",
      "PyTorch",
      "Transformers",
    ],
  },
  {
    group: "Databases",
    items: ["PostgreSQL", "Redis", "ChromaDB", "Postgres RLS"],
  },
  {
    group: "DevOps",
    items: ["Docker", "GCP", "CI/CD", "Git", "OpenTelemetry", "Observability", "Load Testing (Locust)"],
  },
];

// ── Competitive programming (surfaced in the activity section) ───────────────
export const competitive = [
  {
    platform: "LeetCode",
    detail: "Guardian · Peak 2212 · Top 1% globally · 1500+ solved",
    href: "https://leetcode.com/u/rs_cris/",
  },
  {
    platform: "Codeforces",
    detail: "Expert · Peak 1430",
    href: "https://codeforces.com/profile/rs27_cris",
  },
];

// Section labels (mono, numbered) used by the layout shell.
export const sections = [
  { id: "about", label: "01 — ABOUT" },
  { id: "projects", label: "02 — PROJECTS" },
  { id: "experience", label: "03 — EXPERIENCE" },
  { id: "stack", label: "04 — STACK" },
  { id: "activity", label: "05 — ACTIVITY" },
];
