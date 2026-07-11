# BRABU BCA Hub

A static React + Vite + Tailwind CSS site for BRABU BCA resources. It has no backend, API, authentication, or database, and is ready for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Manage content

Each semester has its own file in `src/data/`:

- `semester1.json` through `semester6.json`

Add a subject or paper object there and it appears automatically. Replace the placeholder `https://drive.google.com/` values with actual Google Drive folder or PDF links before publishing. Official links are in `src/data/importantLinks.json`.

## Deploy to GitHub Pages

1. Create and push this project to a GitHub repository.
2. In `package.json`, change `YOUR_GITHUB_USERNAME` and `YOUR_REPOSITORY_NAME` in `homepage`.
3. Run `npm install` once.
4. Run `npm run deploy`.
5. In GitHub repository settings, set **Pages** to deploy from the `gh-pages` branch.

The Vite configuration uses a relative base path, which also makes the production build work under any repository name.

## Future expansion

Add notes, videos, quizzes, calculators, faculty resources or a backend later by extending the existing data and page layers. Current routes and data are deliberately separated so new features do not require restructuring the app.
