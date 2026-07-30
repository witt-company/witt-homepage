import { notFound } from "next/navigation";

import { Logo } from "@/components/ui/Logo";
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
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium tracking-wide text-zinc-500">
        {dict.hero.eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {dict.hero.title}
      </h1>
    </main>
  );
}
