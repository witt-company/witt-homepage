import {
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  ServerIcon,
} from "@heroicons/react/24/solid";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
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
      </Container>
    </Section>
  );
}
