import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/types";

type HeroProps = {
  content: Dictionary["hero"];
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--witt-gradient-green)] text-white">
      <Container className="py-24 text-center sm:py-32 lg:py-40">
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
    </section>
  );
}
