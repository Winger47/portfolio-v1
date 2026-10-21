import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import { getCodeforces } from "@/data/codeforces";

export default async function Home() {
  const cf = await getCodeforces();
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="section pb-0 pt-6">
          <Hero />
        </section>
        <section className="section pt-8">
          <div className="meta mb-4">EXPLORE</div>
          <BentoGrid cf={cf} />
        </section>
      </main>
    </>
  );
}
