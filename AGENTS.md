# AGENTS.md — Guidelines for AI Agents

Welcome to the **Kaunain Portfolio** codebase (built on Astro 6, Tailwind CSS v4, TypeScript, and React).

---

## ⚠️ Critical Rule for All Agents
- **NEVER RUN `npm run dev` OR `pnpm run dev`**: The user runs the dev server independently. Agents must not start dev servers or blocking background processes for running the dev environment.

---

## 🛠 Tech Stack Overview
- **Framework:** [Astro 6](https://astro.build/) (Static Site Generation with Netlify/Vercel adapter support)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **UI Components:** [React 19](https://react.dev/), [astro-icon](https://github.com/natemoo-re/astro-icon), Lucide icons
- **Language:** TypeScript 5.7+
- **Content Management:** Astro Content Collections (defined in `src/content.config.ts` using Zod schemas)
- **Package Manager:** `pnpm`
- **Testing & Quality:** Vitest, Playwright, ESLint 9, Prettier, Astro Check

---

## 📂 Project Architecture

```
├── astro.config.mjs          # Astro core configuration, plugins, env schemas
├── package.json              # Project scripts & dependencies
├── src/
│   ├── assets/               # Local images, logos, and branding assets
│   ├── components/           # Reusable Astro & React components
│   │   ├── blocks/           # Reusable page block sections
│   │   ├── common/           # Shared UI primitives (Buttons, Badges, etc.)
│   │   ├── layout/           # Header, Footer, Nav components
│   │   └── seo/              # SEO, OpenGraph, JSON-LD schema components
│   ├── config/               # Central configuration files
│   │   ├── site.config.ts    # Main portfolio & metadata configuration
│   │   ├── nav.config.ts     # Header navigation links & footer config
│   │   ├── i18n.config.ts    # Multi-language configuration
│   │   └── consent.config.ts # Cookie/analytics consent configuration
│   ├── content/              # Content collections
│   │   ├── authors/          # Author profiles
│   │   ├── blog/             # MDX blog posts
│   │   ├── faqs/             # FAQ entries
│   │   ├── pages/            # Custom MDX content pages
│   │   ├── projects/         # Portfolio projects
│   │   └── stack/            # Tech stack items
│   ├── content.config.ts     # Content schemas & Zod definitions
│   ├── i18n/                 # Localization dictionaries
│   ├── layouts/              # Page layouts (BaseLayout, BlogPost, etc.)
│   ├── lib/                  # Utilities, SEO helpers, date formatting
│   ├── pages/                # Astro route pages (file-based routing)
│   └── styles/               # Global CSS & Tailwind imports
└── public/                   # Static public assets (favicons, robots.txt, etc.)
```

---

## 🚀 Common Commands & Workflow

Always use **`pnpm`** for package operations:

| Task | Command | Description |
|---|---|---|
| **Install Dependencies** | `pnpm install` | Installs project packages |
| **Build Project** | `pnpm build` | Builds static site into `dist/` |
| **Type Check** | `pnpm check` | Runs `astro check` for TS & template errors |
| **Lint Code** | `pnpm lint` | Runs ESLint checks |
| **Fix Lint Issues** | `pnpm lint:fix` | Automatically fixes ESLint issues |
| **Check Formatting** | `pnpm format:check` | Checks code formatting with Prettier |
| **Auto-Format Code** | `pnpm format` | Formats all files with Prettier |
| **Run Unit Tests** | `pnpm test` | Runs Vitest tests |
| **Run E2E Tests** | `pnpm test:e2e` | Runs Playwright tests |
| **Full Validation** | `pnpm validate` | Runs lint + check + build in sequence |

---

## 📝 Content & Configuration Guidelines

1. **Portfolio Data & Personal Details:**
   - Update `src/config/site.config.ts` to change author name, bio, social links, and SEO defaults.
   - Update `src/config/nav.config.ts` for navbar links and footer columns.

2. **Adding Blog Posts / Projects / Stack:**
   - Place new entries in `src/content/blog/`, `src/content/projects/`, or `src/content/stack/`.
   - Ensure all frontmatter fields adhere strictly to `src/content.config.ts` Zod schemas.

3. **Styling & CSS:**
   - Utilize Tailwind CSS v4 utility classes.
   - Custom CSS should reside in `src/styles/global.css` or component-scoped `<style>` tags.

4. **Code Quality Standards:**
   - Keep TypeScript types clean and strict.
   - Always verify changes with `pnpm check` or `pnpm build` before committing.
   - Keep user responses clear, friendly, and in simple conversational language.
