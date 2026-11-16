import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const baseUrl = "https://launchcrafts.in";

const cities = ["hyderabad", "bangalore", "delhi", "mumbai", "pune"];

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/solutions/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/logo-maker`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-web-development-agency-hyderabad`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...[
      "nextjs-seo-guide",
      "core-web-vitals-explained",
      "website-cost-india",
      "headless-cms-explained",
      "website-security-checklist",
      "website-redesign-without-losing-seo",
      "landing-page-design-elements",
      "ux-mistakes-conversion-rate",
      "aeo-vs-seo",
      "what-is-llms-txt",
      "schema-markup-explained",
      "ai-chatbots-small-business",
      "business-tasks-to-automate",
      "whatsapp-automation-local-business",
      "brand-identity-vs-logo",
      "choose-brand-colours-fonts",
      "clinic-website-design",
      "veterinary-website-design",
      "dental-website-design",
      "choose-web-design-agency",
      "technical-seo-checklist",
      "local-seo-for-clinics",
      "homepage-design",
      "multilingual-website-telugu",
      "restaurant-website-design",
      "real-estate-website-design",
      "school-website-design",
      "law-firm-website-india",
      "gym-website-design",
      "salon-website-design",
      "physiotherapy-website-design",
      "nextjs-vs-webflow",
      "nextjs-vs-wix",
      "nextjs-vs-squarespace",
      "website-maintenance-checklist",
      "track-website-leads-ga4",
      "website-vs-app-vs-pwa",
      "mvp-development-guide",
      "logo-file-formats",
      "website-brief-template",
    ].map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...articleRoutes,
    ...cityRoutes,
  ];
}
