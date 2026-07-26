import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_PLACEHOLDERS } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Política de privacidad",
  description:
    "Borrador estructural de la política de privacidad de CERTIA Academy. Pendiente de revisión legal.",
  path: "/politica-de-privacidad",
});

export default function PrivacyPolicyPage() {
  const p = LEGAL_PLACEHOLDERS;

  return (
    <LegalPageLayout
      title="Política de privacidad"
      description="Documento estructural en preparación. Los campos entre corchetes deben completarse con información oficial."
    >
      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            1. Responsable del tratamiento
          </h2>
          <ul className="mt-3 space-y-1">
            <li>Razón social: {p.razonSocial}</li>
            <li>RUC: {p.ruc}</li>
            <li>Domicilio: {p.domicilioLegal}</li>
            <li>Correo: {p.correoContacto}</li>
            <li>Responsable: {p.responsableTratamiento}</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            2. Datos que se recopilan
          </h2>
          <p className="mt-3">
            [DESCRIBIR DATOS RECOPILADOS: formularios de contacto, cotización
            empresarial, suscripción y navegación.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            3. Finalidad del tratamiento
          </h2>
          <p className="mt-3">
            [DESCRIBIR FINALIDADES: atención de consultas, gestión comercial,
            cumplimiento legal.]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            4. Derechos del titular
          </h2>
          <p className="mt-3">
            [DESCRIBIR DERECHOS ARCO Y PROCEDIMIENTO DE EJERCICIO SEGÚN LEY
            APLICABLE EN {p.jurisdiccion}.]
          </p>
        </section>
        <p className="text-xs text-text-secondary/80">
          Última actualización: {p.fechaActualizacion}
        </p>
      </div>
    </LegalPageLayout>
  );
}
