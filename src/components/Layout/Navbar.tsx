import { useSelector } from "react-redux";
import { PROJECT_NAME } from "../../constants/env.constants";
import Button from "../Reusable/Button";
import { RootState } from "../../redux/store";

const Navbar = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <header className="bg-card py-2 px-8 border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">{PROJECT_NAME}</div>
        <div className="flex gap-2 items-center">
          {user ? (
            <>Welcome <span className="text-secondary">{user.fullName}</span></>
          ) : (
            <>
              <Button variant="primary">Login</Button>
              <Button variant="secondary">Register</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
