import type { SyllabusModule } from "@/types";

type CourseSyllabusProps = {
  modules: SyllabusModule[];
};

export function CourseSyllabus({ modules }: CourseSyllabusProps) {
  return (
    <div className="space-y-4">
      {modules.map((module, index) => (
        <article
          key={module.title}
          className="rounded-2xl border border-border bg-white p-6"
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-text-primary">
                {module.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {module.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
