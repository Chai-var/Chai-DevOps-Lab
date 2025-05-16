
function placePlanetsOnEllipse() {
  const ellipse = document.getElementById("orbit-ellipse");
  const planets = document.querySelectorAll(".planet-link");

  if (!ellipse || planets.length === 0) return;

  const cx = parseFloat(ellipse.getAttribute("cx"));
  const cy = parseFloat(ellipse.getAttribute("cy"));
  const rx = parseFloat(ellipse.getAttribute("rx"));
  const ry = parseFloat(ellipse.getAttribute("ry"));

  const total = planets.length;

  planets.forEach((planet, i) => {
    const angle = (2 * Math.PI * i) / total;

    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);

    planet.style.left = `${x}px`;
    planet.style.top = `${y}px`;
    planet.style.transform = "translate(-50%, -50%)";
  });
}

// Trigger on load and resize
window.addEventListener("load", placePlanetsOnEllipse);
window.addEventListener("resize", () => {
  resizeEllipse();
  placePlanetsOnEllipse();
});

