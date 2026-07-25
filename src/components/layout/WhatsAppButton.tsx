import { WHATSAPP_MESSAGES } from "@/lib/whatsapp";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function WhatsAppButton() {
  return (
    <WhatsAppLink
      message={WHATSAPP_MESSAGES.general}
      variant="floating"
      label="WhatsApp"
    />
  );
}
