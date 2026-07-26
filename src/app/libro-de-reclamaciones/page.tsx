import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LEGAL_PLACEHOLDERS } from "@/data/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Libro de reclamaciones",
  description:
    "Información estructural sobre el libro de reclamaciones de CERTIA Academy.",
  path: "/libro-de-reclamaciones",
});

export default function ComplaintsBookPage() {
  const p = LEGAL_PLACEHOLDERS;

  return (
    <LegalPageLayout
      title="Libro de reclamaciones"
      description="Estructura informativa conforme al marco de protección al consumidor en Perú. El formulario completo se habilitará tras validación legal."
    >
      <div className="space-y-8 text-sm leading-relaxed text-text-secondary">
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            Datos del proveedor
          </h2>
          <ul className="mt-3 space-y-1">
            <li>Razón social: {p.razonSocial}</li>
            <li>RUC: {p.ruc}</li>
            <li>Domicilio: {p.domicilioLegal}</li>
            <li>Correo: {p.correoContacto}</li>
            <li>Teléfono: {p.telefono}</li>
          </ul>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            Formulario de reclamación
          </h2>
          <p className="mt-3">
            El formulario digital incluirá, entre otros campos: datos del
            consumidor, documento de identidad, domicilio, correo, teléfono,
            tipo de bien o servicio, monto reclamado, tipo (reclamo o queja),
            detalle, pedido del consumidor, número correlativo y confirmación.
          </p>
          <p className="mt-3 rounded-xl border border-border bg-bg-light px-4 py-3">
            [FORMULARIO PENDIENTE DE IMPLEMENTACIÓN Y VALIDACIÓN LEGAL]
          </p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-text-primary">
            Canales alternativos
          </h2>
          <p className="mt-3">
            Mientras se habilita el formulario, puede escribirnos a través del{" "}
            <Link
              href="/contacto"
              className="font-medium text-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
            >
              formulario de contacto
            </Link>{" "}
            indicando que desea registrar una reclamación.
          </p>
        </section>
        <p className="text-xs text-text-secondary/80">
          Última actualización: {p.fechaActualizacion}
        </p>
      </div>
    </LegalPageLayout>
  );
}
