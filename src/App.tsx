import { useEffect, useState } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/layout/NewHeader";
import { Loader, CustomCursor } from "./components/ui";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { ServicesSection } from "./components/sections/ServicesSection";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { ContactSection } from "./components/sections/ContactSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Crossfade approach: render app behind loader, reveal, then unmount loader
  const [showLoader, setShowLoader] = useState(true);
  const [appVisible, setAppVisible] = useState(false);
  const [mountContent, setMountContent] = useState(false);

  useEffect(() => {
    // Configure GSAP for better performance with native scroll
    gsap.ticker.lagSmoothing(0);

    return () => {
      // Clean up
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Run ScrollTrigger refresh only after we mount the heavy content
  useEffect(() => {
    if (!mountContent) return;
    document.documentElement.style.scrollBehavior = "smooth";
    ScrollTrigger.refresh();
  }, [mountContent]);

  const handleLoadingComplete = () => {
    // Start content reveal with a small delay so the fade is clearly perceived
    window.scrollTo(0, 0);
    const startDelay = 200; // tighter sync with the ring pulse
    const contentFadeMs = 1200; // match transition duration below
    // Mount content immediately but keep it hidden until the reveal starts
    if (!mountContent) setMountContent(true);
    setTimeout(() => {
      // trigger transition on next frame so initial state (opacity 0) applies
      requestAnimationFrame(() => setAppVisible(true));
    }, startDelay);
    // Keep the loader a bit longer to overlap the beginning of the content fade-in
    setTimeout(
      () => setShowLoader(false),
      startDelay + Math.min(900, contentFadeMs)
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#313841] transition-colors duration-300">
        {/* Header mounts only when content is ready to avoid heavy work during loader */}
        {mountContent && <Header />}
        {/* App content behind loader, crossfading in */}
        {mountContent && (
          <div
            className={
              (appVisible
                ? "opacity-100 scale-100 blur-0"
                : "opacity-0 scale-[0.965] blur-[4px]") +
              " transition-all duration-[1200ms] ease-out"
            }
            style={{
              willChange: "opacity, transform, filter",
              transition:
                "opacity 1200ms ease-out, transform 1200ms ease-out, filter 1200ms ease-out",
              visibility: appVisible ? "visible" : "hidden",
            }}
            aria-hidden={!appVisible}
          >
            {/* Mount cursor with the rest to avoid extra work during loader */}
            <CustomCursor />
            <div className="App">
              <BrowserRouter>
                <Suspense fallback={null}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/servicios" element={<ServicesRoute />} />
                    <Route path="/portafolio" element={<PortfolioRoute />} />
                    <Route path="/contacto" element={<ContactRoute />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                </Suspense>
              </BrowserRouter>
            </div>
          </div>
        )}
        {showLoader && <Loader onLoadingComplete={handleLoadingComplete} />}
      </div>
    </ThemeProvider>
  );
}

// Minimal route wrappers to provide distinct URLs for indexing.
// They reuse the existing sections with some spacing and the same theme.
function ServicesRoute() {
  return (
    <main className="pt-24">
      <ServicesSection />
    </main>
  );
}

function PortfolioRoute() {
  return (
    <main className="pt-24">
      <PortfolioSection />
    </main>
  );
}

function ContactRoute() {
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
}

export default App;
