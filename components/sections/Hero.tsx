import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { heroBadges, heroChecks } from "@/lib/data";

/** Hero da homepage: tagline, proposta de valor, CTAs e badges de confiança. */
export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden border-b">
      <div className="container grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border bg-muted px-4 py-1.5 text-sm font-medium">
              <span aria-hidden>✈</span> Brasil, exterior e viagens bem
              planejadas
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Sua viagem organizada{" "}
              <em className="not-italic text-primary">
                sem decidir tudo sozinho.
              </em>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Conte para onde quer ir, quando pretende viajar e quem vai com
              você. A Extraordinário Trip compara caminhos e monta uma cotação
              com voos, hospedagem, passeios e serviços que fazem sentido para
              o seu plano.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton
              size="lg"
              message="Olá! Vim pelo site e quero uma cotação de viagem. Destino: __. Datas: __. Pessoas: __."
            >
              Pedir cotação agora
            </WhatsAppButton>
            <Button size="lg" variant="outline" asChild>
              <Link href="#mais-pedidos">Escolher tipo de viagem</Link>
            </Button>
          </Reveal>

          <Reveal delay={0.4}>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {heroChecks.map((check) => (
                <li key={check} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-success" aria-hidden />
                  {check}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift">
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80"
              alt="Asa de avião vista da janela durante o pôr do sol"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 sm:left-8 sm:right-auto">
            <div className="rounded-xl border bg-card p-4 shadow-lift">
              <p className="text-sm font-semibold">Atendimento humano</p>
              <p className="text-xs text-muted-foreground">
                Equipe real do primeiro contato ao embarque.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="container pb-12 pt-6">
        <Reveal delay={0.2}>
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroBadges.map((badge) => (
              <div
                key={badge.label}
                className="rounded-xl border bg-card p-4 transition-shadow duration-300 hover:shadow-soft"
              >
                <dt className="text-sm font-bold text-primary">{badge.label}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {badge.description}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
