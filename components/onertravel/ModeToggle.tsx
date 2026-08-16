"use client";

import { useRouter } from "next/navigation";
import { Plane, Search } from "lucide-react";
import { useMode } from "@/components/providers/ModeProvider";
import { cn } from "@/lib/utils";

/**
 * Alterna entre o Modo Consultivo (RM Partiu — cotação humana)
 * e o Modo Autônomo (OnerTravel — busca e reserva online).
 */
export function ModeToggle() {
  const { mode } = useMode();
  const router = useRouter();

  const options = [
    {
      value: "rm" as const,
      label: "RM Partiu",
      icon: Plane,
      href: "/",
      aria: "Ir para o modo consultivo RM Partiu",
    },
    {
      value: "oner" as const,
      label: "OnerTravel",
      icon: Search,
      href: "/onertravel",
      aria: "Ir para a plataforma de busca OnerTravel",
    },
  ];

  return (
    <div
      role="group"
      aria-label="Alternar entre RM Partiu e OnerTravel"
      className="flex items-center rounded-full border bg-muted p-1"
    >
      {options.map((option) => {
        const active = mode === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-label={option.aria}
            aria-pressed={active}
            onClick={() => router.push(option.href)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 sm:text-sm",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <option.icon className="h-3.5 w-3.5" aria-hidden />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
