import { notFound } from "next/navigation";

import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Technology } from "@/components/sections/Technology";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <main className="flex-1">
      <Hero content={dict.hero} />
      <About content={dict.about} />
      <Services content={dict.services} />
      <Technology content={dict.technology} />
      {/*<Clients content={dict.clients} />*/}
      <Contact content={dict.contact} />
    </main>
  );
}
