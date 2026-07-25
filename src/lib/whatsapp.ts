/**
 * WhatsApp — configurar NEXT_PUBLIC_WHATSAPP_NUMBER en .env (solo dígitos, formato internacional).
 * Ejemplo: 51999999999
 * No usar números ficticios.
 */
export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";
}

export function buildWhatsAppUrl(message: string): string | null {
  const number = getWhatsAppNumber();
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general:
    "Hola, deseo recibir información sobre los programas de CERTIA Academy.",
  course: (courseTitle: string) =>
    `Hola, deseo recibir información sobre el curso ${courseTitle}.`,
  corporate:
    "Hola, deseo solicitar una propuesta de capacitación corporativa.",
  contact:
    "Hola, deseo recibir información sobre los programas de CERTIA.",
} as const;
