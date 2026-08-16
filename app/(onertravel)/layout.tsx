import { CrossBanner } from "@/components/onertravel/CrossBanner";

/**
 * Layout do grupo OnerTravel: exibe o banner de coexistência
 * ("Prefere atendimento personalizado? Fale com a RM Partiu")
 * no topo de todas as páginas da plataforma.
 */
export default function OnerTravelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Evita "flash" do tema laranja antes da hidratação nas páginas OnerTravel */}
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.dataset.mode='oner'",
        }}
      />
      <CrossBanner />
      {children}
    </>
  );
}
