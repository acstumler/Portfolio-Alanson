# Alanson Stumler portfolio

Personal site for Alanson Stumler: data and AI for operationally complex firms.
Hand-built with Next.js (App Router) and TypeScript. Single page, no CMS.

Live at https://portfolio-alanson.vercel.app

## Stack
- Next.js (App Router), React, TypeScript
- A single global stylesheet with CSS design tokens (no Tailwind, no UI kit)
- framer-motion (section reveals, node-graph animation) and lenis (smooth scroll)
- Fonts via next/font: Inter Tight (display and body), Geist Mono (labels)
- A procedural 2D-canvas dot-terrain and an SVG film grain (no image assets, no WebGL)

## Develop
This repo uses pnpm (see the policy below).

```
pnpm install
pnpm dev              # http://localhost:3000
pnpm build && pnpm start   # production build
```

## Package manager and supply-chain policy
The package manager is pinned and supply-chain safeguards are set in
`pnpm-workspace.yaml`, so local and CI installs behave the same:

- `packageManager` is pinned to `pnpm@11.5.2`.
- `minimumReleaseAge: 4320` so no package version published less than 3 days ago is
  installed (a guard against a freshly compromised release).
- Dependency build (lifecycle) scripts are blocked by default and none are
  allowlisted. `sharp`, pulled in transitively by Next, requests one and is
  intentionally denied: the site uses no `next/image` and Vercel optimizes images
  server-side, so its native binary is not needed.
- All dependencies are pinned to exact versions (no `^` or `~`).

## Deploy
Push to `main`; Vercel auto-deploys (framework preset: Next.js).
