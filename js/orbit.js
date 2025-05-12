document.addEventListener("DOMContentLoaded", () => {
  const centerEl = document.querySelector(".center-content");
  const planets = document.querySelectorAll(".planet-link");

  function placePlanetsInCircle() {
    const centerBox = centerEl.getBoundingClientRect();
    const centerX = centerBox.left + centerBox.width / 2;
    const centerY = centerBox.top + centerBox.height / 2;

    const radius = 200; // Distance from center to each planet
    const total = planets.length;

    planets.forEach((planet, i) => {
      const angle = (2 * Math.PI * i) / total;

      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);

      planet.style.left = `${x - planet.offsetWidth / 2}px`;
      planet.style.top = `${y - planet.offsetHeight / 2}px`;
    });
  }

  window.addEventListener("resize", placePlanetsInCircle);
  placePlanetsInCircle();
});
