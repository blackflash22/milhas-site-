"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { buildWhatsAppLink } from "@/lib/utils";
import { destinations } from "@/lib/data";
import { useState } from "react";

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
              <DestinationCard destination={destination} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ destination }: { destination: typeof destinations[0] }) {
  const [flipped, setFlipped] = useState(false);
  const whatsappLink = buildWhatsAppLink(destination.whatsappMessage);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir cotação para ${destination.name} pelo WhatsApp`}
      className="group block h-[254px]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-800"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 rounded-[1rem] border border-coral shadow-[0_8px_14px_0_rgba(0,0,0,0.2)]"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(120deg, bisque 60%, rgb(255, 231, 222) 88%, rgb(255, 211, 195) 40%, rgba(255, 127, 80, 0.603) 48%)',
            color: 'coral',
          }}
        >
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
        <div
          className="absolute inset-0 rounded-[1rem] border border-coral shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] p-5 flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(120deg, rgb(255, 174, 145) 30%, coral 88%, bisque 40%, rgb(255, 185, 160) 78%)',
            color: 'white',
          }}
        >
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
  );
}
