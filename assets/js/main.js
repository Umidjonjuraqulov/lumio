// Courses filter (simple front-only demo)
document.addEventListener("DOMContentLoaded", () => {
  const pills = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-cat]");

  if (pills.length) {
    pills.forEach(btn => {
      btn.addEventListener("click", () => {
        pills.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const key = btn.getAttribute("data-filter");
        cards.forEach(c => {
          const cat = c.getAttribute("data-cat");
          c.style.display = (key === "all" || key === cat) ? "" : "none";
        });
      });
    });
  }
});
