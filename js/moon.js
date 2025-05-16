
let angle = 0;

function animateMoon() {
  const moon = document.getElementById("orbiting-moon");
  const ellipse = document.getElementById("orbit-ellipse");

  if (!ellipse || !moon) return;

  const cx = parseFloat(ellipse.getAttribute("cx"));
  const cy = parseFloat(ellipse.getAttribute("cy"));
  const rx = parseFloat(ellipse.getAttribute("rx"));
  const ry = parseFloat(ellipse.getAttribute("ry"));

  // Simulate orbiting with woven path
  angle += 0.01;
  const x = cx + rx * Math.cos(angle);
  const y = cy + ry * Math.sin(angle + 0.5 * Math.sin(angle)); // Weave for organic motion

  moon.style.left = `${x - 10}px`; // center align with moon width
  moon.style.top = `${y - 10}px`;  // center align with moon height

  requestAnimationFrame(animateMoon);
}

// Start animation after initial render
window.addEventListener("load", animateMoon);
