import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const IMAGES = [
  "https://picsum.photos/seed/witt-tech-1/900/1200",
  "https://picsum.photos/seed/witt-tech-2/900/1200",
  "https://picsum.photos/seed/witt-tech-3/900/1200",
];

type TechnologyProps = {
  content: Dictionary["technology"];
};

export function Technology({ content }: TechnologyProps) {
  const cards = content.features.map((feature, index) => (
    <Card
      key={feature.title}
      card={{ src: IMAGES[index % IMAGES.length], title: feature.title }}
    />
  ));

  return (
    <Section id="technology" tone="default">
      <Container>
        <SectionHeading title={content.heading} align="center" />
      </Container>
      <Carousel items={cards} />
    </Section>
  );
}
