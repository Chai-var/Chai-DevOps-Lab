document.addEventListener("DOMContentLoaded", () => {
  const svg = document.querySelector("#orbit");
  const ellipse = svg.querySelector("ellipse");
  const planets = document.querySelectorAll(".planet-link");

  // Updated precise angles (in radians) based on user screenshot annotations
  const angles = [
    5.93, // About Me (far right)
    1.22, // Resume (bottom right)
    2.53, // Skills (bottom left)
    3.75, // Projects (left side)
    4.45, // Certifications (top-left)
    5.24  // Blogs (top-right)
  ];

  function getRotationDegrees() {
    const g = svg.querySelector("g");
    const transform = g.getAttribute("transform");
    const match = transform.match(/rotate\((-?\d+(\.\d+)?)\)/);
    return match ? parseFloat(match[1]) : 0;
  }

  function rotatePoint(x, y, cx, cy, angleDeg) {
    const angleRad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const dx = x - cx;
    const dy = y - cy;
    return {
      x: cx + dx * cos - dy * sin,
      y: cy + dx * sin + dy * cos
    };
  }

  function positionPlanets() {
    const svgBox = svg.getBoundingClientRect();
    const viewBox = svg.viewBox.baseVal;
    const scaleX = svgBox.width / viewBox.width;
    const scaleY = svgBox.height / viewBox.height;

    const cx = ellipse.cx.baseVal.value;
    const cy = ellipse.cy.baseVal.value;
    const rx = ellipse.rx.baseVal.value;
    const ry = ellipse.ry.baseVal.value;

    const rotation = getRotationDegrees();

    planets.forEach((planet, i) => {
      const angle = angles[i];
      let x = cx + rx * Math.cos(angle);
      let y = cy + ry * Math.sin(angle);

      const rotated = rotatePoint(x, y, cx, cy, rotation);
      x = rotated.x * scaleX;
      y = rotated.y * scaleY;

      planet.style.position = "absolute";
      planet.style.left = `${x - planet.offsetWidth / 2}px`;
      planet.style.top = `${y - planet.offsetHeight / 2}px`;
    });
  }

  window.addEventListener("resize", positionPlanets);
  positionPlanets();
});
