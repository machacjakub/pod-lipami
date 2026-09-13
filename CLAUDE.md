# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing website for "Fyzioterapie Pod Lipami" — a Czech physiotherapy clinic. Built with Astro 5 and deployed to https://fyziopodlipami.cz.

## Commands

Uses Yarn (PnP mode):

```bash
yarn dev       # Start dev server
yarn build     # Build to ./dist/
yarn preview   # Preview production build
```

No linting or test commands exist in this project.

## Architecture

**Framework:** Astro 5 (static site generator) with React 19 for interactive components only. React components use `client:only="react"` — most content is pre-rendered at build time.

**Routing:** File-based via `src/pages/`. Service pages live under `src/pages/sluzby/`.

**Layout:** `src/layouts/Layout.astro` is the single master layout — it holds all global CSS variables, navigation (desktop + mobile hamburger), footer, Schema.org JSON-LD, and SEO meta tags.

**Styling:**
- CSS variables defined in `Layout.astro :root`: green palette (`--green-dark` #055e69, `--green-light` #75b5af), salmon palette (`--salmon-light`, `--salmon-dark`).
- Scoped `<style>` blocks within `.astro` files for component styles.
- Standalone CSS files for complex components: `service.css`, `Dropdown.css`, `Accordion.css`.
- Responsive breakpoints at 1150px, 850px, 600px, 400px.

**Key component locations:**
- `src/components/home/` — homepage sections (Hero, Services, Contact, etc.)
- `src/components/services/` — individual service page components + `Accordion.jsx`
- `src/components/dropdown/` — mobile nav dropdown (`DropdownMenuButton.jsx`)
- `src/layouts/Layout.astro` — master layout

**Data files:**
- `src/components/home/services.js` — service definitions used across the site
- `src/components/about/therapists.js` — therapist info

**Static assets** in `public/`: images as `.webp`, therapist photos, insurance company logos, a GDPR PDF.

**Performance integrations:** `@playform/compress` + `astro-compressor` for asset compression; `@astrojs/sitemap` for sitemap generation.

## Pending

`feat__stehovani.patch` in the repo root is an unapplied patch for a clinic relocation (address change from Mladá Boleslav to Kosmonosy). Apply with `git apply feat__stehovani.patch` when needed.
