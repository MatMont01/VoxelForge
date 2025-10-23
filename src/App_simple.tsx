import { HomePage } from "./pages/HomePage";
import { CustomCursor } from "./components/ui";
// GSAP and theme provider removed for performance and dark-only mode

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <CustomCursor />
      <div className="App">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
