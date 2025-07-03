// JavaScript/contentFade.js

window.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll("section, .fade-on-scroll, .skill-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        const bounding = entry.boundingClientRect;

        if (entry.intersectionRatio > 0.25) {
          // Add staggered delay
          entry.target.style.transitionDelay = `${index * 100}ms`;
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("fade-out");
        } else {
          if (bounding.top < 0) {
            entry.target.classList.remove("fade-in");
            entry.target.classList.add("fade-out");
            entry.target.style.transitionDelay = "0ms";
          }
        }
      });
    },
    {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }
  );

  fadeElements.forEach((el) => {
    observer.observe(el);
  });
});
