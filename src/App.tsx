import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/layout/NewHeader";
import { CustomCursor } from "./components/ui";

function App() {
  // Ensure smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Dynamic title refinement (could expand with router later)
  useEffect(() => {
    const baseTitle = "Voxel Forge";
    const tagline = "Impresión 3D en Santa Cruz";
    if (document.title.indexOf(baseTitle) === -1) {
      document.title = `${baseTitle} | ${tagline}`;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#313841] text-gray-100" lang="es">
      <Header />
      <CustomCursor />
      <div className="App">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
