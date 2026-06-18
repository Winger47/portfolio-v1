// ──────────────────────────────────────────────────────────────────────────
// EDIT YOUR CONTENT HERE. This is the only file you need to touch for copy.
// Anything marked TODO needs your real value before you ship.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Shikhar Pandav",
  role: "Backend & GenAI Engineer",
  tagline:
    "I build production backend systems and applied GenAI — RAG pipelines, multi-agent LLM systems, and the distributed infrastructure that makes them reliable instead of demos.",
  location: "Meerut / Agra, India",
  status: "Open to SDE-1 / SDE-2 roles · AI / Backend",
  stack: ["python", "fastapi", "langchain", "rag", "chromadb", "grpc"],
  resumeUrl: "/resume.pdf", // TODO: drop your resume.pdf into the /public folder
  links: {
    github: "https://github.com/Winger47",
    linkedin: "https://www.linkedin.com/in/shikhar-pandav-32a90624b/",
    leetcode: "https://leetcode.com/u/rs_cris/",
    codeforces: "https://codeforces.com/profile/rs27_cris",
    email: "shikharrs27work@gmail.com",
  },
};

export const stats = [
  { value: "2212", label: "LeetCode peak (Guardian)" },
  { value: "Top 1%", label: "Global LeetCode rank" },
  { value: "1500+", label: "DSA problems solved" },
  { value: "Ex-Infosys", label: "Production backend, banking" },
];

export const about = {
  story: [
    "Backend engineer working at the intersection of distributed systems and applied GenAI. I build RAG pipelines, multi-agent LLM systems, and the production infrastructure — async pipelines, vector stores, observability — that makes AI features reliable instead of demos.",
    "My foundation is production backend: Python/FastAPI services for a banking client at Infosys, a gRPC migration, and event-driven flows on RabbitMQ and Redis. The AI work lives in my projects — semantic code search with cross-encoder re-ranking, multi-agent interview systems, and ML infrastructure built from scratch to understand it end to end.",
  ],
  quote:
    "Reason from the workload to the tool, never the reverse. The interesting decisions live in the tradeoffs.",
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    school: "KIET Group of Institutions, AKTU",
    period: "2020 - 2024",
    place: "Ghaziabad, India",
  },
};

export const experience = [
  {
    company: "Infosys",
    role: "Software Engineer",
    period: "Aug 2024 - Apr 2026",
    kind: "Full-time",
    points: [
      "Built Python/FastAPI backend services for a banking client; led migration of internal APIs to gRPC for lower-latency service-to-service calls.",
      "Designed event-driven flows on RabbitMQ + Redis, decoupling synchronous request paths from background processing.",
      "Drove GCP profiling, CI/CD, and observability improvements to surface and fix production bottlenecks.",
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    name: "CodeQuery AI",
    blurb: "Production RAG over code",
    description:
      "An LLM-powered Q&A engine over codebases. Syntax-aware AST chunking with Tree-sitter, embeddings in a ChromaDB vector store, hybrid retrieval (semantic + BM25 fused via reciprocal rank fusion), cross-encoder re-ranking, and WebSocket-streamed answers — a full production RAG pipeline on Django + Celery.",
    tags: ["Python", "Django", "ChromaDB", "Tree-sitter", "Cross-Encoder", "Celery"],
    github: "https://github.com/Winger47/Code-Helper",
    featured: true,
    year: "2025",
  },
  {
    name: "PrepMind",
    blurb: "Multi-agent LLM interview platform",
    description:
      "A real-time mock-interview system orchestrating multiple LLM agents. WebSocket streaming for live evaluation, a ChromaDB-backed RAG question bank, JWT auth and PostgreSQL, with Groq for low-latency inference.",
    tags: ["Python", "WebSocket", "PostgreSQL", "ChromaDB", "Groq", "JWT"],
    github: "https://github.com/Winger47/PrepMind",
    year: "2025",
  },
  {
    name: "MyTube",
    blurb: "Video streaming platform",
    // TODO: confirm this description + tags + year match your actual my-tube repo
    description:
      "A video platform with upload, processing, and streaming, plus a creator-facing experience.",
    tags: ["TypeScript", "Next.js", "PostgreSQL"], // TODO: replace with your real stack
    github: "https://github.com/Winger47/my-tube",
    year: "2024",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "C++", "C#", "SQL"] },
  {
    group: "GenAI & ML",
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
    group: "Backend & APIs",
    items: ["FastAPI", "Django", ".NET Core", "gRPC", "REST", "WebSocket", "SQLAlchemy"],
  },
  {
    group: "Databases & Vector Stores",
    items: ["PostgreSQL", "Redis", "ChromaDB", "Postgres RLS"],
  },
  {
    group: "Async & Messaging",
    items: ["RabbitMQ", "Celery", "Async I/O", "Event-Driven Architecture"],
  },
  {
    group: "Infra & DevOps",
    items: ["Docker", "GCP", "CI/CD", "Git", "OpenTelemetry"],
  },
  {
    group: "Architecture & Practices",
    items: [
      "System Design",
      "Clean / Hexagonal Architecture",
      "Microservices",
      "Observability",
      "Load Testing (Locust)",
    ],
  },
];

export const competitive = [
  {
    platform: "LeetCode",
    detail: "Guardian · Peak 2212 · Top 1% globally · 1500+ solved",
    href: "https://leetcode.com/u/rs_cris/",
  },
  {
    platform: "Codeforces",
    detail: "Specialist · Peak 1430",
    href: "https://codeforces.com/profile/rs27_cris",
  },
];