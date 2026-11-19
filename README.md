# Shake-n-Wake – What Does Each Button Do?

Interactive quick guide (DE/EN) for the small Shake-n-Wake vibrating alarm clock (Model PI-107, one AAA battery).
Select a function—the buttons you need to press will be highlighted on the device, along with the order.

**Live:** https://kaiwester.github.io/shake-n-wake/

Unofficial; not from the manufacturer. Based on the [Tech Tools PI-107 instruction manual](https://manuals.plus/tech-tools/tech-tools-pi-107-silent-vibrating-alarm-clock-instruction-manual).

## Structure

```
index.html     Markup + SVG of the alarm clock
css/style.css  Styles (Light/Dark, reduced motion)
js/app.js      Text (DE/EN), button mapping, rendering
fonts/         Self-hosted fonts (Atkinson Hyperlegible, Share Tech Mono; SIL OFL 1.1)
LICENSE        MIT (fonts: SIL OFL 1.1, see fonts/)
```

No build step—purely static files, no external requests (fonts are stored locally).

## Run locally

```sh
python3 -m http.server 8000
# http://localhost:8000
```

## Hosting (GitHub Pages)

Settings → Pages → *Deploy from a branch* → `main` / `/ (root)`.

## Contributing

Found a wrong step or a button that does something else on your clock? Open an issue or a pull request.
All texts and button mappings live in `js/app.js` (`T` for the DE/EN texts, `KEYS` for which buttons light up).

## License

Code and texts: [MIT](LICENSE) © 2026 Kai Westerschwiensterdt.

Fonts in `fonts/` are third-party and keep their own license, the [SIL Open Font License 1.1](https://openfontlicense.org):
- Atkinson Hyperlegible © Braille Institute of America ([OFL](fonts/OFL-atkinson.txt))
- Share Tech Mono © Carrois Type Design ([OFL](fonts/OFL-sharetechmono.txt))

## Disclaimer

This is an independent, unofficial guide. It is not affiliated with, endorsed by or sponsored by the manufacturer or seller of the Shake-n-Wake alarm clock.
Product names are trademarks of their respective owners and are used here only to identify the device.
The guide is provided as is; check the original instructions if something doesn't match your clock.
