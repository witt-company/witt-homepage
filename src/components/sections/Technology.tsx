import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const IMAGES = [
  "https://picsum.photos/seed/witt-tech-1/1000/720",
  "https://picsum.photos/seed/witt-tech-2/1000/720",
  "https://picsum.photos/seed/witt-tech-3/1000/720",
];

type TechnologyProps = {
  content: Dictionary["technology"];
};

export function Technology({ content }: TechnologyProps) {
  return (
    <Section id="technology" tone="default">
      <Container>
        <SectionHeading title={content.heading} align="center" />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {content.features.map((feature, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={feature.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* 이미지 */}
                <div
                  className={`aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 bg-cover bg-center shadow-sm ${
                    reversed ? "lg:order-2" : ""
                  }`}
                  style={{
                    backgroundImage: `url('${IMAGES[i]}'), var(--witt-gradient-green)`,
                  }}
                />
                {/* 텍스트 */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <span className="text-sm font-semibold text-primary tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-zinc-600">
                    {feature.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
