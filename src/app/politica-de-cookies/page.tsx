import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_PLACEHOLDERS } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Política de cookies | CERTIA Academy",
  description:
    "Borrador estructural de la política de cookies de CERTIA Academy.",
  path: "/politica-de-cookies",
});

export default function CookiesPolicyPage() {
  const p = LEGAL_PLACEHOLDERS;

  return (
    <LegalPageLayout
      title="Política de cookies"
      description="Información estructural sobre el uso de cookies y tecnologías similares."
    >
      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            1. ¿Qué son las cookies?
          </h2>
          <p className="mt-3">
            [DESCRIBIR DEFINICIÓN Y TIPOS DE COOKIES UTILIZADAS EN EL SITIO.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            2. Cookies utilizadas
          </h2>
          <p className="mt-3">
            [TABLA DE COOKIES: nombre, finalidad, duración, titular.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            3. Gestión del consentimiento
          </h2>
          <p className="mt-3">
            [DESCRIBIR CÓMO EL USUARIO PUEDE ACEPTAR, RECHAZAR O CONFIGURAR
            COOKIES.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            4. Contacto
          </h2>
          <p className="mt-3">
            Para consultas: {p.correoContacto} — {p.razonSocial}.
          </p>
        </section>
        <p className="text-xs text-text-secondary/80">
          Última actualización: {p.fechaActualizacion}
        </p>
      </div>
    </LegalPageLayout>
  );
}
