"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

export type CardData = {
  src: string;
  title: string;
  category?: string;
};

export function Carousel({ items }: { items: React.ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const check = () => {
    const el = ref.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 0);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  };

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const el = ref.current;
      if (!el) return;
      setCanLeft(el.scrollLeft > 0);
      setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const by = (dir: number) =>
    ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div
        ref={ref}
        onScroll={check}
        className="flex snap-x snap-mandatory scroll-pl-4 [scrollbar-width:none] gap-4 overflow-x-scroll scroll-smooth py-6 pl-4 sm:scroll-pl-6 sm:pl-6 lg:scroll-pl-8 lg:pl-8 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div key={i} className="shrink-0 last:pr-4 sm:last:pr-6 lg:last:pr-8">
            {item}
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-end gap-2 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => by(-1)}
          disabled={!canLeft}
          aria-label="이전"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 transition hover:bg-zinc-200 disabled:opacity-40"
        >
          <ArrowLongLeftIcon className="h-6 w-6 text-zinc-600" />
        </button>
        <button
          type="button"
          onClick={() => by(1)}
          disabled={!canRight}
          aria-label="다음"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 transition hover:bg-zinc-200 disabled:opacity-40"
        >
          <ArrowLongRightIcon className="h-6 w-6 text-zinc-600" />
        </button>
      </div>
    </div>
  );
}

export function Card({ card }: { card: CardData }) {
  return (
    <div className="group relative flex h-80 w-56 flex-col items-start justify-start overflow-hidden rounded-3xl bg-zinc-100 md:h-[40rem] md:w-96">
      {/* 상단 그라디언트 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
      {/* 텍스트 (상단) */}
      <div className="relative z-40 p-8">
        {card.category ? (
          <p className="text-left text-sm font-medium text-white/90 md:text-base">
            {card.category}
          </p>
        ) : null}
        <p className="mt-2 max-w-xs text-left text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
          {card.title}
        </p>
      </div>
      {/* 이미지 (hover 확대) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
    </div>
  );
}
