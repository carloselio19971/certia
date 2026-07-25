/** Campos legales pendientes — sustituir con datos oficiales antes de publicar */
export const LEGAL_PLACEHOLDERS = {
  razonSocial: "[RAZÓN SOCIAL]",
  ruc: "[RUC]",
  domicilioLegal: "[DOMICILIO LEGAL]",
  correoContacto: "[CORREO DE CONTACTO]",
  telefono: "[TELÉFONO]",
  responsableTratamiento: "[RESPONSABLE DEL TRATAMIENTO]",
  fechaActualizacion: "[FECHA DE ACTUALIZACIÓN]",
  jurisdiccion: "[JURISDICCIÓN]",
} as const;

export const legalLinks = [
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Política de cookies", href: "/politica-de-cookies" },
  { label: "Libro de reclamaciones", href: "/libro-de-reclamaciones" },
] as const;
