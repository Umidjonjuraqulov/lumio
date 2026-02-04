import { useEffect, useRef, useState } from "react";
import i18n from "../i18n";
import "../styles/navbar.css";

const LANGS = [
  { code: "uz", label: "O‘zbek", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitch() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const current = LANGS.find((l) => l.code === i18n.language) || LANGS[0];

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lumio_lang", lng);
    setOpen(false);
  };

  // tashqariga bosilganda yopilsin
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ESC bosilganda yopilsin
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lang-dd" ref={ref}>
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        title="Language"
      >
        <span className="flag">{current.flag}</span>
        <span className="chev">▾</span>
      </button>

      {open && (
        <div className="lang-menu" role="menu">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              className={`lang-item ${l.code === current.code ? "active" : ""}`}
              onClick={() => setLang(l.code)}
              role="menuitem"
            >
              <span className="flag">{l.flag}</span>
              <span className="label">{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
