import type { CourseModality } from "@/types";

export const corporateBenefits = [
  {
    id: "custom",
    title: "Programas a medida",
    description:
      "Diseñamos rutas formativas alineadas a objetivos de negocio, roles y nivel del equipo.",
  },
  {
    id: "scale",
    title: "Capacitación escalable",
    description:
      "Modalidades flexibles para equipos distribuidos, presenciales o híbridos.",
  },
  {
    id: "tracking",
    title: "Seguimiento del progreso",
    description:
      "Acompañamiento académico con reportes de avance para responsables de capacitación.",
  },
  {
    id: "experts",
    title: "Instructores especializados",
    description:
      "Profesionales con experiencia en industria y formación corporativa.",
  },
] as const;

export const corporateProcess = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Identificamos necesidades, nivel del equipo y objetivos de la capacitación.",
  },
  {
    step: "02",
    title: "Propuesta",
    description:
      "Elaboramos un programa personalizado con modalidad, duración y contenidos.",
  },
  {
    step: "03",
    title: "Ejecución",
    description:
      "Implementamos la formación con instructores asignados y material actualizado.",
  },
  {
    step: "04",
    title: "Evaluación",
    description:
      "Medimos resultados de aprendizaje y entregamos reporte de cierre al cliente.",
  },
] as const;

export const corporateModalities: CourseModality[] = [
  "En vivo",
  "Virtual",
  "Presencial",
  "Híbrido",
];

export const corporateTrainingAreas = [
  "Inteligencia artificial",
  "Programación y desarrollo",
  "Ciberseguridad",
  "Cloud Computing",
  "Data y analítica",
  "Gestión de proyectos",
] as const;

/** Indicadores cualitativos — no representan cifras reales */
export const corporateIndicators = [
  {
    id: "methodology",
    label: "Metodología",
    value: "Práctica",
    description: "Enfoque orientado a competencias aplicables",
  },
  {
    id: "flexibility",
    label: "Flexibilidad",
    value: "Alta",
    description: "Adaptación a calendarios corporativos",
  },
  {
    id: "support",
    label: "Acompañamiento",
    value: "Continuo",
    description: "Seguimiento durante todo el programa",
  },
  {
    id: "content",
    label: "Contenido",
    value: "Actualizado",
    description: "Alineado a tendencias del mercado",
  },
] as const;

export const corporateFaqs = [
  {
    id: "cotizacion",
    question: "¿Cuánto demora una propuesta corporativa?",
    answer:
      "Elaboramos propuestas en un plazo referencial de 3 a 5 días hábiles según alcance. Los tiempos oficiales serán confirmados por el equipo comercial.",
  },
  {
    id: "minimo",
    question: "¿Existe un mínimo de participantes?",
    answer:
      "Depende del programa y modalidad. Indica el número estimado en el formulario y te orientaremos sobre opciones disponibles.",
  },
  {
    id: "incompany",
    question: "¿Ofrecen capacitación in-company?",
    answer:
      "Sí. Evaluamos modalidad presencial, virtual o híbrida según ubicación y necesidades del equipo.",
  },
] as const;

export const trainingAreaOptions = [
  { value: "", label: "Selecciona un área" },
  { value: "inteligencia-artificial", label: "Inteligencia artificial" },
  { value: "programacion", label: "Programación" },
  { value: "ciberseguridad", label: "Ciberseguridad" },
  { value: "cloud-computing", label: "Cloud Computing" },
  { value: "data-analitica", label: "Data y analítica" },
  { value: "gestion-proyectos", label: "Gestión de proyectos" },
  { value: "otro", label: "Otra área" },
] as const;

export const modalityOptions = [
  { value: "", label: "Selecciona modalidad" },
  { value: "En vivo", label: "En vivo" },
  { value: "Virtual", label: "Virtual" },
  { value: "Presencial", label: "Presencial" },
  { value: "Híbrido", label: "Híbrido" },
] as const;
