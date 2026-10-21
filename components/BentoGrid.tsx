import Link from "next/link";
import Reveal from "./Reveal";
import ContributionGraph from "./ContributionGraph";
import { profile, projects, experience, pages } from "@/content";
import { allSkills, topSkills } from "@/data/skills";
import type { CfData } from "@/data/codeforces";

function ViewArrow() {
  return (
    <div className="mt-3 flex justify-end">
      <span className="meta inline-flex items-center gap-1 normal-case text-accentInk">
        View
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </div>
  );
}

function StatusDot({ live }: { live: boolean }) {
  return (
    <span
      aria-hidden
      className={`size-1.5 shrink-0 rounded-full ${live ? "bg-success" : "bg-warning"}`}
    />
  );
}

const tile = "card card-hover group flex h-full flex-col p-4";

export default function BentoGrid({ cf }: { cf: CfData }) {
  const featured = projects.slice(0, 3);
  const moreSkills = allSkills.length - 6;

  return (
    <div className="grid grid-cols-1 gap-3 sm:auto-rows-[150px] sm:grid-cols-6">
      {/* Projects */}
      <Reveal className="h-full sm:col-span-4 sm:row-span-2" delay={0}>
        <Link href={pages.projects.href} className={tile} aria-label="Projects">
          <div className="meta">{pages.projects.mono}</div>
          <h3 className="mt-1 font-display text-xl leading-none">Projects</h3>
          <p className="meta mt-2 normal-case" style={{ letterSpacing: 0 }}>
            {projects.length} projects
          </p>
          <ul className="mt-3 flex-1 space-y-2">
            {featured.map((p) => (
              <li key={p.name} className="flex items-center gap-2 text-sm text-fg">
                <StatusDot live={p.status === "live"} />
                <span className="truncate">{p.name}</span>
                <span className="meta ml-auto shrink-0 normal-case" style={{ letterSpacing: 0 }}>
                  {p.status === "live" ? "LIVE" : "IN PROGRESS"}
                </span>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5" aria-hidden>
              {projects.slice(0, 4).map((p) => (
                <span
                  key={p.name}
                  className="size-6 rounded-[4px] border border-line bg-[radial-gradient(100%_100%_at_0%_0%,rgb(var(--accent)/0.5),transparent_70%)]"
                />
              ))}
            </div>
            <span className="meta inline-flex items-center gap-1 normal-case text-accentInk">
              View
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </Link>
      </Reveal>

      {/* DSA */}
      <Reveal className="h-full sm:col-span-2 sm:row-span-2" delay={70}>
        <Link href={pages.dsa.href} className={tile} aria-label="DSA and Algorithms">
          <div className="meta">{pages.dsa.mono}</div>
          <h3 className="mt-1 font-display text-xl leading-none">DSA</h3>
          <div className="mt-3 flex-1">
            <div className="font-display text-2xl leading-none text-[#1D4ED8] dark:text-[#93C5FD]">
              Codeforces {cf.rank}
            </div>
            <div className="meta mt-1 normal-case" style={{ letterSpacing: 0 }}>
              @{cf.handle}
            </div>
            <div className="mt-3 font-mono text-sm text-fg">
              {cf.rating ?? "—"} <span className="text-muted">current</span>
            </div>
            {cf.maxRating != null && (
              <div className="font-mono text-xs text-muted">{cf.maxRating} max</div>
            )}
          </div>
          <ViewArrow />
        </Link>
      </Reveal>

      {/* Experience */}
      <Reveal className="h-full sm:col-span-3" delay={140}>
        <Link href={pages.experience.href} className={tile} aria-label="Experience">
          <div className="meta">{pages.experience.mono}</div>
          <h3 className="mt-1 font-display text-xl leading-none">Experience</h3>
          <div className="mt-2 flex-1 space-y-0.5">
            <p className="text-sm text-fg">
              {experience.company} · {experience.title.replace(" (Power Programmer)", "")}
            </p>
            <p className="meta normal-case" style={{ letterSpacing: 0 }}>
              {experience.period}
            </p>
            <p className="meta normal-case" style={{ letterSpacing: 0 }}>
              Banking (.NET) · E-commerce (Python)
            </p>
          </div>
          <ViewArrow />
        </Link>
      </Reveal>

      {/* Skills — highlighted tile */}
      <Reveal className="h-full sm:col-span-3" delay={210}>
        <Link
          href={pages.skills.href}
          className={`${tile} border-accent bg-accentSoft`}
          aria-label="Skills"
        >
          <div className="flex items-center justify-between">
            <div className="meta text-accentInk">{pages.skills.mono}</div>
            <span className="pill border-accent bg-card text-accentInk">{allSkills.length}</span>
          </div>
          <h3 className="mt-1 font-display text-xl leading-none">Skills</h3>
          <div className="mt-2 flex flex-1 flex-wrap content-start gap-1.5">
            {topSkills.slice(0, 6).map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
            <span className="tag border-accent text-accentInk">+{moreSkills} more</span>
          </div>
          <ViewArrow />
        </Link>
      </Reveal>

      {/* Activity */}
      <Reveal className="h-full sm:col-span-4" delay={280}>
        <Link href={pages.activity.href} className={tile} aria-label="Activity">
          <div className="meta">{pages.activity.mono}</div>
          <h3 className="mt-1 font-display text-xl leading-none">Activity</h3>
          <div className="mt-3 flex-1 overflow-hidden">
            <ContributionGraph username="Winger47" weeks={16} compact />
          </div>
          <ViewArrow />
        </Link>
      </Reveal>

      {/* Resume — two buttons instead of one link */}
      <Reveal className="h-full sm:col-span-2" delay={350}>
        <div className="card flex h-full flex-col p-4">
          <div className="meta">07 — RESUME</div>
          <h3 className="mt-1 font-display text-xl leading-none">Résumé</h3>
          <p className="meta mt-2 flex-1 normal-case" style={{ letterSpacing: 0 }}>
            Résumé · PDF
          </p>
          <div className="flex gap-2">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="pill flex-1 justify-center text-fg transition-colors hover:border-fg/30"
            >
              View
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="pill flex-1 justify-center text-fg transition-colors hover:border-fg/30"
            >
              Download
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
