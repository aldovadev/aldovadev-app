# Aldovadev App - Copilot Rules

These rules define how GitHub Copilot should work in this Next.js project.

## Scope

- Applies to all files in this repo unless a file has stricter local rules.
- Favor clarity, accessibility, and performance.

## Tech Stack

- Framework: Next.js App Router
- Language: TypeScript + React
- Styling: Tailwind CSS
- Motion: Framer Motion
- 3D/FX: Three.js and postprocessing

## Folder Structure

```
src/
  app/                 # App Router pages, layouts, route handlers
  components/          # UI + layout + section components
    layout/
    sections/
    ui/
  data/                # Static data modules
  hooks/               # React hooks
  lib/                 # Utilities
  types/               # Shared TypeScript types
public/                # Static assets
```

## Naming Conventions

- React components: PascalCase file names and exports (e.g., `Navbar.tsx`).
- Hooks: `useX.ts` and `useX()` naming.
- Non-component modules: lowercase or kebab-case file names (e.g., `projects.ts`).
- CSS files: match the component name when scoped to a component.
- Variables: `camelCase`, constants `UPPER_SNAKE_CASE`.

## TypeScript and Linting

- Zero TypeScript errors and zero lint warnings are required.
- Do not use `any`, `@ts-ignore`, or `@ts-expect-error`.
- Prefer explicit return types for exported functions.

## Error Handling

- Route handlers must return structured errors with proper status codes.
- UI async actions must surface failures to the user and avoid silent catches.
- Use error boundaries for UI crashes where appropriate.

## Unused Code and Dependencies

- Remove unused variables, functions, components, and modules.
- Remove unused dependencies from `package.json`.
- Do not leave dead feature flags or commented-out code.

## MCP and Tool Artifacts

- Remove screenshots, traces, and temporary artifacts after use.
- Do not commit tool output files unless explicitly required by the task.

## Documentation Updates

- When adding a new feature, page, API route, or integration, update README.md.
- Document any new environment variables or setup steps immediately.

## Comments Policy

- Comments are only allowed as a single-line comment in the form:
  `// Explanation function`
- Do not add multi-line comments or explanatory blocks.

## Before Committing Checklist

- [ ] `npm run lint` passes with zero warnings
- [ ] `npx tsc --noEmit` passes with zero errors
- [ ] `npm run build` succeeds
- [ ] No unused code or dependencies remain
- [ ] README.md updated for new features or integrations
- [ ] Tool artifacts removed (screenshots, traces, temp files)
- [ ] Comment rule respected
