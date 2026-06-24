import { FloatingContact } from "./components/FloatingContact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { LandingPage } from "./components/landing/LandingPage";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <div className="site-shell">
        <Header />
        <main id="main-content">
          <LandingPage />
        </main>
        <Footer />
        <FloatingContact />
      </div>
    </>
  );
}

export default App;
