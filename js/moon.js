document.addEventListener("DOMContentLoaded", () => {
  const moon = document.getElementById("orbiting-moon");
  const ellipse = document.querySelector("ellipse");

  const cx = parseFloat(ellipse.getAttribute("cx")); // 500
  const cy = parseFloat(ellipse.getAttribute("cy")); // 400
  const rx = parseFloat(ellipse.getAttribute("rx")); // 500
  const ry = parseFloat(ellipse.getAttribute("ry")); // 300

  let angle = 0;

  function animateMoon() {
    angle += 0.01;
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle + 0.5 * Math.sin(angle)); // adds "weave"

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;

    requestAnimationFrame(animateMoon);
  }

  animateMoon();
});
