// JavaScript/clientAlert.js

window.addEventListener("DOMContentLoaded", () => {
  const alert = document.getElementById("client-alert");
  const dismiss = document.getElementById("dismiss-alert");

  // Show alert only if not already dismissed this session
  const hasSeen = sessionStorage.getItem("clientAlertDismissed");

  if (!hasSeen) {
    // Fade in the bubble
    alert.classList.remove("hidden");
    alert.classList.add("animate-fade-in");
  }

  dismiss.addEventListener("click", () => {
    alert.classList.add("animate-fade-out");

    setTimeout(() => {
      alert.classList.add("hidden");
      sessionStorage.setItem("clientAlertDismissed", "true");
    }, 300);
  });
});
