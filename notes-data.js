/**
 * notes-data.js
 * ------------------------------------------------------------------
 * This is the ONLY file you need to touch to add or reorganize notes.
 *
 * 1. Drop your PDF files into the /pdfs folder (subfolders are fine,
 *    e.g. /pdfs/thermo/lecture-3.pdf).
 * 2. Add or edit an entry below pointing "file" at that path.
 * 3. Save, commit, push. The site rebuilds automatically on GitHub Pages.
 *
 * Each top-level entry is a CATEGORY (a folder/subject grouping).
 * Each category has a list of NOTES (the individual PDFs).
 * ------------------------------------------------------------------
 */

const NOTES_DATA = [
  {
    category: "Mechanical Design",
    icon: "🛠️",
    color: "#8C6FFF",
    description: "Design calculations, tolerancing, and CAD reference notes.",
    notes: [
      {
        title: "Example Note — Replace Me",
        file: "pdfs/example.pdf",
        date: "2026-01-01",
        description: "Delete this placeholder once you add your first real PDF."
      }
    ]
  },
  {
    category: "Metrology & Inspection",
    icon: "📡",
    color: "#00D9C0",
    description: "CMM programming, GD&T, and inspection procedure notes.",
    notes: []
  },
  {
    category: "Aerospace & Systems",
    icon: "🚀",
    color: "#4DA3FF",
    description: "Systems engineering, propulsion, and space-sector reading notes.",
    notes: []
  }

  // Add more categories by copying the block above, e.g.:
  // {
  //   category: "Math & Physics",
  //   icon: "🧮",
  //   color: "#FF7A59",
  //   description: "Core math and physics reference notes.",
  //   notes: [
  //     {
  //       title: "Vector Calculus Review",
  //       file: "pdfs/math/vector-calc.pdf",
  //       date: "2026-02-10",
  //       description: "Div, grad, curl, and the theorems that tie them together."
  //     }
  //   ]
  // },
];
