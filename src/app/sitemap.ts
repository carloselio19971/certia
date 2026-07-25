import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { getAllCourseSlugs } from "@/data/courses";

/** Reemplazar SITE_URL en src/lib/site-config.ts si el dominio definitivo es diferente. */
const baseUrl = SITE_URL;

const staticRoutes = [
  "",
  "/cursos",
  "/certificaciones",
  "/empresas",
  "/nosotros",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const courseRoutes = getAllCourseSlugs().map((slug) => `/cursos/${slug}`);
  const allRoutes = [...staticRoutes, ...courseRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/cursos/") ? 0.8 : 0.9,
  }));
}
