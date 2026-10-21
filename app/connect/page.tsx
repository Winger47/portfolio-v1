import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageShell from "@/components/PageShell";
import Connect from "@/components/Connect";
import { pages } from "@/content";

export const metadata: Metadata = {
  title: "Connect — Shikhar Pandav",
  description: pages.connect.desc,
};

export default function ConnectPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageShell page="connect">
          <Connect />
        </PageShell>
      </main>
    </>
  );
}
