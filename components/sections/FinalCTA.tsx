import { Reveal } from "@/components/shared/Reveal";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

/** Banner final com CTA direto para o WhatsApp da equipe. */
export function FinalCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <Reveal>
          <div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground shadow-lift sm:px-12 sm:py-16">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Vamos transformar a ideia em uma cotação clara?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
              Envie destino, datas e número de viajantes. A equipe responde pelo
              WhatsApp com os próximos passos para montar sua viagem.
            </p>
            <WhatsAppButton
              size="lg"
              variant="secondary"
              className="mt-8"
              message="Olá! Vim pelo site e quero uma cotação de viagem. Destino: __. Datas: __. Pessoas: __."
            >
              Pedir cotação agora
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
