# Working in this codebase

Astro Rocket is a starter theme. You are almost certainly here to help someone
build **their** website on top of it, not to develop the theme itself. This file
tells you where everything lives and which conventions to follow, so you can
make changes that fit rather than changes that merely work.

---

## ⚠️ Critical Rule for AI Agents
- **NEVER RUN `npm run dev` OR `pnpm run dev`**: The user runs the dev server independently. Agents must not start dev servers or blocking background processes for running the dev environment.

---

## 🔄 Fork & Upstream Sync Rules (Preventing Code Breakages)

This repository is a customized fork of `https://github.com/hansmartensdev/astro-rocket`.
To ensure future upstream updates can be merged cleanly without breaking portfolio customizations:

1. **Keep Custom Content & Config Isolated:**
   - **Personal Profile & Metadata:** Modify [src/config/site.config.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/site.config.ts) and [src/config/branding.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/branding.ts).
   - **Navigation & Links:** Modify [src/config/nav.config.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/nav.config.ts).
   - **Copy & Text:** Use [src/i18n/en.json](file:///home/ahmad/NIDE/kaunain-portfolio/src/i18n/en.json) via `t()` instead of hard-coding strings directly in `.astro` templates.
   - **Projects & Posts:** Place all custom portfolio projects in `src/content/projects/en/` and blog posts in `src/content/blog/en/`.
2. **Avoid Modifying Core Engine Files Directly:**
   - Core layouts (`src/layouts/`), shared helpers (`src/lib/`), and generic build scripts are maintained by upstream. Avoid bespoke edits in these files unless strictly necessary.
3. **How to Sync Upstream Updates:**
   - Run `pnpm sync:upstream` (or sync via GitHub UI followed by `git pull origin main`).
   - Run `pnpm install` and `pnpm check` to verify compatibility.

---

## The shape of the project

```
src/config/          Site settings — start here for almost any request
src/content/         The site's content (Markdown/MDX/JSON collections)
src/i18n/            All user-facing interface text, per language
src/components/      44 components, grouped by purpose
src/pages/           Routes; a file here is a URL
src/layouts/         Page shells the routes render into
src/lib/             Helpers for blog, projects, tags, SEO, themes
src/styles/          Design tokens and the eight colour themes
component-registry.json   Machine-readable catalogue of every component
```

**Read `component-registry.json` first.** It lists every component with its
category, purpose and props. It is the fastest way to find out whether the
thing you are about to build already exists — it usually does.

It is also the only source for the component count. Every number in the
README and in the site copy is derived from it, and
`src/__tests__/component-count.test.ts` fails if they drift apart.

## Where to make a change

| The request | The file |
|---|---|
| Site name, logo, social links, contact details | `src/config/site.config.ts` & `src/config/branding.ts` |
| Navigation menus | `src/config/nav.config.ts` |
| Languages | `src/config/i18n.config.ts` |
| Cookie-consent behaviour | `src/config/consent.config.ts` |
| Any interface text, including `aria-label`, `alt`, `placeholder` and `title` | `src/i18n/en.json` (and other locales) |
| A blog post | a new `.mdx` file in `src/content/blog/<locale>/` |
| A project | a new `.mdx` file in `src/content/projects/<locale>/` |
| Colours | `src/styles/themes/*.css` — eight themes, tokens only |

**Page copy is not in the page files.** Text lives in `src/i18n/en.json` and is
read through `t()`. Editing a heading usually means editing JSON, not `.astro`.
If a page appears to have hard-coded text, check the locale file first.

## Conventions worth keeping

- **Use existing components.** Check the registry before writing a new one.
  Components share one design language; a bespoke element breaks it.
- **Use the design tokens.** Colours come from CSS custom properties defined in
  `src/styles/`. Never hard-code a hex value — it will not follow the colour
  theme, and it will fail the contrast checks.
- **Every locale file stays in step.** Adding a key to `en.json` means adding it
  to every other locale, or that language falls back mid-page.
- **Motion respects `prefers-reduced-motion`.** Anything animated must stop for
  visitors who ask it to.
- **Images go through `astro:assets`.** Use the `<Image>` component so sizes and
  formats are generated at build time.
- **Zero JavaScript unless it earns its place.** Astro ships none by default;
  reach for a `<script>` only when the interaction genuinely needs one.

## Commands

```bash
pnpm dev          # development server
pnpm build        # production build — run before declaring work finished
pnpm check        # astro check, TypeScript, ESLint and Prettier
pnpm test         # Vitest unit tests
pnpm fix          # apply ESLint and Prettier fixes
pnpm sync:upstream # fetch and merge upstream updates
```

`pnpm build` is the real test. It runs `astro check`, the content-collection
schemas and the link validation, and it fails on problems a dev server hides.
