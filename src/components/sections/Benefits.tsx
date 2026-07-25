import {
  Award,
  BookOpen,
  GraduationCap,
  Headphones,
  Laptop,
  RefreshCw,
} from "lucide-react";
import { benefits } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconList = [Laptop, GraduationCap, RefreshCw, Award, BookOpen, Headphones];

export function Benefits() {
  return (
    <section
      className="bg-bg-muted py-16 md:py-24"
      aria-labelledby="benefits-heading"
    >
      <Container as="div">
        <SectionHeading
          eyebrow="Por qué CERTIA"
          title="Una formación diseñada para resultados reales"
          description="Combinamos metodología práctica, expertos del sector y acompañamiento continuo para que avances con confianza."
          align="center"
          titleId="benefits-heading"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = iconList[index] ?? Laptop;

            return (
              <article
                key={benefit.id}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/5 p-3 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
