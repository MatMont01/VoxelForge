import { useEffect, useState } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/layout/NewHeader";
import { Loader, CustomCursor } from "./components/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Crossfade approach: render app behind loader, reveal, then unmount loader
  const [showLoader, setShowLoader] = useState(true);
  const [appVisible, setAppVisible] = useState(false);

  useEffect(() => {
    // Configure GSAP for better performance with native scroll
    gsap.ticker.lagSmoothing(0);

    // Initialize GSAP ScrollTrigger with native scroll
    ScrollTrigger.refresh();

    // Ensure smooth native scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      // Clean up
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleLoadingComplete = () => {
    // Reveal app content with a slightly longer overlap for a smoother feel
    setAppVisible(true);
    // Allow the loader to fade out while the app scales in; slightly longer than 500ms for fluidity
    setTimeout(() => setShowLoader(false), 700);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#313841] transition-colors duration-300">
        {/* Keep Header outside of the animated container so position: fixed isn't affected by transforms */}
        <Header />
        {/* App content behind loader, crossfading in */}
        <div
          className={
            (appVisible
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-[0.98] blur-[2px]") +
            " transition-all duration-700"
          }
          style={{ willChange: "opacity, transform, filter" }}
        >
          <CustomCursor />
          <div className="App">
            <HomePage />
          </div>
        </div>
        {showLoader && <Loader onLoadingComplete={handleLoadingComplete} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
