# Creatives Society Website

## Overview
Vue 3 + Vite frontend for the Creatives Society at Panthers College of Computing Studies. Express + Mongoose backend under `server/` handles member CRUD and connects to MongoDB.

## Project Structure
- `client/` — Vue 3 + Vite app
  - `src/main.js` — app entry
  - `src/router.js` — vue-router (hash history) routes for `/`, `/admin`, `/admin/application`, `/admin/application/create`
  - `src/components/` — page sections and admin views
  - `vite.config.js` — Vite config (host `0.0.0.0`, port `5000`, `allowedHosts: true`, `/api` proxied to `localhost:3001`)
- `server/` — Express + Mongoose backend (port 3001, serves built frontend in production)
- `api/` — Vercel serverless functions (mirrors `server/` API routes for Vercel deployment)

## Replit Setup
- Workflow `Start application`: `cd client && npm run dev` on port 5000 (webview)
- Workflow `Backend API`: `cd server && node server.js` on port 3001
- Vite proxies `/api` → `localhost:3001` in development
- `MONGO_URI` secret must be set in Replit Secrets

## Replit Deployment (autoscale)
- Build: `cd client && npm install && npm run build && cd ../server && npm install`
- Run: `cd server && node server.js`
- Express serves the built frontend from `client/dist` and handles `/api` routes

## Vercel Deployment
- Config: `vercel.json` at root
- Build: `cd client && npm install && npm run build` → output `client/dist`
- API: `api/members/index.js` (GET/POST) and `api/members/[id].js` (PUT/DELETE) are Vercel serverless functions
- **Required:** Add `MONGO_URI` as an Environment Variable in Vercel project settings before deploying

## User Preferences
- Role field in admin forms should be a dropdown (not free text), using the predefined roles from MemberSection
