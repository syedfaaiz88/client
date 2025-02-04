import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="p-6 bg-background text-text border border-secondary rounded-lg shadow-md">
    <h2 className="text-primary text-xl font-bold">Themed Card</h2>
    <p className="text-secondary">
      This card dynamically adapts to theme changes.
    </p>
    <ThemeToggle />
  </div>
  );
}

export default App;
