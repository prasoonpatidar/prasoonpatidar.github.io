# prasoonpatidar.github.io

Static personal site that hosts project pages and public docs for my research.
Served by GitHub Pages at <https://prasoonpatidar.github.io>.

## Structure

```
index.html              Umbrella landing page (research index)
static/                 Shared assets for the landing page (css, favicon, og image)
research/
  vax/                  VAX project page (self-contained: index.html + static/)
.nojekyll               Serve files as-is, no Jekyll processing
```

Each project page under `research/<name>/` is self-contained and uses relative
asset paths, so it works at its sub-path and can be opened locally.

## Adding a new project page

1. Drop a self-contained static bundle into `research/<name>/`.
2. Add a card for it in `index.html` under the Research section.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

GitHub Pages, Source = Deploy from a branch, `main` / `/` (root).
Push to `main` and the site updates.
