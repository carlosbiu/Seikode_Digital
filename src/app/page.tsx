import HeroSection from "@/components/seikode/HeroSection";
import ContrastSection from "@/components/seikode/ContrastSection";
import PortfolioSection from "@/components/seikode/PortfolioSection";
import PricingSection from "@/components/seikode/PricingSection";
import FaqAndCtaSection from "@/components/seikode/FaqAndCtaSection";
import Footer from "@/components/seikode/Footer";
import { DottedSurface } from "@/components/ui/dotted-surface";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden" style={{ background: "#000105" }}>
      <DottedSurface />

      <section id="inicio">
        <HeroSection />
      </section>

      <section id="contraste">
        <ContrastSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="planos">
        <PricingSection />
      </section>

      <section id="faq">
        <FaqAndCtaSection />
      </section>

      <Footer />
    </main>
  );
}
