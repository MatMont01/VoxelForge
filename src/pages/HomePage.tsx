import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/NewHeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { SocialSection } from "../components/sections/SocialSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { AboutSection } from "../components/sections/AboutSection";
import { DesignsSection } from "../components/sections/DesignsSection";
import { EquipmentSection } from "../components/sections/EquipmentSection";
import { ContactSection } from "../components/sections/ContactSection";
import { FloatingWhatsApp } from "../components/ui/FloatingWhatsApp.tsx";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#313841] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main>
        <HeroSection />
        <ServicesSection />
        <SocialSection />
        <PortfolioSection />
        <AboutSection />
        <DesignsSection />
        <EquipmentSection />
        <ContactSection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};
