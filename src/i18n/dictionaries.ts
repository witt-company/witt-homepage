import "server-only";

import type { Locale } from "@/i18n/config";

const dictionaries = {
  ko: () => import("@/i18n/dictionaries/ko.json").then((m) => m.default),
  en: () => import("@/i18n/dictionaries/en.json").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
