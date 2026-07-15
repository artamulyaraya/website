import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://artamulyaraya.com/sitemap.xml",
    host: "https://artamulyaraya.com",
  };
}