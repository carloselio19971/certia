import type { Testimonial } from "@/types";

/** Testimonios demostrativos — reemplazar con casos reales autorizados */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "La metodología práctica me permitió aplicar lo aprendido en mi trabajo desde la primera semana del programa.",
    name: "María González",
    role: "Analista de datos",
    area: "Data y analítica",
    provisional: true,
  },
  {
    id: "t2",
    quote:
      "El acompañamiento académico y el contenido actualizado marcaron la diferencia en mi preparación profesional.",
    name: "Carlos Mendoza",
    role: "Desarrollador de software",
    area: "Programación",
    provisional: true,
  },
  {
    id: "t3",
    quote:
      "Capacitamos a nuestro equipo con un programa a medida. Los resultados en productividad fueron visibles en poco tiempo.",
    name: "Laura Vega",
    role: "Gerente de TI",
    area: "Capacitación empresarial",
    provisional: true,
  },
];

export const benefits = [
  {
    id: "practica",
    title: "Formación práctica",
    description:
      "Laboratorios y proyectos guiados orientados a competencias aplicables.",
  },
  {
    id: "instructores",
    title: "Instructores especializados",
    description:
      "Profesionales con experiencia en industria y enseñanza tecnológica.",
  },
  {
    id: "actualizado",
    title: "Contenido actualizado",
    description:
      "Programas alineados con tendencias y demandas actuales del mercado.",
  },
  {
    id: "certificacion",
    title: "Certificación",
    description:
      "Reconocimiento al completar programas y rutas de preparación oficial.",
  },
  {
    id: "modalidad",
    title: "Modalidad flexible",
    description:
      "Opciones presenciales, virtuales e híbridas según el programa.",
  },
  {
    id: "acompanamiento",
    title: "Acompañamiento académico",
    description:
      "Seguimiento durante el proceso formativo para maximizar tu aprendizaje.",
  },
] as const;

export const certificationTracks = [
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Preparación para certificaciones en plataformas cloud líderes del mercado.",
  },
  {
    id: "security",
    title: "Ciberseguridad",
    description:
      "Rutas orientadas a roles de seguridad ofensiva, defensiva y cumplimiento.",
  },
  {
    id: "data",
    title: "Data & Analytics",
    description:
      "Competencias en análisis, ingeniería de datos y visualización profesional.",
  },
  {
    id: "dev",
    title: "Desarrollo de software",
    description:
      "Certificaciones técnicas en lenguajes, frameworks y arquitectura moderna.",
  },
] as const;

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "/cursos" },
  { label: "Certificaciones", href: "/certificaciones" },
  { label: "Empresas", href: "/empresas" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;
