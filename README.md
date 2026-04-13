# Pulse Atlas

React + Vite + Leaflet map for exploring the publicly reported origins of major cybercrime groups and operations.

## Running locally

```bash
npm install
npm run dev
```

## What changed

The app now uses a bundled static dataset instead of live venue lookups. The map centers on the world, and the sidebar tracks whichever mapped groups are currently inside the viewport.

Each entry includes:

- Group or operation name
- Reported origin point
- Category
- First-seen year
- Aliases and short tradecraft notes
- Attribution note and source label

## Data notes

- Origins are based on public reporting from sources such as DOJ, U.S. Treasury, MITRE ATT&CK, Secureworks, and ESET.
- Some groups only have country-level attribution in public reporting. Those pins are placed on the national capital for readability.
- This is a curated, source-backed atlas rather than a definitive or exhaustive catalog of every cybercrime actor.

## Project structure

```text
src/
├── App.jsx
├── components/
│   ├── DetailPanel.jsx
│   ├── FilterBar.jsx
│   ├── MapView.jsx
│   ├── NavBar.jsx
│   ├── VenueCard.jsx
│   └── VenueList.jsx
├── data/
│   └── groups.js
├── hooks/
│   └── useGroups.js
└── styles/
    └── global.css
```

## Build

```bash
npm run build
```
