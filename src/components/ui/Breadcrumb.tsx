import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
};

export function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const isLight = variant === "light";

  const listClass = isLight
    ? "text-white/70"
    : "text-text-secondary";
  const currentClass = isLight
    ? "font-medium text-white"
    : "font-medium text-text-primary";
  const linkClass = isLight
    ? "text-white/80 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
    : "transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm";
  const chevronClass = isLight
    ? "text-white/50"
    : "text-text-secondary/60";

  return (
    <nav aria-label="Ruta de navegación">
      <ol className={`flex flex-wrap items-center gap-1 text-sm ${listClass}`}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {index > 0 ? (
                <ChevronRight
                  className={`h-4 w-4 shrink-0 ${chevronClass}`}
                  aria-hidden
                />
              ) : null}
              {isLast || !item.href ? (
                <span
                  className={currentClass}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
