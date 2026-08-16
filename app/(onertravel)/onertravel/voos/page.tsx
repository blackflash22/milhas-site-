import type { Metadata } from "next";
import { Breadcrumb } from "@/components/onertravel/Breadcrumb";
import { OnerWidget } from "@/components/onertravel/OnerWidget";
import { ONERTRAVEL_VOOS_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Buscar voos — OnerTravel",
  description:
    "Pesquise passagens aéreas em tempo real e reserve online pela OnerTravel, plataforma da RM Partiu Viagens.",
};

export default function VoosPage() {
  return (
    <div className="container py-6">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: "OnerTravel", href: "/onertravel" },
          { label: "Voos" },
        ]}
      />

      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Voos — busca e reserva online
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Pesquise passagens com preços em tempo real na plataforma OnerTravel.
          Se preferir, a equipe RM Partiu monta a cotação para você.
        </p>
      </header>

      <OnerWidget
        src={ONERTRAVEL_VOOS_URL}
        title="OnerTravel — busca de voos"
        description="Passagens aéreas com reserva online"
      />
    </div>
  );
}
