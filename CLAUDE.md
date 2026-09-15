# CLAUDE.md — Assistant Context & Instructions

This repository is a customized portfolio built on **Astro Rocket** (Astro 6/7 + Tailwind CSS v4 + TypeScript + React).

---

## ⚠️ Important Rules for AI Assistants
- **NEVER RUN `npm run dev` or `pnpm run dev`**: The developer runs their own local development server. Do not run blocking/dev commands.
- Use `pnpm` as the package manager for all commands.
- Keep explanations and communication simple, friendly, and conversational (Hindi/Urdu friendly).

---

## 🔄 Fork & Upstream Sync Rules (Preventing Breakages)

This repository is a fork of `https://github.com/hansmartensdev/astro-rocket`.
To keep portfolio customizations intact during future upstream syncs:

1. **Content & Config Isolation:**
   - **Personal Info / Socials:** Edit [src/config/site.config.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/site.config.ts) and [src/config/branding.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/branding.ts).
   - **Navigation:** Edit [src/config/nav.config.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/nav.config.ts).
   - **Text & Copy:** Use `src/i18n/en.json` rather than hardcoding in `.astro` components.
   - **Projects:** Add new markdown files in `src/content/projects/en/`.
   - **Blog Posts:** Add new markdown files in `src/content/blog/en/`.
2. **Preserve Core Architecture:**
   - Avoid making direct bespoke modifications to core layouts (`src/layouts/`) or shared utilities (`src/lib/`) unless necessary.
3. **Upstream Sync Command:**
   ```bash
   pnpm sync:upstream
   pnpm install
   pnpm check
   ```

---

## 🛠 Useful Commands

| Task | Command | Description |
|---|---|---|
| **Install Dependencies** | `pnpm install` | Installs project packages |
| **Build Project** | `pnpm build` | Production static build |
| **Type & Quality Check** | `pnpm check` | Runs Astro check, TS, ESLint & Prettier |
| **Sync Upstream** | `pnpm sync:upstream` | Fetches & merges updates from original repo |
| **Run Tests** | `pnpm test` | Runs Vitest unit tests |
| **Apply Auto-Fixes** | `pnpm fix` | Automatically fixes ESLint & Prettier issues |

---

## 📂 Key File & Folder Locations

| Path | Purpose |
|---|---|
| `src/config/branding.ts` | Brand name (`SITE_NAME`) and theme primary color |
| `src/config/site.config.ts` | Primary portfolio metadata, author info, social links, SEO defaults |
| `src/config/nav.config.ts` | Navigation menu links and footer configuration |
| `src/config/i18n.config.ts` | Internationalization settings |
| `src/config/consent.config.ts` | Analytics / Cookie consent setup |
| `src/content.config.ts` | Content collection schemas (Zod) |
| `src/content/` | Content data: `projects/en/`, `blog/en/`, `authors/`, `faqs/`, `stack/` |
| `src/components/` | Astro & React UI components |
| `src/layouts/` | Page shells and base layouts |
| `src/pages/` | File-based routing (`index.astro`, `about.astro`, etc.) |
| `src/styles/` | Global CSS styles and Tailwind imports |
| `public/` | Static assets (favicons, manifest, avatars) |
