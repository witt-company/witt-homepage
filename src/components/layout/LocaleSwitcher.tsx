"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { locales } from "@/i18n/config";

function switchLocalePath(pathname: string, target: string): string {
  const segments = pathname.split("/");
  segments[1] = target; // 첫 세그먼트가 로케일
  return segments.join("/") || "/";
}

type LocaleSwitcherProps = {
  onNavigate?: () => void;
};

export function LocaleSwitcher({ onNavigate }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const current = pathname.split("/")[1];

  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 ? <span className="text-zinc-300">/</span> : null}
          <Link
            href={switchLocalePath(pathname, locale)}
            scroll={false}
            onClick={onNavigate}
            aria-current={locale === current ? "true" : undefined}
            className={
              locale === current
                ? "text-primary"
                : "text-zinc-500 hover:text-primary"
            }
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
