"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <button
      type="button"
      aria-label="Contactar por WhatsApp — próximamente disponible"
      title="WhatsApp — próximamente disponible"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      onClick={() => {
        /* Conexión pendiente — número oficial por definir */
      }}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </button>
  );
}
