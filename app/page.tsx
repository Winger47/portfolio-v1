import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Footer from "@/components/Footer";
import { getCodeforces } from "@/data/codeforces";
import { getLastPush } from "@/data/github";

export default async function Home() {
  const [cf, lastPush] = await Promise.all([getCodeforces(), getLastPush()]);
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="section relative overflow-hidden pb-0 pt-6">
          <Hero lastPush={lastPush} />
        </section>
        <section className="section pt-8">
          <div className="meta mb-4">EXPLORE</div>
          <BentoGrid cf={cf} lastPush={lastPush} />
        </section>
        <Footer />
      </main>
    </>
  );
}
