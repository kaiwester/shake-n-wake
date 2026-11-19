# Shake-n-Wake – What Does Each Button Do?

Interactive quick guide (DE/EN) for the small Shake-n-Wake vibrating alarm clock (Model PI-107, one AAA battery).
Select a function—the buttons you need to press will be highlighted on the device, along with the order.

Unofficial; not from the manufacturer.

## Structure

```
index.html     Markup + SVG of the alarm clock
css/style.css  Styles (Light/Dark, reduced motion)
js/app.js      Text (DE/EN), button mapping, rendering
fonts/         Self-hosted fonts (Atkinson Hyperlegible, Share Tech Mono; SIL OFL 1.1)
```

No build step—purely static files, no external requests (fonts are stored locally).

## Run locally

```sh
python3 -m http.server 8000
# http://localhost:8000
```

## Hosting (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.
