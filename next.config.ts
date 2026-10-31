import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static hosting
  output: "export",

  // GitHub Pages serves from the root for username.github.io repos
  // No basePath or assetPrefix needed for akhileshpalve89.github.io

  // Next.js Image Optimization is not available in static export mode;
  // use unoptimized so <Image> tags still render correctly on GitHub Pages.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "akhileshpalve89.github.io",
      },
    ],
  },
};

export default nextConfig;
