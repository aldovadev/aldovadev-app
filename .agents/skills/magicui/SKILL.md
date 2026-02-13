````skill
---
name: magicui
description: Install and use Magic UI animated components and effects. Keywords: magicui, magic-ui, magic ui, animation, landing page, marquee, globe, border beam, meteors, shimmer, number ticker, bento grid, confetti, particles, text reveal, orbiting circles, dock, sparkles, blur fade, retro grid, neon gradient, hero video, animated beam, typing animation.
---

## Magic UI Component Installer

Install Magic UI animated components into this project.

### Source

- **Website:** https://magicui.design
- **GitHub Repo:** `magicuidesign/magicui`
- **Registry URL:** `https://magicui.design/r/<component-name>`
- Magic UI uses the **shadcn CLI** for installation — it shares the same infrastructure as shadcn/ui.

### Install Command

```bash
npx shadcn@latest add @magicui/<component-name>
```

The CLI reads the project's `components.json` and places components in `src/components/magicui/` by default.

### Available Components

| Category | Components |
|---|---|
| **Cards & Layouts** | magic-card, bento-grid, neon-gradient-card, warp-background |
| **Text Animations** | aurora-text, animated-gradient-text, animated-shiny-text, blur-fade, box-reveal, comic-text, flip-text, hyper-text, line-shadow-text, morphing-text, sparkles-text, spinning-text, text-animate, text-reveal, typing-animation, word-rotate, video-text, highlighter |
| **Backgrounds & Patterns** | animated-grid-pattern, dot-pattern, flickering-grid, grid-pattern, interactive-grid-pattern, retro-grid, striped-pattern, particles, meteors, ripple, grid-beams |
| **Borders & Beams** | animated-beam, border-beam, shine-border |
| **Buttons** | shimmer-button, shiny-button, pulsating-button, rainbow-button, ripple-button, interactive-hover-button, animated-subscribe-button, cool-mode |
| **Data & Progress** | number-ticker, animated-circular-progress-bar, scroll-progress, file-tree, animated-list, terminal, arc-timeline |
| **Visual Effects** | confetti, marquee, orbiting-circles, icon-cloud, globe, scratch-to-reveal, scroll-based-velocity |
| **Interactive** | dock, lens, pointer, smooth-cursor, progressive-blur, hero-video-dialog |
| **Device Mockups** | safari, iphone-15-pro, android |
| **Utilities** | code-comparison, script-copy-btn, animated-theme-toggler, pixel-image |

### Install Steps

1. **Run the CLI** — install via shadcn CLI:
   ```bash
   npx shadcn@latest add @magicui/<component-name>
   ```
   This auto-creates the file in `src/components/magicui/` and installs dependencies.

2. **Move to `src/components/ui/`** — for consistency with this project, move the file from `src/components/magicui/` to `src/components/ui/` and rename to PascalCase (e.g., `border-beam.tsx` → `BorderBeam.tsx`). Update internal imports if needed.

3. **Add `"use client"`** — add at the top of the file if missing and the component uses hooks, state, effects, or browser APIs.

4. **Export** — add the component to `src/components/ui/index.ts` barrel file.

5. **Show usage** — provide one short example and list key props only.

### Post-Install Checklist

- Some components inject CSS keyframes/variables via `components.json` `cssVars`. Verify they appear in `globals.css` after install, or add manually.
- Components that need `motion` use the `motion` package (formerly `framer-motion`). Already installed in this project as `framer-motion`.
- If a component imports from `@/components/magicui/`, update to `@/components/ui/` after moving.
- Replace any `next-themes` usage with the project's `useDarkMode()` hook from `@/hooks`.

### Common Dependencies

| Dependency | Already Installed | Notes |
|---|---|---|
| `motion` / `framer-motion` | ✅ | Most animation components depend on this |
| `clsx` | ✅ | Utility for class merging |
| `lucide-react` | ✅ | Icon library |
| `cobe` | ❌ | Required by `globe` |
| `react-tweet` | ❌ | Required by `tweet-card`, `client-tweet-card` |
| `canvas-confetti` | ❌ | Required by `confetti` |
| `shiki` | ❌ | Required by `code-comparison`, `script-copy-btn` |
| `rough-notation` | ❌ | Required by `highlighter` |

Only install new dependencies if the component requires them and they're not already present.

### Project Context

- Next.js 16 App Router, React 19, Tailwind CSS 4, `@/*` → `./src/*`
- Utility: `cn()` from `@/lib/utils`
- Theme: CSS custom properties in `globals.css`, `.dark` class toggle on `<html>`, `useDarkMode()` hook
- Component target: `src/components/ui/` with PascalCase filenames
- Existing Magic UI components already in the project: `AnimatedGridPattern`, `AnimatedThemeToggler`
- Existing ReactBits components (do NOT overwrite): `Ballpit`, `GridScan`, `CountUp`, `TrueFocus`, `ProfileCard`, `LogoLoop`, `ShinyButton`, `ShinyText`, `RotatingText`, `Silk`, `SilkBackground`, `GradientBlinds`, `Cubes`, `ScrollStack`, `Stepper`, `StickerPeel`, `MagicBento`
````
