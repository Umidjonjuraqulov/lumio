import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/teachers.css";

import teacher1 from "../assets/teacher-2.jpg";
import teacher2 from "../assets/teacher-1.png";
import teacher3 from "../assets/teacher-3.png";

export default function Teachers() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const teachers = useMemo(
    () => [
      {
        id: "jasur",
        name: "Aliyev Jasurbek",
        role: t("teachers.items.jasur.role"),
        subject: "math",
        exp: "5+",
        rating: "4.9",
        img: teacher1,
        bio: t("teachers.items.jasur.bio"),
        tags: [t("teachers.tags.preschool"), t("teachers.tags.olymp")],
      },
      {
        id: "aziza",
        name: "Aziza Karimova",
        role: t("teachers.items.aziza.role"),
        subject: "english",
        exp: "4+",
        rating: "4.8",
        img: teacher2,
        bio: t("teachers.items.aziza.bio"),
        tags: [t("teachers.tags.ielts"), t("teachers.tags.speaking")],
      },
      {
        id: "bekzod",
        name: "Bekzod Tursunov",
        role: t("teachers.items.bekzod.role"),
        subject: "prep",
        exp: "6+",
        rating: "4.9",
        img: teacher3,
        bio: t("teachers.items.bekzod.bio"),
        tags: [t("teachers.tags.exam"), t("teachers.tags.discipline")],
      },
    ],
    [t]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return teachers.filter((x) => {
      const byFilter = filter === "all" || x.subject === filter;
      const byQuery =
        q.length === 0 ||
        x.name.toLowerCase().includes(q) ||
        x.bio.toLowerCase().includes(q);
      return byFilter && byQuery;
    });
  }, [teachers, query, filter]);

  return (
    <main className="teachers-page">
      {/* HERO */}
      <section className="teachers-hero">
        <div className="container teachers-hero-inner">
          <div>
            <h1 className="teachers-title">{t("teachers.title")}</h1>
            <p className="teachers-subtitle">{t("teachers.subtitle")}</p>
          </div>

          <div className="teachers-controls">
            <input
              className="teachers-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("teachers.search")}
            />

            <div className="teachers-filter">
              <button
                type="button"
                className={`chip ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
              >
                {t("teachers.filters.all")}
              </button>
              <button
                type="button"
                className={`chip ${filter === "math" ? "active" : ""}`}
                onClick={() => setFilter("math")}
              >
                {t("teachers.filters.math")}
              </button>
              <button
                type="button"
                className={`chip ${filter === "english" ? "active" : ""}`}
                onClick={() => setFilter("english")}
              >
                {t("teachers.filters.english")}
              </button>
              <button
                type="button"
                className={`chip ${filter === "prep" ? "active" : ""}`}
                onClick={() => setFilter("prep")}
              >
                {t("teachers.filters.prep")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="container teachers-list">
        <div className="teachers-grid">
          {filtered.map((x) => (
            <article key={x.id} className="teacher-card">
              <div className="teacher-top">
                <div className="teacher-avatar">
                  <img src={x.img} alt={x.name} />
                </div>

                <div className="teacher-head">
                  <h3>{x.name}</h3>
                  <p className="teacher-role">{x.role}</p>

                  <div className="teacher-stats">
                    <span className="stat">⭐ {x.rating}</span>
                    <span className="stat">{t("teachers.exp")}: {x.exp} {t("teachers.years")}</span>
                  </div>
                </div>
              </div>

              <p className="teacher-bio">{x.bio}</p>

              <div className="teacher-tags">
                {x.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>

              <div className="teacher-actions">
                <a className="btn-primary" href="/contact">
                  {t("teachers.cta.contact")}
                </a>
                <a className="btn-ghost" href="/courses">
                  {t("teachers.cta.courses")}
                </a>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h3>{t("teachers.empty.title")}</h3>
            <p>{t("teachers.empty.desc")}</p>
          </div>
        )}
      </section>
    </main>
  );
}
