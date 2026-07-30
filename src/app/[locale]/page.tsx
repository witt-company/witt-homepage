import { notFound } from "next/navigation";

import { Hero } from "@/components/sections/Hero";
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
    </main>
  );
}
