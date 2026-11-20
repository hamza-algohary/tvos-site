# Entertainment OS: project website

Static showcase site for our graduation project, an AI-powered, Linux-based entertainment OS for TVs and consoles.

Plain HTML, CSS and a few lines of JavaScript. There is no build step and nothing to install.

## Structure

```
index.html           the whole page
assets/css/style.css styles (light/dark tokens at the top)
assets/js/main.js    theme toggle + screenshot lightbox
assets/img/          screenshots (WebP, max 1600px wide)
assets/icons/        Papirus icons (GPL-3.0)
assets/docs/         poster PDF
.nojekyll            tells GitHub Pages to serve files as-is
```

`materials/` holds the raw source material and is git-ignored.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, then choose `main` and `/ (root)`.
3. The site goes live at `https://<user-or-org>.github.io/<repo>/`.

## Editing

- Search `index.html` for `TODO` to find the repository links and team details to fill in.
- To add a screenshot, convert it to WebP first:
  `convert in.png -resize '1600x>' -quality 80 assets/img/name.webp`
- Subsystem colours are `--c-stream`, `--c-game`, `--c-voice` and `--c-shell` in `style.css`.
