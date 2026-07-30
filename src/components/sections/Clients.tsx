import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { partners } from "@/data/partners";
import type { Dictionary } from "@/i18n/types";

type ClientsProps = {
  content: Dictionary["clients"];
};

export function Clients({ content }: ClientsProps) {
  return (
    <Section id="clients" tone="default">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <li
              key={partner.name}
              className="flex h-24 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-center text-sm font-semibold text-zinc-400"
            >
              {partner.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto"
                />
              ) : (
                partner.name
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
