import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/webp', 'image/avif'],
    qualities: [75, 90],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
