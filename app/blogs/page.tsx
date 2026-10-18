import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: `Blogs | ${RESUME_DATA.name}`,
  description: "Thoughts on software development, design, and more.",
};

export default function BlogsPage() {
  return (
    <main className="container relative mx-auto p-4 md:p-8 print:p-6">
      <section className="mx-auto w-full max-w-3xl space-y-8 bg-background">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on software development, design, and more.
          </p>
        </div>

        <div className="flex w-full flex-col divide-y divide-border">
          {RESUME_DATA.blogs.map((blog) => (
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
      </section>
    </main>
  );
}
