import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeChooser from "../ThemeChooser";
import LanguageChooser from "../LanguageChooser";
import { User } from "../../types/auth.types";

function Layout({ element }: { element: ReactNode }) {
  const user: User = JSON.parse(localStorage.getItem("user")!)

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      {/* Header */}
      <Navbar user={user} />
        <div className="flex-1 overflow-hidden">
          {/* Content area */}
          <main>{element}</main>
        </div>
      {/* Footer */}
      <Footer />

      {/* Theme Chooser */}
      <ThemeChooser />
      <LanguageChooser />
    </div>
  );
}

export default Layout;
