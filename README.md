# Strata

A fictional newsletter and content platform — built as a personal experiment to explore **Claude AI**, **Framer Motion**, and dark monochrome UI systems.

## About

Strata is not a real product. It's a design and front-end exploration built entirely with AI assistance (Claude by Anthropic), used as a sandbox to push the limits of scroll-driven animation, liquid-glass visual effects, and modern React architecture.

## Stack

| | |
|---|---|
| Framework | React 19 + Vite + TypeScript |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion — scroll-driven word reveals, staggered fadeUp, whileInView |
| Video | MP4 (direct) + HLS streaming via hls.js |
| Fonts | Inter (sans) · Instrument Serif (serif italic accents) |
| UI tooling | shadcn/ui utilities · lucide-react |
| Built with | Claude AI (Anthropic) |

## Features explored

- **Dark design system** — pure `#000` background, full CSS variable token map, no colors beyond monochrome
- **Liquid-glass effect** — custom CSS class with `backdrop-filter`, gradient masking and inset shadow
- **Scroll-driven word reveal** — per-word opacity animation using `useScroll` + `useTransform` from Framer Motion
- **HLS video streaming** — background video in the CTA section loaded via `hls.js` with native Safari fallback
- **Staggered animations** — reusable `fadeUp` helper with configurable delay across all sections
- **Instrument Serif italics** — accent words in a contrasting serif italic within sans-serif headlines

## Sections

1. **Navbar** — fixed transparent, concentric-circle logo, liquid-glass icon buttons
2. **Hero** — full-viewport MP4 background, email subscribe form
3. **Search** — AI platform cards with liquid-glass containers
4. **Mission** — scroll-driven word-by-word reveal with highlighted key words
5. **Solution** — cinematic 3:1 video banner, 4-column feature grid
6. **CTA** — HLS streaming background, dual CTA buttons
7. **Footer** — minimal

## Getting started

```bash
npm install
npm run dev
```

## Live

[aldanag.github.io/strata](https://aldanag.github.io/strata/)

---

*Designed & built by [Aldana González](https://github.com/aldanag) — experimental project, 2026.*
