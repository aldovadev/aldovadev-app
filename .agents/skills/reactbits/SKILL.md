---
name: reactbits
description: Install and integrate ReactBits UI components and effects. Keywords: reactbits, react-bits, animation, effect, background, text animation, install component, BlurText, Ballpit, GridScan, StarBorder, ProfileCard, LogoLoop.
---

## ReactBits Component Installer

Install a ReactBits component into this project.

### Source

- **Context7 Library ID:** `/davidhdev/react-bits`
- **GitHub Repo:** `DavidHDev/react-bits` — use the **ts-tailwind** variant only.
- **Raw source URL pattern:**
```
https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/ts-tailwind/{Category}/{ComponentName}/{ComponentName}.tsx
```

**Prefer Context7** (`/davidhdev/react-bits`) to fetch component docs/code. Fall back to raw GitHub URL if Context7 doesn't have the component.

### Category → Folder Map

| Category | GitHub Folder | Components |
|---|---|---|
| TextAnimations | `TextAnimations` | ASCIIText, BlurText, CircularText, CountUp, CurvedLoop, DecryptedText, FallingText, FuzzyText, GlitchText, GradientText, RotatingText, ScrambledText, ScrollFloat, ScrollReveal, ScrollVelocity, ShinyText, Shuffle, SplitText, TextCursor, TextPressure, TextType, TrueFocus, VariableProximity |
| Animations | `Animations` | AnimatedContent, Antigravity, BlobCursor, ClickSpark, Crosshair, Cubes, ElectricBorder, FadeContent, GhostCursor, GlareHover, GradualBlur, ImageTrail, LaserFlow, LogoLoop, Magnet, MagnetLines, MetaBalls, MetallicPaint, Noise, PixelTrail, PixelTransition, Ribbons, ShapeBlur, SplashCursor, StarBorder, StickerPeel, TargetCursor |
| Components | `Components` | AnimatedList, BounceCards, BubbleMenu, CardNav, CardSwap, Carousel, ChromaGrid, CircularGallery, Counter, DecayCard, Dock, DomeGallery, ElasticSlider, FlowingMenu, FluidGlass, FlyingPosters, Folder, GlassIcons, GlassSurface, GooeyNav, InfiniteMenu, Lanyard, MagicBento, Masonry, ModelViewer, PillNav, PixelCard, ProfileCard, ReflectiveCard, ScrollStack, SpotlightCard, Stack, StaggeredMenu, Stepper, TiltedCard |
| Backgrounds | `Backgrounds` | Aurora, Balatro, Ballpit, Beams, ColorBends, DarkVeil, Dither, DotGrid, FaultyTerminal, FloatingLines, Galaxy, GradientBlinds, Grainient, GridDistortion, GridMotion, GridScan, Hyperspeed, Iridescence, LetterGlitch, LightPillar, LightRays, Lightning, LiquidChrome, LiquidEther, Orb, Particles, PixelBlast, PixelSnow, Plasma, Prism, PrismaticBurst, RippleGrid, Silk, Squares, Threads, Waves |

### Install Steps

1. **Fetch source** — download from raw GitHub URL above (NOT the website). Each component folder contains `{ComponentName}.tsx`. Fetch only that file.

2. **Check deps** — already installed: `framer-motion`, `three`, `postprocessing`, `clsx`, `lucide-react`. Only install new ones if the source imports something missing.

3. **Create file** — save to `src/components/ui/{ComponentName}.tsx`. If it uses Three.js, save to `src/components/three/`. Add `"use client"` at top if missing.

4. **Export** — add to the matching `index.ts` barrel file (`src/components/ui/index.ts`).

5. **Show usage** — one short example, list key props only.

### Project Context

- Next.js 16 App Router, React 19, Tailwind CSS 4, `@/*` → `./src/*`
- Utility: `cn()` from `@/lib/utils`
- Theme: CSS custom properties in `globals.css`, `.dark` class toggle on `<html>`
- Existing ReactBits components: `Ballpit`, `GridScan`, `CountUp`, `TrueFocus`, `ProfileCard`, `LogoLoop`, `StarBorder`, `ShinyButton`