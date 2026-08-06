type Item = { title: string; body: string };

export type Dictionary = {
  meta: { title: string; description: string };
  nav: {
    about: string;
    services: string;
    technology: string;
    clients: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    pauseLabel: string;
    playLabel: string;
  };
  about: { heading: string; items: Item[] };
  services: {
    heading: string;
    subtitle: string;
    items: Item[];
  };
  technology: { heading: string; features: Item[] };
  clients: { heading: string; subtitle: string };
  contact: {
    heading: string;
    subtitle: string;
    labels: { info: string; links: string };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
    };
    info: { phone: string; email: string; address: string };
    quickLinks: { label: string; href: string }[];
  };
  footer: { copyright: string };
};
