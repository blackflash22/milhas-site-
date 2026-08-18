import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "@/components/providers/ModeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://extraordinariotrip.com.br"),
  title: {
    default: "Extraordinário Trip | Cotação de Viagens Nacionais e Internacionais",
    template: "%s | Extraordinário Trip",
  },
  description:
    "Excelência em cada destino. Cotações sem compromisso para Brasil e exterior com atendimento humano pelo WhatsApp — ou busque e reserve online pela OnerTravel.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Extraordinário Trip",
    title: "Extraordinário Trip | Cotação de Viagens Nacionais e Internacionais",
    description:
      "Cotações sem compromisso, atendimento humano e busca online pela OnerTravel. Brasil e exterior.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Asa de avião durante o pôr do sol",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-mode="rm">
      <body className={`${inter.variable} font-sans`}>
        <ModeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ModeProvider>
      </body>
    </html>
  );
}
