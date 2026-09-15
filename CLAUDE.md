# CLAUDE.md — Assistant Context & Instructions

This file contains key context, commands, and rules for working with this repository.

---

## ⚠️ Important Rules
- **DO NOT run `npm run dev` or `pnpm run dev`**: The developer runs the local development server manually.
- Use `pnpm` as the package manager for all commands.
- Keep language simple and conversational (Hindi/Urdu friendly without complicated jargon).

---

## 📌 Project Overview
- **Project Name:** Kaunain Portfolio (based on Astro Rocket)
- **Framework:** Astro 6
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **UI & Icons:** React 19, Lucide React, Astro Icon
- **Content Collections:** Zod-validated Markdown/MDX collections in `src/content/`
- **Output:** Static site with Vercel / Netlify adapter support

---

## 🛠 Useful Commands

```bash
# Install dependencies
pnpm install

# Build static output
pnpm build

# Type check Astro & TypeScript
pnpm check

# Lint checks & fixes
pnpm lint
pnpm lint:fix

# Formatting
pnpm format
pnpm format:check

# Run tests
pnpm test
pnpm test:e2e

# Full build validation
pnpm validate
```

---

## 📂 Key File & Folder Locations

| Path | Purpose |
|---|---|
| `src/config/site.config.ts` | Primary portfolio metadata, author info, social links, SEO defaults |
| `src/config/nav.config.ts` | Navigation menu links and footer configuration |
| `src/config/i18n.config.ts` | Internationalization settings |
| `src/config/consent.config.ts` | Analytics / Cookie consent setup |
| `src/content.config.ts` | Content collection schemas (Zod) |
| `src/content/` | Content data: `blog/`, `projects/`, `stack/`, `authors/`, `faqs/`, `pages/` |
| `src/components/` | Astro & React UI components |
| `src/layouts/` | Page layouts (`BaseLayout.astro`, etc.) |
| `src/pages/` | File-based routing (`index.astro`, `blog/`, `projects/`, etc.) |
| `src/styles/` | Global CSS styles and Tailwind imports |
| `public/` | Static assets (favicons, manifest, avatars) |
| `astro.config.mjs` | Astro configuration and environment field schemas |

---

## 💡 Best Practices
1. **Adding/Editing Content:** Match frontmatter properties against definitions in [src/content.config.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/content.config.ts).
2. **Customizing Profile:** Update [src/config/site.config.ts](file:///home/ahmad/NIDE/kaunain-portfolio/src/config/site.config.ts) and replace branding assets in `public/` and `src/assets/branding/`.
3. **Validating Changes:** Always run `pnpm check` or `pnpm build` to catch type or template errors.
