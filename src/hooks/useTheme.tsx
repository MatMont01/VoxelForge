import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { ThemeContextType } from "../types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : true; // Dark mode por defecto
    }
    return true; // Dark mode por defecto
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Ensure the dark class is applied to html element
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }

    // Force a repaint to ensure theme changes are applied
    html.style.colorScheme = darkMode ? "dark" : "light";
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
