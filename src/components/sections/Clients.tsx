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
    <Section id="clients" tone="muted">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />
      </Container>

      {/* 마퀴: 풀블리드, hover 시 정지 */}
      <div className="group relative mt-14 overflow-hidden">
        <div className="flex w-max animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-x-16 px-8 py-4"
            >
              {partners.map((partner) => (
                <li key={partner.name} className="flex items-center">
                  {partner.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-8 w-auto grayscale transition duration-300 hover:grayscale-0"
                    />
                  ) : (
                    <span className="text-lg font-semibold whitespace-nowrap text-zinc-400">
                      {partner.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* 좌우 가장자리 페이드 (muted 배경색 zinc-50과 동일) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-zinc-50 to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-zinc-50 to-transparent sm:w-20" />
      </div>
    </Section>
  );
}
