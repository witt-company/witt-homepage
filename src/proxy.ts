import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, locales } from "@/i18n/config";

function getLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (header) {
    for (const part of header.split(",")) {
      const lang = part.split(";")[0].trim().toLowerCase();
      const base = lang.split("-")[0];
      const match = locales.find((l) => l === lang || l === base);
      if (match) return match;
    }
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasPrefix) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // api, 정적파일, 이미지, 확장자 있는 파일(favicon 등)은 제외
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
