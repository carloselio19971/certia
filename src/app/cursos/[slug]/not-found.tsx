import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

export default function CourseNotFound() {
  return (
    <section className="flex flex-1 items-center bg-bg-light py-20">
      <Container as="div" className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-text-primary">
          Curso no encontrado
        </h1>
        <p className="mt-4 text-text-secondary">
          El programa que buscas no está disponible o aún no ha sido publicado.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/cursos" variant="primary">
            Ver cursos
          </ButtonLink>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Ir al inicio
          </Link>
        </div>
      </Container>
    </section>
  );
}
