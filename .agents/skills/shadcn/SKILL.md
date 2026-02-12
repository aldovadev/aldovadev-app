---
name: shadcn
description: Install and use shadcn/ui components. Keywords: shadcn, shadcn-ui, ui component, dialog, dropdown, accordion, sheet, tabs, tooltip, popover, add component, install shadcn.
---

## shadcn/ui Integration

Add and use shadcn/ui components in this project.

### Configuration

Already configured via `components.json`:
- **Style:** new-york
- **Base color:** neutral
- **CSS variables:** enabled (in `src/app/globals.css`)
- **Icon library:** lucide-react
- **Aliases:** `@/components/ui`, `@/lib/utils`, `@/hooks`

### Install a Component

Run the CLI — it auto-reads `components.json`:

```bash
npx shadcn@latest add <component-name>
```

Examples:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add accordion tabs tooltip
```

Components are placed in `src/components/ui/` automatically.

### After Installing

1. The CLI creates the file in `src/components/ui/`. No manual file creation needed.
2. **Export** — add the component to `src/components/ui/index.ts` barrel file.
3. **Import** — use barrel imports: `import { Dialog } from "@/components/ui"`.

### Usage Rules

- Use `cn()` from `@/lib/utils` for conditional class merging (already set up).
- Style with project color tokens: `bg-background`, `text-foreground`, `border-border-color`, `text-tomato`, etc.
- The project has a custom `<Button>` with cva variants (`default`, `outline`, `ghost`, `link`). Prefer it over shadcn's Button unless you need Radix-specific features not covered.
- Mark wrapper components `"use client"` if they use hooks or state.

### Existing Custom UI Components

These are already in `src/components/ui/` and should NOT be overwritten by shadcn:
- `Button.tsx` — custom cva-based button with project-specific variants
- `Ballpit.tsx`, `GridScan.tsx`, `StarBorder.tsx`, `ShinyButton.tsx` — ReactBits effects
- `CountUp.tsx`, `TrueFocus.tsx`, `ProfileCard.tsx`, `LogoLoop.tsx` — ReactBits components
- `ResizableNavbar.tsx`, `AnimatedThemeToggler.tsx`, `ThemeToggle.tsx` — custom project components
