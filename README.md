# Personal Portfolio

A pixel-perfect, clean, and modern clone of [vedantworks.com](https://vedantworks.com), designed for software developers, engineers, and creators.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Radix UI**, and **next-themes**.

---

## ✨ Features

- **Centralized Data File**: Modify your entire portfolio by editing a single file (`data/resume.ts`).
- **Interactive Command Palette (`⌘K` / `Ctrl+K`)**: Fast modal search across pages, sections, blog posts, social links, theme toggle, and email copy.
- **Section Preview Rail**: Floating left-rail on desktop with active scroll-tracking and hover preview cards.
- **3D Tilt Project Cards**: Smooth perspective tilt and radial cursor spotlight on hover.
- **Collapsible Experience & Open Source**: Clean Radix UI accordions with status badges and PR indicators.
- **Live GitHub Activity Heatmap**: Responsive contribution calendar graph fetching real contributions from GitHub.
- **Dynamic Blog System**: Prerendered static articles with a floating radial reading progress pill and quick-jump table of contents.
- **Dark Mode**: Smooth animated Sun/Moon toggle with system preference detection and localStorage persistence.
- **SEO & Social Share Ready**: Auto-generated `sitemap.xml`, `robots.txt`, `feed.xml` (RSS), JSON-LD schemas, and OpenGraph/Twitter cards.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 🛠️ How to Customize for Your Own Portfolio

All data is separated cleanly from presentation logic. You only need to touch:

### 1. Personal Info, Experience, Projects & Skills (`data/resume.ts`)
Open [`data/resume.ts`](data/resume.ts) and replace:
- **`name`**, **`initials`**, **`about`**, **`summary`**, **`tldr`**, **`callLink`**
- **`githubUsername`**: Set your GitHub handle (this automatically updates the live contribution graph on the home page!)
- **`contact.email`** & **`contact.social`**: Your X, LinkedIn, GitHub, Email, Medium, etc.
- **`education`**: Your degree, university, and dates.
- **`work`**: Your companies, titles, dates, badges ("Full-time", "Intern", "Remote"), logos, and bullet points.
- **`skills`**: Your array of tech skills.
- **`projects`**: Your projects, categories, tech stack, descriptions, screenshots, and live/GitHub links.
- **`openSource`**: Your upstream PRs, status ("merged" / "open"), dates, descriptions, and URLs.
- **`blogs`**: Blog post titles, descriptions, dates, slugs, and section headers.

### 2. Blog Post Content (`data/blogs-content.ts`)
Add or edit blog post HTML/markdown in [`data/blogs-content.ts`](data/blogs-content.ts) keyed by `slug`.

### 3. Images and Logos (`public/`)
Place your own assets in the `public/` directory:
- Profile avatar: `public/main.avif` (or update `avatarUrl` in `data/resume.ts`)
- Social share preview: `public/og.png`
- Favicon: `public/favicon.ico`
- Company logos: `public/logos/`
- Project thumbnails: `public/images/`

---

## 📁 Project Structure

```
├── app/
│   ├── blogs/
│   │   ├── [slug]/page.tsx      # Dynamic blog reading page with progress bar
│   │   └── page.tsx             # All blogs listing
│   ├── oss/page.tsx             # Open-source contributions page
│   ├── projects/page.tsx        # Projects showcase page
│   ├── feed.xml/route.ts        # RSS feed endpoint
│   ├── globals.css              # Color tokens, dark mode styles, typography
│   ├── layout.tsx               # Root layout (fonts, providers, navbar)
│   ├── page.tsx                 # Main portfolio page (sections: intro, experience, etc.)
│   ├── robots.ts                # Auto-generated robots.txt
│   └── sitemap.ts               # Auto-generated sitemap.xml
├── components/
│   ├── command-menu.tsx         # ⌘K command palette modal
│   ├── experience-accordion.tsx # Work experience accordion
│   ├── github-activity.tsx      # GitHub heatmap activity graph
│   ├── navbar.tsx               # Sticky floating pill navbar
│   ├── oss-accordion.tsx        # Open-source PRs accordion
│   ├── preview-rail.tsx         # Desktop left-hand section preview rail
│   ├── project-card.tsx         # 3D interactive tilt project card
│   ├── scroll-progress.tsx      # Floating blog reading progress & TOC
│   ├── social-icons.tsx         # Hover tooltip social buttons
│   ├── theme-provider.tsx       # next-themes provider
│   └── theme-toggle.tsx         # Sun/Moon animated theme switcher
├── data/
│   ├── blogs-content.ts         # Blog post HTML bodies
│   └── resume.ts                # Central portfolio data configuration
├── public/                      # Static images, logos, and icons
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📄 License

MIT. Feel free to use and adapt this for your personal portfolio!
