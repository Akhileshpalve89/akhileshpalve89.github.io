import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CommandMenuProvider } from "@/components/command-menu";
import { Navbar } from "@/components/navbar";
import { RESUME_DATA } from "@/data/resume";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(RESUME_DATA.personalWebsiteUrl),
  title: `${RESUME_DATA.name} | Cybersecurity Specialist`,
  description: RESUME_DATA.summary,
  authors: [{ name: RESUME_DATA.name, url: RESUME_DATA.personalWebsiteUrl }],
  creator: RESUME_DATA.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: RESUME_DATA.personalWebsiteUrl,
    title: `${RESUME_DATA.name} | Cybersecurity Specialist`,
    description: RESUME_DATA.summary,
    siteName: RESUME_DATA.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name} - Cybersecurity Specialist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} | Cybersecurity Specialist`,
    description: RESUME_DATA.summary,
    images: ["/og.png"],
    creator: "@Akhileshpalve89",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CommandMenuProvider>
            <div className="container relative mx-auto max-w-4xl bg-background px-4 pt-4 pb-4 md:px-6 md:pt-8 md:pb-6 min-h-screen flex flex-col">
              <Navbar />
              <div className="flex-1 w-full">{children}</div>
            </div>
          </CommandMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
