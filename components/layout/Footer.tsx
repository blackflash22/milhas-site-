import Link from "next/link";
import { Plane, Mail } from "lucide-react";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { Separator } from "@/components/ui/separator";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

const platformLinks = [
  { label: "Buscar voos", href: "/onertravel/voos" },
  { label: "Buscar hotéis", href: "/onertravel/hoteis" },
  { label: "Pacotes", href: "/onertravel/pacotes" },
];

const agencyLinks = [
  { label: "Destinos", href: "/#destinos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Cotação", href: "/#cotacao" },
];

/** Footer compartilhado pelos modos RM Partiu e OnerTravel. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Plane className="h-5 w-5" aria-hidden />
            </span>
            <span className="font-bold">RM Partiu Viagens</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Cotações para viagens nacionais e internacionais com atendimento
            pelo WhatsApp.
          </p>
        </div>

        <nav aria-label="Links da agência" className="space-y-3">
          <p className="text-sm font-semibold">Agência</p>
          <ul className="space-y-2">
            {agencyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Links da plataforma OnerTravel" className="space-y-3">
          <p className="text-sm font-semibold">OnerTravel</p>
          <ul className="space-y-2">
            {platformLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3">
          <p className="text-sm font-semibold">Contato</p>
          <div className="flex flex-col items-start gap-2">
            <WhatsAppButton
              variant="outline"
              size="sm"
              message="Olá! Vim pelo site e quero uma cotação de viagem. Destino: __. Datas: __. Pessoas: __."
            >
              WhatsApp
            </WhatsAppButton>
            <a
              href="mailto:contato@extraordinariotrip.com.br"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4" aria-hidden />
              contato@extraordinariotrip.com.br
            </a>
            <a
              href="https://www.instagram.com/rmpartiuviagens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramButton label="Instagram da RM Partiu Viagens" />
              @rmpartiuviagens
            </a>
          </div>
        </div>
      </div>

      <Separator />

      <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground sm:flex-row">
        <p>© {year} RM Partiu Viagens. Todos os direitos reservados.</p>
        <p>
          Plataforma de busca e reserva:{" "}
          <Link href="/onertravel" className="font-medium text-primary hover:underline">
            OnerTravel
          </Link>
        </p>
      </div>
    </footer>
  );
}
