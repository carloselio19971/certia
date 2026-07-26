import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_PLACEHOLDERS } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Términos y condiciones",
  description:
    "Borrador estructural de términos y condiciones de CERTIA Academy. Pendiente de revisión legal.",
  path: "/terminos-y-condiciones",
});

export default function TermsPage() {
  const p = LEGAL_PLACEHOLDERS;

  return (
    <LegalPageLayout
      title="Términos y condiciones"
      description="Documento estructural en preparación para el uso del sitio web y servicios de CERTIA Academy."
    >
      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            1. Identificación del prestador
          </h2>
          <ul className="mt-3 space-y-1">
            <li>Razón social: {p.razonSocial}</li>
            <li>RUC: {p.ruc}</li>
            <li>Domicilio: {p.domicilioLegal}</li>
            <li>Contacto: {p.correoContacto}</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            2. Objeto
          </h2>
          <p className="mt-3">
            [DESCRIBIR OBJETO: condiciones de uso del sitio, información de
            programas formativos y procesos de contacto.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            3. Condiciones de contratación
          </h2>
          <p className="mt-3">
            [DESCRIBIR PROCESO DE INSCRIPCIÓN, PAGOS, CANCELACIONES Y
            CERTIFICACIÓN.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            4. Legislación aplicable
          </h2>
          <p className="mt-3">
            [INDICAR JURISDICCIÓN Y LEY APLICABLE: {p.jurisdiccion}.]
          </p>
        </section>
        <p className="text-xs text-text-secondary/80">
          Última actualización: {p.fechaActualizacion}
        </p>
      </div>
    </LegalPageLayout>
  );
}
