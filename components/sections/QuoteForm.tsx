"use client";

import { OnerWidget } from "@/components/onertravel/OnerWidget";
import { Reveal } from "@/components/shared/Reveal";

/**
 * Seção "Comece pela cotação" com o widget da OnerTravel embutido
 * diretamente na homepage, sem redirecionar para outra página.
 */
export function QuoteForm() {
  return (
    <section id="cotacao" className="border-b bg-muted/40 py-16 sm:py-20">
      <div className="container flex flex-col gap-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Cotação sem compromisso
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Busque, compare e reserve online
          </h2>
          <p className="mt-4 text-muted-foreground">
            A OnerTravel é a plataforma de reservas da Extraordinário Trip: voos,
            hotéis e pacotes com preços atualizados em tempo real.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <OnerWidget
            title="OnerTravel — plataforma de reservas"
            description="Busca e reserva online de voos, hotéis e pacotes"
            className="h-[85vh] min-h-[700px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
