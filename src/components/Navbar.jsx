import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

export default function Navbar({ theme, setTheme }) {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        {/* Brand */}
        <div className="brand" to="/" onClick={closeMenu}>
          <img src={logo} alt="Lumio EDU" className="brand-logo" />
          <span className="brand-text">
            Lumio <b>EDU</b>
          </span>
        </div>

        {/* Burger (mobil) */}
        <button
          className={`nav-burger ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/teachers" onClick={closeMenu}>
            {t("nav.teachers")}
          </NavLink>
          <NavLink to="/courses" onClick={closeMenu}>
            {t("nav.courses")}
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="nav-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <LanguageSwitch />
        </div>
      </div>
    </header>
  );
}
