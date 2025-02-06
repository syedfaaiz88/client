import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ element }: { element: ReactNode}) {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Navbar />

      {/* Main layout with sidebar and content */}
      <div className="flex flex-row h-full overflow-hidden">
        {/* Sidebar */}
        <div className="hidden md:block">
          {/* <Sidebar items={items} bgColor={'bg-gray-100'}/> */}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col justify-between">
            {/* Main content */}
            <main className="min-h-screen">{element}</main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
