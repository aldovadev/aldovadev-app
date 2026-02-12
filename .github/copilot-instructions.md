# Copilot Instructions — Aldovadev App

## Architecture

- Multi-page company website. Route group `(landing)` for public pages, `/aldovadev` for personal branding.
- `/` — Company homepage (IT consulting, tech solutions, courses).
- `/aldovadev` — Personal portfolio SPA with scroll-snap sections.
- Path alias: `@/*` → `./src/*`
- Every sub-directory has an `index.ts` barrel — import from barrels, not individual files.

## Critical Patterns

- **Navigation**: `CompanyNavbar` uses `<Link>` routing; `PersonalNavbar` uses hash-based `scrollToSection()`.
- **Scroll** on `/aldovadev` is on `<main>`, not `window`. Use `scrollToSection()` from `@/lib/scroll`.
- **Sections** use CSS classes `section-screen` + `container-main` from `globals.css`.
- **Colors** — use Tailwind `@theme inline` tokens (`bg-background`, `text-tomato`, `border-border-color`). Never hardcode hex.
- **Theme** — `dark` class on `<html>`, read via `useDarkMode()`. Persisted in `localStorage('theme')`.

## Conventions

- Component files & exports are **PascalCase** (`Button.tsx` → `export function Button`).
- `"use client"` only when needed (hooks, state, effects, browser APIs).
- Static content in `src/data/`; types in `src/types/index.ts`.
- Company section components in `src/components/landing/`; personal sections in `src/components/sections/`.
- New UI components go in `src/components/ui/`, exported from its `index.ts`.
