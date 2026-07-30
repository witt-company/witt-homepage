type Item = { title: string; body: string };

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    technology: string;
    research: string;
    contact: string;
  };
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  about: { heading: string; items: Item[] };
  services: { heading: string; subtitle: string; items: Item[] };
  technology: { heading: string; features: Item[] };
  research: { heading: string; subtitle: string; areas: Item[] };
  contact: {
    heading: string;
    subtitle: string;
    cta: string;
    info: { phone: string; email: string; address: string };
    quickLinks: { label: string; href: string }[];
  };
  footer: { copyright: string };
};
