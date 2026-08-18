import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildWhatsAppLink } from "@/lib/utils";
import { destinations } from "@/lib/data";

/**
 * Grid de destinos com imagens. Cada card abre o WhatsApp
 * com mensagem específica do destino (padrão do site de referência).
 */
export function Destinations() {
  return (
    <section id="destinos" className="border-b bg-muted/40 py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          title="Destinos para quem quer viajar com tudo mais claro."
          description="Escolha uma inspiração ou peça outro roteiro. A Extraordinário Trip ajuda a montar opções compatíveis com datas, perfil dos viajantes e orçamento."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Reveal key={destination.name} delay={(index % 3) * 0.1}>
              <a
                href={buildWhatsAppLink(destination.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Pedir cotação para ${destination.name} pelo WhatsApp`}
                className="group block h-full"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={`Foto de ${destination.name}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <Badge className="absolute left-3 top-3" variant="secondary">
                      {destination.category}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{destination.name}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {destination.description}
                    </p>
                  </div>
                </Card>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
