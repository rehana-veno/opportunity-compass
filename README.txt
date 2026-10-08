OPPORTUNITY COMPASS — hackathon-ready prototype

WHAT IT IS
A student opportunity discovery platform that helps learners find scholarships, internships, hackathons, courses, competitions, fellowships and volunteering opportunities based on their profile.

MAIN FLOW
1. Welcome / Auth: Sign Up, Log In, or Continue as Guest.
2. Student Profile: enter name, age, education, course, location, skills and interests.
3. Dashboard: Explore, Saved, Applications, My Profile and Notifications.

KEY FEATURES
- 30-item seeded opportunity catalog in data/opportunities.json
- Full-catalog search across title, organization, category, mode, location, level, summary, skills and tags
- Personalized match scoring using profile signals
- “Why this matches” explanations
- Basic eligibility pre-checks for age, location, education and student status
- Save and application tracking for signed-in demo accounts
- Guest browsing without getting stuck on the first page
- In-app notification center for saved deadlines / relevant opportunities
- Official-source buttons on opportunity detail views
- Responsive mobile + desktop UI
- Original anime-style SVG mentor and skateboard character (not copied from any IP)
- Separate data layer + dependency-free Node API

RUN
Option A — simplest: open index.html directly in a browser. The app has a direct-file fallback and works from file://.

Option B — local API server:
  cd backend
  npm start
Then open http://localhost:4173

API
GET /api/health
GET /api/opportunities

DEMO NOTE
Authentication and saved data are intentionally browser-local for the prototype. A production version should use a secure backend, real accounts, server-side storage, verified live opportunity feeds, and real email/push notifications.
