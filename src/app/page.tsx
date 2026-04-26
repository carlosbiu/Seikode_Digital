import HeroSection from "@/components/seikode/HeroSection";
import ContrastSection from "@/components/seikode/ContrastSection";
import PortfolioSection from "@/components/seikode/PortfolioSection";
import PricingSection from "@/components/seikode/PricingSection";
import FaqAndCtaSection from "@/components/seikode/FaqAndCtaSection";
import Footer from "@/components/seikode/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col" style={{ background: "#000105" }}>
      <HeroSection />
      <ContrastSection />
      <PortfolioSection />
      <PricingSection />
      <FaqAndCtaSection />
      <Footer />
    </main>
  );
}
