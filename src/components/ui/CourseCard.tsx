import { Clock, Layers, Monitor } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/types";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-bg-muted px-3 py-1 text-xs font-medium text-text-secondary">
          {course.category}
        </span>
        {course.provisional ? (
          <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            Contenido provisional
          </span>
        ) : null}
      </div>

      <h3 className="text-lg font-semibold text-text-primary">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
        {course.shortDescription}
      </p>

      <ul className="mt-5 space-y-2 border-t border-border pt-5 text-sm text-text-secondary">
        <li className="flex items-center gap-2">
          <Monitor className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
          <span>{course.modality}</span>
        </li>
        <li className="flex items-center gap-2">
          <Layers className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
          <span>Nivel {course.level}</span>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-secondary" aria-hidden />
          <span>{course.duration}</span>
        </li>
      </ul>

      <Link
        href={`/cursos/${course.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-lg border border-primary/15 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-secondary hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
      >
        Ver programa
      </Link>
    </article>
  );
}
