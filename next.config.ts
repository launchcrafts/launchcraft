import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "meditroncdc.com" },
    ],
  },
};

export default nextConfig;
