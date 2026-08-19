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
      className="group block h-[320px] sm:h-[340px]"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transition: 'transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1)',
        }}
      >
        <div
          className="absolute inset-0 rounded-[1rem] border border-blue-200 shadow-[0_8px_14px_0_rgba(0,0,0,0.15)] transition-shadow duration-500 hover:shadow-lg flex flex-col"
          style={{
            backfaceVisibility: 'hidden',
            background: 'linear-gradient(120deg, #f0f9ff 60%, #e0f2fe 88%, #bae6fd 40%, rgba(56, 189, 248, 0.2) 48%)',
            color: '#0284c7',
          }}
        >
          <div className="relative h-[200px] sm:h-[220px] w-full shrink-0 overflow-hidden rounded-t-[1rem]">
            <Image
              src={destination.image}
              alt={`Foto de ${destination.name}`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
            <Badge className="absolute left-3 top-3 bg-blue-100 text-blue-800 hover:bg-blue-200 border-none" variant="secondary">
              {destination.category}
            </Badge>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
            <p className="flip-card-title font-semibold text-lg sm:text-xl">{destination.name}</p>
          </div>
        </div>
        <div
          className="absolute inset-0 rounded-[1rem] shadow-[0_8px_14px_0_rgba(0,0,0,0.2)] p-5 flex flex-col justify-center items-center"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(120deg, #38bdf8 30%, #0369a1 88%, #7dd3fc 40%, #0284c7 78%)',
            color: 'white',
          }}
        >
          <p className="flip-card-title font-bold text-xl">{destination.name}</p>
          <p className="mt-3 text-sm text-center leading-relaxed">
            {destination.description}
          </p>
          <p className="mt-3 text-xs opacity-80 font-medium">
            {destination.country}
          </p>
          <span className="mt-6 text-xs font-semibold opacity-90 border-b border-white/40 pb-0.5">
            Clique para solicitar cotação
          </span>
        </div>
      </div>
    </a>
  );
}
