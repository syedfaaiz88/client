import { User } from "../../types/auth.types";
import { Link } from "react-router";
import { useLanguage } from "../../context/LanguageContext";

const SkeletonLoader = () => (
  <>
    <div className="w-20 h-5 bg-text animate-pulse rounded-md"></div>
    <div className="w-20 h-5 bg-secondary animate-pulse rounded-md"></div>
  </>
);

const Navbar = ({ user, loading }: { user: User | null; loading: boolean }) => {
  const { t } = useLanguage();

  return (
    <header className="bg-card py-2 px-8 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">Syed Faaiz</div>
        <div className="flex gap-2 items-center">
          {loading ? (
            <SkeletonLoader />
          ) : user ? (
            <>
              Welcome <span className="text-secondary">{user.fullName}</span>
            </>
          ) : (
            <>
              <Link to="/login">{t("login")}</Link>
              <Link to="/register">{t("signup")}</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
