import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Force dark mode globally and keep it regardless of system preference
document.documentElement.classList.add("dark");
document.documentElement.setAttribute("data-theme", "dark");
document.documentElement.style.colorScheme = "dark";
document.body.style.backgroundColor = "#0a0a0a";

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
