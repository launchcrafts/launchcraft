import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const baseUrl = "https://launchcraft.in";

const cities = ["hyderabad", "bangalore", "delhi", "mumbai", "pune"];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/solutions/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cityRoutes,
    ...articleRoutes,
  ];
}
