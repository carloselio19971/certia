import type { Course } from "@/types";
import { CourseCard } from "@/components/ui/CourseCard";
import { EmptyState } from "@/components/ui/EmptyState";
import { ButtonLink } from "@/components/ui/ButtonLink";

type CourseGridProps = {
  courses: Course[];
  onClearFilters?: () => void;
};

export function CourseGrid({ courses, onClearFilters }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <EmptyState
        title="No se encontraron cursos"
        description="Prueba ajustando los filtros o la búsqueda para encontrar programas que se ajusten a tus necesidades."
        action={
          onClearFilters ? (
            <button
              type="button"
              onClick={onClearFilters}
              className="inline-flex items-center justify-center rounded-lg border border-primary/15 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Limpiar filtros
            </button>
          ) : (
            <ButtonLink href="/contacto" variant="primary">
              Solicitar orientación
            </ButtonLink>
          )
        }
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
