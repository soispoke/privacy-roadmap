# Ethereum Protocol Privacy Roadmap

A roadmap of Ethereum L1 protocol privacy work, inspired by [strawmap.org](https://strawmap.org).
Columns are quarters across an 18-month window (Q3 2026 → Q4 2027); rows are the five Hardness
dimensions: trustlessness, censorship resistance, throughput, cryptography, state. Placements are
indicative, not a schedule.

## Files

- **`state-roadmap.html`** — the roadmap viewer (served at the site root via `index.html`).
  Click **Edit** to drag tiles, edit fields, and set each tile's maturity stage.
- **`state-roadmap-editor.html`** — a standalone drag-and-drop editor (same data, same storage).
- **`roadmap-data.js`** — the single source of truth (forks, lanes, tiles). All pages read it.
- **`save_server.py`** — a tiny dev server that serves the site **and** writes `roadmap-data.js`
  back to disk, so edits actually persist.

## Editing so it all stays in sync

Run the dev server, then edit in the browser and click **Save to file**:

```
python3 save_server.py      # http://127.0.0.1:8137
```

- **Save to file** writes `roadmap-data.js` on disk (via `POST /save`) and clears the local
  draft, so the viewer, the editor, and the file all show the same thing.
- Edits autosave to a per-browser draft as you go, so nothing is lost mid-edit. The draft is
  fingerprinted against the file it was forked from: if `roadmap-data.js` changes underneath it
  (e.g. edited by hand), the stale draft is discarded and the file wins — no silent shadowing.
- Opened directly via `file://` (no server), **Save to file** falls back to **Download**; drop the
  downloaded `roadmap-data.js` next to the pages.

The server sends `Cache-Control: no-store`, so a freshly saved file shows on reload.

Pure static site otherwise — no build step. Styling via the Tailwind CSS v4 browser CDN and
drag-and-drop via SortableJS (both from a CDN, so viewing needs network access).
