import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildWhatsAppLink } from "@/lib/utils";
import { destinations } from "@/lib/data";

/**
 * Grid de destinos com efeito flip card. Cada card abre o WhatsApp
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
                className="group block h-[254px] flip-card"
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-t-[1rem]">
                      <Image
                        src={destination.image}
                        alt={`Foto de ${destination.name}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <Badge className="absolute left-3 top-3" variant="secondary">
                        {destination.category}
                      </Badge>
                    </div>
                    <div className="p-5 flex flex-col justify-center h-[calc(100%-160px)]">
                      <p className="flip-card-title">{destination.name}</p>
                    </div>
                  </div>
                  <div className="flip-card-back p-5 flex flex-col justify-center items-center">
                    <p className="flip-card-title">{destination.name}</p>
                    <p className="mt-2 text-sm text-center">
                      {destination.description}
                    </p>
                    <p className="mt-2 text-xs opacity-80">
                      {destination.country}
                    </p>
                    <span className="mt-4 text-xs font-medium opacity-90">
                      Clique para solicitar cotação
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
