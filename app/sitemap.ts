import type { MetadataRoute } from "next"

import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/contacts", "/privacy-policy"]

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
  }))
}
