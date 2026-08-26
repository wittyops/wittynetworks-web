# Witty Networks Web

The [wittynetworks.com](https://wittynetworks.com) marketing site — a Next.js app with a public marketing surface and an internal portal.

## Route structure

- `app/(site)` — public marketing pages: `services`, `contact`, `about`.
- `app/(portal)` — internal portal: `engineer`, `client`.
- `app/api` — API routes:
  - `contact` — live; validates the submission and pushes a notification to ntfy.
  - `support` and `appointments` — 501 stubs pending Phase 2 Witty-agent integration (see `WITTY.md`).

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Deployment

Deployed via the multi-stage `Dockerfile`: dependencies are installed with pnpm, the app is built with `next build`, and the final image runs the Next.js `standalone` output on port 3000.

## Design tokens

Brand colors and design tokens are synced from Penpot — see `PENPOT_GUIDE.md` for the workflow.

## Agent identity

See `WITTY.md` for the Witty agent's identity and the plan for wiring it into `support`/`appointments`.
