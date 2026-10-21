import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import Dsa from "@/components/Dsa";
import { pages } from "@/content";
import { getCodeforces } from "@/data/codeforces";

export const metadata: Metadata = {
  title: "DSA & Algorithms — Shikhar Pandav",
  description: pages.dsa.desc,
};

export default async function DsaPage() {
  const cf = await getCodeforces();
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="dsa">
          <Dsa cf={cf} />
        </PageShell>
      </main>
    </>
  );
}
