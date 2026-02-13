import type { MetadataRoute } from "next";

const BASE_URL = "https://aldovadev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/clients",
    "/blog",
    "/contact",
    "/aldovadev",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/aldovadev" ? 0.9 : 0.7,
  }));
}
