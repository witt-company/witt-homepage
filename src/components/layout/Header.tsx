"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Logo } from "@/components/ui/Logo";
import type { Dictionary } from "@/i18n/types";

const NAV_ITEMS: { key: keyof Dictionary["nav"]; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "clients", href: "#clients" },
  { key: "contact", href: "#contact" },
];

type HeaderProps = {
  nav: Dictionary["nav"];
  locale: string;
};

export function Header({ nav, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} aria-label="WITT" className="shrink-0">
          <Logo className="h-7 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-semibold text-zinc-700 transition-colors hover:text-primary"
            >
              {nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LocaleSwitcher />
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <XMarkIcon className="h-6 w-6 text-zinc-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-zinc-700" />
          )}
        </button>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base font-semibold text-zinc-700 hover:bg-zinc-50 hover:text-primary"
              >
                {nav[item.key]}
              </a>
            ))}
            <div className="mt-2 px-2">
              <LocaleSwitcher onNavigate={() => setOpen(false)} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
