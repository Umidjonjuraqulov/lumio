import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/courses.css";

import courseMath from "../assets/course-math.png";
import courseEng from "../assets/course-english.png";

export default function Courses() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const courses = useMemo(
    () => [
      {
        id: "math",
        title: t("courses.items.math.title"),
        category: "school",
        image: courseMath,
        teacher: "Aliyev Jasurbek",
        duration: "3 oy",
        goal: t("courses.items.math.goal"),
        schedule: t("courses.items.math.schedule"),
        level: t("courses.items.math.level"),
      },
      {
        id: "english",
        title: t("courses.items.english.title"),
        category: "language",
        image: courseEng,
        teacher: "Aliyev Jasurbek",
        duration: "3 oy",
        goal: t("courses.items.english.goal"),
        schedule: t("courses.items.english.schedule"),
        level: t("courses.items.english.level"),
      },
      // xohlasangiz yana qo‘shamiz
      {
        id: "prep",
        title: t("courses.items.prep.title"),
        category: "school",
        image: courseMath,
        teacher: "Aliyev Jasurbek",
        duration: "3 oy",
        goal: t("courses.items.prep.goal"),
        schedule: t("courses.items.prep.schedule"),
        level: t("courses.items.prep.level"),
      },
    ],
    [t]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return courses.filter((c) => {
      const inCategory = category === "all" || c.category === category;
      const inQuery =
        q.length === 0 ||
        c.title.toLowerCase().includes(q) ||
        c.teacher.toLowerCase().includes(q) ||
        c.goal.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [courses, query, category]);

  return (
    <main className="courses-page">
      <section className="courses-hero">
        <div className="courses-hero-inner container">
          <div>
            <h1 className="courses-title">{t("courses.title")}</h1>
            <p className="courses-subtitle">{t("courses.subtitle")}</p>
          </div>

          <div className="courses-controls">
            <div className="courses-search">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("courses.search")}
                aria-label="Search courses"
              />
            </div>

            <div className="courses-filter">
              <button
                type="button"
                className={`chip ${category === "all" ? "active" : ""}`}
                onClick={() => setCategory("all")}
              >
                {t("courses.filters.all")}
              </button>
              <button
                type="button"
                className={`chip ${category === "school" ? "active" : ""}`}
                onClick={() => setCategory("school")}
              >
                {t("courses.filters.school")}
              </button>
              <button
                type="button"
                className={`chip ${category === "language" ? "active" : ""}`}
                onClick={() => setCategory("language")}
              >
                {t("courses.filters.language")}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="courses-list container">
        <div className="courses-grid">
          {filtered.map((c) => (
            <article key={c.id} className="course-card2">
              <div className="course-img2">
                <img src={c.image} alt={c.title} />
              </div>

              <div className="course-body2">
                <h3>{c.title}</h3>

                <ul className="course-meta2">
                  <li>
                    <b>{t("courses.meta.teacher")}:</b> {c.teacher}
                  </li>
                  <li>
                    <b>{t("courses.meta.duration")}:</b> {c.duration}
                  </li>
                  <li>
                    <b>{t("courses.meta.level")}:</b> {c.level}
                  </li>
                  <li>
                    <b>{t("courses.meta.goal")}:</b> {c.goal}
                  </li>
                  <li>
                    <b>{t("courses.meta.schedule")}:</b> {c.schedule}
                  </li>
                </ul>

                <div className="course-actions2">
                  <a className="btn-primary" href="/contact">
                    {t("courses.cta.apply")}
                  </a>
                  <a className="btn-ghost" href="/">
                    {t("courses.cta.backHome")}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <h3>{t("courses.empty.title")}</h3>
            <p>{t("courses.empty.desc")}</p>
          </div>
        )}
      </section>
    </main>
  );
}
