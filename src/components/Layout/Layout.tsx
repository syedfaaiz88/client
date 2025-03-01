import { ReactNode, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeChooser from "../ThemeChooser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchProfile } from "../../redux/slices/profileSlice";
import { Loader } from "../../assets/Loader";
import LanguageChooser from "../LanguageChooser";

function Layout({ element }: { element: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, user } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background text-text">
      {/* Header */}
      <Navbar user={user!} loading={loading} />

      {/* Main layout */}
      {loading ? (
        <div className="flex-1 flex justify-center items-center">
          {loading ? <Loader /> : <main className="w-full">{element}</main>}
        </div>
      ) : (
        <div className="flex-1 overflow-hidden">
          {/* Content area */}
          <main>{element}</main>
        </div>
      )}
      {/* Footer */}
      <Footer />

      {/* Theme Chooser */}
      <ThemeChooser />
      <LanguageChooser />
    </div>
  );
}

export default Layout;
