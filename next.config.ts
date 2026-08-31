import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "meditroncdc.com" },
      { protocol: "https", hostname: "madhusdhan.vercel.app" },
    ],
  },
};

export default nextConfig;
