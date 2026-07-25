import Link from "next/link";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className = "", variant = "dark" }: LogoProps) {
  const primaryColor = variant === "light" ? "text-white" : "text-primary";
  const secondaryColor =
    variant === "light" ? "text-white/70" : "text-text-secondary";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 rounded-sm ${className}`}
      aria-label="CERTIA Academy — Inicio"
    >
      <span
        className={`text-xl font-bold tracking-[0.18em] ${primaryColor} transition-colors group-hover:text-secondary`}
      >
        CERTIA
      </span>
      <span
        className={`mt-1 text-[0.65rem] font-medium uppercase tracking-[0.35em] ${secondaryColor}`}
      >
        Academy
      </span>
    </Link>
  );
}
