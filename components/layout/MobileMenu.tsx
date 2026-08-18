"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { InstagramButton } from "@/components/shared/InstagramButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { navLinks } from "@/components/layout/nav-links";

/** Menu hamburger para mobile. */
export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-left">Extraordinário Trip</SheetTitle>
        </SheetHeader>

        <nav aria-label="Menu mobile" className="mt-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Separator className="my-4" />

        <div className="flex flex-col gap-4">
          <WhatsAppButton
            message="Olá! Vim pelo site e quero uma cotação de viagem. Destino: __. Datas: __. Pessoas: __."
            onClick={() => setOpen(false)}
          >
            Pedir cotação
          </WhatsAppButton>
          <a
            href="https://www.instagram.com/rmpartiuviagens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-md text-sm font-medium hover:underline"
          >
              <InstagramButton label="Instagram da Extraordinário Trip" />
            Instagram
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
