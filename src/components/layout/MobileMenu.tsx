"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";

function setBodyScrollLocked(locked: boolean): void {
  document.documentElement.style.overflow = locked ? "hidden" : "";
  document.body.style.overflow = locked ? "hidden" : "";
}

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    setBodyScrollLocked(open);
    return () => setBodyScrollLocked(false);
  }, [open]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    if (open) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const overlay = (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[100] flex flex-col bg-primary md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menú de navegación"
    >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-4 sm:px-6">
          <Logo variant="light" onNavigate={close} />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label="Cerrar menú"
            onClick={close}
          >
            <X className="h-6 w-6" aria-hidden />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-8 pt-4 sm:px-6">
          <nav aria-label="Navegación móvil">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
                    onClick={close}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
            <ButtonLink
              href="/cursos"
              variant="primary"
              className="w-full"
              onClick={close}
            >
              Explorar cursos
            </ButtonLink>
            <ButtonLink
              href="/empresas"
              variant="outlineInverse"
              className="w-full"
              onClick={close}
            >
              Capacitación para empresas
            </ButtonLink>
          </div>
        </div>
      </div>
  );

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
      >
        <Menu className="h-6 w-6" aria-hidden />
      </button>

      {open ? createPortal(overlay, document.body) : null}
    </div>
  );
}
