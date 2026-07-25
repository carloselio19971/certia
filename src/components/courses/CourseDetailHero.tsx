import { Calendar, Clock, Layers, Monitor } from "lucide-react";
import type { Course } from "@/types";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

type CourseDetailHeroProps = {
  course: Course;
};

export function CourseDetailHero({ course }: CourseDetailHeroProps) {
  return (
    <section className="overflow-hidden bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <Breadcrumb
          variant="light"
          items={[
            { label: "Inicio", href: "/" },
            { label: "Cursos", href: "/cursos" },
            { label: course.title },
          ]}
        />

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                {course.category}
              </span>
              {course.provisional ? (
                <span className="rounded-full bg-amber-400/20 px-3 py-1 text-xs font-medium text-amber-100">
                  Contenido provisional
                </span>
              ) : null}
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {course.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {course.fullDescription}
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Monitor className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">
                    Modalidad
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{course.modality}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">
                    Nivel
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{course.level}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">
                    Duración
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{course.duration}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                <div>
                  <dt className="text-xs uppercase tracking-wider text-white/60">
                    Horario
                  </dt>
                  <dd className="mt-1 text-sm font-medium">{course.schedule}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={`/contacto?curso=${course.slug}`}
                variant="primary"
              >
                Solicitar información
              </ButtonLink>
              <WhatsAppLink
                message={WHATSAPP_MESSAGES.course(course.title)}
                variant="buttonInverse"
                label="WhatsApp"
              />
            </div>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg" aria-hidden>
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5" />
            <div className="absolute left-6 top-8 w-[70%] rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Temario
              </p>
              <div className="mt-4 space-y-2">
                {course.syllabus.slice(0, 3).map((module) => (
                  <div
                    key={module.title}
                    className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/90"
                  >
                    {module.title}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 right-6 rounded-2xl border border-secondary/30 bg-secondary/20 px-5 py-4">
              <p className="text-xs text-white/70">Estado del programa</p>
              <p className="mt-1 text-lg font-semibold capitalize">
                {course.status}
              </p>
            </div>
            <div className="absolute right-10 top-6 h-14 w-14 rounded-2xl border border-white/10 bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
