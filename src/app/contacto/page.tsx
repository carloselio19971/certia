import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { contactFaqs, contactInfo } from "@/data/contact";
import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Solicita información sobre cursos, certificaciones y programas de capacitación tecnológica en CERTIA Academy.",
  path: "/contacto",
});

type ContactPageProps = {
  searchParams: Promise<{ curso?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { curso } = await searchParams;

  return (
    <>
      <section className="bg-bg-light py-12 md:py-16">
        <Container as="div">
          <SectionHeading
            eyebrow="Contacto"
            title="Estamos aquí para ayudarte"
            description="Completa el formulario y nuestro equipo te orientará sobre programas, fechas y procesos de inscripción."
          />
        </Container>
      </section>

      <section className="bg-white pb-16 pt-4 md:pb-24">
        <Container as="div">
          <div className="grid gap-10 lg:grid-cols-5">
            <aside className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-bg-light p-6">
                <h2 className="text-lg font-semibold text-text-primary">
                  Información de contacto
                </h2>
                <p className="mt-2 text-xs text-amber-700">
                  Datos provisionales — serán reemplazados por información oficial.
                </p>

                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <div>
                      <p className="font-medium text-text-primary">Correo</p>
                      <p className="text-text-secondary">{contactInfo.email}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <div>
                      <p className="font-medium text-text-primary">Teléfono</p>
                      <p className="text-text-secondary">{contactInfo.phone}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <div>
                      <p className="font-medium text-text-primary">Horario</p>
                      <p className="text-text-secondary">{contactInfo.schedule}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <div>
                      <p className="font-medium text-text-primary">Ubicación</p>
                      <p className="text-text-secondary">{contactInfo.address}</p>
                    </div>
                  </li>
                </ul>

                <WhatsAppLink
                  message={WHATSAPP_MESSAGES.contact}
                  variant="button"
                  className="mt-8 w-full"
                  label="WhatsApp"
                />
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
                <h2 className="text-xl font-semibold text-text-primary">
                  Formulario de contacto
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  Los campos marcados con * son obligatorios.
                </p>
                <div className="mt-6">
                  <ContactForm defaultCourseSlug={curso ?? ""} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="FAQ"
              title="Preguntas frecuentes de contacto"
              align="center"
              className="mb-8"
            />
            <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-bg-light">
              {contactFaqs.map((faq) => (
                <details key={faq.id} className="group px-6 py-5">
                  <summary className="cursor-pointer list-none text-base font-semibold text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span
                        className="text-secondary transition-transform group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
