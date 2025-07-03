// JavaScript/spinner.js

window.addEventListener("load", () => {
  const spinner = document.getElementById("spinner");
  const bootText = document.getElementById("boot-text");
  const startupSound = document.getElementById("startup-sound");

  const messages = [
    "Loading visual interface...",
    "Initializing system protocols...",
    "Verifying assets and layout...",
    "Welcome to the UI/UX Experience",
  ];

  let current = 0;
  let charIndex = 0;
  let delay = 50;

  function typeLine() {
    if (current < messages.length) {
      if (charIndex <= messages[current].length) {
        bootText.textContent = messages[current].slice(0, charIndex++);
        setTimeout(typeLine, delay);
      } else {
        charIndex = 0;
        current++;
        setTimeout(typeLine, 600);
      }
    }
  }

  typeLine();

  setTimeout(() => {
    spinner.style.transition = "opacity 0.5s ease";
    spinner.style.opacity = "0";

    // Play startup sound
    if (startupSound) {
      startupSound.volume = 0.6;
      startupSound.play().catch(() => {
        // Some browsers block autoplay until user interacts
      });
    }

    setTimeout(() => (spinner.style.display = "none"), 500);

    // Animate sections in sequence
    const sections = [
      "section-header",
      "section-hero",
      "section-about",
      "section-projects",
      "section-contact",
    ];

    sections.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.classList.remove("opacity-0", "translate-y-4");
        }, 600 * index);
      }
    });
  }, 9000);
});
