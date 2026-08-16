import {
  Plane,
  Ticket,
  Car,
  MessageCircle,
  Users,
  Umbrella,
  Globe,
} from "lucide-react";
import type {
  Destination,
  FAQItem,
  ServiceItem,
  StepItem,
  TripType,
} from "@/types";

/* ------------------------------------------------------------------ */
/* Conteúdo da homepage — fiel ao site de referência RM Partiu Viagens */
/* ------------------------------------------------------------------ */

export const heroBadges = [
  { label: "BR", description: "Praias, serra e resorts" },
  { label: "EXT", description: "Caribe, EUA e Europa" },
  { label: "Zap", description: "Cotação pelo WhatsApp" },
  { label: "Agência", description: "Equipe real no atendimento" },
];

export const heroChecks = [
  "Cotação sem compromisso",
  "Atendimento humano",
  "Brasil e exterior",
];

export const tripTypes: TripType[] = [
  {
    slug: "familia",
    label: "família",
    title: "Parques, resorts e diversão",
    description:
      "Opções para Orlando, Beto Carrero, resorts e roteiros que precisam funcionar para adultos e crianças.",
    icon: Users,
    prefill: "Família e parques",
  },
  {
    slug: "praia",
    label: "praia",
    title: "Praia sem dor de cabeça",
    description:
      "Cancún, Nordeste, Fernando de Noronha e destinos para descansar com voo, hospedagem e passeios alinhados.",
    icon: Umbrella,
    prefill: "Pacote completo",
  },
  {
    slug: "internacional",
    label: "internacional",
    title: "Exterior com orientação",
    description:
      "Europa, Caribe e Estados Unidos com apoio para escolher rota, datas, hospedagem e serviços extras.",
    icon: Globe,
    prefill: "Viagem internacional",
  },
];

export const destinations: Destination[] = [
  {
    name: "Fernando de Noronha",
    country: "Brasil",
    category: "Brasil",
    description: "Praia, natureza e roteiro para uma viagem marcante.",
    image:
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=900&q=80",
    whatsappMessage:
      "Olá! Tenho interesse em uma cotação para Fernando de Noronha.",
  },
  {
    name: "Orlando",
    country: "Estados Unidos",
    category: "Família",
    description: "Parques, compras, hotel e roteiro para aproveitar melhor os dias.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Lake_Eola_and_Orlando_skyline.jpg/1280px-Lake_Eola_and_Orlando_skyline.jpg",
    whatsappMessage: "Olá! Tenho interesse em uma cotação para Orlando.",
  },
  {
    name: "Europa Clássica",
    country: "Europa",
    category: "Europa",
    description: "Portugal, Espanha, Itália, França e rotas combinadas.",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80",
    whatsappMessage: "Olá! Tenho interesse em uma cotação para a Europa.",
  },
  {
    name: "Cancún",
    country: "México",
    category: "Caribe",
    description: "Resorts, mar azul, passeios e uma viagem mais leve.",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=900&q=80",
    whatsappMessage: "Olá! Tenho interesse em uma cotação para Cancún.",
  },
  {
    name: "Gramado & Canela",
    country: "Brasil",
    category: "Serra",
    description: "Clima de serra, atrações e hospedagem para casal ou família.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80",
    whatsappMessage:
      "Olá! Tenho interesse em uma cotação para Gramado e Canela.",
  },
  {
    name: "Outro destino",
    country: "Você escolhe",
    category: "Você escolhe",
    description: "Você diz o lugar; a equipe ajuda a transformar em cotação.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    whatsappMessage: "Olá! Quero uma cotação para outro destino.",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Passagens e hospedagem",
    description:
      "Opções de voo, hotel e pacote avaliadas junto com datas, localização e perfil da viagem.",
    icon: Plane,
  },
  {
    title: "Ingressos e experiências",
    description:
      "Parques, passeios e atrações entram no roteiro para você entender melhor o custo total.",
    icon: Ticket,
  },
  {
    title: "Carro, seguro e extras",
    description:
      "Aluguel de veículo, seguro viagem e detalhes práticos entram na conversa antes do embarque.",
    icon: Car,
  },
  {
    title: "Atendimento pelo WhatsApp",
    description:
      "Você conversa com uma equipe real, tira dúvidas e decide com mais segurança.",
    icon: MessageCircle,
  },
];

export const steps: StepItem[] = [
  {
    title: "Envie o ponto de partida",
    description:
      "Destino, datas, quantidade de pessoas, estilo de viagem e o que você quer evitar.",
  },
  {
    title: "Receba opções comparáveis",
    description:
      "A equipe organiza alternativas envolvendo voos, hotéis, pacotes, ingressos e extras.",
  },
  {
    title: "Tire dúvidas antes de decidir",
    description:
      "Você entende diferenças de roteiro, localização, horários e serviços antes de reservar.",
  },
  {
    title: "Confirme e siga orientado",
    description:
      "Depois da reserva, você recebe as informações principais para acompanhar os próximos passos.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Preciso saber o destino exato?",
    answer:
      "Não. Se você ainda está entre algumas opções, envie as ideias e a equipe ajuda a comparar caminhos possíveis.",
  },
  {
    question: "A cotação tem compromisso?",
    answer:
      "Não. Você conversa com a equipe, entende as opções e só avança se fizer sentido para sua viagem.",
  },
  {
    question: "Vocês montam viagens nacionais e internacionais?",
    answer:
      "Sim. A RM Partiu Viagens atende destinos no Brasil e no exterior, incluindo passagens, hospedagem, pacotes, ingressos e extras.",
  },
  {
    question: "Posso pedir só passagem ou só hotel?",
    answer:
      "Sim. Você pode pedir uma viagem completa ou apenas o serviço que falta para fechar seu plano.",
  },
];

export const tripTypeOptions = [
  "Pacote completo",
  "Passagens e hotel",
  "Família e parques",
  "Lua de mel",
  "Viagem nacional",
  "Viagem internacional",
];

export const travelerOptions = [
  "1 pessoa",
  "2 pessoas",
  "3 pessoas",
  "4 pessoas",
  "5+ pessoas",
];

export const quickDestinations = ["Orlando", "Cancún", "Europa", "Gramado"];
