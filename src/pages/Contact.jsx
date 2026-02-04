import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/contact.css";
import INSTAGRAM_SVG_URL from "../assets/Instagram_logo.png";
import telegram_logo from "../assets/Telegram_logo.png";
import youtube_logo from "../assets/youtube_logo.png";
import facebook_logo from "../assets/Facebook_log.png";

export default function Contact() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    telegram: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  // --- helpers ---
  const onlyDigits = (v) => (v || "").replace(/\D/g, "");

  // Returns normalized phone like: +998901234567 or "" if can't
  const normalizeUzPhone = (raw) => {
    const d = onlyDigits(raw);

    // 998901234567
    if (d.startsWith("998") && d.length === 12) return `+${d}`;

    // 901234567 (9 digits) -> +998901234567
    if (d.length === 9) return `+998${d}`;

    // 0901234567 (10 digits starting with 0) -> +998901234567
    if (d.length === 10 && d.startsWith("0")) return `+998${d.slice(1)}`;

    return "";
  };

  const normalizeTelegram = (raw) => {
    const v = (raw || "").trim();
    if (!v) return "yo‘q";
    if (v.startsWith("@")) return v;
    return `@${v.replace(/\s+/g, "")}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Telefon fieldda yozayotgan paytida userga qulay bo‘lishi uchun
    // faqat bo‘sh joylarni trim qilamiz, normalizatsiya submitda bo‘ladi.
    setForm((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return t("contact.errors.name");
    if (!form.email.trim()) return t("contact.errors.email");
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return t("contact.errors.emailInvalid");

    const phoneNorm = normalizeUzPhone(form.phone);
    if (!form.phone.trim()) return t("contact.errors.phone");
    if (!phoneNorm) return t("contact.errors.phoneInvalid");

    if (!form.message.trim()) return t("contact.errors.message");
    if (form.message.trim().length < 10) return t("contact.errors.messageShort");
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setStatus({ type: "error", text: err });
      return;
    }

    try {
      setLoading(true);
      setStatus({ type: "", text: "" });

      const WEBHOOK_URL = "https://hook.eu1.make.com/8r4vci2jikh9mt2p87u9y4tgesxhxvbv"; // <-- Make webhook

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: normalizeUzPhone(form.phone), // ✅ +998 format
        telegram: normalizeTelegram(form.telegram), // ✅ yo‘q yoki @username
        message: form.message.trim(),
        source: "lumioedu-site",
        createdAt: new Date().toISOString(),
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Webhook xatosi");

      setStatus({ type: "success", text: t("contact.success") });

      setForm({ name: "", email: "", phone: "", telegram: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", text: t("contact.failed") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="contact-content container">
        {/* Left: info */}
        <div className="contact-info">
          <h3>{t("contact.infoTitle")}</h3>

          <p>📍 Samarqand, O‘zbekiston</p>
          <p>📞 +998 90 000 00 00</p>
          <p>✉️ info@lumioedu.uz</p>
          <section className="social-section container">
            <h2>{t("contact.socialTitle")}</h2>
            <p className="social-subtitle">{t("contact.socialSubtitle")}</p>

            <div className="social-grid">
                <a
                href="https://t.me/LumioEdu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                >
                <img
                    src={telegram_logo}
                    alt="Telegram"
                    className="social-img"
                />
                <span>Telegram</span>
                </a>

                <a
                href="https://instagram.com/lumioedu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                >
                <img
                    src={INSTAGRAM_SVG_URL}
                    alt="Instagram"
                    className="social-img"
                />
                <span>Instagram</span>
                </a>

                <a
                href="https://youtube.com/@lumioedu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                >
                <img
                    src={youtube_logo}
                    alt="YouTube"
                    className="social-img"
                />
                <span>YouTube</span>
                </a>

                <a
                href="https://facebook.com/lumioedu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                >
                <img
                    src={facebook_logo}
                    alt="Facebook"
                    className="social-img"
                />
                <span>Facebook</span>
                </a>
            </div>
            </section>

          <div className="contact-note">{t("contact.note")}</div>
        </div>

        {/* Right: form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>{t("contact.formTitle")}</h3>

          <input
            type="text"
            name="name"
            placeholder={t("contact.form.name")}
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.form.email")}
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder={t("contact.form.phonePlaceholder")}
            value={form.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="telegram"
            placeholder={t("contact.form.telegramPlaceholder")}
            value={form.telegram}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="4"
            placeholder={t("contact.form.message")}
            value={form.message}
            onChange={handleChange}
            required
          />

          {status.text && (
            <div
              className={
                status.type === "success"
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >
              {status.text}
            </div>
          )}

          <button type="submit" disabled={loading}>
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </button>
        </form>
      </section>
    </main>
  );
}
