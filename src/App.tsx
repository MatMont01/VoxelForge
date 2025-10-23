import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/layout/NewHeader";

function App() {
  // Ensure smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-[#313841] text-gray-100">
      <Header />
      <div className="App">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
