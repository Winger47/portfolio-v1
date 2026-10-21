import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import Projects from "@/components/Projects";
import { pages } from "@/content";

export const metadata: Metadata = {
  title: "Projects — Shikhar Pandav",
  description: pages.projects.desc,
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="projects">
          <Projects />
        </PageShell>
      </main>
    </>
  );
}
