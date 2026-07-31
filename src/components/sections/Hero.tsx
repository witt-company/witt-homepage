import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { HeroBackground } from "@/components/sections/HeroBackground";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";

type HeroProps = {
  content: Dictionary["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative -mt-16 flex min-h-svh flex-col justify-end overflow-hidden">
      <HeroBackground
        pauseLabel={content.pauseLabel}
        playLabel={content.playLabel}
      />

      <Container className="relative z-10 pb-32 text-white sm:pb-36">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {content.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          {content.subtitle}
        </p>
      </Container>

      {/* 스크롤 힌트: 하단 중앙 (컨트롤보다 아래 줄) */}
      <a
        href="#about"
        aria-label="아래로 스크롤"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition hover:text-white"
      >
        <ChevronDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
