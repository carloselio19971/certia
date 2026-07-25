import type { Course } from "@/types";
import { CourseCard } from "@/components/ui/CourseCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

type RelatedCoursesProps = {
  courses: Course[];
};

export function RelatedCourses({ courses }: RelatedCoursesProps) {
  if (courses.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="related-courses-heading">
      <SectionHeading
        eyebrow="Relacionados"
        title="Cursos relacionados"
        description="Otros programas dentro de la misma área de formación."
        titleId="related-courses-heading"
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
