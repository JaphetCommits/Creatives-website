# Creatives Society Website

## Overview
Vue 3 + Vite frontend for the Creatives Society at Panthers College of Computing Studies. The repo also contains a minimal Express + Mongoose backend scaffold under `server/`, but the frontend currently does not call it (no `axios`/`fetch` usage), so only the frontend is wired up to run in this Replit environment.

## Project Structure
- `client/` — Vue 3 + Vite app
  - `src/main.js` — app entry
  - `src/router.js` — vue-router (hash history) routes for `/`, `/admin`, `/admin/application`, `/admin/application/create`
  - `src/components/` — page sections and admin views
  - `vite.config.js` — Vite config (host `0.0.0.0`, port `5000`, `allowedHosts: true`)
- `server/` — Express + Mongoose scaffold (not started by default; requires `MONGO_URI`)

## Replit Setup
- Workflow `Start application`: `cd client && npm run dev` on port 5000 (webview)
- Vite dev server is configured to bind `0.0.0.0:5000` and accept all hosts so the Replit iframe proxy works.

## Deployment
- Target: `static`
- Build: `cd client && npm install && npm run build`
- Public dir: `client/dist`

## Notes
- If/when the frontend starts hitting the backend, the backend should be run on a separate port (e.g. 3001) bound to `localhost`, and a `MONGO_URI` secret will need to be provided.
