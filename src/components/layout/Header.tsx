"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { Dictionary } from "@/i18n/types";

const NAV_ITEMS: { key: keyof Dictionary["nav"]; href: string }[] = [
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "clients", href: "#clients" },
];

type HeaderProps = {
  nav: Dictionary["nav"];
  locale: string;
};

export function Header({ nav, locale }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        solid
          ? "border-b border-zinc-200 bg-white"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1">
            <Link
              href={`/${locale}`}
              aria-label="WITT"
              className="inline-block"
            >
              <Logo
                variant={solid ? "color" : "mono"}
                className={`h-7 w-auto ${solid ? "" : "text-white"}`}
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                {NAV_ITEMS.map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      className={`font-medium transition ${
                        solid
                          ? "text-zinc-600 hover:text-primary"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {nav[item.key]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <LocaleSwitcher tone={solid ? "dark" : "light"} />
              <Button
                href="#contact"
                size="sm"
                variant={solid ? "primary" : "inverse"}
              >
                {nav.contact}
              </Button>
            </div>

            <button
              type="button"
              className={`rounded-md p-2 transition md:hidden ${
                solid
                  ? "text-zinc-600 hover:bg-zinc-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <XMarkIcon className="size-6" />
              ) : (
                <Bars3Icon className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-primary"
              >
                {nav[item.key]}
              </a>
            ))}
            <div
              className="mt-3 flex items-center justify-between px-2"
              onClick={() => setOpen(false)}
            >
              <LocaleSwitcher tone="dark" />
              <Button href="#contact" size="sm">
                {nav.contact}
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
