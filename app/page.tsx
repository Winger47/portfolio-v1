import TopBar from "@/components/TopBar";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Activity from "@/components/Activity";
import SectionHeader from "@/components/SectionHeader";
import { about, profile } from "@/content";

export default function Home() {
  return (
    <>
      <TopBar />
      <main id="top">
        <section className="section pb-0 pt-6">
          <Hero />
        </section>

        <Reveal>
          <section id="about" className="section sep">
            <SectionHeader label="01 — ABOUT" title="About" />
            <ul className="space-y-3">
              {about.map((para, i) => (
                <li key={i} className="flex gap-3 text-muted">
                  <span
                    aria-hidden
                    className="mt-[11px] size-1 shrink-0 rounded-full bg-accentInk"
                  />
                  <span>{para}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section id="projects" className="section sep">
            <Projects />
          </section>
        </Reveal>

        <Reveal>
          <section id="experience" className="section sep">
            <Experience />
          </section>
        </Reveal>

        <Reveal>
          <section id="stack" className="section sep">
            <Stack />
          </section>
        </Reveal>

        <Reveal>
          <section id="activity" className="section sep">
            <Activity />
          </section>
        </Reveal>

        <footer className="section sep flex flex-wrap items-center justify-between gap-2">
          <span className="meta normal-case" style={{ letterSpacing: 0 }}>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="meta normal-case" style={{ letterSpacing: 0 }}>
            {profile.location}
          </span>
        </footer>
      </main>
    </>
  );
}
