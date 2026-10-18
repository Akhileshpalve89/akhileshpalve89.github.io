export interface SocialItem {
  name: string;
  url: string;
  icon: string;
}

export interface WorkExperience {
  company: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  link?: string;
  description: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface ProjectItem {
  title: string;
  category: "self" | "hackathon" | "work";
  techStack: string[];
  description: string;
  logo?: string | null;
  link?: {
    label: string;
    href: string;
  };
  github?: string;
  image: string;
}

export interface OpenSourceItem {
  repo: string;
  prTitle: string;
  prUrl: string;
  status: "merged" | "open" | "closed";
  date: string;
  description: string;
}

export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  sections?: string[];
}
export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  tldr: string;
  callLink: string;
  opportunities: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  githubUsername: string;
  contact: {
    email: string;
    social: SocialItem[];
  };
  education: EducationItem[];
  work: WorkExperience[];
  skills: string[];
  projects: ProjectItem[];
  openSource: OpenSourceItem[];
  blogs: BlogPostMeta[];
}

export const RESUME_DATA: ResumeData = {
  name: "Vedant Lavale",
  initials: "VL",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about: "21 • Engineer",
  summary:
    "Hey, I'm Vedant, a 21-year-old engineer from India who enjoys building products from 0 to 1 and working across the stack.",
  tldr: "tl;dr: I'm a product-minded engineer who cares about building things right, not just getting them to work.",
  callLink: "https://cal.com/vedantman/meet",
  opportunities: "I'm open to full-time, internship, and contract opportunities.",
  avatarUrl: "/main.avif",
  personalWebsiteUrl: "https://vedantworks.com",
  githubUsername: "vedantlavale",
  contact: {
    email: "vedant@vedantworks.com",
    social: [
      {
        name: "X",
        url: "https://x.com/vedantdotrpm",
        icon: "x",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vedantlavale",
        icon: "linkedin",
      },
      {
        name: "GitHub",
        url: "https://github.com/vedantlavale",
        icon: "github",
      },
      {
        name: "Email",
        url: "mailto:vedant@vedantworks.com",
        icon: "email",
      },
      {
        name: "Medium",
        url: "https://vedantman.medium.com",
        icon: "medium",
      },
      {
        name: "Pexels",
        url: "https://www.pexels.com/@vedant/",
        icon: "pexels",
      },
    ],
  },
  education: [
    {
      school: "Marathwada Mitra Mandal's College Of Engineering",
      degree: "Bachelor of Engineering in Computer Engineering",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Juriqa",
      badges: ["Full-time"],
      title: "Founding Engineer",
      logo: "/logos/juriqa.png",
      start: "Jun 2026",
      end: "Present",
      description: [
        "Built a private, multi-tenant legal AI platform for law firms: legal research, document analysis, contract review, citation verification, and collaborative editing.",
        "Engineered AI chat and RAG pipelines with per-firm model routing, web search, and context management for large legal documents.",
        "Built document processing pipelines for scanned PDF OCR, classification, judgment analysis, and page-cited brief generation.",
        "Built ReplyDash, an AI writing assistant for X and LinkedIn, across backend services, a Chrome extension, and a web app.",
        "Independently shipped Gita Minute for iOS and Android: scripture-grounded AI chat, daily verses, audio recitation, and cross-device sync.",
      ],
    },
    {
      company: "Gauge.ro",
      link: "https://gauge.ro",
      badges: ["Remote", "Intern"],
      title: "SDE Intern",
      logo: "/logos/gauge.png",
      start: "Nov 2025",
      end: "May 2026",
      description: [
        "Owned backend development for multiple production IoT systems as part of a 3-engineer core team.",
        "Maintained and extended a platform with 200+ APIs and 100+ database tables powering device telemetry and business operations.",
        "Designed asynchronous event-driven pipelines used by 100+ active users for automated processing and workflow execution.",
        "Built Node.js backend services for real-time device ingestion, analytics processing, notifications, and operational workflows.",
        "Worked across CI/CD, monitoring, production debugging, infrastructure tooling, and deployment pipelines using Jenkins and Grafana.",
        "Wrote unit and regression tests to improve reliability and prevent production regressions.",
        "Optimized TimescaleDB queries and data-access patterns for large-scale time-series workloads.",
      ],
    },
    {
      company: "Socialease",
      link: "https://socialease.app",
      badges: ["Remote", "Freelance"],
      title: "Freelance",
      logo: "/logos/socialease.png",
      start: "Jun 2025",
      end: "Aug 2025",
      description: [
        "Refactored key frontend pages for better UI/UX.",
        "Built and shipped a Bounty feature for community task management.",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React/Next.js",
    "Node.js",
    "Express",
    "Go",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Prisma",
    "AWS",
    "Bun",
    "Cloudflare Workers",
    "Tailwind CSS",
    "Docker",
    "Kubernetes",
  ],
  projects: [
    {
      title: "Taasant",
      category: "self",
      techStack: ["Go", "Bubble Tea", "AES-256-GCM", "Telegram Bot API"],
      description:
        "Encrypted file storage that turns a Telegram chat into a drive you use from the terminal. Files are split into parts and encrypted on your machine, so Telegram only ever sees scrambled bytes.",
      logo: null,
      link: {
        label: "taasant",
        href: "https://taasant.vedantworks.com",
      },
      github: "https://github.com/vedantlavale/taasant",
      image: "/images/taasant.png",
    },
    {
      title: "Billy",
      category: "self",
      techStack: ["Next.js", "Supabase", "Resend"],
      description:
        "The direct-manipulation invoice editor for freelancers and small businesses. Click a field, type your details, export a beautiful PDF in under two minutes.",
      logo: null,
      link: {
        label: "billy",
        href: "https://trybilly.tech",
      },
      github: "https://github.com/vedantlavale/billy",
      image: "/images/billy.png",
    },
    {
      title: "Mdify",
      category: "self",
      techStack: ["Next.js", "TypeScript"],
      description:
        "Web tool to convert Medium articles into clean, developer-friendly Markdown.",
      logo: null,
      link: {
        label: "mdify",
        href: "https://mdify.vedantworks.com",
      },
      github: "https://github.com/vedantlavale/mdify",
      image: "/images/mdify.png",
    },
    {
      title: "Shadnex",
      category: "self",
      techStack: ["TypeScript", "Bun", "CLI"],
      description:
        "Open-source CLI tool to scaffold Next.js projects with automated Shadcn UI integration.",
      logo: null,
      link: {
        label: "shadnex",
        href: "https://www.npmjs.com/package/shadnex",
      },
      github: "https://github.com/vedantlavale/shadnex",
      image: "/images/shadnex.png",
    },
    {
      title: "Synapse",
      category: "self",
      techStack: ["Next.js", "PostgreSQL", "Prisma", "BetterAuth", "Resend"],
      description:
        "Full-stack productivity platform for saving URLs, notes, and insights. A full revamp with additional features is coming soon.",
      logo: null,
      link: {
        label: "synapse",
        href: "https://synapse-sage.vercel.app/",
      },
      github: "https://github.com/vedantlavale/synapse",
      image: "/images/synapse.png",
    },
    {
      title: "Veridium",
      category: "hackathon",
      techStack: ["Next.js", "AI", "TypeScript"],
      description:
        "Intelligent claims processing platform with straight-through processing (STP) built in.",
      logo: null,
      link: {
        label: "veridium",
        href: "https://stp-insurance.vercel.app/",
      },
      image: "/images/veridium.png",
    },
  ],
  openSource: [
    {
      repo: "pipe-cd/pipecd",
      prTitle: "Add Minikube Setup Instructions to Quickstart Documentation",
      prUrl: "https://github.com/pipe-cd/pipecd/pull/6802",
      status: "open",
      date: "2026-05-20",
      description:
        "Added Minikube setup guidance to the Quickstart docs across v1.0.x, v0.56.x, v0.55.x, and docs-dev: install link, cluster startup, verification, and troubleshooting steps for users without a running cluster.",
    },
    {
      repo: "pipe-cd/pipecd",
      prTitle: "feat: add new commands for completion and migration in pipectl",
      prUrl: "https://github.com/pipe-cd/pipecd/pull/6751",
      status: "open",
      date: "2026-05-08",
      description:
        "Update pipectl documentation to add 'completion', 'migrate' and 'plugin' commands and remove the deprecated 'init' docs.",
    },
    {
      repo: "hiero-ledger/hiero-website",
      prTitle: "refactor(home): restructure home page and optimize image loading",
      prUrl: "https://github.com/hiero-ledger/hiero-website/pull/403",
      status: "merged",
      date: "2026-04-21",
      description:
        "Restructured the home page, replaced <img> with Next.js Image, enabled client-side routing with Link, extracted homepage data, and improved pagination accessibility.",
    },
    {
      repo: "dodopayments/billingsdk",
      prTitle: "Nestjs cli support for dodopayments and stripe",
      prUrl: "https://github.com/dodopayments/billingsdk/pull/313",
      status: "merged",
      date: "2025-11-13",
      description:
        "Nestjs cli support for dodopayments and stripe for billingsdk",
    },
    {
      repo: "Dialectica-ai/dialectica-ai",
      prTitle: "add router functionality for navigation in LandingPage",
      prUrl: "https://github.com/Dialectica-ai/dialectica-ai/pull/48",
      status: "merged",
      date: "2025-10-23",
      description:
        "Added the import for useRouter from next/navigation. Now when users click the Start Debating button, they'll be redirected to the signin page using Next.js's client-side routing.",
    },
    {
      repo: "vercel/next.js",
      prTitle:
        "Add ShadCN UI Conditional Integration to create-next-app with Multi-Package Manager Support",
      prUrl: "https://github.com/vercel/next.js/pull/84794",
      status: "open",
      date: "2025-10-12",
      description:
        "Add ShadCN UI Conditional Integration to create-next-app with Multi-Package Manager Support.",
    },
  ],
  blogs: [
    {
      title: "Postgres Backups Under the Hood",
      description:
        "pg_dump, filesystem backups, and continuous WAL archiving — and why the cleverest part of Postgres' backup system is that a backup doesn't have to be a perfect snapshot.",
      date: "2026-08-15",
      readTime: "7 min read",
      slug: "postgres-backups-under-the-hood",
      sections: [
        "pg_dump is basically instructions to rebuild the database",
        "Filesystem backups are much faster",
        "WAL is the database's history",
        "Continuous archiving",
        "Full-page writes",
        "This is what enables PITR",
        "The really interesting part: backups and resizing use the same machinery",
        "The mental model",
      ],
    },
    {
      title: "It Worked in Staging. Production Destroyed It. Queues Saved It.",
      description:
        "How switching from a synchronous trigger pipeline to queued background jobs fixed production outages and made processing resilient.",
      date: "2026-04-26",
      readTime: "6 min read",
      slug: "it-worked-in-staging-production-destroyed-it-queues-saved-it",
      sections: [
        "What I Built First",
        "Why the Synchronous Approach Failed",
        "The Architecture We Already Had",
        "The Fix: Separating the Trigger from the Processing",
        "The Hidden Bugs That Came After",
        "Before vs. After",
        "Why This Actually Holds Under Load",
      ],
    },
    {
      title: "Horizontal Scaling in Databases: Part 1 — Read Replicas",
      description:
        "As applications grow, databases often become the bottleneck. Learn how read replicas helps serve data efficiently by separating read and write responsibilities.",
      date: "2025-12-26",
      readTime: "3 min read",
      slug: "horizontal-scaling-in-databases-part-1-read-replicas",
      sections: [
        "The Core Problem: One Database, Too Much Load",
        "Separating Responsibilities",
        "Keeping Data in Sync",
        "Synchronous Replication",
        "Asynchronous Replication",
        "Why This Tradeoff Is Worth It",
      ],
    },
    {
      title: "How to convert any Medium blog to Markdown in seconds",
      description:
        "Convert your Medium articles into clean, editable Markdown format quickly with mdify—no copy-pasting required.",
      date: "2025-11-14",
      readTime: "2 min read",
      slug: "move-your-medium-articles-to-your-own-platform-in-less-than-1-minute",
      sections: [
        "What is mdify?",
        "Why Convert Medium Articles to Markdown?",
        "How to Use mdify?",
        "Benefits of Using mdify",
        "Additional Tips",
      ],
    },
    {
      title: "How HTTP Works: A First Principles Guide",
      description:
        "A breakdown of how browsers fetch websites and APIs send data, covering HTTP basics, headers, caching, CORS, and HTTPS.",
      date: "2025-07-29",
      readTime: "4 min read",
      slug: "how-a-14-line-protocol-became-the-god-of-the-web",
      sections: [
        "This blog was converted from a medium.com blog to mdx using the mdify.",
        "What is HTTP?",
        "4. HTTP Messages: Requests and Responses",
        "5. Key HTTP Mechanisms",
        "6. Caching in HTTP",
        "7. OPTIONS Method and the CORS Workflow",
        "8. Content Negotiation",
        "9. SSL, TLS and HTTPS",
        "TL;DR: Why You Should Care",
      ],
    },
    {
      title: "Why I use Next.js",
      description:
        "Exploring the benefits of React Server Components and the App Router for modern web development.",
      date: "2024-12-20",
      readTime: "1 min read",
      slug: "demo-blog-2",
      sections: ["Server Components", "App Router", "Conclusion"],
    },
  ],
};
