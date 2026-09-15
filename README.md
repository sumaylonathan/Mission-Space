<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Mission Notes</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>

  <div class="starfield" aria-hidden="true">
    <div class="stars stars-small"></div>
    <div class="stars stars-medium"></div>
    <div class="stars stars-large"></div>
  </div>

  <header class="hero">
    <div class="hero-inner">
      <p class="eyebrow">🛰️ Mission Log</p>
      <h1 id="site-title">Mission Notes</h1>
      <p class="subtitle">A shared flight log of notes on the way to orbit — browse by subject or search below.</p>

      <div class="search-wrap">
        <input
          id="search-input"
          type="text"
          placeholder="Search notes by title or description…"
          autocomplete="off"
        />
      </div>

      <nav id="category-pills" class="category-pills" aria-label="Jump to category"></nav>
    </div>
  </header>

  <main id="content" class="content">
    <!-- Category sections are rendered here by js/app.js -->
  </main>

  <p id="empty-state" class="empty-state" hidden>No notes match your search.</p>

  <footer class="site-footer">
    <p>🚀 Built with plain HTML/CSS/JS · Hosted on GitHub Pages</p>
  </footer>

  <script src="js/starfield.js"></script>
  <script src="js/notes-data.js"></script>
  <script src="js/app.js"></script>
</body>
</html>
