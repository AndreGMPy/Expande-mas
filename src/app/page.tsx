import { MouseGlow } from "@/components/effects/MouseGlow";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { MarketingTechnology } from "@/components/sections/MarketingTechnology";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { WhyExpande } from "@/components/sections/WhyExpande";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <ValueProposition />
        <Services />
        <MarketingTechnology />
        <Process />
        <WhyExpande />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
