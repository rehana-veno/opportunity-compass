# Opportunity Compass — Architecture

## Frontend
`index.html` contains the UI, styling, state management, matching logic, filtering, modals and local persistence so the prototype can be opened directly without a build step.

## Data layer
`data/opportunities.json` is the separate opportunity database for the prototype. The frontend has a fallback catalog copy so the app still runs when opened as a local `file://` URL.

## Backend
`backend/server.mjs` is a dependency-free Node HTTP server. It exposes `/api/health` and `/api/opportunities` and serves the project files.

## Matching
The ranking engine combines title/category/organization/skills/tags/location/education signals from the student profile. The UI explains the strongest matching signals instead of presenting an unexplained score.

## Production roadmap
- Secure authentication and authorization
- Server-side user profiles, saves and applications
- Verified opportunity ingestion from official sources / partner APIs
- More formal eligibility rules and document checklist support
- Email / browser push notifications with consent
- Analytics, rate limits, monitoring and automated data freshness checks
