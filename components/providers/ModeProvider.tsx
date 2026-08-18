"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import type { SiteMode } from "@/types";

interface ModeContextValue {
  mode: SiteMode;
  isOner: boolean;
}

const ModeContext = createContext<ModeContextValue>({ mode: "rm", isOner: false });

/**
 * O modo é derivado da rota: tudo sob /onertravel usa o tema OnerTravel,
 * o restante usa o tema Extraordinário Trip. O atributo data-mode no <html>
 * troca as variáveis CSS (ver globals.css) com transição suave.
 */
export function ModeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const mode: SiteMode = pathname.startsWith("/onertravel") ? "oner" : "rm";

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const value = useMemo(() => ({ mode, isOner: mode === "oner" }), [mode]);

  return <ModeContext.Provider value={value}>{children}</ModeContext.Provider>;
}

export function useMode() {
  return useContext(ModeContext);
}
