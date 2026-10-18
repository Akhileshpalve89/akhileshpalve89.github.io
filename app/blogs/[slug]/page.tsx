import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import { BLOG_POSTS_CONTENT } from "@/data/blogs-content";
import { ScrollProgress } from "@/components/scroll-progress";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return RESUME_DATA.blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = RESUME_DATA.blogs.find((b) => b.slug === slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | ${RESUME_DATA.name}`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      publishedTime: blog.date,
      authors: [RESUME_DATA.name],
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ["/og.png"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = RESUME_DATA.blogs.find((b) => b.slug === slug);
  const contentHtml = BLOG_POSTS_CONTENT[slug];

  if (!blog || !contentHtml) {
    notFound();
  }

  const formatPublishDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description,
    url: `${RESUME_DATA.personalWebsiteUrl}/blogs/${blog.slug}`,
    image: [`${RESUME_DATA.personalWebsiteUrl}/og.png`],
    datePublished: blog.date,
    dateModified: blog.date,
    articleSection: blog.sections,
    author: {
      "@type": "Person",
      name: RESUME_DATA.name,
      url: RESUME_DATA.personalWebsiteUrl,
    },
    publisher: {
      "@type": "Person",
      name: RESUME_DATA.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-8 print:p-6">
        {blog.sections && blog.sections.length > 0 && (
          <ScrollProgress sections={blog.sections} />
        )}

        <article className="mx-auto w-full max-w-[40rem] pb-24">
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-2 mb-10 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to all posts
          </Link>

          <header className="mb-8">
            <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-[2.5rem] md:leading-[1.1]">
              {blog.title}
            </h1>
            <p className="mb-5 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
              {blog.description}
            </p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={blog.date}>
                {formatPublishDate(blog.date)}
              </time>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {blog.readTime}
              </span>
            </div>
          </header>

          <hr className="border-border mb-8" />

          {/* Formatted Article Content */}
          <div
            className="prose dark:prose-invert max-w-none text-foreground/80 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>
      </main>
    </>
  );
}
