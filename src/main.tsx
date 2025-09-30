import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Respect reduced motion preference at CSS level
if (
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  document.documentElement.classList.add("reduced-motion");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
