import {
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const ICONS = [PaintBrushIcon, ServerIcon, ClipboardDocumentListIcon];

type ServicesProps = {
  content: Dictionary["services"];
};

export function Services({ content }: ServicesProps) {
  return (
    <Section id="services" tone="muted">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Card
                key={item.title}
                icon={<Icon className="h-8 w-8" />}
                title={item.title}
                body={item.body}
              />
            );
          })}
        </div>

        {/* 차별화 기술 강점 (기존 Technology 흡수) */}
        <div className="mt-20">
          <h3 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            {content.strengthsTitle}
          </h3>
          <div className="mx-auto mt-10 grid max-w-3xl gap-8">
            {content.strengths.map((s) => (
              <FeatureItem key={s.title} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
