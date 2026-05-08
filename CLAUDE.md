# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev        # Start dev server with Turbopack
bun build      # Production build
bun start      # Start production server
bun lint       # Run ESLint
```

This project uses **Bun** as the package manager. Use `bun add <pkg>` to install dependencies.

## Architecture

Single-page Next.js 15 (App Router) landing site for **Asroy Welfare Trust**, a nonprofit. There is one route (`src/app/page.tsx`) that composes all section components in order:

```
Navbar → Hero → About → Certifications → WhatWeDo → Gallery → CTABanner → Footer
```

All page sections live in `src/components/`. The project has no additional routes, API routes, or server actions.

### Styling

- **Tailwind CSS v4** — configured via `src/app/globals.css` (`@theme` block), no `tailwind.config.ts`.
- **shadcn/ui** is wired up (`components.json`, base color: zinc, CSS variables enabled). Add components with `bunx shadcn@latest add <component>`.
- Brand palette is defined as CSS custom properties in `globals.css`:
  - `--color-trust-navy` (#1a3566) — headings default to this color
  - `--color-trust-green` / `--color-trust-green-light` — primary action color
  - `--color-trust-blue-pale` / `--color-trust-green-pale` — light background tints
- Font: `Bricolage_Grotesque` (Google Fonts, loaded in `layout.tsx`).

### Images

Remote images are allowed from `assets.lummi.ai`, `images.unsplash.com`, and `picsum.photos` (configured in `next.config.ts`).

### Path alias

`@/` maps to `src/` (set in `tsconfig.json`).
