import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Award, CheckCircle2, Target, Users } from "lucide-react";
import { CourseDetailHero } from "@/components/courses/CourseDetailHero";
import { CourseSyllabus } from "@/components/courses/CourseSyllabus";
import { RelatedCourses } from "@/components/courses/RelatedCourses";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getAllCourseSlugs,
  getCourseBySlug,
  getRelatedCourses,
} from "@/data/courses";
import { createCourseMetadata } from "@/lib/metadata";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return { title: "Curso no encontrado | CERTIA Academy" };
  }

  return createCourseMetadata(course.title, course.shortDescription, course.slug);
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(course);

  return (
    <>
      <CourseDetailHero course={course} />

      <section className="bg-white py-14 md:py-20">
        <Container as="div" className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Objetivos"
              title="Qué aprenderás"
              className="mb-8"
            />
            <ul className="space-y-3">
              {course.objectives.map((objective) => (
                <li
                  key={objective}
                  className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-secondary"
                    aria-hidden
                  />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-border bg-bg-light p-6">
            <h2 className="text-lg font-semibold text-text-primary">
              Información del programa
            </h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-medium text-text-primary">Estado</dt>
                <dd className="mt-1 capitalize text-text-secondary">
                  {course.status}
                </dd>
              </div>
              <div>
                <dt className="font-medium text-text-primary">Certificación</dt>
                <dd className="mt-1 text-text-secondary">
                  {course.certification}
                </dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section className="bg-bg-light py-14 md:py-20">
        <Container as="div" className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Audiencia"
              title="Público objetivo"
              className="mb-6"
            />
            <ul className="space-y-3">
              {course.targetAudience.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-text-secondary"
                >
                  <Users className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Requisitos"
              title="Lo que necesitas"
              className="mb-6"
            />
            <ul className="space-y-3">
              {course.requirements.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-text-secondary"
                >
                  <Target className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container as="div">
          <SectionHeading
            eyebrow="Temario"
            title="Contenido del programa"
            description="Organizado por módulos para facilitar tu progreso."
            className="mb-8"
          />
          <CourseSyllabus modules={course.syllabus} />
        </Container>
      </section>

      <section className="bg-bg-muted py-14 md:py-20">
        <Container as="div">
          <SectionHeading
            eyebrow="Beneficios"
            title="Ventajas del programa"
            className="mb-8"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {course.benefits.map((benefit) => (
              <article
                key={benefit}
                className="rounded-2xl border border-border bg-white p-5"
              >
                <Award className="h-6 w-6 text-secondary" aria-hidden />
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  {benefit}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container as="div">
          <SectionHeading
            eyebrow="FAQ"
            title="Preguntas frecuentes del curso"
            className="mb-8"
          />
          <div className="divide-y divide-border rounded-2xl border border-border bg-bg-light">
            {course.faqs.map((faq) => (
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

      {relatedCourses.length > 0 ? (
        <section className="bg-bg-light py-14 md:py-20">
          <Container as="div">
            <RelatedCourses courses={relatedCourses} />
          </Container>
        </section>
      ) : null}

      <FinalCTA />
    </>
  );
}
