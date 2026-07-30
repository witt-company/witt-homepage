import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ko: "/ko",
        en: "/en",
        "x-default": "/ko",
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${locale}`,
      locale: locale === "ko" ? "ko_KR" : "en_US",
    },
    verification: {
      google: "fq90lIjdOGDTYsOGmED9qpXaG-xEw84F7RtGB_vCatg",
      other: {
        "naver-site-verification": "bc001bc3fdd0c9e947dd3feb9c27d4369f12d536",
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col">
        <Header nav={dict.nav} locale={locale} />
        {children}
        <Footer contact={dict.contact} footer={dict.footer} />
      </body>
    </html>
  );
}
