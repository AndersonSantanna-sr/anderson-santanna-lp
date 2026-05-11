# anderson.dev — Personal Portfolio

Portfolio site of Anderson Sant'Anna, Senior React Native & TypeScript Engineer.

**Live:** [andersonsantanna.io](https://andersonsantanna.io)

## Stack

|                |                                                               |
| -------------- | ------------------------------------------------------------- |
| **Framework**  | Next.js 16 (App Router) + TypeScript                          |
| **Styling**    | Tailwind CSS v4 — custom CSS design tokens, no utility sprawl |
| **Animations** | Motion (Framer Motion) — scroll-triggered reveals             |
| **Dark mode**  | next-themes                                                   |
| **Fonts**      | Playfair Display (serif) + JetBrains Mono                     |
| **Analytics**  | Vercel Analytics + Speed Insights                             |
| **Tests**      | Vitest + Testing Library                                      |
| **CI**         | GitHub Actions — lint, typecheck, test on every PR            |

## Sections

- **Hero** — typewriter effect, entrance animation
- **About** — stats, tech stack
- **Skills** — bento-grid layout
- **AI & Dev** — tools and workflow
- **Work** — selected projects (Drogasil, Drogaraia, Vivo Bank, Iguatemi)
- **Experience** — timeline
- **Contact** — email + social links

## Running locally

```bash
pnpm install
pnpm dev
```

## Commands

| Command          |                  |
| ---------------- | ---------------- |
| `pnpm dev`       | Dev server       |
| `pnpm build`     | Production build |
| `pnpm lint`      | ESLint           |
| `pnpm typecheck` | TypeScript check |
| `pnpm test:run`  | Run tests        |
