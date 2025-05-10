function positionPlanets() {
  const ellipse = document.querySelector('#orbit ellipse');
  const planets = document.querySelectorAll('.planet-link');

  // Get SVG and ellipse dimensions
  const svg = ellipse.ownerSVGElement;
  const svgRect = svg.getBoundingClientRect();
  const viewBox = svg.viewBox.baseVal;

  const cx = ellipse.cx.baseVal.value;
  const cy = ellipse.cy.baseVal.value;
  const rx = ellipse.rx.baseVal.value;
  const ry = ellipse.ry.baseVal.value;

  // Calculate scale factors
  const scaleX = svgRect.width / viewBox.width;
  const scaleY = svgRect.height / viewBox.height;

  // Position each planet evenly spaced around the ellipse
  const count = planets.length;
  planets.forEach((planet, i) => {
    const angle = (2 * Math.PI / count) * i;
    const x = cx + rx * Math.cos(angle);
    const y = cy + ry * Math.sin(angle);

    // Apply scaling
    const scaledX = x * scaleX;
    const scaledY = y * scaleY;

    // Center the planet visually
    const planetWidth = planet.offsetWidth || 90;
    const planetHeight = planet.offsetHeight || 90;

    planet.style.left = `${scaledX - planetWidth / 2}px`;
    planet.style.top = `${scaledY - planetHeight / 2}px`;
  });
}

// Initial placement
window.addEventListener('load', positionPlanets);
window.addEventListener('resize', positionPlanets);
