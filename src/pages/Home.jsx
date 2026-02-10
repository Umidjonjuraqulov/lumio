import { useTranslation } from "react-i18next";
import "../styles/home.css";

import board from "../assets/chalkboard.png";
import leftChar from "../assets/hero-left.png";
import rightChar from "../assets/hero-right.png";

import courseMath from "../assets/course-math.png";
import courseEng from "../assets/course-english.png";
import courseHistory from "../assets/course-history.png";

import iconOnline from "../assets/online.png" 


export default function Home() {
  const { t } = useTranslation();

  return (
    <main id="home" className="home">
      {/* HERO */}
      <section className="hero">
        {/* container ichida markaziy doska + chetlarda absolute personajlar */}
        <div className="hero-inner container">
          <img className="hero-char left" src={leftChar} alt="Student" />

          <div className="hero-board">
            <img className="board-bg" src={board} alt="Chalkboard" />
            <div className="board-text">
              <h1>
                <span className="hero-title1">{t("hero.title1")}</span>{" "}
                <span className="hero-title2">{t("hero.title2")}</span>
              </h1>
              <p>{t("hero.subtitle")}</p>
            </div>
          </div>

          <img className="hero-char right" src={rightChar} alt="Teacher" />
        </div>
      </section>

      {/* WHY */}
      <section className="why container">
        <h1>{t("why.title")}</h1>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">
                <img src={iconOnline} alt="Online learning" />
            </div>
            <h3>{t("why.c1.t")}</h3>
            <p>{t("why.c1.d")}</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
                <img src={iconOnline} alt="Online learning" />
            </div>
            <h3>{t("why.c2.t")}</h3>
            <p>{t("why.c2.d")}</p>
          </div>

          <div className="why-card">
            <div className="why-icon">
                <img src={iconOnline} alt="Online learning" />
            </div>
            <h3>{t("why.c3.t")}</h3>
            <p>{t("why.c3.d")}</p>
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section id="courses" className="popular container">
        <h1>{t("popular.title")}</h1>

        <div className="courses">
          <article className="course-card">
            <div className="course-img">
              <img src={courseMath} alt={t("popular.math")} />
            </div>

            <h3>{t("popular.math")}</h3>

            <ul>
              <li>
                <b>{t("popular.teacher")}:</b> Aliyev Jasurbek
              </li>
              <li>
                <b>{t("popular.duration")}:</b> 3 oy
              </li>
              <li>
                <b>{t("popular.goal")}:</b> Prezident maktabiga kirish
              </li>
              <li>
                <b>{t("popular.schedule")}:</b> 5 kun onlayn dars
              </li>
            </ul>
            <a className="course-btn" href="/courses">
                Learn More
            </a>
          </article>

          <article className="course-card">
            <div className="course-img">
              <img src={courseEng} alt={t("popular.eng")} />
            </div>

            <h3>{t("popular.eng")}</h3>

            <ul>
              <li>
                <b>{t("popular.teacher")}: </b>  Aliyev Jasurbek
              </li>
              <li>
                <b>{t("popular.duration")}:</b> 3 oy
              </li>
              <li>
                <b>{t("popular.goal")}:</b> Prezident maktabiga kirish
              </li>
              <li>
                <b>{t("popular.schedule")}:</b> 5 kun onlayn dars
              </li>
            </ul>
            <a className="course-btn" href="/courses">
                Learn More
            </a>
          </article>
          <article className="course-card">
            <div className="course-img">
              <img src={courseHistory} alt={t("popular.math")} />
            </div>

            <h3>{t("popular.math")}</h3>

            <ul>
              <li>
                <b>{t("popular.teacher")}:</b> Aliyev Jasurbek
              </li>
              <li>
                <b>{t("popular.duration")}:</b> 3 oy
              </li>
              <li>
                <b>{t("popular.goal")}:</b> Prezident maktabiga kirish
              </li>
              <li>
                <b>{t("popular.schedule")}:</b> 5 kun onlayn dars
              </li>
            </ul>
            <a className="course-btn" href="/courses">
                Learn More
            </a>
          </article>
        </div>
      </section>

      <div className="footer-space" />
    </main>
  );
}
