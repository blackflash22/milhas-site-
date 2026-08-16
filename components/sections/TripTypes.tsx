"use client";

import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { tripTypes } from "@/lib/data";

/**
 * "Escolha o tipo de viagem e encurte o caminho."
 * Cada card rola até o widget da OnerTravel na seção de cotação.
 */
export function TripTypes() {
  function handleSelect() {
    document.getElementById("cotacao")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="mais-pedidos" className="py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          title="Escolha o tipo de viagem e encurte o caminho."
          description="Use um atalho abaixo e vá direto para a busca na plataforma OnerTravel."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {tripTypes.map((type, index) => (
            <Reveal key={type.slug} delay={index * 0.1}>
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lift">
                <CardContent className="flex h-full flex-col p-6">
                  <span className="text-sm font-medium lowercase text-primary">
                    {type.label}
                  </span>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <type.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="text-lg font-semibold">{type.title}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">
                    {type.description}
                  </p>
                  <button
                    type="button"
                    onClick={handleSelect}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:underline"
                    aria-label={`Buscar na OnerTravel: ${type.title}`}
                  >
                    Buscar na OnerTravel
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                  </button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
