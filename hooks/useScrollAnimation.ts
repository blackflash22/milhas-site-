"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observa quando o elemento entra na viewport e retorna `visible = true`
 * (uma única vez). Alternativa leve ao Framer Motion para reveals simples.
 */
export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "-60px"
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respeita usuários que preferem menos movimento
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, visible };
}
