// JavaScript/heroEntrance.js

window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-section");
  const fadeTargets = document.querySelectorAll(".fade-target");
  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("cursor");

  const fullText = "Hi, I'm Daniel Long.";
  let index = 0;

  // Fade-and-lift + blur reveal
  setTimeout(() => {
    hero.classList.remove("opacity-0", "translate-y-4", "blur-sm");
    hero.classList.add("opacity-100", "translate-y-0");

    fadeTargets.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(20px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }, 400 + i * 150);
    });
  }, 300);

  // Typing effect with infinite loop
  function typeLoop() {
    if (index < fullText.length) {
      typedText.textContent += fullText.charAt(index);
      index++;
      setTimeout(typeLoop, 80);
    } else {
      setTimeout(() => {
        typedText.textContent = "";
        index = 0;
        typeLoop();
      }, 2000); // Pause before restarting
    }
  }

  setTimeout(typeLoop, 1000);
});
