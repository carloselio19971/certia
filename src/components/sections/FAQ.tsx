import { faqs } from "@/data/faqs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ() {
  return (
    <section
      className="bg-bg-muted py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <Container as="div">
        <SectionHeading
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          description="Resolvemos las dudas más comunes sobre nuestros programas, modalidades y procesos."
          align="center"
          titleId="faq-heading"
        />

        <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-white">
          {faqs.map((faq) => (
            <details key={faq.id} className="group px-6 py-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-text-primary marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm [&::-webkit-details-marker]:hidden">
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
      </Container>
    </section>
  );
}
