# FinLit India

## Current State
The app has 13 pages including Budget Planner, Investment Calculator, Quiz, Government Schemes, India Stats, Pro Financial Tips, and more. There is NO retirement planning page. The navbar has 8 links (Home, About, India Stats, Schemes, Tools, Quiz, Tips, Contact). The backend is a minimal empty Motoko actor.

## Requested Changes (Diff)

### Add
- New page: `/retirement` — Retirement Planning calculator and educational resource
  - Retirement corpus calculator: inputs for current age, retirement age, monthly expenses today, expected inflation rate, expected investment return, current savings
  - Output: required retirement corpus, monthly SIP needed, projected corpus at retirement
  - Charts: corpus growth over time (line chart), monthly SIP breakdown (bar chart)
  - Educational sections: Budgeting, Saving, Investing, Insurance, Tax Planning as themed cards with descriptions (matching the user's 5 topic descriptions)
  - Key instruments section: EPF, PPF, NPS, ELSS, Senior Citizen Saving Scheme
  - Lazy-loaded route at `/retirement` in App.tsx
  - Nav link added to Navbar: "Retire" between Tips and Contact

### Modify
- `App.tsx`: add lazy import and route for RetirementPlanning page
- `Navbar.tsx`: add "Retire" link to NAV_LINKS array

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/pages/RetirementPlanning.tsx` with full calculator + educational sections
2. Update `App.tsx` to add the lazy import and route
3. Update `Navbar.tsx` to add the nav link
