# Mission Notes 🛰️

A space-themed static website for sharing PDF notes, organized by category, with search and a twinkling starfield background. No build step, no framework — plain HTML/CSS/JS, hosted for free on GitHub Pages.

## How it's organized

```
pdf-notes-site/
├── index.html          # Page structure (rarely needs editing)
├── css/style.css        # Styling — space palette, layout, cards, starfield
├── js/
│   ├── notes-data.js    # ← EDIT THIS to add/organize your notes
│   ├── app.js            # Renders notes-data.js into the page (rarely needs editing)
│   └── starfield.js      # Generates the background star layers (purely decorative)
├── pdfs/                 # Put your actual PDF files in here
├── robots.txt            # Discourages search engines from indexing the site
└── .nojekyll              # Tells GitHub Pages not to run Jekyll processing
```

Want a different look later? All the colors, icons, and copy live in `js/notes-data.js` (per-category color/icon) and the top of `css/style.css` (the `:root` design tokens) — the starfield can be removed by deleting the `.starfield` div in `index.html` and the `<script src="js/starfield.js">` line.

## Adding a new note

1. Drop the PDF file into `pdfs/` (subfolders are fine, e.g. `pdfs/thermo/lecture-3.pdf`).
2. Open `js/notes-data.js` and add an entry to the relevant category:

   ```js
   {
     title: "Lecture 3 — Heat Transfer",
     file: "pdfs/thermo/lecture-3.pdf",
     date: "2026-02-14",
     description: "Conduction, convection, and radiation basics."
   }
   ```
3. Commit and push. GitHub Pages rebuilds automatically within a minute or two.

## Adding a new category

Copy one of the category blocks in `js/notes-data.js`, give it a new `category` name, `icon` (any emoji), `color` (any hex code), and a `notes` array (can start empty).

## Running it locally before you push

No server needed for basic viewing — just open `index.html` in a browser. If your browser blocks local PDF links from a `file://` page, run a tiny local server instead:

```bash
cd pdf-notes-site
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new, empty repository on GitHub (don't initialize it with a README).
2. From inside this project folder:

   ```bash
   cd pdf-notes-site
   git init
   git add .
   git commit -m "Initial notes site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Under "Build and deployment", set **Source** to "Deploy from a branch", branch **main**, folder **/ (root)**. Save.
4. After a minute or two, your site will be live at:

   ```
   https://<your-username>.github.io/<repo-name>/
   ```
5. Share that link with your friend.

## A note on privacy

GitHub Pages sites are **public by default** — anyone with the link can view them, and the repo's contents (including your PDFs) are visible in the repository too, unless the repo is private *and* you're on a paid plan that supports Pages for private repos.

This template already includes a couple of light deterrents against random discovery:
- `robots.txt` asks search engines not to index the site.
- `index.html` has a `noindex, nofollow` meta tag.

Neither of these makes the site actually private — they just keep it out of search results. If you truly need this restricted to just your friend, consider one of:
- Making the GitHub repo private and using GitHub Pages with a paid plan that supports private-repo Pages.
- Hosting it somewhere that supports real access control (e.g. a password-protected static host).
- Simply not worrying about it if the notes aren't sensitive — an unindexed, unlisted URL is "unlisted," not "secret."
