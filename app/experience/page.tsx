import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import Experience from "@/components/Experience";
import { pages } from "@/content";

export const metadata: Metadata = {
  title: "Experience — Shikhar Pandav",
  description: pages.experience.desc,
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="experience">
          <Experience />
        </PageShell>
      </main>
    </>
  );
}
