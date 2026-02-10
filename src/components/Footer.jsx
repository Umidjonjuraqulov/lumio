import { useTranslation } from "react-i18next";
import "../styles/footer.css";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-col brand">
          <h3>
            Lumio <span>EDU</span>
          </h3>
          <p>
            {t("footer.tagline")}
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>{t("footer.menu")}</h4>
          <ul>
            <li><a href="/">{t("footer.nav.home")}</a></li>
            <li><a href="/teachers">{t("footer.nav.teachers")}</a></li>
            <li><a href="/courses">{t("footer.nav.courses")}</a></li>
            <li><a href="/contact">{t("footer.nav.contact")}</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <h4>{t("footer.courses_title")}</h4>
          <ul>
            <li>{t("footer.courses.math")}</li>
            <li>{t("footer.courses.english")}</li>
            <li>{t("footer.courses.presidential")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>{t("footer.contact_title")}</h4>
          <p>{t("footer.address")}</p>
          <p>{t("footer.phone")}</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Lumio EDU. {t("footer.rights")}
      </div>
    </footer>
  );
}
