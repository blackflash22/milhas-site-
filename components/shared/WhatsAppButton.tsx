import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends Omit<ButtonProps, "children"> {
  message: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

/** Botão que abre o WhatsApp da equipe com mensagem pré-preenchida. */
export function WhatsAppButton({
  message,
  children = "Pedir cotação pelo WhatsApp",
  showIcon = true,
  className,
  ...props
}: WhatsAppButtonProps) {
  return (
    <Button asChild className={cn(className)} {...props}>
      <a
        href={buildWhatsAppLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a RM Partiu Viagens pelo WhatsApp"
      >
        {showIcon && <MessageCircle aria-hidden />}
        {children}
      </a>
    </Button>
  );
}
