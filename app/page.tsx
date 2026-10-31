import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import { SocialButton } from "@/components/social-icons";
import { ExperienceAccordion } from "@/components/experience-accordion";
import { ProjectCard } from "@/components/project-card";
import { OssAccordion } from "@/components/oss-accordion";
import { GitHubActivity } from "@/components/github-activity";
import { PreviewRail } from "@/components/preview-rail";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${RESUME_DATA.personalWebsiteUrl}/#person`,
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
      image: `${RESUME_DATA.personalWebsiteUrl}${RESUME_DATA.avatarUrl}`,
      email: `mailto:${RESUME_DATA.contact.email}`,
      jobTitle: RESUME_DATA.work[0]?.title || "Cybersecurity Specialist",
      description: RESUME_DATA.summary,
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: RESUME_DATA.education[0]?.school || "",
        },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressCountry: "IN",
      },
      knowsAbout: RESUME_DATA.skills,
      sameAs: RESUME_DATA.contact.social.map((s) => s.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${RESUME_DATA.personalWebsiteUrl}/#website`,
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
      description: RESUME_DATA.summary,
      inLanguage: "en",
      publisher: {
        "@id": `${RESUME_DATA.personalWebsiteUrl}/#person`,
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <PreviewRail />

        <section className="space-y-8 bg-background print:space-y-6">
          {/* Intro Section */}
          <div id="intro" className="scroll-mt-24">
            <div className="mx-auto w-full max-w-3xl pt-6 pb-10 sm:pt-10 sm:pb-12">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="relative flex overflow-hidden rounded-full h-14 w-14 shrink-0 ring-1 ring-foreground/15 sm:h-16 sm:w-16">
                  <Image
                    src={RESUME_DATA.avatarUrl}
                    alt={RESUME_DATA.name}
                    fill
                    sizes="4rem"
                    priority
                    className="object-cover"
                  />
                </span>
                <div className="min-w-0">
                  <h1 className="text-[1.75rem] font-bold leading-tight tracking-tight sm:text-5xl">
                    {RESUME_DATA.name}
                  </h1>
                  <p className="mt-0.5 truncate font-mono text-[11px] text-muted-foreground sm:mt-1 sm:text-xs">
                    {RESUME_DATA.about}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-pretty text-sm leading-relaxed text-muted-foreground sm:mt-7 sm:text-[15px]">
                {RESUME_DATA.summary}
              </p>

              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {RESUME_DATA.tldr}{" "}
                <a
                  href={RESUME_DATA.callLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-foreground underline decoration-emerald-500 decoration-2 underline-offset-4 transition-colors hover:decoration-emerald-400"
                >
                  Get in touch
                </a>
                .
              </p>

              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {RESUME_DATA.opportunities}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:mt-7">
                <div className="-mx-[9px] flex items-center gap-0.5 print:hidden">
                  {RESUME_DATA.contact.social.map((social) => (
                    <SocialButton
                      key={social.name}
                      name={social.name}
                      url={social.url}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div id="experience" className="scroll-mt-24">
            <div className="mx-auto w-full max-w-3xl">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  experience.
                </h2>
                <ExperienceAccordion work={RESUME_DATA.work} />
              </section>
            </div>
          </div>

          <hr className="mx-auto my-10 w-full max-w-3xl border-border/60" />

          {/* Projects Section */}
          <div id="projects" className="scroll-mt-24">
            <div className="mx-auto w-full max-w-3xl">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  projects.
                </h2>
                <div className="flex w-full flex-col divide-y divide-border">
                  {RESUME_DATA.projects.slice(0, 3).map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Link href="/projects">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 gap-2"
                    >
                      Show All Projects
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          </div>

          <hr className="mx-auto my-10 w-full max-w-3xl border-border/60" />

          {/* Open Source Section */}
          <div id="open-source" className="scroll-mt-24">
            <div className="mx-auto w-full max-w-3xl">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  open source.
                </h2>
                <OssAccordion items={RESUME_DATA.openSource.slice(0, 3)} />
                <div className="flex justify-center mt-6">
                  <Link href="/oss">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 gap-2"
                    >
                      View all contributions
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          </div>

          {/* Activity Section */}
          <div id="activity" className="scroll-mt-24">
            <div className="mx-auto w-full max-w-3xl">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  activity.
                </h2>
                <a
                  href={`https://github.com/${RESUME_DATA.githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="-mt-9 mb-2 ml-auto flex w-fit items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  @{RESUME_DATA.githubUsername}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <GitHubActivity username={RESUME_DATA.githubUsername} />
              </section>
            </div>
          </div>

          {/* Blogs Section */}
          <div id="blogs" className="scroll-mt-24">
            <div className="mx-auto w-full max-w-3xl">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  blogs.
                </h2>
                <div className="flex w-full flex-col divide-y divide-border">
                  {RESUME_DATA.blogs.slice(0, 2).map((blog) => (
                    <div key={blog.slug} className="relative py-5">
                      <div className="relative z-10">
                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="group flex flex-col gap-1.5"
                        >
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className="font-semibold text-lg tracking-tight transition-colors group-hover:text-foreground/70">
                              {blog.title}
                            </h3>
                            <span className="shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                              {blog.date}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {blog.description}
                          </p>
                          <span className="mt-1 inline-flex w-fit items-center text-xs text-muted-foreground transition-colors group-hover:text-foreground">
                            Read more <ArrowRight className="ml-1 h-3 w-3" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mt-6">
                  <Link href="/blogs">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 gap-2"
                    >
                      Show All Posts
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </section>
            </div>
          </div>

          <hr className="mx-auto my-10 w-full max-w-3xl border-border/60" />

          {/* Skills Section */}
          <div id="skills" className="scroll-mt-24 print:hidden">
            <div className="mx-auto w-full max-w-3xl">
              <section className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-foreground">
                  skills.
                </h2>
                <div className="flex flex-wrap gap-2">
                  {RESUME_DATA.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center rounded-md border focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground px-2.5 py-1 text-sm font-medium transition-colors hover:border-foreground/30"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
