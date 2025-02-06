import { PROJECT_NAME } from "../../constants/env.constants";

function Footer() {
  return (
    <footer className="bg-card p-3 border-t border-border">
      <div className="border-border text-center">
        <p className="text-secondary">© 2024 {PROJECT_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
