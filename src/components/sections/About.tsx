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

        <div className="mt-12 flex h-[520px] flex-col gap-4 md:h-[420px] md:flex-row">
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
                className={`group relative overflow-hidden rounded-2xl bg-cover bg-center text-left transition-all duration-500 ease-out ${
                  isActive ? "flex-[3]" : "flex-[1]"
                }`}
              >
                <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40" />
                <div className="relative flex h-full flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <div
                    className={`grid transition-all duration-300 ${
                      isActive
                        ? "mt-2 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="max-w-md overflow-hidden leading-relaxed text-white/85">
                      {item.body}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
