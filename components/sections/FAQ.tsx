import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems } from "@/lib/data";

/** Acordeão de dúvidas comuns (mesmas 4 perguntas do site de referência). */
export function FAQ() {
  return (
    <section id="duvidas" className="border-b bg-muted/40 py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Dúvidas comuns"
          title="O que vale saber antes da cotação."
        />

        <Reveal className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="rounded-xl border bg-card px-6">
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
