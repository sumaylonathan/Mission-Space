/**
 * starfield.js
 * Generates a lightweight, three-layer parallax starfield using pure
 * CSS box-shadows (no canvas, no images, negligible performance cost).
 * Purely decorative — safe to delete along with the .starfield div in
 * index.html if you ever want a plainer background.
 */

(function () {
  function randomStars(count, maxX, maxY) {
    const shadows = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * maxX);
      const y = Math.floor(Math.random() * maxY);
      shadows.push(`${x}px ${y}px #fff`);
    }
    return shadows.join(", ");
  }

  function applyLayer(selector, count, spread) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.boxShadow = randomStars(count, spread, spread);
  }

  // A tall spread lets the pattern cover the page even if it scrolls.
  const spread = Math.max(document.documentElement.scrollHeight, window.innerHeight) + 400;

  applyLayer(".stars-small", 260, spread);
  applyLayer(".stars-medium", 120, spread);
  applyLayer(".stars-large", 60, spread);
})();
