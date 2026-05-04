import { useEffect } from "react";
import { About } from "./components/About";
import { CinematicHero } from "./components/CinematicHero";
import { Contact } from "./components/Contact";
import { Equipment } from "./components/Equipment";
import { Faq } from "./components/Faq";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ForgeStory } from "./components/ForgeStory";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ImmersiveBackdrop } from "./components/ImmersiveBackdrop";
import { Materials } from "./components/Materials";
import { Meaning } from "./components/Meaning";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { useImmersiveScroll } from "./hooks/useImmersiveScroll";
import { scrollToHash } from "./utils/links";

export default function App() {
  const { mode, chapter } = useImmersiveScroll();

  useEffect(() => {
    if (!window.location.hash) return;
    const timers = [0, 120, 480].map((delay) =>
      window.setTimeout(() => scrollToHash(window.location.hash, "auto"), delay)
    );
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <div className="immersive-page min-h-screen bg-[#08090c] text-white">
      <ImmersiveBackdrop mode={mode} chapter={chapter} />
      <Header />
      <main className="relative z-10">
        <CinematicHero />
        <ForgeStory />
        <Meaning />
        <Services />
        <Process />
        <Portfolio />
        <Materials />
        <Equipment />
        <About />
        <Faq />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
