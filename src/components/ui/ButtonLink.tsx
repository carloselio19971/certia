import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "outlineInverse";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-secondary text-white hover:bg-secondary/90 focus-visible:ring-secondary",
  secondary:
    "bg-primary text-white hover:bg-primary/90 focus-visible:ring-primary",
  ghost:
    "bg-transparent text-primary hover:bg-bg-muted focus-visible:ring-primary",
  outline:
    "border border-primary/20 bg-white text-primary hover:border-secondary hover:text-secondary focus-visible:ring-secondary",
  outlineInverse:
    "border border-white/25 bg-transparent text-white hover:border-secondary hover:bg-white/10 hover:text-white focus-visible:ring-secondary focus-visible:ring-offset-primary",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
