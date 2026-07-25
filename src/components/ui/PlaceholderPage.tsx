import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

type PlaceholderPageProps = {
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href: string;
  };
};

export function PlaceholderPage({
  title,
  description,
  primaryAction,
}: PlaceholderPageProps) {
  return (
    <section className="flex flex-1 items-center bg-bg-light py-20">
      <Container as="div" className="max-w-2xl">
        <SectionHeading title={title} description={description} />
        <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Esta sección está en desarrollo. El contenido definitivo se publicará
          en una próxima etapa del proyecto.
        </p>
        <div className="flex flex-wrap gap-3">
          {primaryAction ? (
            <ButtonLink href={primaryAction.href} variant="primary">
              {primaryAction.label}
            </ButtonLink>
          ) : null}
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold text-primary transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          >
            Volver al inicio
          </Link>
        </div>
      </Container>
    </section>
  );
}
