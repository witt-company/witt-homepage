"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const IMAGES = [
  "/images/about/mission.jpg",
  "/images/about/vision.jpg",
  "/images/about/value.jpg",
];

type AboutProps = {
  content: Dictionary["about"];
};

export function About({ content }: AboutProps) {
  const [active, setActive] = useState(0);

  return (
    <Section id="about" tone="default">
      <Container>
        <SectionHeading title={content.heading} align="center" />

        <div className="mt-12 flex flex-col gap-4 md:h-[420px] md:flex-row">
          {content.items.map((item, i) => {
            const isActive = active === i;
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                style={{
                  backgroundImage: `url('${IMAGES[i]}'), var(--witt-gradient-green)`,
                }}
                className={`group relative min-h-[220px] overflow-hidden rounded-2xl bg-cover bg-center text-left transition-all duration-500 ease-out md:min-h-0 ${
                  isActive ? "md:flex-[3]" : "md:flex-[1]"
                }`}
              >
                {/* 어두운 오버레이 (음수 z 없이) */}
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
                {/* 콘텐츠 (오버레이 위) */}
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p
                    className={`mt-2 max-w-md leading-relaxed text-white/85 transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-100 md:opacity-0"
                    }`}
                  >
                    {item.body}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
