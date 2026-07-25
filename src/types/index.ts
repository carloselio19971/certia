export type CourseCategoryId =
  | "inteligencia-artificial"
  | "programacion"
  | "ciberseguridad"
  | "cloud-computing"
  | "data-analitica"
  | "gestion-proyectos";

export type CourseCategoryLabel =
  | "Inteligencia artificial"
  | "Programación"
  | "Ciberseguridad"
  | "Cloud Computing"
  | "Data y analítica"
  | "Gestión de proyectos";

export type CourseModality = "En vivo" | "Virtual" | "Presencial" | "Híbrido";

export type CourseLevel = "Inicial" | "Intermedio" | "Avanzado";

export type CourseStatus = "disponible" | "proximamente" | "cerrado";

export type SyllabusModule = {
  title: string;
  topics: string[];
};

export type CourseFAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CourseCategoryLabel;
  categoryId: CourseCategoryId;
  modality: CourseModality;
  level: CourseLevel;
  duration: string;
  schedule: string;
  objectives: string[];
  targetAudience: string[];
  requirements: string[];
  syllabus: SyllabusModule[];
  benefits: string[];
  certification: string;
  status: CourseStatus;
  featured: boolean;
  ctaText: string;
  faqs: CourseFAQ[];
  /** Contenido demostrativo hasta recibir catálogo oficial */
  provisional: true;
};

export type Category = {
  id: CourseCategoryId;
  title: CourseCategoryLabel;
  description: string;
  href: string;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  area: string;
  provisional: true;
};

export type NavLink = {
  label: string;
  href: string;
};

export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  courseInterest: string;
  message: string;
  privacyAccepted: boolean;
};

export type ContactFormField = keyof ContactFormData;

export type CorporateQuoteFormData = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  participants: string;
  trainingArea: string;
  modality: string;
  message: string;
  privacyAccepted: boolean;
};

export type CorporateQuoteFormField = keyof CorporateQuoteFormData;

export type CourseFiltersState = {
  search: string;
  category: CourseCategoryId | "";
  modality: CourseModality | "";
  level: CourseLevel | "";
};

export type FormSubmitStatus = "idle" | "submitting" | "success" | "error";
