/**
 * app.js
 * Renders NOTES_DATA (see notes-data.js) into the page and wires up
 * the search box and category pills. You shouldn't need to edit this
 * file to add notes — edit notes-data.js instead.
 */

(function () {
  const content = document.getElementById("content");
  const pillsNav = document.getElementById("category-pills");
  const searchInput = document.getElementById("search-input");
  const emptyState = document.getElementById("empty-state");

  function slugify(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }

  function noteMatches(note, category, query) {
    if (!query) return true;
    const haystack = `${note.title} ${note.description || ""} ${category}`.toLowerCase();
    return haystack.includes(query);
  }

  function render(query) {
    const q = (query || "").trim().toLowerCase();
    content.innerHTML = "";
    pillsNav.innerHTML = "";

    let totalVisible = 0;

    NOTES_DATA.forEach((cat) => {
      const visibleNotes = cat.notes.filter((n) => noteMatches(n, cat.category, q));
      const sectionId = slugify(cat.category);

      // Pill (only shown if the category has notes at all, so an empty
      // scaffold category doesn't clutter navigation before you fill it in)
      if (cat.notes.length > 0) {
        const pill = document.createElement("a");
        pill.href = `#${sectionId}`;
        pill.className = "category-pill";
        pill.style.setProperty("--pill-color", cat.color || "#6c5ce7");
        pill.innerHTML = `<span>${cat.icon || ""}</span><span>${cat.category}</span>`;
        pillsNav.appendChild(pill);
      }

      if (q && visibleNotes.length === 0) return; // hide whole section while searching if nothing matches

      totalVisible += visibleNotes.length;

      const section = document.createElement("section");
      section.className = "category-section";
      section.id = sectionId;

      const heading = document.createElement("div");
      heading.className = "category-heading";
      heading.innerHTML = `
        <span class="category-icon">${cat.icon || "📄"}</span>
        <h2>${cat.category}</h2>
        <span class="category-count">${visibleNotes.length} ${visibleNotes.length === 1 ? "note" : "notes"}</span>
      `;
      section.appendChild(heading);

      if (cat.description) {
        const desc = document.createElement("p");
        desc.className = "category-desc";
        desc.textContent = cat.description;
        section.appendChild(desc);
      }

      if (visibleNotes.length === 0) {
        const empty = document.createElement("div");
        empty.className = "category-empty";
        empty.textContent = "No notes here yet — add one in js/notes-data.js.";
        section.appendChild(empty);
      } else {
        const grid = document.createElement("div");
        grid.className = "note-grid";

        visibleNotes.forEach((note) => {
          const card = document.createElement("a");
          card.className = "note-card";
          card.href = note.file;
          card.target = "_blank";
          card.rel = "noopener noreferrer";
          card.style.setProperty("--card-color", cat.color || "#6c5ce7");

          card.innerHTML = `
            <div class="note-card-title">${note.title}</div>
            ${note.description ? `<div class="note-card-desc">${note.description}</div>` : ""}
            <div class="note-card-meta">
              <span class="note-card-badge">📄 PDF</span>
              <span>${formatDate(note.date)}</span>
            </div>
          `;
          grid.appendChild(card);
        });

        section.appendChild(grid);
      }

      content.appendChild(section);
    });

    emptyState.hidden = totalVisible > 0 || !q;
  }

  searchInput.addEventListener("input", (e) => render(e.target.value));

  render("");
})();
