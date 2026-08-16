import Link from "next/link";
import { Plane } from "lucide-react";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { navLinks } from "@/components/layout/nav-links";

/**
 * Navbar fixa com logo RM Partiu, links âncora,
 * Instagram, CTA de cotação e menu hamburger no mobile.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/85 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="RM Partiu Viagens — página inicial"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Plane className="h-5 w-5" aria-hidden />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold sm:text-base">
              RM Partiu Viagens
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              agência de viagens
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <InstagramButton className="hidden sm:inline-flex" />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#cotacao">Pedir cotação</Link>
          </Button>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>

    </header>
  );
}
