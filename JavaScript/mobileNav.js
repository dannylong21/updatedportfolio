// JavaScript/mobileNav.js

window.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeButton = document.getElementById("mobile-close"); // <-- Add this line

  let isOpen = false;

  function toggleMenu(forceClose = false) {
    isOpen = forceClose ? false : !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove("opacity-0", "pointer-events-none");
      mobileMenu.classList.add("opacity-100", "pointer-events-auto");
    } else {
      mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
      mobileMenu.classList.add("opacity-0", "pointer-events-none");
    }
  }

  menuButton.addEventListener("click", () => toggleMenu());
  if (closeButton) {
    closeButton.addEventListener("click", () => toggleMenu(true));
  }
});
