import type { Metadata } from "next";
import { BadgeCheck, BookOpen, Target } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certificationTracks } from "@/data/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Certificaciones | CERTIA Academy",
  description:
    "Rutas de preparación para certificaciones tecnológicas en cloud, ciberseguridad, data y desarrollo de software.",
  path: "/certificaciones",
});

const certificationApproach = [
  {
    icon: Target,
    title: "Diagnóstico de perfil",
    description:
      "Identificamos tu nivel actual y la certificación más alineada a tus objetivos profesionales.",
  },
  {
    icon: BookOpen,
    title: "Plan de estudio",
    description:
      "Estructuramos contenidos por dominios con recursos oficiales y práctica guiada.",
  },
  {
    icon: BadgeCheck,
    title: "Preparación y simulacros",
    description:
      "Sesiones de repaso y exámenes de práctica para reforzar confianza antes del examen oficial.",
  },
] as const;

export default function CertificacionesPage() {
  return (
    <>
      <section className="bg-bg-light py-12 md:py-16">
        <Container as="div">
          <SectionHeading
            eyebrow="Certificaciones"
            title="Valida tus competencias con rutas de preparación estructuradas"
            description="CERTIA Academy orienta tu preparación hacia certificaciones tecnológicas del mercado. No emitimos certificaciones oficiales de terceros; te acompañamos en el proceso de estudio."
          />
          <p className="mt-4 text-sm text-amber-700">
            Contenido provisional — rutas y convocatorias serán confirmadas oficialmente.
          </p>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container as="div">
          <div className="grid gap-6 md:grid-cols-2">
            {certificationTracks.map((track) => (
              <article
                key={track.id}
                className="rounded-2xl border border-border bg-bg-light p-6"
              >
                <h2 className="text-xl font-semibold text-text-primary">
                  {track.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {track.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-14 md:py-20">
        <Container as="div">
          <SectionHeading
            eyebrow="Metodología"
            title="Cómo te preparamos"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {certificationApproach.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-white p-6 text-center"
                >
                  <div className="mx-auto inline-flex rounded-xl bg-secondary/10 p-3 text-secondary">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container as="div" className="text-center">
          <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
            ¿Listo para iniciar tu preparación?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            Explora nuestro curso de preparación certificatoria o solicita
            orientación personalizada.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink
              href="/cursos/preparacion-certificaciones-tecnologicas"
              variant="primary"
            >
              Ver programa de preparación
            </ButtonLink>
            <ButtonLink href="/contacto" variant="outline">
              Solicitar orientación
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
