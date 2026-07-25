import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function FinalCTA() {
  return (
    <section
      className="bg-primary py-16 md:py-20"
      aria-labelledby="final-cta-heading"
    >
      <Container as="div">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="final-cta-heading"
            className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Da el siguiente paso en tu desarrollo profesional
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Explora nuestros programas, solicita información o diseña una
            propuesta de capacitación para tu equipo.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/cursos" variant="primary">
              Explorar cursos
            </ButtonLink>
            <ButtonLink href="/contacto" variant="outlineInverse">
              Solicitar información
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
