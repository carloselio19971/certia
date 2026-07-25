/** Información de contacto provisional — reemplazar con datos oficiales */
export const contactInfo = {
  email: "info@certia.academy",
  phone: "+51 000 000 000",
  schedule: "Lunes a viernes, 9:00 – 18:00 (hora local, provisional)",
  address: "Lima, Perú (dirección por confirmar)",
} as const;

export const contactFaqs = [
  {
    id: "respuesta",
    question: "¿Cuánto tardan en responder?",
    answer:
      "Nuestro equipo revisa las solicitudes en un plazo estimado de 1 a 2 días hábiles. Este plazo es referencial y será confirmado con datos oficiales.",
  },
  {
    id: "inscripcion",
    question: "¿Cómo me inscribo a un curso?",
    answer:
      "Completa el formulario de contacto indicando el programa de interés. Te orientaremos sobre fechas, requisitos y pasos de inscripción.",
  },
  {
    id: "empresas",
    question: "¿Atienden solicitudes corporativas?",
    answer:
      "Sí. Para propuestas empresariales visita la sección de capacitación para empresas o indícalo en tu mensaje.",
  },
] as const;
