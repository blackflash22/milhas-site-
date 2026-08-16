import type { LucideIcon } from "lucide-react";

/** Modo visual do site: RM Partiu (consultivo) ou OnerTravel (autônomo). */
export type SiteMode = "rm" | "oner";

export interface Destination {
  name: string;
  country: string;
  category: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export interface TripType {
  slug: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Valor usado para pré-preencher o formulário de cotação */
  prefill: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
