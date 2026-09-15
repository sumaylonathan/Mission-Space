/* ---------------------------------------------------------
   Design tokens — deep space palette
--------------------------------------------------------- */
:root {
  --bg: #05060d;
  --bg-elevated: #0a0d1a;
  --card-bg: rgba(20, 24, 42, 0.55);
  --card-bg-solid: #12162a;
  --border: rgba(140, 150, 200, 0.18);
  --border-strong: rgba(140, 150, 200, 0.32);
  --text: #eef0f8;
  --text-muted: #9199b8;
  --accent: #8c6fff;
  --accent-2: #4da3ff;
  --radius: 14px;
  --shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  --font-display: "Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  color-scheme: dark;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: var(--font-display);
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
  position: relative;
}

::selection { background: rgba(140, 111, 255, 0.35); color: #fff; }

/* ---------------------------------------------------------
   Starfield background
--------------------------------------------------------- */
.starfield {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 50% at 15% 0%, rgba(140, 111, 255, 0.22), transparent 60%),
    radial-gradient(ellipse 70% 45% at 90% 10%, rgba(77, 163, 255, 0.16), transparent 55%),
    radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0, 217, 192, 0.10), transparent 55%),
    var(--bg);
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: transparent;
}

.stars-small { animation: twinkle 4s ease-in-out infinite; opacity: 0.9; }
.stars-medium { width: 3px; height: 3px; animation: twinkle 6s ease-in-out infinite 1s; opacity: 0.8; }
.stars-large {
  width: 4px;
  height: 4px;
  animation: twinkle 5s ease-in-out infinite 0.5s, drift 90s linear infinite;
  opacity: 0.95;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.4);
}

@keyframes twinkle {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes drift {
  from { transform: translateY(0); }
  to { transform: translateY(-60px); }
}

@media (prefers-reduced-motion: reduce) {
  .stars, html { animation: none !important; scroll-behavior: auto; }
}

/* ---------------------------------------------------------
   Hero
--------------------------------------------------------- */
.hero {
  padding: 72px 20px 44px;
  text-align: center;
  border-bottom: 1px solid var(--border);
}

.hero-inner { max-width: 780px; margin: 0 auto; }

.eyebrow {
  margin: 0 0 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-2);
}

.hero h1 {
  margin: 0 0 12px;
  font-size: clamp(30px, 5.5vw, 46px);
  font-weight: 700;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #ffffff 20%, #b9c3ff 60%, #8c6fff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin: 0 0 28px;
  color: var(--text-muted);
  font-size: 16px;
}

.search-wrap { margin-bottom: 22px; }

#search-input {
  width: 100%;
  max-width: 480px;
  padding: 12px 18px;
  font-family: var(--font-display);
  font-size: 15px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--card-bg-solid);
  color: var(--text);
  outline: none;
  transition: border-color 0.15s, box-shadow 0.15s;
}

#search-input::placeholder { color: var(--text-muted); }

#search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(140, 111, 255, 0.2), 0 0 24px rgba(140, 111, 255, 0.15);
}

.category-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.category-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  color: var(--text);
  background: var(--card-bg-solid);
  border: 1px solid var(--border);
  transition: transform 0.15s, border-color 0.15s, box-shadow 0.15s;
}

.category-pill:hover {
  transform: translateY(-1px);
  border-color: var(--pill-color, var(--accent));
  box-shadow: 0 0 16px -4px var(--pill-color, var(--accent));
}

/* ---------------------------------------------------------
   Content / Category sections
--------------------------------------------------------- */
.content {
  max-width: 1040px;
  margin: 0 auto;
  padding: 52px 20px 20px;
}

.category-section { margin-bottom: 52px; scroll-margin-top: 24px; }

.category-heading {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 4px;
}

.category-icon { font-size: 22px; }

.category-heading h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
}

.category-count {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

.category-desc {
  margin: 4px 0 18px;
  color: var(--text-muted);
  font-size: 14px;
}

.category-empty {
  padding: 18px;
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius);
  color: var(--text-muted);
  font-size: 14px;
  font-family: var(--font-mono);
}

/* ---------------------------------------------------------
   Note cards
--------------------------------------------------------- */
.note-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.note-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border-radius: var(--radius);
  background: var(--card-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--border);
  border-top: 3px solid var(--card-color, var(--accent));
  text-decoration: none;
  color: var(--text);
  box-shadow: var(--shadow);
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.note-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-strong);
  box-shadow: var(--shadow), 0 0 26px -6px var(--card-color, var(--accent));
}

.note-card-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
}

.note-card-desc {
  font-size: 13px;
  color: var(--text-muted);
  flex-grow: 1;
}

.note-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 4px;
}

.note-card-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  color: var(--card-color, var(--accent));
}

/* ---------------------------------------------------------
   Empty state / footer
--------------------------------------------------------- */
.empty-state {
  text-align: center;
  color: var(--text-muted);
  padding: 40px 20px;
  font-family: var(--font-mono);
}

.site-footer {
  text-align: center;
  padding: 32px 20px 48px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 12px;
}
