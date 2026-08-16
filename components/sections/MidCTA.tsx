import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";

/** Faixa intermediária: "Boa viagem começa com boas escolhas." */
export function MidCTA() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-8 text-center shadow-soft sm:p-12">
            <h2 className="text-balance text-3xl font-semibold tracking-tight">
              Boa viagem começa com boas escolhas.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Antes de comprar passagem ou fechar hospedagem no impulso, coloque
              tudo na mesma cotação: datas, hotel, passeios, carro, seguro e
              orçamento.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="#cotacao">Montar minha cotação</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
