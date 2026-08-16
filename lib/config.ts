/**
 * Configuração da integração com a plataforma OnerTravel.
 *
 * A OnerTravel é embutida no site como um widget (iframe) apontando
 * para a URL da agência na plataforma. Configure no arquivo `.env.local`:
 *
 *   NEXT_PUBLIC_ONERTRAVEL_URL=https://app.onertravel.com/extraordinariotrip/home
 *
 * Se o painel da agência tiver URLs próprias por seção, configure também:
 *
 *   NEXT_PUBLIC_ONERTRAVEL_VOOS_URL=https://app.onertravel.com/extraordinariotrip/voos
 *   NEXT_PUBLIC_ONERTRAVEL_HOTEIS_URL=https://app.onertravel.com/extraordinariotrip/hoteis
 *   NEXT_PUBLIC_ONERTRAVEL_PACOTES_URL=https://app.onertravel.com/extraordinariotrip/pacotes
 */

/** URL base da agência na OnerTravel. */
export const ONERTRAVEL_URL =
  process.env.NEXT_PUBLIC_ONERTRAVEL_URL ?? "https://app.onertravel.com/extraordinariotrip/home";

/** Deep link da seção de voos (cai na URL base se não configurado). */
export const ONERTRAVEL_VOOS_URL =
  process.env.NEXT_PUBLIC_ONERTRAVEL_VOOS_URL ?? ONERTRAVEL_URL;

/** Deep link da seção de hotéis (cai na URL base se não configurado). */
export const ONERTRAVEL_HOTEIS_URL =
  process.env.NEXT_PUBLIC_ONERTRAVEL_HOTEIS_URL ?? ONERTRAVEL_URL;

/** Deep link da seção de pacotes (cai na URL base se não configurado). */
export const ONERTRAVEL_PACOTES_URL =
  process.env.NEXT_PUBLIC_ONERTRAVEL_PACOTES_URL ?? ONERTRAVEL_URL;
