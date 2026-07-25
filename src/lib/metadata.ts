import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_PE",
      type: "website",
    },
  };
}

export function createCourseMetadata(
  title: string,
  description: string,
  slug: string,
): Metadata {
  const pageTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}/cursos/${slug}`;

  return {
    title: {
      absolute: pageTitle,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_PE",
      type: "website",
    },
  };
}
