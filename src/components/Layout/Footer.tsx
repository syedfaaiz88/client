import { useLanguage } from "../../context/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-card p-3 border-t border-border">
      <div className="border-border text-center">
        <p className="text-secondary">{t("copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
