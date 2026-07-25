import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-labelledby="testimonials-heading"
    >
      <Container as="div">
        <SectionHeading
          eyebrow="Experiencias"
          title="Lo que dicen nuestros estudiantes"
          description="Testimonios demostrativos con fines ilustrativos. Serán reemplazados por experiencias reales verificadas."
          align="center"
          titleId="testimonials-heading"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex h-full flex-col rounded-2xl border border-border bg-bg-light p-6"
            >
              <Quote
                className="h-8 w-8 text-secondary/40"
                aria-hidden
              />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-secondary">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-secondary">
                  {testimonial.role} · {testimonial.area}
                </p>
                <p className="mt-2 text-xs font-medium text-amber-700">
                  Testimonio provisional
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
