import Tile, { ViewArrow } from "./bento/Tile";
import ProjectsPreview from "./bento/ProjectsPreview";
import ContributionGraph from "./ContributionGraph";
import Sparkline from "./Sparkline";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { profile, projects, experience, pages, nowHue, now } from "@/content";
import { allSkills, topSkills } from "@/data/skills";
import type { CfData } from "@/data/codeforces";
import type { LastPush } from "@/data/github";

export default function BentoGrid({ cf, lastPush }: { cf: CfData; lastPush: LastPush }) {
  const marquee = [...topSkills, ...topSkills];

  return (
    <div className="grid grid-cols-1 gap-3 sm:auto-rows-[150px] sm:grid-cols-6">
      {/* Projects */}
      <Tile
        href={pages.projects.href}
        hue={pages.projects.hue}
        span="sm:col-span-4 sm:row-span-2"
        mono={pages.projects.mono}
        title="Projects"
        delay={0}
      >
        <ProjectsPreview projects={projects} />
        <ViewArrow hue={pages.projects.hue} />
      </Tile>

      {/* DSA */}
      <Tile
        href={pages.dsa.href}
        hue={pages.dsa.hue}
        span="sm:col-span-2 sm:row-span-2"
        mono={pages.dsa.mono}
        title="DSA"
        delay={70}
      >
        <div className="mt-3 flex-1">
          <div className="font-display text-2xl leading-none" style={{ color: pages.dsa.hue }}>
            Codeforces {cf.rank}
          </div>
          <div className="meta mt-1 normal-case" style={{ letterSpacing: 0 }}>
            @{cf.handle}
          </div>
          <div className="mt-3 font-mono text-sm text-fg">
            {cf.rating ?? "—"} <span className="text-muted">current</span>
          </div>
          {cf.history.length >= 2 && (
            <div className="mt-2" style={{ color: pages.dsa.hue }}>
              <Sparkline points={cf.history.map((h) => h.r)} draw width={150} height={34} />
            </div>
          )}
        </div>
        <ViewArrow hue={pages.dsa.hue} />
      </Tile>

      {/* Experience */}
      <Tile
        href={pages.experience.href}
        hue={pages.experience.hue}
        span="sm:col-span-3"
        mono={pages.experience.mono}
        title="Experience"
        delay={140}
      >
        <div className="mt-3 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-sm text-fg">
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full" style={{ background: pages.experience.hue }} />
              Banking (.NET)
            </span>
            <span aria-hidden className="text-muted">
              →
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-line" />
              E-commerce (Python)
            </span>
          </div>
          <p className="meta mt-3 normal-case" style={{ letterSpacing: 0 }}>
            {experience.company} · Specialist Programmer · {experience.period}
          </p>
        </div>
        <ViewArrow hue={pages.experience.hue} />
      </Tile>

      {/* Skills */}
      <Tile
        href={pages.skills.href}
        hue={pages.skills.hue}
        span="sm:col-span-3"
        mono={pages.skills.mono}
        title="Skills"
        delay={210}
      >
        <div className="mt-2 flex items-center gap-2">
          <span className="pill" style={{ color: pages.skills.hue }}>
            {allSkills.length}
          </span>
          <span className="meta normal-case" style={{ letterSpacing: 0 }}>
            skills
          </span>
        </div>
        <div className="marquee-wrap mt-3 flex-1 overflow-hidden">
          <div className="marquee-track flex w-max gap-2">
            {marquee.map((s, idx) => (
              <span key={idx} className="tag whitespace-nowrap">
                {s}
              </span>
            ))}
          </div>
        </div>
        <ViewArrow hue={pages.skills.hue} />
      </Tile>

      {/* Now (no page) */}
      <Tile hue={nowHue} span="sm:col-span-2" mono="— NOW" title="Now" delay={280}>
        <div className="mt-3 flex-1 space-y-1 font-mono text-[11px] text-muted">
          <p>
            building: <span className="text-fg">{now.building}</span>
          </p>
          <p>learning: {now.learning}</p>
          <p>reading: {now.reading}</p>
        </div>
      </Tile>

      {/* Activity */}
      <Tile
        href={pages.activity.href}
        hue={pages.activity.hue}
        span="sm:col-span-2"
        mono={pages.activity.mono}
        title="Activity"
        delay={350}
      >
        <div className="mt-3 flex-1 overflow-hidden">
          <ContributionGraph username="Winger47" weeks={16} compact />
          {lastPush && (
            <p className="mt-1 font-mono text-[11px] text-muted">last push: {lastPush.ago}</p>
          )}
        </div>
        <ViewArrow hue={pages.activity.hue} />
      </Tile>

      {/* Connect (card with nested links; title links to /connect) */}
      <Tile
        hue={pages.connect.hue}
        span="sm:col-span-2"
        mono={pages.connect.mono}
        title="Connect"
        titleHref={pages.connect.href}
        delay={420}
      >
        <div className="mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted">
          <span className="size-1.5 rounded-full bg-success dot-pulse" aria-hidden />
          replies within 24h
        </div>
        <div className="mt-3 flex flex-1 items-center gap-2">
          <a
            href={`mailto:${profile.links.email}`}
            aria-label="Email"
            className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-fg"
          >
            <MailIcon />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-fg"
          >
            <LinkedinIcon />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-fg"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.links.codeforces}
            target="_blank"
            rel="noreferrer"
            aria-label="Codeforces"
            className="inline-flex size-8 items-center justify-center rounded-full border border-line font-mono text-[10px] text-muted transition-colors hover:text-fg"
          >
            CF
          </a>
        </div>
        <a
          href={profile.resumeUrl}
          download
          className="pill justify-center text-fg transition-colors hover:border-fg/30"
        >
          Résumé ↓
        </a>
      </Tile>
    </div>
  );
}
