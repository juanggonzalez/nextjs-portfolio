import HeroSection from "@/app/components/HeroSection";
import SkillsSection from "@/app/components/SkillsSection"; 
import ServicesSection from "@/app/components/ServiceSection";
import PortfolioSection from "@/app/components/PortfolioSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <SkillsSection /> 
      <ServicesSection />
      <PortfolioSection />
    </main>
  );
}
