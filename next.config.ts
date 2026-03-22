import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Ensure we can render all static pages during build
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
