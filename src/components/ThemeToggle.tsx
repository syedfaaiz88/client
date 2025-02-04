import { useTheme } from "../context/ThemeContext";
/**
 * Theme Toggle Component
 */
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  // Cycle through themes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button
      className="p-2 border rounded-lg bg-primary text-text"
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
