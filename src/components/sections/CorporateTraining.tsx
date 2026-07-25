import { Building2, CheckCircle2, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  "Programas personalizados por rol, nivel y objetivo de negocio.",
  "Capacitación in-company, virtual o híbrida según tu operación.",
  "Evaluación de competencias y seguimiento del progreso del equipo.",
  "Propuestas comerciales adaptadas al tamaño y sector de tu organización.",
];

export function CorporateTraining() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="corporate-heading"
    >
      <Container as="div">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Para empresas"
              title="Capacitación corporativa a la medida de tu equipo"
              description="Impulsa la transformación digital de tu organización con rutas formativas diseñadas para equipos técnicos y de negocio."
              className="mb-8"
              titleId="corporate-heading"
            />

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-text-secondary">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/empresas" variant="secondary">
                Solicitar propuesta corporativa
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-bg-light p-6">
              <Building2 className="h-8 w-8 text-secondary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                Formación de equipos
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                Rutas colectivas con cohortes privadas y contenido alineado a
                tus procesos.
              </p>
            </article>
            <article className="rounded-2xl border border-border bg-primary p-6 text-white sm:translate-y-6">
              <Users className="h-8 w-8 text-secondary" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold">Evaluación de talento</h3>
              <p className="mt-2 text-sm text-white/75">
                Diagnóstico de competencias para planificar upskilling con
                impacto medible.
              </p>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
