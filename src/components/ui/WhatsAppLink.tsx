import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

type WhatsAppLinkProps = {
  message: string;
  label?: string;
  variant?: "button" | "buttonInverse" | "floating";
  className?: string;
};

const variantStyles = {
  button:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20bd5a] active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
  buttonInverse:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-transparent px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#25D366] hover:bg-white/10 active:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-primary",
  floating:
    "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
};

export function WhatsAppLink({
  message,
  label = "WhatsApp",
  variant = "button",
  className = "",
}: WhatsAppLinkProps) {
  const url = buildWhatsAppUrl(message);
  const classes = `${variantStyles[variant]} ${className}`.trim();

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={`Contactar por WhatsApp: ${label}`}
      >
        <WhatsAppIcon
          className={variant === "floating" ? "h-7 w-7" : "h-5 w-5"}
        />
        {variant !== "floating" ? label : null}
      </a>
    );
  }

  if (variant === "floating") {
    return null;
  }

  return (
    <Link
      href="/contacto"
      className={`${classes} !border-border !bg-bg-muted !text-text-primary hover:!border-secondary hover:!text-secondary`}
      aria-label="WhatsApp no disponible — ir al formulario de contacto"
      title="WhatsApp próximamente — usar formulario de contacto"
    >
      Contactar
    </Link>
  );
}
