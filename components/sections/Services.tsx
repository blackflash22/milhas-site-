import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";

/** Os 4 serviços da agência: voos/hotel, ingressos, extras e WhatsApp. */
export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          title="Tudo que precisa conversar entre si na viagem."
          description="Voo, hotel, passeios e extras precisam fazer sentido juntos. A Extraordinário Trip ajuda a evitar escolhas soltas."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <div className="h-full rounded-xl border bg-card p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <service.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
