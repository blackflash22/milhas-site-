"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Search } from "lucide-react";
import { useMode } from "@/components/providers/ModeProvider";
import { buildWhatsAppLink } from "@/lib/utils";

/**
 * Banner sutil de coexistência entre os dois modos:
 * - No modo RM Partiu: sugere a busca online da OnerTravel.
 * - No modo OnerTravel: sugere o atendimento personalizado da RM Partiu.
 */
export function CrossBanner() {
  const { isOner } = useMode();

  if (isOner) {
    return (
      <div className="border-b bg-muted/60">
        <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-sm">
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <MessageCircle className="h-4 w-4 text-primary" aria-hidden />
            Prefere atendimento personalizado?
          </span>
          <a
            href={buildWhatsAppLink(
              "Olá! Estava na OnerTravel e prefiro uma cotação com atendimento personalizado."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            Fale com a RM Partiu
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b bg-muted/60">
      <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2.5 text-center text-sm">
        <span className="inline-flex items-center gap-1.5 text-muted-foreground">
          <Search className="h-4 w-4 text-oner" aria-hidden />
          Prefere buscar e reservar online?
        </span>
        <Link
          href="/onertravel"
          className="inline-flex items-center gap-1 font-medium text-oner hover:underline"
        >
          Compare preços na OnerTravel
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
