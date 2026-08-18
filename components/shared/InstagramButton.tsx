"use client";

import { cn } from "@/lib/utils";

interface InstagramButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

/**
 * Botão do Instagram com o gradiente oficial e animação no hover.
 * Adaptado para Tailwind CSS (sem styled-components).
 */
export function InstagramButton({
  href = "https://www.instagram.com/extraordinariotrip?igsh=dmtyZTJmaDBnanAx&utm_source=qr",
  label = "Instagram oficial da Extraordinário Trip",
  className,
}: InstagramButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex h-[45px] w-[45px] items-center justify-center rounded-[7px]",
        className
      )}
    >
      <span className="flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-[4px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)]">
        <svg
          fill="white"
          viewBox="0 0 448 512"
          height="1.5em"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </span>
      <span
        className="absolute inset-0 -z-10 rounded-[9px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] transition-transform duration-300 group-hover:rotate-[35deg] group-hover:origin-bottom"
        aria-hidden
      />
    </a>
  );
}
