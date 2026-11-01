# System Design, Animated

React + Vite + React Router + Framer Motion.
Tailwind CSS is used for component styling.

## Run it

    npm install
    npm run dev

Open the URL Vite prints (usually http://localhost:5173).

## Structure

- `src/pages/` – one file per page (Landing, NotFound, later: topic pages)
- `src/components/` – reusable pieces (PageTransition, ArchitectureAnimation, ...)
- `src/data/topics.js` – registry of learning topics (empty for now)
- `src/styles/global.css` – Tailwind directives and global page background
- `tailwind.config.js` – theme colors, fonts, and animation
