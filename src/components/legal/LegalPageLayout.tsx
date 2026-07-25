import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalPageLayout({
  title,
  description,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <section className="bg-bg-light py-12 md:py-16">
        <Container as="div" className="max-w-3xl">
          <SectionHeading title={title} description={description} />
          <div
            role="note"
            className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900"
          >
            <strong>Borrador legal.</strong> Este documento contiene campos
            pendientes y debe ser revisado por un abogado antes de su
            publicación definitiva. No constituye asesoría legal.
          </div>
        </Container>
      </section>
      <section className="bg-white pb-16 pt-4 md:pb-24">
        <Container as="article" className="max-w-3xl prose-legal">
          {children}
        </Container>
      </section>
    </>
  );
}
