import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "assets.lummi.ai" },
      { hostname: "images.unsplash.com" },
      { hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;
