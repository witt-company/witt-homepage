import {
  CircleStackIcon,
  CpuChipIcon,
  MapIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const ICONS = [CpuChipIcon, CircleStackIcon, MapIcon, ShieldCheckIcon];

type ResearchProps = {
  content: Dictionary["research"];
};

export function Research({ content }: ResearchProps) {
  return (
    <Section id="research" tone="muted">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {content.areas.map((area, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Card
                key={area.title}
                icon={<Icon className="h-8 w-8" />}
                title={area.title}
                body={area.body}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
