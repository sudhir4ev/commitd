# Commit.D

Personal blog and project portfolio built with [Astro](https://astro.build).

## Stack

- **Astro 5** — static site with MDX
- **Tailwind CSS 4** — styling
- **PageFind** — client-side search (astro-pagefind)
- **RSS** — `@astrojs/rss`
- **Sitemap** — `@astrojs/sitemap`
- **Mermaid** — diagrams in content via `rehype-mermaid-cli`

## Content

- **Posts** — `assets/content/posts/*.{md,mdx}` (title, description, date, tags, draft)
- **Projects** — `assets/content/projects/*.{md,mdx}` (title, description, date, demoURL, repoURL, team, role, tags,
  draft)
- **Intro** — `assets/content/intro.mdx` (home hero)

Site config (title, description, socials, counts) lives in `src/consts.ts`.

## Scripts

| Command                | Description      |
| ---------------------- | ---------------- |
| `npm run dev`          | Dev server       |
| `npm run build`        | Production build |
| `npm run preview`      | Preview build    |
| `npm run format`       | Prettier write   |
| `npm run format:check` | Prettier check   |

## Dev

```bash
npm install
npm run dev
```

Set `site` in `astro.config.mjs` for your production URL (sitemap/RSS).

Built with [astro-micro](https://github.com/trevortylerlee/astro-micro)
