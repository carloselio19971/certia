import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** Mantenido por compatibilidad con call-sites existentes. */
  variant?: "light" | "dark";
  onNavigate?: () => void;
  priority?: boolean;
};

export function Logo({
  className = "",
  onNavigate,
  priority = false,
}: LogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      aria-label="Ir al inicio de CERTIA Academy"
      className={`flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm ${className}`}
    >
      <Image
        src="/images/certia-logo-navbar.png"
        alt="CERTIA Academy"
        width={320}
        height={96}
        priority={priority}
        className="h-auto w-[155px] object-contain md:w-[175px] lg:w-[205px]"
      />
    </Link>
  );
}
