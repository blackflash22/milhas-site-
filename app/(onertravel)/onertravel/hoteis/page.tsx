import type { Metadata } from "next";
import { Breadcrumb } from "@/components/onertravel/Breadcrumb";
import { OnerWidget } from "@/components/onertravel/OnerWidget";
import { ONERTRAVEL_HOTEIS_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Buscar hotéis — OnerTravel",
  description:
    "Encontre hotéis com disponibilidade e preços em tempo real. Reserve online pela OnerTravel, plataforma da RM Partiu Viagens.",
};

export default function HoteisPage() {
  return (
    <div className="container py-6">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: "OnerTravel", href: "/onertravel" },
          { label: "Hotéis" },
        ]}
      />

      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Hotéis — busca e reserva online
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Compare hospedagens com disponibilidade em tempo real na plataforma
          OnerTravel. Se preferir, a equipe RM Partiu monta a cotação para você.
        </p>
      </header>

      <OnerWidget
        src={ONERTRAVEL_HOTEIS_URL}
        title="OnerTravel — busca de hotéis"
        description="Hospedagem com reserva online"
      />
    </div>
  );
}
