import Link from "next/link";
import { categories } from "@/data/categories";
import { contactInfo } from "@/data/contact";
import { legalLinks } from "@/data/legal";
import { navLinks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <Container as="div" className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Academia de capacitación tecnológica y certificaciones
              profesionales para personas y organizaciones que buscan crecer.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Navegación
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Categorías
            </h2>
            <ul className="mt-4 space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/90">
              Legal y contacto
            </h2>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-4 text-sm text-white/70">
              <li>
                <span className="block text-white/90">Correo (provisional)</span>
                <span>{contactInfo.email}</span>
              </li>
              <li>
                <span className="block text-white/90">Horario</span>
                <span>{contactInfo.schedule.replace(" (hora local, provisional)", "")}</span>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="inline-flex font-medium text-secondary transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-sm"
                >
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} CERTIA Academy. Todos los derechos reservados.</p>
          <p className="text-xs text-white/45">
            Contenido demostrativo y legal en borrador — pendiente de datos
            oficiales.
          </p>
        </div>
      </Container>
    </footer>
  );
}
