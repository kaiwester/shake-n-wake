# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners of a small Shake-n-Wake vibrating alarm clock (one AAA battery) who have lost the paper instruction sheet or can't follow it. Typically they hold the clock in one hand with a phone next to it, often at the bedside before sleep, and want to know which button to press for one job (set the alarm, switch it on, snooze, stop it).

People who are deaf or hard of hearing (they rely on the vibration) and older users are an important part of this audience.

## Product Purpose

An interactive quick guide: pick a function and the clock drawing highlights the buttons to press, with step numbers and a display mock-up, next to short written steps. Success means the visitor gets the clock to do what they want on the first try without reading the whole manual.

## Positioning

The printed sheets list features in manual order and name buttons by text only. This guide starts from the task ("Tonight", "When it buzzes", "Now and then"), points at the physical button on a drawing of the clock and shows what the display should look like.

## Operating Context

- Used mostly on a phone in portrait, sometimes on desktop; the drawing stays pinned while the steps scroll on phones.
- Two clock models: PI-107 (one alarm; Reset/Time Set, Start/Stop/Adjust, Mode, light) and PI-180SNW (two alarms; Set/Alarm Off, Hour, Minute, Light/Snooze). Visitors pick their model; the model number is on the back of the clock.
- Deep links per function (`#alarm`, `#180-alarm`).

## Capabilities and Constraints

- Static site on GitHub Pages: plain HTML, CSS and JavaScript, no framework, no build step, no tracking, self-hosted fonts.
- Every text exists in German and English; German is the default, the browser language and a saved choice can switch it.
- Only steps backed by an original manual or tested on a real clock. Anything unconfirmed is marked in the guide as not in the printed manual.
- Clearly unofficial: no manufacturer logos or branding copied; product names only identify the device.
- Texts and button mappings live in `js/app.js` (`T` for texts, `MODELS` for labels, highlighted keys and the display mock-up).

## Brand Commitments

- Name: "Shake-n-Wake: welche Taste macht was?" / "which button does what?".
- Voice: short, direct, everyday words; second person (informal in German), one action per step.
- Unofficial disclaimer in the footer and README.

## Evidence on Hand

- Original manuals: PI-107 scanned instruction sheet (https://cdn.commercev3.net/www.maxiaids.com/downloads/media/904107.pdf) and PI-180SNW user manual (https://m.media-amazon.com/images/I/B1+FXrp5rAS.pdf).
- The owner has a PI-107 and has tested its steps, including those not in the printed sheet (stopping the alarm with Mode/Reset/light, 12/24 hours via Adjust).
- No PI-180SNW on hand: how to switch an alarm back on is unconfirmed.
- No testimonials, usage data or manufacturer endorsement; none may be invented.

## Product Principles

1. Task first: organise by what the visitor wants to do right now, not by the manual's order.
2. Point, don't describe: the button to press is shown on the clock, the text only confirms it.
3. Never guess: a step is in the guide because a manual says it or a real clock showed it; otherwise it is marked.
4. Works one-handed at night on a small phone.
5. Two languages, equally complete.

## Accessibility & Inclusion

No formal standard is set. Users include deaf, hard-of-hearing and older people, so readable text sizes, clear contrast, large touch targets, keyboard and screen-reader support, and reduced motion stay reasonable-best-effort defaults.
