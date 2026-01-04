import { createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";
import type { ThemeContextType } from "../types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Hard-force dark mode always
  const darkMode = true;

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("dark");
    html.setAttribute("data-theme", "dark");
    html.style.colorScheme = "dark";
  }, []);

  const toggleDarkMode = () => undefined;

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
