import type { Metadata } from "next";
import { Breadcrumb } from "@/components/onertravel/Breadcrumb";
import { OnerWidget } from "@/components/onertravel/OnerWidget";
import { ONERTRAVEL_PACOTES_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Pacotes de viagem — OnerTravel",
  description:
    "Pacotes com voo + hotel combinados em tempo real. Compare e reserve online pela OnerTravel, plataforma da RM Partiu Viagens.",
};

export default function PacotesPage() {
  return (
    <div className="container py-6">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: "OnerTravel", href: "/onertravel" },
          { label: "Pacotes" },
        ]}
      />

      <header className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Pacotes — busca e reserva online
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Voo + hotel combinados com preços em tempo real na plataforma
          OnerTravel. Se preferir, a equipe RM Partiu monta a cotação para você.
        </p>
      </header>

      <OnerWidget
        src={ONERTRAVEL_PACOTES_URL}
        title="OnerTravel — pacotes de viagem"
        description="Voo + hotel com reserva online"
      />
    </div>
  );
}
