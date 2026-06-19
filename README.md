# prasoonpatidar.github.io

Academic host for self-contained research project pages, served by GitHub Pages.
The root redirects to the main site at <https://prasoonpatidar.com>; the project
pages live under `research/<name>/`.

## Structure

```
index.html              Redirect to https://prasoonpatidar.com
research/
  vax/                  VAX project page (self-contained: index.html + static/)
.nojekyll               Serve files as-is, no Jekyll processing
```

Each project page under `research/<name>/` is self-contained and uses relative
asset paths, so it works at its sub-path and can be opened locally.

## Adding a new project page

Drop a self-contained static bundle into `research/<name>/`. It is reachable at
`https://prasoonpatidar.github.io/research/<name>/`. Link to it from the main
site (`prasoonpatidar.com`); this repo has no central index page.

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000/research/vax/
```

## Deploy

GitHub Pages, Source = Deploy from a branch, `main` / `/` (root).
Push to `main` and the site updates.
