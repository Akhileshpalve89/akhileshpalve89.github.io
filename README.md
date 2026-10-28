# Akhilesh Palve — Cybersecurity Portfolio

A terminal-inspired cybersecurity portfolio and Markdown-powered field-notes blog built with Astro.

## Write a new blog post
1. Create a file in `src/content/blog/`, for example `my-new-lab.md`.
2. Add the frontmatter below.
3. Write the article in Markdown.
4. Commit and push. GitHub Actions builds the site; pushes to `main` deploy to GitHub Pages.

```md
---
title: "My New Lab Notes"
description: "A one-sentence summary shown on the blog listing."
pubDate: 2026-10-28
tags: ["Active Directory", "Lab Notes"]
readTime: "4 min read"
---

## What I tested

Write your notes here using normal Markdown.

```bash
whoami
id
```
```

### Frontmatter fields
- `title` (required): article title.
- `description` (required): short summary.
- `pubDate` (required): date in `YYYY-MM-DD` format.
- `tags` (optional): list of topics.
- `readTime` (optional): e.g. `4 min read`.
- `draft: true` (optional): hides the article from the production build.

## Local development
Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. Verify the production build before committing:

```bash
npm run build
npm run preview
```

The build generates the site into `dist/`. A post-build script also copies the previous HTML portfolio pages and local images/certificates into the output, so those legacy pages remain available during the transition.

## Deployment
The GitHub Actions workflow builds pushes to `astro-migration` for verification, and deploys only from `main`. In **Repository Settings → Pages**, select **GitHub Actions** as the deployment source before the first production deployment.

The repository is named `Akhileshpalve89.github.io`, so it is a user site served from the domain root. Astro does not need a `base` path for this repository.

## Structure
- `src/pages/`: Astro pages and routes.
- `src/content/blog/`: one Markdown file per article.
- `src/layouts/BaseLayout.astro`: shared navigation, metadata, and design.
- `scripts/copy-legacy-assets.mjs`: keeps existing portfolio pages and media in the generated site.
