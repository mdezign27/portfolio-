# Manpreet Portfolio

This repository contains the original portfolio and a separate React implementation branch built from the editable Figma design.

## Branches

- `main` — original HTML, CSS and JavaScript portfolio. Kept unchanged.
- `react-figma-build` — React + Vite implementation in progress, starting with the Hero section.

## Run the React branch

Requirements: Node.js 20.19+ or 22.12+ recommended.

```bash
npm install
npm run dev
```

Vite prints a local URL, normally `http://localhost:5173/`.

For a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  App.jsx       React page and Hero section
  main.jsx      React entry point
  styles.css    responsive layout and visual styling
assets/         artwork shared from the original portfolio
index.html      Vite HTML entry
vite.config.js  Vite configuration
```

## Implementation notes

- The Figma source for the first Hero is frame `125:181` in the design file.
- Image artwork remains separate from text and navigation, so the composition can be responsive and animated.
- The initial Hero layout is a static baseline. Entrance, mouse and scroll parallax motion will be tuned after visual comparison in the browser.
- The original website files and project archive are retained; do not delete them as part of the migration.
- Check that all image references in `src/App.jsx` point to existing files in `assets/`.
