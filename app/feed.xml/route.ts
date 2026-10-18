import { NextResponse } from "next/server";
import { RESUME_DATA } from "@/data/resume";

export async function GET() {
  const baseUrl = RESUME_DATA.personalWebsiteUrl;

  const itemsXml = RESUME_DATA.blogs
    .map(
      (blog) => `
    <item>
      <title><![CDATA[${blog.title}]]></title>
      <link>${baseUrl}/blogs/${blog.slug}</link>
      <guid>${baseUrl}/blogs/${blog.slug}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <description><![CDATA[${blog.description}]]></description>
    </item>`
    )
    .join("");

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${RESUME_DATA.name} — Blog</title>
    <link>${baseUrl}</link>
    <description>${RESUME_DATA.summary}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
