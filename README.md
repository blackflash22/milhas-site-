# Extraordinário Trip + OnerTravel

Website completo da agência **Extraordinário Trip** com a plataforma de busca e reserva online **OnerTravel** coexistindo no mesmo projeto.

- **Modo Consultivo (Extraordinário Trip)** — tema azul `#1a6fb3`: cotação humana via WhatsApp, sem compromisso.
- **Modo Autônomo (OnerTravel)** — tema azul `#1a6fb3`: busca de voos, hotéis e pacotes com comparação de preços e reserva online.

## Stack

- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (componentes em `components/ui`)
- Framer Motion (animações de entrada) + Lucide React (ícones)
- `next/font` com Inter

## Como rodar

```bash
npm install
cp .env.example .env.local   # configure a URL da sua agência na OnerTravel
npm run dev
```

Acesse http://localhost:3000

Build de produção:

```bash
npm run build
npm run start
```

## Rotas

| Rota                    | Descrição                                          |
| ----------------------- | -------------------------------------------------- |
| `/`                     | Homepage Extraordinário Trip (modo consultivo)     |
| `/onertravel`           | Dashboard da plataforma OnerTravel                 |
| `/onertravel/voos`      | Resultados de voos (filtros, ordenação)            |
| `/onertravel/hoteis`    | Resultados de hotéis                               |
| `/onertravel/pacotes`   | Pacotes voo + hotel                                |

As páginas de resultados aceitam query string: `?origem=GRU&destino=CUN&ida=2026-10-10&volta=2026-10-17&pax=2&classe=Econômica`.

## Como funciona a coexistência dos modos

- O tema é controlado pelo atributo `data-mode` no `<html>` (`components/providers/ModeProvider.tsx`), que troca as variáveis CSS em `app/globals.css` com transição de 300ms.
- Banner cruzado (`components/onertravel/CrossBanner.tsx`): no modo principal sugere a busca online; no modo OnerTravel sugere o atendimento humano.
- Footer e contatos são compartilhados nos dois modos.
- A "reserva" da OnerTravel é finalizada com confirmação da equipe via WhatsApp, conectando os dois mundos.

## Estrutura

```
app/
├── layout.tsx / page.tsx / globals.css
├── (onertravel)/
│   ├── layout.tsx
│   └── onertravel/{page,voos,hoteis,pacotes}
components/
├── ui/            # shadcn/ui
├── layout/        # Navbar, Footer, MobileMenu
├── sections/      # Hero, QuoteForm, TripTypes, Destinations, Services,
│                  # MidCTA, HowItWorks, FAQ, FinalCTA
├── onertravel/    # SearchForm, ResultsList, ResultCard, FilterSidebar,
│                  # ResultDetailDialog, Breadcrumb, CrossBanner
├── providers/     # ModeProvider
└── shared/        # Reveal, SectionHeading, WhatsAppButton, InstagramButton
hooks/             # useScrollAnimation, useSearch
lib/               # utils, data (mocks determinísticos), search
types/             # Tipos TypeScript do projeto
```

## Notas

- Os resultados da OnerTravel são **mockados de forma determinística** (`lib/data.ts`): a mesma busca sempre retorna os mesmos voos/hotéis/pacotes.
- O formulário de cotação monta a mensagem e abre o WhatsApp oficial da agência.
- Imagens servidas por Unsplash/Wikimedia com `next/image` e lazy loading.
