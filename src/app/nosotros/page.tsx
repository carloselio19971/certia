import type { Metadata } from "next";
import { GraduationCap, Lightbulb, Users } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Nosotros | CERTIA Academy",
  description:
    "Conoce la misión, metodología y enfoque de CERTIA Academy en formación tecnológica y certificaciones profesionales.",
  path: "/nosotros",
});

const values = [
  {
    icon: GraduationCap,
    title: "Excelencia formativa",
    description:
      "Programas diseñados para desarrollar competencias aplicables y actualizadas.",
  },
  {
    icon: Lightbulb,
    title: "Innovación continua",
    description:
      "Contenidos alineados a tendencias tecnológicas y demandas del mercado laboral.",
  },
  {
    icon: Users,
    title: "Enfoque humano",
    description:
      "Acompañamiento académico que respeta el ritmo y objetivos de cada estudiante.",
  },
] as const;

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-primary py-16 text-white md:py-24">
        <Container as="div" className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-secondary">
            Nosotros
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Formamos profesionales preparados para el futuro tecnológico
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            CERTIA Academy es una academia especializada en capacitación
            tecnológica y certificaciones profesionales. Nuestra misión es
            hacer accesible una formación práctica, rigurosa y orientada a la
            empleabilidad.
          </p>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Misión"
            title="Capacitación con propósito"
            description="Combinamos metodología práctica, instructores con experiencia en industria y contenidos actualizados para que profesionales y empresas alcancen sus objetivos de desarrollo."
          />
          <p className="text-sm text-amber-700">
            Información institucional provisional — será ampliada con historia, equipo y datos oficiales.
          </p>
        </Container>
      </section>

      <section className="bg-bg-light py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Valores"
            title="Lo que nos define"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-border bg-white p-6"
                >
                  <div className="inline-flex rounded-xl bg-primary/5 p-3 text-primary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Metodología"
            title="Cómo enseñamos"
            description="Nuestros programas priorizan la práctica, la claridad y el acompañamiento continuo."
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.slice(0, 6).map((benefit) => (
              <article
                key={benefit.id}
                className="rounded-2xl border border-border bg-bg-light p-5"
              >
                <h3 className="font-semibold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-14 md:py-20">
        <Container as="div" className="text-center">
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
            ¿Quieres conocer nuestros programas?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Explora el catálogo de cursos o contáctanos para recibir orientación
            personalizada.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/cursos" variant="primary">
              Explorar cursos
            </ButtonLink>
            <ButtonLink href="/contacto" variant="outline">
              Contactar
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
