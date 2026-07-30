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
  tone?: "dark" | "light";
};

export function LocaleSwitcher({ tone = "dark" }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const current = pathname.split("/")[1];

  const activeClass = tone === "light" ? "text-white" : "text-primary";
  const idleClass =
    tone === "light"
      ? "text-white/60 hover:text-white"
      : "text-zinc-500 hover:text-primary";
  const sep = tone === "light" ? "text-white/40" : "text-zinc-300";

  return (
    <div className="flex items-center gap-2 text-sm font-semibold">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-2">
          {i > 0 ? <span className={sep}>/</span> : null}
          <Link
            href={switchLocalePath(pathname, locale)}
            scroll={false}
            aria-current={locale === current ? "true" : undefined}
            className={locale === current ? activeClass : idleClass}
          >
            {locale.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
