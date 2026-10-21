"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/content";

function httpLine(p: Project) {
  if (p.status === "live") return p.latency ? `200 OK · ${p.latency}` : "200 OK";
  return "202 ACCEPTED";
}

// Crossfades through the projects every 3s (static under reduced motion).
export default function ProjectsPreview({ projects }: { projects: Project[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % projects.length), 3000);
    return () => window.clearInterval(id);
  }, [projects.length]);

  return (
    <div className="mt-3 flex-1">
      <div className="relative h-20 overflow-hidden rounded-md border border-line">
        {projects.map((p, idx) => {
          const live = p.status === "live";
          return (
            <div
              key={p.name}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: idx === i ? 1 : 0 }}
              aria-hidden={idx !== i}
            >
              <div className="size-full bg-[radial-gradient(120%_120%_at_0%_0%,rgb(var(--brand)/0.35),transparent_60%)]" />
              <span className="pill absolute left-2 top-2 bg-bg/80 text-fg backdrop-blur">
                <span
                  className={`size-1.5 rounded-full ${live ? "bg-success dot-pulse" : "bg-warning"}`}
                  aria-hidden
                />
                {live ? "LIVE" : "IN PROGRESS"}
              </span>
              <span className="pill absolute right-2 top-2 bg-bg/80 text-fg backdrop-blur">
                {httpLine(p)}
              </span>
              <span className="absolute bottom-2 left-2 font-display text-lg leading-none text-fg">
                {p.name}
              </span>
            </div>
          );
        })}
      </div>
      <p className="meta mt-2 normal-case" style={{ letterSpacing: 0 }}>
        {projects.length} projects
      </p>
    </div>
  );
}
