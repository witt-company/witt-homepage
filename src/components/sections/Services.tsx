"use client";

import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const IMAGES = [
  "/images/services/design.jpg",
  "/images/services/development.jpg",
  "/images/services/planning.jpg",
];

type ServicesProps = {
  content: Dictionary["services"];
};

export function Services({ content }: ServicesProps) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    const nodes = itemRefs.current.filter(Boolean) as HTMLElement[];
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    itemRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section id="services" tone="muted">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          {/* 좌: 고정 목차 (데스크톱) */}
          <nav
            aria-label={content.heading}
            className="hidden lg:sticky lg:top-28 lg:block lg:self-start"
          >
            <ol className="space-y-1">
              {content.items.map((item, i) => {
                const isActive = active === i;
                return (
                  <li key={item.title}>
                    <button
                      type="button"
                      onClick={() => scrollToIndex(i)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex w-full items-start gap-4 border-l-2 py-3 pr-2 pl-4 text-left transition-colors ${
                        isActive
                          ? "border-primary text-primary"
                          : "border-zinc-200 text-zinc-500 hover:border-zinc-400 hover:text-zinc-800"
                      }`}
                    >
                      <span className="pt-0.5 text-sm font-semibold tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold">
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          {/* 우: 스크롤 블록 */}
          <div className="space-y-16 lg:space-y-28">
            {content.items.map((item, i) => (
              <article
                key={item.title}
                data-index={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="scroll-mt-28"
              >
                <div
                  className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-cover bg-center shadow-sm"
                  style={{
                    backgroundImage: `url('${IMAGES[i]}'), var(--witt-gradient-green)`,
                  }}
                />
                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-primary tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-xl leading-relaxed text-zinc-600">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
