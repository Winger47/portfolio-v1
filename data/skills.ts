// Skills — transcribed verbatim from the résumé's SKILLS section, grouped by its
// own categories. This is the single source of truth for both the hero Skills
// card / dialog and the Tech Stack section. Do not duplicate these lists elsewhere.
export type SkillGroup = { category: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Python", "C++", "TypeScript", "JavaScript", "SQL"] },
  {
    category: "Backend",
    items: [
      "FastAPI",
      "Django",
      "asyncio",
      "SQLAlchemy",
      "gRPC/Protobuf",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
    ],
  },
  {
    category: "Systems",
    items: [
      "Microservices",
      "Event-Driven Architecture",
      "Caching",
      "Rate Limiting",
      "Idempotency",
      "Concurrency Control",
      "System Design (HLD/LLD)",
    ],
  },
  {
    category: "Infra",
    items: ["Docker", "GCP", "GitHub Actions CI", "Prometheus", "Grafana", "pytest", "Git", "Linux"],
  },
  {
    category: "GenAI",
    items: ["LLM Gateways", "Agent Loops", "Semantic Caching", "Embeddings", "Vector Databases", "RAG"],
  },
];

export const allSkills: string[] = skillGroups.flatMap((g) => g.items);

export const skillCategories: string[] = ["All", ...skillGroups.map((g) => g.category)];

// 8 representative skills shown on the hero card (the rest live behind "+N more").
export const topSkills: string[] = [
  "Python",
  "FastAPI",
  "asyncio",
  "gRPC/Protobuf",
  "RabbitMQ",
  "Redis",
  "PostgreSQL",
  "RAG",
];
