import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/NewHeroSection";
import { VoxelMeaningSection } from "../components/sections/VoxelMeaningSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { LivePrintingSection } from "../components/sections/LivePrintingSection";
import { EquipmentSection } from "../components/sections/EquipmentSection";
import { PortfolioSection } from "../components/sections/PortfolioSection";
import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { SocialSection } from "../components/sections/SocialSection";

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#313841] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <main>
        <HeroSection />
        <VoxelMeaningSection />
        <ServicesSection />
        <LivePrintingSection />
        <EquipmentSection />
        <PortfolioSection />
        <AboutSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
