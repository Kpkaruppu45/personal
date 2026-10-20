# Data Analyst Portfolio (React + Vite)

A responsive portfolio website featuring the four dashboard screenshots supplied for the portfolio:
- Used Car Sales Analysis
- Streaming Content Analysis (Prime Video)
- Hotel Operations Dashboard
- Business Performance Dashboard (Zoho Analytics)

## Run locally

1. Install Node.js (LTS): https://nodejs.org/
2. Open a terminal in this project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`. You can deploy that folder to Vercel, Netlify, or another static hosting service.

## Personalize before publishing

Edit `src/main.jsx` and replace:
- `Your Name` with your name.
- `your.email@example.com` with your professional email.
- GitHub and LinkedIn profile links with your own profile URLs.
- Project descriptions/tools if you want to reflect the exact data sources and work you performed.

The site uses Google Fonts via a CDN; it will fall back to system fonts if they cannot load. Project images are stored in `public/projects/`.
