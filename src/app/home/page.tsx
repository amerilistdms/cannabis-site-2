import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { Accuracy } from "@/components/home/Accuracy";
import { Audiences } from "@/components/home/Audiences";
import { CtaSection } from "@/components/home/CtaSection";
import { Hero } from "@/components/home/Hero";
import { Solutions } from "@/components/home/Solutions";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="flex-1">
      <ScrollEffects>
        <Header overDark solidAfterHero />
        <Hero />
        <div data-reveal>
          <WhyChooseUs />
        </div>
        <Audiences />
        <Solutions />
        <Accuracy />
        <CtaSection />
        <div data-reveal>
          <Footer />
        </div>
      </ScrollEffects>
    </main>
  );
}
