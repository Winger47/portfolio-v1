import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ContributionGraph from "@/components/ContributionGraph";
import {
  profile,
  stats,
  about,
  experience,
  projects,
  skills,
  competitive,
} from "@/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="home">
        {/* ── HERO ───────────────────────────────────────────── */}
        <section className="mx-auto flex min-h-screen max-w-content flex-col justify-center px-6 pt-24">
          <p className="eyebrow mb-6">backend · genai · distributed systems</p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-muted">{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">{profile.tagline}</p>

          {/* status line — reads like live system state */}
          <div className="mt-8 max-w-2xl overflow-x-auto rounded-lg border border-line bg-surface px-4 py-3 font-mono text-sm">
            <span className="text-live">●</span>{" "}
            <span className="text-muted">status:</span>{" "}
            <span className="text-ink">{profile.status}</span>
            <br />
            <span className="text-muted">stack:</span>{" "}
            <span className="text-amber">{profile.stack.join(" · ")}</span>
            <span className="cursor" />
          </div>

          <div className="mt-10 flex flex-wrap gap-4 font-mono text-sm">
            <a
              href="#projects"
              className="rounded border border-amber/50 bg-amber-dim px-5 py-2.5 text-amber transition-colors hover:bg-amber/20"
            >
              view projects →
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-line px-5 py-2.5 text-muted transition-colors hover:text-ink hover:border-ink/40"
            >
              github
            </a>
          </div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────── */}
        <section id="about" className="section border-t border-line">
          <Reveal>
            <p className="eyebrow mb-3">// about</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">The short version</h2>
          </Reveal>
          <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal className="space-y-5 text-muted leading-relaxed">
              {about.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <blockquote className="border-l-2 border-amber pl-4 text-ink">
                “{about.quote}”
              </blockquote>
            </Reveal>
            <Reveal delay={120}>
              <div className="card p-5">
                <p className="eyebrow mb-3">education</p>
                <p className="font-medium text-ink">{about.education.degree}</p>
                <p className="mt-1 text-sm text-muted">{about.education.school}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {about.education.period} · {about.education.place}
                </p>
              </div>
            </Reveal>
          </div>

          {/* metrics panel */}
          <Reveal delay={160}>
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-5">
                  <p className="font-display text-2xl font-bold text-amber md:text-3xl">{s.value}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* github activity */}
          <Reveal delay={200}>
            <div className="mt-8 card overflow-x-auto p-5">
              <p className="eyebrow mb-4">github activity · @Winger47</p>
              <div className="min-w-[680px]">
                <ContributionGraph username="Winger47" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ── EXPERIENCE ─────────────────────────────────────── */}
        <section id="experience" className="section border-t border-line">
          <Reveal>
            <p className="eyebrow mb-3">// experience</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">Where I&apos;ve worked</h2>
          </Reveal>
          <div className="mt-10 space-y-6">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-ink">{job.company}</h3>
                    <span className="font-mono text-xs text-muted">
                      {job.period} · {job.kind}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-amber">{job.role}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted">
                    {job.points.map((pt, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-1 text-amber">▹</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ───────────────────────────────────────── */}
        <section id="projects" className="section border-t border-line">
          <Reveal>
            <p className="eyebrow mb-3">// projects</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">Things I&apos;ve built</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 80}>
                <article
                  className={`card flex h-full flex-col p-6 ${
                    p.featured ? "md:col-span-2 border-amber/30" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl text-ink">{p.name}</h3>
                    <span className="font-mono text-xs text-muted">
                      {p.featured ? "featured · " : ""}
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-amber">{p.blurb}</p>
                  <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4 font-mono text-sm">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="link-amber">
                        github →
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="link-amber">
                        live demo →
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── SKILLS + CP ────────────────────────────────────── */}
        <section id="skills" className="section border-t border-line">
          <Reveal>
            <p className="eyebrow mb-3">// stack</p>
            <h2 className="font-display text-3xl font-medium md:text-4xl">What I work with</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 3) * 70}>
                <div className="card p-5">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">{s.group}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="tag text-ink">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 card p-6">
              <p className="eyebrow mb-4">competitive programming</p>
              {competitive.map((c) => (
                <a
                  key={c.platform}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-wrap items-baseline justify-between gap-2 py-1"
                >
                  <span className="font-display text-lg text-ink group-hover:text-amber">
                    {c.platform}
                  </span>
                  <span className="font-mono text-sm text-muted">{c.detail}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ── CONTACT ────────────────────────────────────────── */}
        <section id="contact" className="section border-t border-line">
          <Reveal className="text-center">
            <p className="eyebrow mb-3">// contact</p>
            <h2 className="font-display text-3xl font-medium md:text-5xl">
              Let&apos;s build something solid.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              I&apos;m {profile.status.toLowerCase()}. The fastest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 font-mono text-sm">
              <a
                href={`mailto:${profile.links.email}`}
                className="rounded border border-amber/50 bg-amber-dim px-6 py-3 text-amber transition-colors hover:bg-amber/20"
              >
                {profile.links.email}
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-6 font-mono text-sm text-muted">
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">
                github
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
                linkedin
              </a>
              <a href={profile.links.leetcode} target="_blank" rel="noreferrer" className="hover:text-ink">
                leetcode
              </a>
            </div>
          </Reveal>
        </section>

        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-muted">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>{profile.location}</span>
          </div>
        </footer>
      </main>
    </>
  );
}