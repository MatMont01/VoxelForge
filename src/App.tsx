import { About } from "./components/About";
import { CinematicHero } from "./components/CinematicHero";
import { Contact } from "./components/Contact";
import { Equipment } from "./components/Equipment";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Materials } from "./components/Materials";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-[#101114] text-white">
      <Header />
      <main>
        <CinematicHero />
        <Services />
        <Process />
        <Portfolio />
        <Materials />
        <Equipment />
        <About />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
