import { getFeaturedCourses } from "@/data/courses";
import { Container } from "@/components/ui/Container";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function FeaturedCourses() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="featured-courses-heading"
    >
      <Container as="div">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Catálogo"
            title="Cursos destacados"
            description="Programas seleccionados para iniciar o fortalecer tu perfil tecnológico."
            className="mb-0"
            titleId="featured-courses-heading"
          />
          <ButtonLink href="/cursos" variant="outline" className="shrink-0">
            Ver todos los cursos
          </ButtonLink>
        </div>

        <p className="mb-8 mt-4 text-sm text-amber-700">
          Los cursos mostrados son contenido demostrativo provisional.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {getFeaturedCourses().map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
