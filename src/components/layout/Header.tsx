import Link from "next/link";
import { navLinks } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur-md">
      <Container as="div" className="flex h-16 items-center justify-between md:h-20">
        <Logo variant="light" />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/cursos" variant="primary">
            Explorar cursos
          </ButtonLink>
          <ButtonLink href="/empresas" variant="outlineInverse">
            <span className="hidden xl:inline">Capacitación para empresas</span>
            <span className="xl:hidden">Para empresas</span>
          </ButtonLink>
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}
