import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import Activity from "@/components/Activity";
import { pages } from "@/content";

export const metadata: Metadata = {
  title: "Activity — Shikhar Pandav",
  description: pages.activity.desc,
};

export default function ActivityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="activity">
          <Activity />
        </PageShell>
      </main>
    </>
  );
}
