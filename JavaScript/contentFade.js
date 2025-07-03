// JavaScript/contentFade.js

window.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(
    "section, .fade-on-scroll, .skill-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          el.style.transitionDelay = `${index * 80}ms`;
          el.classList.add("fade-in");
          el.classList.remove("fade-out");
        } else {
          el.classList.remove("fade-in");
          el.classList.add("fade-out");
          el.style.transitionDelay = "0ms";
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  fadeElements.forEach((el) => {
    el.classList.add("fade-out"); // Ensure initial state
    observer.observe(el);
  });
});
