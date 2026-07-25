import type { Category, CourseCategoryId, CourseCategoryLabel } from "@/types";

export const categories: Category[] = [
  {
    id: "inteligencia-artificial",
    title: "Inteligencia artificial",
    description:
      "Modelos, automatización y aplicaciones de IA para resolver problemas reales.",
    href: "/cursos?categoria=inteligencia-artificial",
  },
  {
    id: "programacion",
    title: "Programación",
    description:
      "Desarrollo web, lógica de software y buenas prácticas de ingeniería.",
    href: "/cursos?categoria=programacion",
  },
  {
    id: "ciberseguridad",
    title: "Ciberseguridad",
    description:
      "Protección de sistemas, análisis de riesgos y seguridad ofensiva y defensiva.",
    href: "/cursos?categoria=ciberseguridad",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Arquitecturas en la nube, servicios gestionados y despliegue escalable.",
    href: "/cursos?categoria=cloud-computing",
  },
  {
    id: "data-analitica",
    title: "Data y analítica",
    description:
      "Análisis de datos, visualización e insights para la toma de decisiones.",
    href: "/cursos?categoria=data-analitica",
  },
  {
    id: "gestion-proyectos",
    title: "Gestión de proyectos",
    description:
      "Metodologías ágiles, liderazgo técnico y entrega de valor continua.",
    href: "/cursos?categoria=gestion-proyectos",
  },
];

export function getCategoryLabel(id: CourseCategoryId): CourseCategoryLabel {
  const category = categories.find((item) => item.id === id);
  return category?.title ?? "Programación";
}
