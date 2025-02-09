import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeChooser from "../ThemeChooser";

function Layout({ element }: { element: ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-background text-text">
      {/* Header */}
      <Navbar />

      {/* Main layout */}
      <div className="flex-1 overflow-hidden">
        {/* Content area */}
        <main>{element}</main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Theme Chooser */}
      <ThemeChooser />
    </div>
  );
}

export default Layout;
