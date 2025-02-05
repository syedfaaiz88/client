import { Theme } from "../constants/theme.constants";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

/**
 * Theme Chooser Component
 */
const ThemeChooser = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: Theme[] = [
    "light",
    "dark",
    "solarized-light",
    "forest",
    "cyberpunk",
    "dracula",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        className="p-2 rounded-lg bg-card text-text flex items-center gap-2"
        onClick={toggleDropdown}
      >
        🎨 {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
          {themes.map((t) => (
            <button
              key={t}
              className={`block w-full text-left p-2 hover:bg-button-hover ${
                theme === t ? "font-bold" : ""
              }`}
              onClick={() => selectTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeChooser;
