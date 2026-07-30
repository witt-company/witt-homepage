type Item = { title: string; body: string };

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    clients: string;
    contact: string;
  };
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  about: { heading: string; items: Item[] };
  services: {
    heading: string;
    subtitle: string;
    items: Item[];
    strengthsTitle: string;
    strengths: Item[];
  };
  clients: { heading: string; subtitle: string };
  contact: {
    heading: string;
    subtitle: string;
    cta: string;
    labels: { info: string; links: string };
    info: { phone: string; email: string; address: string };
    quickLinks: { label: string; href: string }[];
  };
  footer: { copyright: string };
};
