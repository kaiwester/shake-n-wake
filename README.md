# Shake-n-Wake – What Does Each Button Do?

Interactive quick guide (DE/EN) for the small Shake-n-Wake vibrating alarm clocks with one AAA battery: Model PI-107 (one alarm) and Model PI-180SNW (two alarms).
Select a function—the buttons you need to press will be highlighted on the device, along with the order.

**Live:** https://kaiwester.github.io/shake-n-wake/

Unofficial; not from the manufacturer. Based on the original instruction sheets for the [PI-107](https://cdn.commercev3.net/www.maxiaids.com/downloads/media/904107.pdf) and the [PI-180SNW](https://m.media-amazon.com/images/I/B1+FXrp5rAS.pdf).


## Run locally

```sh
python3 -m http.server 8000
# http://localhost:8000
```

## Contributing

Found a wrong step or a button that does something else on your clock? Open an issue or a pull request.
All texts and button mappings live in `js/app.js` (`T` for the DE/EN texts, `MODELS` for each clock's button labels, which buttons light up and the display mock-up).

## License

Code and texts: [MIT](LICENSE) © 2026 Kai Westerschwiensterdt.

Fonts in `fonts/` are third-party and keep their own license, the [SIL Open Font License 1.1](https://openfontlicense.org):
- Atkinson Hyperlegible © Braille Institute of America ([OFL](fonts/OFL-atkinson.txt))
- Share Tech Mono © Carrois Type Design ([OFL](fonts/OFL-sharetechmono.txt))

## Disclaimer

This is an independent, unofficial guide. It is not affiliated with, endorsed by or sponsored by the manufacturer or seller of the Shake-n-Wake alarm clock.
Product names are trademarks of their respective owners and are used here only to identify the device.
The guide is provided as is; check the original instructions if something doesn't match your clock.
