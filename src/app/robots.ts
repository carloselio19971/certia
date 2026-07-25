import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

/** Reemplazar SITE_URL en src/lib/site-config.ts si el dominio definitivo es diferente. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
