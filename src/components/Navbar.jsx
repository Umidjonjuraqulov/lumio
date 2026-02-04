import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar({ theme, setTheme }) {
  const { t } = useTranslation();

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="brand" to="/">
          <img src={logo} alt="Lumio EDU" className="brand-logo" />
          <span className="brand-text">Lumio <b>EDU</b></span>
        </div>

        <nav className="nav-links">
          <a href="/">{t("nav.home")}</a>
          <a href="/teachers">{t("nav.teachers")}</a>
          <Link to="/courses">{t("nav.courses")}</Link>
          <a href="/contact">{t("nav.contact")}</a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
