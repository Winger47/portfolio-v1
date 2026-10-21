import Image from "next/image";
import type { Project } from "@/content";
import { GithubIcon, ExternalIcon, ChevronDown } from "./icons";

function traceLine(p: Project) {
  if (p.status === "live") return p.latency ? `200 OK · ${p.latency}` : "200 OK";
  return "202 ACCEPTED";
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-muted transition-colors hover:border-fg/30 hover:text-fg"
    >
      {children}
      <span className="meta normal-case" style={{ letterSpacing: 0 }}>
        {label}
      </span>
    </a>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  const live = p.status === "live";
  return (
    <article className="card card-hover group flex flex-col overflow-hidden">
      {/* preview image (16:9) with the HTTP-response overlay */}
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-line bg-card">
        {p.imageUrl ? (
          <Image
            src={p.imageUrl}
            alt={`${p.name} preview`}
            fill
            sizes="(max-width: 640px) 100vw, 360px"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden
            className="size-full bg-[radial-gradient(100%_120%_at_0%_0%,rgb(var(--accent)/0.4),transparent_60%),radial-gradient(100%_120%_at_100%_100%,rgb(var(--accent-ink)/0.18),transparent_55%)]"
          />
        )}
        <div className="scanlines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        {/* top-left: status pill */}
        {live ? (
          <span className="pill absolute left-2 top-2 border-success/30 bg-successSoft text-success backdrop-blur">
            <span className="size-1.5 rounded-full bg-success dot-pulse" aria-hidden />
            LIVE
          </span>
        ) : (
          <span className="pill absolute left-2 top-2 border-warning/30 bg-warningSoft text-warning backdrop-blur">
            <span className="size-1.5 rounded-full bg-warning" aria-hidden />
            IN PROGRESS
          </span>
        )}
        {/* top-right: trace line */}
        <span className="pill absolute right-2 top-2 bg-bg/80 text-fg backdrop-blur">
          {traceLine(p)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-none">{p.name}</h3>
          <span className="meta shrink-0">{p.year}</span>
        </div>

        <p className="mt-2 line-clamp-2 text-muted">{p.blurb}</p>

        <details data-card className="mt-3">
          <summary className="meta flex cursor-pointer list-none items-center gap-1 text-accentInk hover:opacity-80">
            Show engineering details
            <ChevronDown className="chev" />
          </summary>
          <dl className="mt-3 space-y-3 border-l border-dashed border-line pl-3">
            <div>
              <dt className="meta">Architecture</dt>
              <dd className="mt-1 text-muted">{p.details.architecture}</dd>
            </div>
            <div>
              <dt className="meta">Key decisions</dt>
              <dd className="mt-1 text-muted">{p.details.decisions}</dd>
            </div>
            <div>
              <dt className="meta">Tradeoffs</dt>
              <dd className="mt-1 text-muted">{p.details.tradeoffs}</dd>
            </div>
          </dl>
        </details>

        {p.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex gap-2 pt-4">
          {p.github && (
            <IconLink href={p.github} label="Repo">
              <GithubIcon />
            </IconLink>
          )}
          {p.demo && (
            <IconLink href={p.demo} label="Live">
              <ExternalIcon />
            </IconLink>
          )}
        </div>
      </div>
    </article>
  );
}
