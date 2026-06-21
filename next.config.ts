import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Phase 1: static export for Hostinger shared hosting
  // Remove 'output' when migrating to VPS for full SSR
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
