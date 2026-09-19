import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComingSoon from "@/components/ComingSoon";

const baseUrl = "https://launchcrafts.in";

const cities: Record<string, { name: string; state: string }> = {
  hyderabad: { name: "Hyderabad", state: "Telangana" },
  bangalore: { name: "Bangalore", state: "Karnataka" },
  delhi: { name: "Delhi", state: "Delhi" },
  mumbai: { name: "Mumbai", state: "Maharashtra" },
  pune: { name: "Pune", state: "Maharashtra" },
};

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

type Props = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities[citySlug];

  if (!city) return {};

  return {
    title: `Web Development, AI Automation & Branding in ${city.name} - Coming Soon | LaunchCraft`,
    description: `LaunchCraft is coming soon to ${city.name}, ${city.state}. We offer web development, AI automation, website development, and logo & brand identity services. Visit launchcrafts.in.`,
    keywords: [
      `web development ${city.name}`,
      `AI automation ${city.name}`,
      `website development ${city.name}`,
      `logo design ${city.name}`,
      `brand identity ${city.name}`,
      `LaunchCraft ${city.name}`,
      `${city.state} web services`,
      "coming soon",
      "launchcrafts.in",
    ],
    alternates: {
      canonical: `${baseUrl}/solutions/${citySlug}`,
    },
    openGraph: {
      title: `Web Development, AI Automation & Branding in ${city.name} - Coming Soon | LaunchCraft`,
      description: `LaunchCraft is coming soon to ${city.name}, ${city.state}. Web development, AI automation, and logo & brand identity services.`,
      type: "website",
      url: `${baseUrl}/solutions/${citySlug}`,
      siteName: "LaunchCraft",
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = cities[citySlug];

  if (!city) notFound();

  return <ComingSoon city={city.name} />;
}
