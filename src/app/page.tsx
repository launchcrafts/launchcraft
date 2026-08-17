import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Coming Soon | LaunchCraft - Web Development, AI Automation & Branding",
  description:
    "LaunchCraft is coming soon. We provide web development, AI automation, and logo & brand identity services across India. Visit us at launchcraft.in.",
  keywords: [
    "LaunchCraft",
    "web development India",
    "AI automation",
    "logo design",
    "brand identity",
    "website development",
    "coming soon",
    "launchcraft.in",
  ],
  openGraph: {
    title: "Coming Soon | LaunchCraft - Web Development, AI Automation & Branding",
    description:
      "LaunchCraft is coming soon. Web development, AI automation, and logo & brand identity services across India.",
    type: "website",
    url: "https://launchcraft.in",
  },
};

export default function Home() {
  return <ComingSoon />;
}
