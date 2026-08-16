"use client";

import { useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ONERTRAVEL_URL } from "@/lib/config";
import { cn } from "@/lib/utils";

interface OnerWidgetProps {
  /** URL da seção da plataforma (padrão: URL base configurada em lib/config.ts) */
  src?: string;
  /** Título acessível do iframe */
  title: string;
  description?: string;
  className?: string;
}

/**
 * Widget da OnerTravel: embute a plataforma real de busca e reserva
 * via iframe, com skeleton de carregamento e opção de abrir em nova aba.
 */
export function OnerWidget({
  src = ONERTRAVEL_URL,
  title,
  description,
  className,
}: OnerWidgetProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3">
        <div>
          <p className="text-sm font-semibold">{title}</p>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
        <Button variant="ghost" size="sm" asChild>
          <a href={src} target="_blank" rel="noopener noreferrer">
            <ExternalLink aria-hidden />
            Abrir em nova aba
          </a>
        </Button>
      </div>

      <div className="relative">
        {!loaded && (
          <div
            className="absolute inset-0 z-10 flex flex-col gap-3 bg-card p-6"
            aria-hidden
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Carregando a plataforma OnerTravel...
            </div>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-2/3" />
            <Skeleton className="h-64 w-full" />
          </div>
        )}
        <iframe
          src={src}
          title={title}
          onLoad={() => setLoaded(true)}
          className={cn("h-[78vh] min-h-[560px] w-full", className)}
          loading="lazy"
          allow="payment; geolocation"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
