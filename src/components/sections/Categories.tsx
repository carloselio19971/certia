import {
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Shield,
  Target,
} from "lucide-react";
import Link from "next/link";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  "inteligencia-artificial": Brain,
  programacion: Code2,
  ciberseguridad: Shield,
  "cloud-computing": Cloud,
  "data-analitica": BarChart3,
  "gestion-proyectos": Target,
} as const;

export function Categories() {
  return (
    <section
      className="bg-bg-light py-16 md:py-24"
      aria-labelledby="categories-heading"
    >
      <Container as="div">
        <SectionHeading
          eyebrow="Áreas de formación"
          title="Explora nuestras categorías"
          description="Programas organizados por competencias clave para profesionales y equipos que buscan especializarse en tecnología."
          titleId="categories-heading"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = iconMap[category.id as keyof typeof iconMap];

            return (
              <Link
                key={category.id}
                href={category.href}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
              >
                <div className="mb-4 inline-flex rounded-xl bg-bg-muted p-3 text-secondary transition-colors group-hover:bg-secondary/10">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
