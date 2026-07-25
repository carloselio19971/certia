import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
      aria-hidden
    >
      <div className="absolute inset-4 rounded-3xl border border-primary/10 bg-bg-muted" />

      <div className="absolute left-8 top-10 w-[58%] rounded-2xl border border-primary/10 bg-white p-4 shadow-lg">
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/20" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-3/4 rounded bg-primary/10" />
          <div className="h-2 w-full rounded bg-primary/10" />
          <div className="h-2 w-5/6 rounded bg-secondary/30" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg bg-bg-muted" />
          <div className="h-10 rounded-lg bg-secondary/15" />
          <div className="h-10 rounded-lg bg-bg-muted" />
        </div>
      </div>

      <div className="absolute bottom-16 right-6 w-[46%] rounded-2xl border border-secondary/20 bg-primary p-4 text-white shadow-xl">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-secondary">
          Progreso
        </p>
        <p className="mt-1 text-sm font-semibold">Ruta de certificación</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-3/4 rounded-full bg-secondary" />
        </div>
        <p className="mt-2 text-xs text-white/70">75% completado</p>
      </div>

      <div className="absolute right-10 top-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/10 bg-white shadow-md">
        <div className="grid grid-cols-2 gap-1.5">
          <span className="h-3 w-3 rounded-sm bg-secondary/80" />
          <span className="h-3 w-3 rounded-sm bg-primary/15" />
          <span className="h-3 w-3 rounded-sm bg-primary/15" />
          <span className="h-3 w-3 rounded-sm bg-secondary/40" />
        </div>
      </div>

      <div className="absolute bottom-8 left-10 rounded-xl border border-primary/10 bg-white px-4 py-3 shadow-md">
        <p className="text-xs font-medium text-text-secondary">Modalidad</p>
        <p className="text-sm font-semibold text-primary">Virtual en vivo</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="overflow-hidden bg-white pb-16 pt-12 md:pb-24 md:pt-16 lg:pt-20"
      aria-labelledby="hero-heading"
    >
      <Container as="div">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full bg-bg-muted px-4 py-1.5 text-sm font-semibold text-secondary">
              Formación tecnológica para el futuro
            </p>
            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl md:leading-tight"
            >
              Desarrolla habilidades que impulsan tu carrera
            </h1>
            <p className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg">
              Programas prácticos en tecnología, inteligencia artificial,
              programación, datos, ciberseguridad y certificaciones
              profesionales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/cursos" variant="primary">
                Explorar cursos
              </ButtonLink>
              <ButtonLink href="/empresas" variant="outline">
                Capacitación para empresas
              </ButtonLink>
            </div>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
