import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../constants/theme.constants";

/**
 * Theme Context Type
 */
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme Provider Component
 */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const storedTheme = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
  const [theme, setTheme] = useState<Theme>(storedTheme || "light");

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(`theme-${theme}`);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom Hook to use Theme Context
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
