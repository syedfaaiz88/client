import { Theme } from "../constants/theme.constants";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import Button from "./Reusable/Button";

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
      <Button
        primary
        onClick={toggleDropdown}
      >
        🎨 {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="space-y-1 w-32 p-1 absolute text-sm mt-2 bg-card border border-border rounded-lg shadow-lg z-50 overflow-hidden">
          {themes.map((t) => (
            <button
              key={t}
              className={`block w-full text-left py-1 px-2 hover:bg-button-hover-primary rounded ${
                theme === t ? "bg-button-hover-primary" : ""
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
