import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Headset, Package, Plane, ShieldCheck, Tags, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/onertravel/Breadcrumb";
import { OnerWidget } from "@/components/onertravel/OnerWidget";
import { Reveal } from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "OnerTravel — Busca e reserva online",
  description:
    "Busque voos, hotéis e pacotes em tempo real, compare preços e reserve online com a OnerTravel, a plataforma da RM Partiu Viagens.",
};

const features = [
  {
    icon: Zap,
    title: "Busca em tempo real",
    description: "Disponibilidade e preços atualizados direto na plataforma.",
  },
  {
    icon: Tags,
    title: "Comparação de preços",
    description: "Companhias e hotéis lado a lado para você escolher com clareza.",
  },
  {
    icon: ShieldCheck,
    title: "Reserva segura",
    description: "Pagamento e confirmação dentro da plataforma OnerTravel.",
  },
  {
    icon: Headset,
    title: "Suporte de agência real",
    description: "Travou? Uma equipe de verdade assume pelo WhatsApp.",
  },
];

const sections = [
  { icon: Plane, label: "Voos", href: "/onertravel/voos" },
  { icon: Building2, label: "Hotéis", href: "/onertravel/hoteis" },
  { icon: Package, label: "Pacotes", href: "/onertravel/pacotes" },
];

/** Dashboard da OnerTravel: widget da plataforma + atalhos e diferenciais. */
export default function OnerTravelDashboard() {
  return (
    <div className="container py-6">
      <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "OnerTravel" }]} />

      <section className="py-8 text-center sm:py-10">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Modo autônomo
          </p>
          <h1 className="mx-auto mt-2 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Busque, compare e reserve online
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            A OnerTravel é a plataforma de reservas da RM Partiu Viagens:
            voos, hotéis e pacotes com preços atualizados em tempo real.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                <section.icon className="h-4 w-4" aria-hidden />
                {section.label}
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal delay={0.2}>
        <OnerWidget
          title="OnerTravel — plataforma de reservas"
          description="Busca e reserva online de voos, hotéis e pacotes"
        />
      </Reveal>

      <section className="grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:py-16">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.08}>
            <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-soft">
              <CardContent className="p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="mt-3 font-semibold">{feature.title}</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
