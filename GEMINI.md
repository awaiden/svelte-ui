# Svelte UI Monorepo

This is a Svelte 5 UI component library monorepo. It uses Bun for package management and Turbo for build orchestration.

## Project Structure

- `apps/docs`: Documentation site powered by [Starlight](https://starlight.astro.build/).
- `packages/ui`: Core UI component library.
- `examples/svelte`: Demo/showcase application using the UI library.
- `scripts`: Root scripts (if any).

## Tech Stack

- **Framework:** [Svelte 5](https://svelte.dev/) (using Runes and Snippets).
- **Documentation:** [Starlight](https://starlight.astro.build/) (Astro) & [Storybook](https://storybook.js.org/).
- **Headless UI:** [Bits UI](https://bits-ui.com/).
- **Styling:**
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [Tailwind Variants](https://www.tailwind-variants.org/) for component variants.
  - Component-specific CSS files.
- **Package Manager:** [Bun](https://bun.sh/).
- **Monorepo Tooling:** [Turbo](https://turbo.build/).
- **Linting & Formatting:** ESLint, and Prettier.

## Building and Running

### Root Commands

- `bun install`: Install all dependencies.
- `bun run dev`: Run all workspace dev servers in parallel (using Turbo).
- `bun run build`: Build all workspaces.

### Documentation (`apps/docs`)

- `bun run dev`: Start the Starlight dev server.
- `bun run build`: Build the documentation site.
- `bun run preview`: Preview the built documentation site.

### UI Package (`packages/ui`)

- `bun run storybook`: Start Storybook to preview components.
- `bun run dev`: Start a Vite dev server (for routes/showcase).
- `bun run build`: Build the library for distribution.
- `bun run add:component <name>`: Scaffold a new component folder with all required files (Svelte, CSS, Variants, Storybook, etc.) and register it automatically.

## Development Conventions

### Component Architecture

Each component is isolated in its own directory within `packages/ui/src/lib/components/`. A typical component directory contains:

- `[name].svelte`: Main component file using Svelte 5 runes (`$props`, `$derived`) and wrapping a Bits UI primitive.
- `[name].css`: Component-specific styles using Tailwind directives.
- `[name].variants.ts`: Definition of component variants using `tailwind-variants` (`tv`).
- `[name].stories.svelte`: Storybook stories for documentation and testing.
- `index.ts`: Re-exports the component and its types.

### Adding a New Component

Always use the scaffolding script to ensure consistency:

```bash
cd packages/ui
bun run add:component <component-name>
```

This script creates the directory, scaffolds all files from templates in `scripts/templates`, and registers the component in:

- `packages/ui/src/lib/components/index.ts` (re-export)
- `packages/ui/src/lib/components/components.css` (style import)

### Coding Style

- Prefer Svelte 5 **Runes** over Svelte 4 store/reactive syntax.
- Use **Snippets** for component composition (`{@render children?.()}`).
- Utilize **Tailwind Variants** for managing states and sizes.

## Validation Strategy

- **Storybook:** Verify visual appearance and interactions.
- **Svelte Check:** Run `bun run check` in `packages/ui` for type checking.
- **Linting:** ESLint handle most formatting and linting.
