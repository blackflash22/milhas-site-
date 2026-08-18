import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Junta classes Tailwind resolvendo conflitos (padrão shadcn/ui). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Link direto do WhatsApp da Extraordinário Trip. */
export const WHATSAPP_LINK = "https://wa.me/message/ZO3SNZ6UOEJAA1";

/** Retorna o link direto do WhatsApp da agência. */
export function buildWhatsAppLink(_message: string): string {
  return WHATSAPP_LINK;
}
