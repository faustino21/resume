# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal resume/portfolio site with a blog, built with Astro (static site generator). Deployed to Vercel at https://faustinoaron.dev.

## Commands

- `npm run dev` — start dev server with concurrent type checking (`astro check --watch & astro dev`)
- `npm run build` — type check then build static site (`astro check && astro build`)
- `npm run preview` — preview production build locally
- `npm run lint` — format with Prettier then fix with ESLint

## Architecture

**Framework**: Astro v4 with static output (no SSR). Pages are pre-rendered to HTML at build time.

**Content Collections**: Two collections defined in `src/content/config.ts`, validated with Zod:
- `post` (blog posts) — MDX/MD files in `src/content/post/`
- `experience` (work entries) — MDX/MD files in `src/content/experience/`

Both share a similar schema: title (max 60 chars), description, publishDate, optional coverImage, draft flag, and tags (auto-lowercased, deduplicated). Experience adds `jobPosition` and `jobDate` fields.

**Routing**: File-based via `src/pages/`. Dynamic routes use `[slug].astro` for detail pages and `[...page].astro` for paginated listings (10 items per page via Astro's `paginate()`).

**Layouts**: `BaseLayout.astro` wraps all pages. `BlogPost.astro` and `ExpPost.astro` extend it for detail views with TOC and scroll-to-top.

**Styling**: TailwindCSS with class-based dark mode. Theme colors are CSS variables (HSL) defined in `src/styles/app.css`. Use `cn()` from `@/utils` (clsx + tailwind-merge) for conditional classes.

**Theming**: Light/dark mode toggle persisted in localStorage. `ThemeProvider.astro` initializes theme and dispatches `theme-change` custom events.

**Site config**: `src/site.config.ts` holds metadata (author, title, description, locale) and menu links.

## Path Aliases (tsconfig.json)

- `@/assets/*` → `src/assets/*`
- `@/components/*` → `src/components/*`
- `@/layouts/*` → `src/layouts/*`
- `@/utils` → `src/utils/index.ts`
- `@/types` → `src/types.ts`
- `@/site-config` → `src/site.config.ts`

## Content Authoring

Blog posts and experience entries are MDX/MD files with frontmatter. Draft posts (`draft: true`) are hidden in production but visible in dev. Utility functions in `src/utils/post.ts` and `src/utils/experience.ts` handle sorting, filtering, and tag extraction.

## Code Style

- Prettier: tabs, single quotes, no trailing commas, 100 char width
- Astro components use polymorphic `as` prop pattern (e.g., Card, Button can render as different HTML elements)
- Minimal client-side JS — interactivity via `<script>` blocks in Astro components using vanilla DOM APIs

## Rules

- Never modify `src/content/config.ts` without explicit approval — it defines the Zod schemas for all content collections.
- When creating blog posts, always set `draft: true` initially. Only set `draft: false` when the user confirms the post is ready.
- Blog post descriptions must be 50-160 characters. Experience descriptions must be 10-160 characters. Titles max 60 characters for both.
- Tags must be lowercase strings. The schema auto-lowercases and deduplicates, but always write them lowercase in frontmatter.
- Use `cn()` from `@/utils` for all conditional or merged Tailwind classes. Never use string concatenation for class names.
- Use path aliases (`@/components/*`, `@/layouts/*`, `@/utils`, `@/types`, `@/site-config`) instead of relative imports when crossing directory boundaries.
- Components should support the polymorphic `as` prop when they render a single wrapper element.
- Keep client-side JavaScript minimal. Use `<script>` blocks with vanilla DOM APIs. Do not add framework runtime (React, Vue, etc.) without discussion.
- All pages must be wrapped in `BaseLayout.astro`. Blog detail pages use `BlogPost.astro` layout. Experience detail pages use `ExpPost.astro` layout.
- Do not modify the CSS variable theme tokens in `src/styles/app.css` without discussion — they affect the entire site's color scheme.
- Run `npm run lint` before committing to ensure Prettier and ESLint pass.
