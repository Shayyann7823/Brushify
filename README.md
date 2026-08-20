# Brushify 🪥

A premium marketing and e-commerce storefront for "Brushify" — a smart electric toothbrush brand. Built as a fast, animated, single-page React app with a full product catalog, cart, and checkout experience.

## Features

- **Cinematic landing page** — full-bleed video hero, scroll-driven parallax, and a marquee/testimonials/feature showcase
- **Product catalog** — browse and filter electric toothbrush models
- **Cart & checkout** — add-to-cart flow with a dedicated checkout page
- **Order history** — view past orders
- **Marketing pages** — About, Features, and Contact pages
- **Light/dark theme support** via a theme context
- **Polished UI kit** — built on [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/) primitives, animated with [Framer Motion](https://www.framer.com/motion/)

## Tech Stack

**Frontend**
- React 19 + TypeScript
- [Vite](https://vitejs.dev/) for dev/build tooling
- [Wouter](https://github.com/molefrog/wouter) for client-side routing
- Tailwind CSS v4 + shadcn/ui + Radix UI primitives
- Framer Motion for animation
- TanStack Query, React Hook Form + Zod for data/forms



> **Note:** This export ships with a stub server (`server/_core/index.ts`) that only serves the Vite frontend. None of the routed pages currently call a backend API — cart and order history are handled client-side via React context. Deploying (e.g. to Vercel) just needs a static `vite build`.

## Project Structure

```
client/
├── src/
│   ├── pages/           # Home, About, Features, Products, Contact, Checkout, OrderHistory
│   ├── components/
│   │   └── sections/     # Hero, Marquee, WhyUs, SmartFeatures, Testimonials
│   ├── contexts/        # CartContext, OrderHistoryContext, ThemeContext
│   ├── hooks/
│   └── lib/
└── public/               # Images, hero video

server/
└── _core/index.ts        # Minimal dev server entry (boots Vite)

shared/                    # Shared constants/types between client and server
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or pnpm — a `pnpm` lockfile config is present)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the dev server (defaults to port 3000, configurable via `PORT`).

### Other scripts

```bash
npm run build     # vite build + bundle the server entry with esbuild
npm start          # run the production build
npm run check       # TypeScript type-check
npm run format       # Prettier
npm test            # Vitest
```

### Deployment

A `vercel.json` is included, configured to run `vite build` and serve `dist/public`.

> **NOTE:** This is a frontend-only prototype. There is no real backend, database, or payment processing — cart, checkout, and orders are handled client-side for demo purposes.
