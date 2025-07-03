// JavaScript/modalLogic.js

function openModal(id) {
  const overlay = document.getElementById("modal-overlay");
  const modal = document.getElementById(id);

  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");

  // Trigger fade-in
  requestAnimationFrame(() => {
    overlay.classList.add("opacity-100");
    modal.classList.add("opacity-100", "scale-100");
  });
}

function closeModal() {
  const overlay = document.getElementById("modal-overlay");
  const modals = document.querySelectorAll('[id^="modal-project-"]');

  overlay.classList.remove("opacity-100");
  modals.forEach((modal) => {
    modal.classList.remove("opacity-100", "scale-100");
  });

  // Wait for transition to finish before hiding
  setTimeout(() => {
    overlay.classList.add("hidden");
    modals.forEach((modal) => modal.classList.add("hidden"));
  }, 300);
}

window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("modal-overlay");
  if (overlay) {
    overlay.classList.add("transition-opacity", "duration-300", "opacity-0");
    overlay.addEventListener("click", closeModal);
  }

  document.querySelectorAll('[id^="modal-project-"]').forEach((modal) => {
    modal.classList.add("transition", "duration-300", "opacity-0", "scale-95");
  });
});
