import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";

type HeroProps = {
  content: Dictionary["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden">
      {/* 배경 — 나중에 실제 사진으로 교체 (public/images/hero.jpg) */}
      <div className="absolute inset-0 -z-20 bg-[image:var(--witt-gradient-green)]" />
      <div className="absolute inset-0 -z-10 bg-black/40" />

      <Container className="py-24 text-center text-white">
        <p className="text-base font-semibold tracking-wide text-white/80 sm:text-lg">
          {content.eyebrow}
        </p>
        <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          {content.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          {content.subtitle}
        </p>
        <div className="mt-10">
          <Button href="#services" variant="inverse">
            {content.cta}
          </Button>
        </div>
      </Container>

      {/* 스크롤 인디케이터 */}
      <a
        href="#about"
        aria-label="아래로 스크롤"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 transition hover:text-white"
      >
        <ChevronDownIcon className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
