import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import Activity from "@/components/Activity";
import { pages } from "@/content";
import { getLastPush } from "@/data/github";

export const metadata: Metadata = {
  title: "Activity — Shikhar Pandav",
  description: pages.activity.desc,
};

export default async function ActivityPage() {
  const lastPush = await getLastPush();
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="activity">
          <Activity lastPush={lastPush} />
        </PageShell>
      </main>
    </>
  );
}
