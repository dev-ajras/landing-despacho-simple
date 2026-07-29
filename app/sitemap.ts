import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// La landing es una sola página; cuando se sumen rutas, se agregan acá.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
