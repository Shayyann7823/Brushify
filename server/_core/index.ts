// Minimal dev server entry point.
//
// The original backend (real server/ code: tRPC routers, DB, auth, S3, etc.)
// was not present in the project export this was rebuilt from. This file
// only boots Vite's own dev server so the frontend (client/) runs exactly as
// before. It does not implement any API routes, database access, or auth.
//
// None of the app's routed pages (Home, About, Features, Products, Contact,
// Checkout, NotFound) call the backend, so this is enough for `npm run dev`
// to serve the site normally.

import path from "node:path";
import { createServer } from "vite";

const PROJECT_ROOT = path.resolve(import.meta.dirname, "..", "..");
const PORT = Number(process.env.PORT) || 3000;

async function main() {
  const server = await createServer({
    configFile: path.join(PROJECT_ROOT, "vite.config.ts"),
    server: {
      port: PORT,
    },
  });

  await server.listen();
  server.printUrls();
}

main().catch((err) => {
  console.error("Failed to start dev server:", err);
  process.exit(1);
});
