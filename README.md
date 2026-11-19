# Shake-n-Wake – welche Taste macht was?

Interaktive Kurzanleitung (DE/EN) für den kleinen Shake-n-Wake Vibrationswecker (Modell PI-107, eine AAA-Batterie).
Wähle eine Funktion – die zu drückenden Tasten werden am Gerät hervorgehoben, inklusive Reihenfolge.

Inoffiziell, nicht vom Hersteller.

## Struktur

```
index.html     Markup + SVG des Weckers
css/style.css  Styles (Light/Dark, reduced motion)
js/app.js      Texte (DE/EN), Tastenzuordnung, Rendering
fonts/         Self-hosted Fonts (Atkinson Hyperlegible, Share Tech Mono; SIL OFL 1.1)
```

Kein Build-Schritt – reine statische Dateien, keine externen Requests (Fonts liegen lokal).

## Lokal starten

```sh
python3 -m http.server 8000
# http://localhost:8000
```

## Hosting (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.
