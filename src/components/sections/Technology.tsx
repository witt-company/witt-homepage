import { Container } from "@/components/ui/Container";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

type TechnologyProps = {
  content: Dictionary["technology"];
};

export function Technology({ content }: TechnologyProps) {
  return (
    <Section id="technology" tone="default">
      <Container>
        <SectionHeading title={content.heading} align="center" />
        <div className="mx-auto mt-12 grid max-w-3xl gap-8">
          {content.features.map((feature) => (
            <FeatureItem
              key={feature.title}
              title={feature.title}
              body={feature.body}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
