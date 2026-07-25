import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { certificationTracks } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section
      className="bg-bg-light py-16 md:py-24"
      aria-labelledby="certifications-heading"
    >
      <Container as="div">
        <SectionHeading
          eyebrow="Certificaciones"
          title="Preparación para certificaciones profesionales"
          description="Rutas estructuradas para validar competencias reconocidas en la industria tecnológica."
          titleId="certifications-heading"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {certificationTracks.map((track) => (
            <article
              key={track.id}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 sm:flex-row sm:items-start sm:gap-5"
            >
              <div className="mb-4 inline-flex rounded-xl bg-secondary/10 p-3 text-secondary sm:mb-0">
                <BadgeCheck className="h-6 w-6" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-text-primary">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {track.description}
                </p>
                <Link
                  href="/certificaciones"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
                >
                  Conocer rutas
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <ButtonLink href="/certificaciones" variant="outline">
            Explorar certificaciones
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
