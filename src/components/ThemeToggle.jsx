export default function ThemeToggle({ theme, setTheme }) {
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      className={`theme-switch ${isDark ? "dark" : ""}`}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="icon sun">☀️</span>
      <span className="icon moon">🌙</span>
      <span className="thumb" />
    </button>
  );
}
