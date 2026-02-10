import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/teachers.css";

// Teacher photos
import teacher1 from "../assets/teacher-2.png";
import teacher2 from "../assets/teacher-1.png";
import teacher3 from "../assets/teacher-3.png";

// Social icons (o'zingdagi iconlarni qo'y)
import instagram from "../assets/Instagram_logo.png";
import telegram from "../assets/Telegram_logo.png";
import youtube from "../assets/youtube_logo.png";
import facebook from "../assets/Facebook_log.png";
// Agar yo'q bo'lsa, vaqtincha biror icon qo'yib tur

export default function Teachers() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");

  const teachers = useMemo(
    () => [
      {
        id: "firuz",
        name: t("team.items.firuz.name"),
        role: t("team.items.firuz.role"),
        desc: t("team.items.firuz.desc"),
        img: teacher1,
        socials: [
          { id: "instagram", label: "Instagram", href: "https://instagram.com/", icon: instagram },
          { id: "telegram", label: "Telegram", href: "https://t.me/", icon: telegram },
          { id: "youtube", label: "YouTube", href: "https://youtube.com/", icon: youtube },
          { id: "facebook", label: "Facebook", href: "https://facebook.com/", icon: facebook },
        ],
      },
      {
        id: "bobonazar",
        name: t("team.items.bobonazar.name"),
        role: t("team.items.bobonazar.role"),
        desc: t("team.items.bobonazar.desc"),
        img: teacher2,
        socials: [
          { id: "instagram", label: "Instagram", href: "https://instagram.com/", icon: instagram },
          { id: "telegram", label: "Telegram", href: "https://t.me/", icon: telegram },
          { id: "youtube", label: "YouTube", href: "https://youtube.com/", icon: youtube },
          { id: "facebook", label: "Facebook", href: "https://facebook.com/", icon: facebook },
        ],
      },
      {
        id: "umidjon",
        name: t("team.items.umidjon.name"),
        role: t("team.items.umidjon.role"),
        desc: t("team.items.umidjon.desc"),
        img: teacher3,
        socials: [
          { id: "instagram", label: "Instagram", href: "https://instagram.com/lumioedu", icon: instagram },
          { id: "telegram", label: "Telegram", href: "https://t.me/LumioEdu", icon: telegram },
          { id: "youtube", label: "YouTube", href: "https://youtube.com/@lumioedu", icon: youtube },
          { id: "facebook", label: "Facebook", href: "https://facebook.com/lumioedu", icon: facebook },
        ],
      }
    ],
    [t]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return teachers;
    return teachers.filter(
      (x) =>
        x.name.toLowerCase().includes(q) ||
        x.role.toLowerCase().includes(q) ||
        x.desc.toLowerCase().includes(q)
    );
  }, [teachers, query]);

  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="container">
          <h1 className="team-title">{t("team.title")}</h1>
          <p className="team-subtitle">{t("team.subtitle")}</p>

          <div className="team-controls">
            <input
              className="team-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("team.search")}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="team-grid">
          {filtered.map((x) => (
            <article key={x.id} className="team-card">
              <div className="team-photo">
                <img src={x.img} alt={x.name} />
              </div>

              <div className="team-body">
                <h3 className="team-name">{x.name}</h3>
                <div className="team-role">{x.role}</div>
                <p className="team-desc">{x.desc}</p>

                <div className="social-block">
                  <div className="social-title">{t("team.socialTitle")}</div>

                  <div className="social-grid">
                    {x.socials.map((s) => (
                      <a
                        key={s.id}
                        className="social-btn"
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        title={s.label}
                      >
                        <img className="social-img" src={s.icon} alt={s.label} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="team-empty">
            <h3>{t("team.empty.title")}</h3>
            <p>{t("team.empty.desc")}</p>
          </div>
        )}
      </section>
    </main>
  );
}
