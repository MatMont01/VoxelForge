import { useEffect } from "react";
import { landingPage } from "../../application/landingPage";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { PortfolioSection } from "./sections/PortfolioSection";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WorkshopSection } from "./sections/WorkshopSection";
import { useViewportReveal } from "./useViewportReveal";

export function LandingPage() {
  useViewportReveal();

  useEffect(() => {
    if (!window.location.hash) {
      return;
    }

    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = document.getElementById(targetId);

    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    }
  }, []);

  return (
    <>
      <HeroSection content={landingPage.hero} />
      <WorkshopSection
        workshop={landingPage.workshop}
        meaning={landingPage.meaning}
      />
      <PortfolioSection content={landingPage.portfolio} />
      <ServicesSection content={landingPage.services} />
      <ProcessSection content={landingPage.process} materials={landingPage.services.materials} />
      <ContactSection content={landingPage.contact} />
    </>
  );
}
