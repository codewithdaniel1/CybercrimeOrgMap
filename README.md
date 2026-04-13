# Pulse Atlas

React + Vite + Leaflet map for exploring the publicly reported origins of major cybercrime groups and operations.

## What this project is

This is a curated, static atlas of cybercrime groups based on public attribution reporting.

It is not:

- A live threat-intelligence feed
- A definitive list of every cybercrime actor
- A claim of legal guilt beyond what public reporting states
- A source of real-time incident statistics

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

## Methodology

### How the dataset is built

The dataset is stored locally in [`src/data/groups.js`](./src/data/groups.js). There is no live API call and no automated sync. Each record is manually curated from public reporting and then normalized into a consistent schema for the map.

For each group, I collect:

- `name`: the commonly used public name for the group or operation
- `aliases`: major public aliases used by vendors or governments
- `firstSeen`: the earliest activity year stated or implied in the cited reporting
- `knownFor`: a short summary of the activity most associated with that group
- `attribution`: a plain-language note describing the public claim about origin or affiliation
- `sourceLabel`: a short citation label shown in the UI

### How the map location is chosen

The app does not claim precise geolocation of threat actors. Pins represent the best public attribution level available in open sources:

- If reporting names a city, the pin uses that city
- If reporting only names a country, the pin is placed on the national capital for readability
- Latitude and longitude are manually assigned map coordinates used for visualization

This means the map is best read as an origin-attribution atlas, not a precise operational geolocation system.

### What is sourced vs. what is editorial

Directly sourced from public reporting:

- Group name and aliases
- Reported country or city of origin
- First-seen timeframe
- Activity summary and attribution note

Editorial or normalized by this project:

- `type` categories such as `ransomware`, `carding`, `bec-fraud`, and `access-brokerage`
- `scope` labels such as `Global` or `Regional`
- The exact display coordinate used on the map
- The shortened summary text used in cards and detail panels

### Important limitation

Some groups have conflicting or incomplete public attribution. In those cases, the dataset uses the strongest public source I could find and keeps the wording intentionally cautious. This repository should be treated as a research-driven visualization layer over public reporting, not as a canonical intelligence database.

## Sources

Primary source families used in the current dataset:

- U.S. Department of Justice:
  [LockBit](https://www.justice.gov/opa/pr/united-states-charges-dual-russian-and-israeli-national-developer-lockbit-ransomware-group),
  [Trickbot / Conti](https://www.justice.gov/opa/pr/multiple-foreign-nationals-charged-connection-trickbot-malware-and-conti-ransomware),
  [Hydra Market](https://www.justice.gov/usao-ndca/pr/justice-department-investigation-leads-shutdown-largest-online-darknet-marketplace),
  [Nemesis Market](https://www.justice.gov/opa/pr/iranian-national-indicted-operating-online-marketplace-offering-fentanyl-and-money)
- U.S. Department of the Treasury:
  [Evil Corp sanctions](https://home.treasury.gov/news/press-releases/sm845),
  [additional Evil Corp action in 2024](https://home.treasury.gov/news/press-releases/jy2623)
- MITRE ATT&CK:
  [Wizard Spider](https://attack.mitre.org/groups/G0102/),
  [FIN7](https://attack.mitre.org/groups/G0046/),
  [APT38](https://attack.mitre.org/groups/G0082/),
  [Lazarus Group](https://attack.mitre.org/groups/G0032/),
  [Gorgon Group](https://attack.mitre.org/groups/G0078/)
- Secureworks CTU:
  [GOLD SKYLINE](https://www.secureworks.com/research/threat-profiles/gold-skyline),
  [GOLD GALLEON](https://www.secureworks.com/research/threat-profiles/gold-galleon),
  [GOLD BARONDALE](https://www.secureworks.com/research/threat-profiles/gold-barondale)
- ESET Research:
  [Grandoreiro](https://www.welivesecurity.com/2020/04/28/grandoreiro-how-engorged-can-exe-get/),
  [Guildma](https://www.welivesecurity.com/2020/03/05/guildma-devil-drives-electric/),
  [Vadokrist](https://www.welivesecurity.com/br/2021/01/21/vadokrist-malware-bancario-direcionado-ao-brasil/)

## Updating the data

When adding or editing a group entry, the workflow is:

1. Find a primary public source such as a government case, sanctions notice, or vendor threat profile.
2. Extract the origin claim, first-seen timing, aliases, and activity summary.
3. Decide whether the attribution is city-level or only country-level.
4. Add the normalized record to `src/data/groups.js`.
5. Keep the wording conservative if attribution is disputed or incomplete.

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
