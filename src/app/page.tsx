import type { Metadata } from "next";
import { Benefits } from "@/components/sections/Benefits";
import { Categories } from "@/components/sections/Categories";
import { Certifications } from "@/components/sections/Certifications";
import { CorporateTraining } from "@/components/sections/CorporateTraining";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedCourses } from "@/components/sections/FeaturedCourses";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "CERTIA Academy | Formación y certificaciones tecnológicas",
  description:
    "Capacitación práctica en inteligencia artificial, programación, datos, ciberseguridad, nube y certificaciones profesionales.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedCourses />
      <Benefits />
      <CorporateTraining />
      <Certifications />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
