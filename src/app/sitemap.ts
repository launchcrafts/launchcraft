import type { MetadataRoute } from "next";

const baseUrl = "https://launchcraft.in";

const cities = ["hyderabad", "bangalore", "delhi", "mumbai", "pune"];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/solutions/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...cityRoutes,
  ];
}
