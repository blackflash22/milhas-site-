"use client";

import { SectionHeading } from "@/components/shared/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { steps } from "@/lib/data";

/**
 * Os 4 passos até a reserva, com reveal escalonado via IntersectionObserver
 * (hook useScrollAnimation).
 */
export function HowItWorks() {
  const { ref, visible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="como-funciona" className="border-b bg-muted/40 py-16 sm:py-20">
      <div className="container">
        <SectionHeading title="Um caminho simples até a reserva." />

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={cn(
                "relative rounded-xl border bg-card p-6 transition-all duration-500",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground"
                aria-hidden
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
