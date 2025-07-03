// JavaScript/background.js

window.addEventListener("load", () => {
  const lightCircle = document.createElement("div");

  Object.assign(lightCircle.style, {
    position: "fixed",
    width: "60px",
    height: "60px",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)",
    borderRadius: "50%",
    pointerEvents: "none",
    mixBlendMode: "screen",
    zIndex: "9999",
    transition: "left 0.03s linear, top 0.03s linear",
  });

  document.body.appendChild(lightCircle);

  window.addEventListener("mousemove", (e) => {
    const offset = 30; // 60px / 2
    lightCircle.style.left = `${e.clientX - offset}px`;
    lightCircle.style.top = `${e.clientY - offset}px`;
  });
});
