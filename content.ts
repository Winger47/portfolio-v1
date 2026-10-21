// ──────────────────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE. Skills live in data/skills.ts (single source).
// Anything marked TODO needs your real value before you ship.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Shikhar Pandav",
  initials: "SP",
  role: "Backend & GenAI Engineer",
  roleMono: "BACKEND & GENAI ENGINEER",
  location: "Delhi NCR",
  status: "Open to SDE-2 roles",
  codeforcesRank: "Expert",
  tagline:
    "I build production backend systems and applied GenAI — distributed Python services and the infrastructure that makes them reliable under load.",

  // Drop real raster images into /public/images/ and set these paths to switch
  // from the generated fallbacks to next/image. Leave null to keep fallbacks.
  coverUrl: null as string | null, // TODO: add /public/images/cover.jpg → set "/images/cover.jpg"
  avatarUrl: null as string | null, // TODO: add /public/images/avatar.jpg → set "/images/avatar.jpg"

  resumeUrl: "/Shikhar_Pandav_Resume.pdf?v=2026-10-21",
  links: {
    github: "https://github.com/Winger47",
    linkedin: "https://www.linkedin.com/in/shikhar-pandav-32a90624b/",
    codeforces: "https://codeforces.com/profile/rs27_cris",
    leetcode: "https://leetcode.com/u/rs_cris/",
    email: "shikhar152725work@gmail.com",
  },
};

// Three short bullet paragraphs for the hero About block.
export const about: string[] = [
  "Backend engineer with ~2 years on distributed Python services — FastAPI, gRPC, RabbitMQ, Redis, GCP — across banking and e-commerce engagements at Infosys.",
  "Depth in the unglamorous parts: concurrency control, idempotent pipelines, read-through caching, and the observability to prove they hold under load.",
  "My projects push into applied GenAI — a self-hosted LLM gateway with semantic caching and an agentic CLI, plus RAG over code and a multi-agent interview platform.",
];

// ── Projects ────────────────────────────────────────────────────────────────
export type ProjectStatus = "live" | "wip";
export type ProjectCategory = "Backend" | "GenAI" | "Full-stack";

export type Project = {
  name: string;
  blurb: string; // ~2 lines, shown on the card
  category: ProjectCategory;
  status: ProjectStatus;
  latency?: string; // optional motif for live projects, e.g. "42ms" — no invented numbers
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
      "A self-hosted, OpenAI-compatible LLM gateway + agentic CLI: atomic Redis-Lua token-bucket limiting, exact + semantic caching, and per-model circuit breaking with backoff failover.",
    category: "Backend",
    status: "wip", // TODO: set "live" + add demo URL if deployed
    year: "2026",
    tags: ["Python", "FastAPI", "Redis", "PostgreSQL", "LLM Gateway", "MCP"],
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
      "A full-stack video platform — Mux adaptive-bitrate transcoding behind an end-to-end typed tRPC API over PostgreSQL, with threaded comments fetched via recursive CTEs.",
    category: "Full-stack",
    status: "wip", // TODO: set "live" + add demo URL if deployed
    year: "2025",
    tags: ["React", "TypeScript", "Next.js", "tRPC", "PostgreSQL", "Mux"],
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
  title: "Specialist Programmer (Power Programmer)",
  period: "Jul 2024 – Apr 2026",
  location: "Pune",
  engagements: [
    {
      client: "E-commerce engagement — order-processing path",
      stack: ["Python", "RabbitMQ", "Prometheus"],
      points: [
        "Owned the order-processing path end to end, migrating it from synchronous in-process handoffs to an at-least-once RabbitMQ pipeline — idempotency-key dedup for safe retries, dead-letter queue for poison messages.",
        "Diagnosed burst-traffic queueing to async connection-pool saturation via Prometheus histograms; right-sized pool limits and timeouts to clear head-of-line blocking without adding replicas.",
        "TODO: add an impact metric if you have one — do not invent a number.",
      ],
    },
    {
      client: "Banking engagement — read path & service boundaries",
      stack: [".NET / .NET Core", "Redis", "gRPC/Protobuf"],
      points: [
        "Owned the read path of a high-traffic transactional API, cutting database load with a Redis read-through cache — tenant-scoped keys and per-endpoint TTLs bounding staleness without write-path invalidation.",
        "Hardened service boundaries by migrating inter-service REST/JSON to gRPC/Protobuf, moving contract breakage from runtime to build time via generated stubs and CI schema checks.",
        "TODO: add an impact metric if you have one — do not invent a number.",
      ],
    },
  ] as Engagement[],
};

// 3 stat cards under the experience timeline. Use "TODO" for anything unverified.
export const expStats = [
  { value: "Expert", label: "Codeforces rank" },
  { value: "TODO", label: "Projects shipped" }, // TODO: real count
  { value: "~2", label: "Years experience" }, // from résumé: ~2 years
];

// ── Competitive programming (surfaced in the activity section) ───────────────
export const competitive = [
  {
    platform: "LeetCode",
    detail: "Guardian · Peak 2250 · Top 1% · Rank 207/21,482 (Weekly)",
    href: "https://leetcode.com/u/rs_cris/",
  },
  {
    platform: "Codeforces",
    detail: "Expert · Peak 1633",
    href: "https://codeforces.com/profile/rs27_cris",
  },
];

// ── Pages / navigation (single source for tiles, navbar, breadcrumbs, ⌘K) ────
export type PageKey = "projects" | "dsa" | "experience" | "skills" | "activity";

export const pages: Record<
  PageKey,
  { href: string; mono: string; title: string; desc: string }
> = {
  projects: {
    href: "/projects",
    mono: "02 — PROJECTS",
    title: "Projects",
    desc: "Production backend and applied-GenAI systems, with the engineering details behind each.",
  },
  dsa: {
    href: "/dsa",
    mono: "03 — DSA",
    title: "DSA & Algorithms",
    desc: "Competitive programming — Codeforces Expert, with live rating and history.",
  },
  experience: {
    href: "/experience",
    mono: "04 — EXPERIENCE",
    title: "Experience",
    desc: "~2 years at Infosys across banking and e-commerce engagements.",
  },
  skills: {
    href: "/skills",
    mono: "05 — SKILLS",
    title: "Skills",
    desc: "The full stack I work with, grouped the way my résumé groups it.",
  },
  activity: {
    href: "/activity",
    mono: "06 — ACTIVITY",
    title: "Activity",
    desc: "GitHub contributions and competitive-programming profiles.",
  },
};

// Order of the primary links shown in the navbar.
export const navOrder: PageKey[] = ["projects", "experience", "skills", "dsa"];

// DSA topics — TODO placeholders; fill these in yourself.
export const dsaTopics: string[] = [
  "TODO: strong topic (e.g. Graphs)",
  "TODO: strong topic (e.g. DP)",
  "TODO: strong topic (e.g. Binary Search)",
];
