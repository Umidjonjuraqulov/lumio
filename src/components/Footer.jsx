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
            Zamonaviy onlayn ta’lim platformasi.  
            Bilim – kelajak poydevori.
          </p>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Menyu</h4>
          <ul>
            <li><a href="/">Bosh sahifa</a></li>
            <li><a href="/teachers">O‘qituvchilar</a></li>
            <li><a href="/courses">Kurslar</a></li>
            <li><a href="/contact">Bog‘lanish</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <h4>Kurslar</h4>
          <ul>
            <li>Matematika</li>
            <li>Ingliz tili</li>
            <li>Prezident maktabiga tayyorlov</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Aloqa</h4>
          <p>📍 Samarqand, O‘zbekiston</p>
          <p>📞 +998 93 331 33 48</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Lumio EDU. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}
