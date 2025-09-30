import { useEffect, useState } from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { HomePage } from "./pages/HomePage";
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
    // Reveal app content
    setAppVisible(true);
    // Unmount loader after crossfade
    setTimeout(() => setShowLoader(false), 500);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#313841] transition-colors duration-300">
        {/* App content behind loader, crossfading in */}
        <div
          className={
            (appVisible ? "opacity-100" : "opacity-0") +
            " transition-opacity duration-500"
          }
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
