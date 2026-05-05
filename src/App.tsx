import { MotionConfig } from "motion/react";
import { CinematicExperience } from "./components/CinematicExperience";
import { FloatingContact } from "./components/FloatingContact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <div className="site-shell">
        <Header />
        <main id="main-content">
          <CinematicExperience />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </MotionConfig>
  );
}

export default App;
