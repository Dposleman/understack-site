# UnderStack website

Production website for UnderStack, built with React, TypeScript, Vite, Tailwind CSS and Motion.

## Requirements

- Node.js 20 or newer
- npm

## Local development

```bash
npm ci
npm run dev
```

## Quality checks

```bash
npm run check
npm audit
```

`npm run check` runs ESLint, the Vitest test suite, TypeScript and the production build.

## Routes

- `/` — company website
- `/apps` — released and upcoming applications
- `/marketplace` — marketplace products
- any unknown URL — branded 404 page

## Deployment

The site is configured for Vercel through `vercel.json`. Pushes to the connected production branch trigger deployment when automatic Git deployments are enabled in Vercel.

The canonical production origin is `https://understack.dk`. Update `index.html`, `src/components/PageMeta.tsx`, `public/robots.txt` and `public/sitemap.xml` together if the domain changes.
