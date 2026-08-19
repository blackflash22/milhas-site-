import { Reveal } from "@/components/shared/Reveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Claudia",
    initials: "CL",
    text: "Foi muito boa e confortável. A Latam disponibilizou travesseiro, coberta e fone de ouvido. Com certeza sempre disponíveis para sanar minhas dúvidas, mesmo com a diferença de fuso horário me deram bastante atenção. Sim, com certeza indicaria, muita atenção e honestidade.",
  },
  {
    name: "Ane",
    initials: "AN",
    text: "O voo foi super tranquilo. Principalmente na volta, pois estava na poltrona do lado da janela. Atendeu as expectativas, a própria agência fez o check-in e ficou bem mais fácil. Sim, super indico. Inclusive já indiquei.",
  },
  {
    name: "Beatriz",
    initials: "BE",
    text: "Chegamos em BH, indo pra Contagem, indo pra casa... Voo maravilhoso... Obrigado pela indicação e cuidado.",
  },
  {
    name: "Lucas",
    initials: "LU",
    text: "Foi muito bom, tranquilo, só tenho que agradecer mesmo a vocês, foi ótimo, e próximo ano vou de novo com a família.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t py-16 sm:py-24">
      {/* Estilos específicos baseados no uiverse.io convertidos para Tailwind/CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .uiverse-card {
          background: #ffffff;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          border: 1px solid #f1f5f9; /* Adicionado um border sutil para destacar no fundo claro se necessário */
        }
        .uiverse-border {
          position: absolute;
          inset: 0px;
          border: 2px solid #bd9f67;
          opacity: 0;
          transform: rotate(10deg);
          transition: all 0.5s ease-in-out;
          pointer-events: none;
        }
        .uiverse-card:hover {
          border-radius: 0;
          transform: scale(1.05);
          z-index: 20;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .uiverse-card:hover .uiverse-border {
          inset: 15px;
          opacity: 1;
          transform: rotate(0);
        }
        .uiverse-text-gold {
          color: #bd9f67;
        }
        .uiverse-bg-gold {
          background-color: #bd9f67;
        }
      ` }} />

      <div className="container relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              O que dizem os nossos clientes
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              A experiência e o cuidado que temos com cada viagem refletem-se nos
              sorrisos de quem confia na Extraordinário Trip.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={0.1 * index}
              className="flex"
            >
              {/* O Card do Uiverse */}
              <div className="uiverse-card flex w-full flex-col justify-between p-6 sm:p-8 shadow-sm">
                <div className="uiverse-border" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <Quote className="absolute right-0 top-0 h-10 w-10 opacity-10 uiverse-text-gold" aria-hidden="true" />
                  
                  <div>
                    <div className="flex gap-1 uiverse-text-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-6 text-base leading-relaxed text-slate-700">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-x-4 border-t border-slate-100 pt-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full uiverse-bg-gold font-semibold text-white">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm uiverse-text-gold font-medium">
                        Cliente Extraordinário Trip
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
