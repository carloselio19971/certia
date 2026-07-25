import type { Metadata } from "next";
import { Building2, CheckCircle2 } from "lucide-react";
import { CorporateQuoteForm } from "@/components/forms/CorporateQuoteForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  corporateBenefits,
  corporateFaqs,
  corporateIndicators,
  corporateModalities,
  corporateProcess,
  corporateTrainingAreas,
} from "@/data/empresas";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Capacitación para empresas | CERTIA Academy",
  description:
    "Programas corporativos personalizados en tecnología, IA, ciberseguridad, cloud, data y gestión de proyectos para equipos de alto rendimiento.",
  path: "/empresas",
});

export default function EmpresasPage() {
  return (
    <>
      <section className="overflow-hidden bg-primary text-white">
        <Container as="div" className="py-16 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-secondary">
                Capacitación corporativa
              </p>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Formación tecnológica diseñada para tu organización
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Impulsa la transformación digital de tu equipo con programas
                personalizados, instructores especializados y seguimiento del
                progreso de aprendizaje.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cotizacion"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Solicitar cotización
                </a>
                <ButtonLink href="/contacto" variant="outlineInverse">
                  Contactar
                </ButtonLink>
              </div>
            </div>

            <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden>
              <div className="absolute inset-4 rounded-3xl border border-white/10 bg-white/5" />
              <div className="absolute left-8 top-10 w-[65%] rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <Building2 className="h-8 w-8 text-secondary" />
                <p className="mt-4 text-sm font-semibold">Programa corporativo</p>
                <p className="mt-2 text-xs text-white/70">
                  Diseño personalizado por objetivos y roles
                </p>
              </div>
              <div className="absolute bottom-10 right-6 w-[50%] rounded-2xl border border-secondary/30 bg-secondary/20 p-4">
                <p className="text-xs text-white/70">Seguimiento</p>
                <p className="mt-1 text-sm font-semibold">Progreso del equipo</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Beneficios"
            title="Por qué capacitar a tu equipo con CERTIA"
            description="Soluciones formativas alineadas a objetivos de negocio, sin inventar resultados ni casos no verificados."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corporateBenefits.map((benefit) => (
              <article
                key={benefit.id}
                className="rounded-2xl border border-border bg-bg-light p-6"
              >
                <CheckCircle2 className="h-7 w-7 text-secondary" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-light py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Proceso"
            title="Cómo trabajamos con empresas"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {corporateProcess.map((step) => (
              <article
                key={step.step}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <span className="text-2xl font-bold text-secondary">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container as="div" className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Modalidades"
              title="Formatos de capacitación disponibles"
              description="Adaptamos la experiencia formativa a la operación y ubicación de tu equipo."
            />
            <ul className="grid gap-3 sm:grid-cols-2">
              {corporateModalities.map((modality) => (
                <li
                  key={modality}
                  className="rounded-xl border border-border bg-bg-light px-4 py-3 text-sm font-medium text-text-primary"
                >
                  {modality}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Áreas"
              title="Áreas de formación corporativa"
              description="Cobertura en competencias tecnológicas clave para equipos multidisciplinarios."
            />
            <ul className="space-y-3">
              {corporateTrainingAreas.map((area) => (
                <li
                  key={area}
                  className="flex gap-3 text-sm text-text-secondary"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                    aria-hidden
                  />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Personalización"
            title="Programas a medida para tu organización"
            description="Diseñamos contenidos, duración y modalidad según el diagnóstico inicial de necesidades."
            align="center"
          />
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-8 text-center">
            <p className="text-sm leading-relaxed text-text-secondary">
              Desde rutas de upskilling para equipos técnicos hasta programas
              introductorios para áreas de negocio, estructuramos propuestas sin
              prometer alianzas, clientes ni certificaciones oficiales no
              confirmadas.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="Indicadores"
            title="Enfoque de valor para organizaciones"
            description="Referencias cualitativas del modelo de servicio. No representan cifras comerciales reales."
            align="center"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {corporateIndicators.map((indicator) => (
              <article
                key={indicator.id}
                className="rounded-2xl border border-border bg-bg-light p-6 text-center"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
                  {indicator.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-primary">
                  {indicator.value}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {indicator.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="cotizacion" className="bg-bg-light py-16 md:py-24">
        <Container as="div">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeading
                eyebrow="Cotización"
                title="Solicita una propuesta corporativa"
                description="Completa el formulario y describe las necesidades de capacitación de tu organización."
              />
              <p className="text-sm text-amber-700">
                El envío es simulado en frontend hasta conectar la API comercial.
              </p>
            </div>
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <CorporateQuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container as="div">
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes corporativas"
            align="center"
          />
          <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-bg-light">
            {corporateFaqs.map((faq) => (
              <details key={faq.id} className="group px-6 py-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span
                      className="text-secondary transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
