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
    <div className="relative w-full">
      <div
        ref={ref}
        onScroll={check}
        className="flex w-full snap-x snap-mandatory [scrollbar-width:none] overflow-x-scroll scroll-smooth py-6 [&::-webkit-scrollbar]:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-row justify-start gap-4 px-4 sm:px-6 lg:px-8">
          {items.map((item, i) => (
            <div key={i} className="shrink-0 snap-start last:pr-4 md:last:pr-6">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-2 flex max-w-7xl justify-end gap-2 px-4 sm:px-6 lg:px-8">
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
    <div className="group relative flex h-80 w-56 flex-col items-start justify-end overflow-hidden rounded-3xl md:h-[36rem] md:w-96">
      {/* 이미지 (hover 시 확대) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      {/* 스크림 */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* 텍스트 */}
      <div className="relative z-30 p-6 text-left md:p-8">
        {card.category ? (
          <p className="text-sm font-medium text-white/80">{card.category}</p>
        ) : null}
        <p className="mt-1 max-w-xs text-lg font-semibold [text-wrap:balance] text-white md:text-2xl">
          {card.title}
        </p>
      </div>
    </div>
  );
}
