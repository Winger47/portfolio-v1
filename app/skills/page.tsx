import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import SkillsView from "@/components/SkillsView";
import { pages } from "@/content";

export const metadata: Metadata = {
  title: "Skills — Shikhar Pandav",
  description: pages.skills.desc,
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="skills">
          <SkillsView />
        </PageShell>
      </main>
    </>
  );
}
