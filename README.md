# Brushify

A D2C e-commerce site for premium electric toothbrushes — product showcase, cart, checkout, and order history.

## Tech Stack

**Client**
- React 19 + TypeScript
- Vite 7
- Tailwind CSS v4
- shadcn/ui (Radix UI primitives)
- TanStack React Query + tRPC (client) — typed API calls
- React Hook Form + Zod-style resolvers (`@hookform/resolvers`)

**Server**
- Express
- tRPC (server)
- Drizzle ORM (+ `drizzle-kit` for migrations)
- AWS S3 (`@aws-sdk/client-s3`, presigned URLs) — asset storage

## Features

- **Hero section** — large single-brush carousel (auto-advancing with crossfade + progress dots)
- **Marquee** — scrolling brand/feature strip
- **Smart Features** and **Why Us** sections
- **Plans** — subscription/plan options
- **Old Testimonials** section
- **Products** page — catalog browsing
- **Cart sidebar** — slide-out cart
- **Checkout page** — customer details + payment method selection (card/other)
- **Order History** page
- **About** and **Contact** pages
- Reusable UI: `PremiumButton`, `Counter`, `StarRating`, `WaveDivider`, `Reveal` (scroll-reveal animation), `Map`, `ErrorBoundary`

## Project Structure

```
client/
  src/
    pages/
      Home.tsx, Products.tsx, Checkout.tsx, OrderHistory.tsx,
      About.tsx, Contact.tsx, Features.tsx, NotFound.tsx
    components/
      Navbar.tsx, Footer.tsx, CartSidebar.tsx
      PremiumButton.tsx, Counter.tsx, StarRating.tsx, WaveDivider.tsx, Reveal.tsx, Map.tsx
      sections/
        Hero.tsx        → Hero carousel
        Marquee.tsx
        SmartFeatures.tsx
        WhyUs.tsx
        Plans.tsx
        OldTestimonials.tsx
      ui/                → shadcn/ui components
    hooks/, contexts/, lib/
    const.ts
    App.tsx, main.tsx, index.css
  public/
    images/, videos/
server/
  _core/index.ts          → Express + tRPC server entry
shared/
  const.ts                → Shared constants between client/server
```

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Set up the database (Drizzle):
   ```
   npm run db:push
   ```
3. Run the dev server (client + server together):
   ```
   npm run dev
   ```

## Other Scripts

```
npm run build     # Builds client (Vite) and bundles server (esbuild) into dist/
npm start          # Runs the production build
npm run check       # TypeScript type-check (no emit)
npm test            # Run tests (Vitest)
npm run format       # Format code with Prettier
```
