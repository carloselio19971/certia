import { Suspense } from "react";
import type { Metadata } from "next";
import { CourseCatalog } from "@/components/courses/CourseCatalog";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Cursos | CERTIA Academy",
  description:
    "Explora el catálogo de cursos en inteligencia artificial, programación, ciberseguridad, cloud, data y gestión de proyectos.",
  path: "/cursos",
});

function CatalogFallback() {
  return (
    <div className="rounded-2xl border border-border bg-white p-8 text-center text-sm text-text-secondary">
      Cargando catálogo...
    </div>
  );
}

export default function CoursesPage() {
  return (
    <>
      <section className="bg-bg-light py-12 md:py-16">
        <Container as="div">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">
            Catálogo
          </p>
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
            Nuestros cursos
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary md:text-lg">
            Programas especializados y rutas de formación en tecnología. Utiliza
            los filtros para encontrar el curso que mejor se adapte a tu perfil.
          </p>
          <p className="mt-4 text-sm text-amber-700">
            El catálogo mostrado es contenido demostrativo provisional.
          </p>
        </Container>
      </section>

      <section className="bg-white pb-16 pt-8 md:pb-24">
        <Container as="div">
          <Suspense fallback={<CatalogFallback />}>
            <CourseCatalog />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
