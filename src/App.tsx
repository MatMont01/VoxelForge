import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./hooks/useTheme";
import { HomePage } from "./pages/HomePage";
import { Loader, CustomCursor } from "./components/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#313841] transition-colors duration-300">
        {isLoading ? (
          <Loader onLoadingComplete={handleLoadingComplete} />
        ) : (
          <>
            <CustomCursor />
            <Router>
              <div className="App">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                </Routes>
              </div>
            </Router>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
