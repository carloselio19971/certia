import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site-config";

type PageMetadataOptions = {
  title?: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const metadata: Metadata = {
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_PE",
      type: "website",
    },
  };

  if (title) {
    metadata.title = title;
  }

  return metadata;
}

export function createCourseMetadata(
  title: string,
  description: string,
  slug: string,
): Metadata {
  const url = `${SITE_URL}/cursos/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_PE",
      type: "website",
    },
  };
}
