import {
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

const ICONS = [CodeBracketIcon, RocketLaunchIcon, LightBulbIcon];

type AboutProps = {
  content: Dictionary["about"];
};

export function About({ content }: AboutProps) {
  return (
    <Section id="about" tone="default">
      <Container>
        <SectionHeading title={content.heading} align="center" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
