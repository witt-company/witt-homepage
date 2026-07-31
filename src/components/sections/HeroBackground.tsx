"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";

import { Container } from "@/components/ui/Container";

type HeroBackgroundProps = {
  pauseLabel: string;
  playLabel: string;
};

export function HeroBackground({ pauseLabel, playLabel }: HeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fillRef = useRef<HTMLDivElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);

  // 모션 허용 + 데이터 절약 아님이면 로드 (모바일 포함)
  useEffect(() => {
    const decide = () => {
      const okMotion = !window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;
      const conn = (
        navigator as Navigator & { connection?: { saveData?: boolean } }
      ).connection;
      setShowVideo(okMotion && conn?.saveData !== true);
    };
    const raf = requestAnimationFrame(decide);
    return () => cancelAnimationFrame(raf);
  }, []);

  // 모바일 자동재생 안정화: React가 muted를 DOM 프로퍼티로 확실히 안 넣는 이슈 대비
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const p = v.play();
    if (p) p.catch(() => {});
  }, [showVideo]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 1) 폴백 그라디언트 */}
      <div className="absolute inset-0 bg-[image:var(--witt-gradient-green)]" />

      {/* 2) 포스터 (LCP) */}
      <Image
        src="/images/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* 3) 배경 영상 */}
      {showVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          onTimeUpdate={(e) => {
            const fill = fillRef.current;
            const v = e.currentTarget;
            if (fill && v.duration) {
              fill.style.transform = `scaleX(${v.currentTime / v.duration})`;
            }
          }}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* 4) 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 5) 재생/일시정지 + 프로그레스 */}
      {showVideo && ready && (
        <div className="absolute inset-x-0 bottom-16 z-20">
          <Container>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggle}
                aria-label={playing ? pauseLabel : playLabel}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:outline-none"
              >
                {playing ? (
                  <PauseIcon className="h-5 w-5" />
                ) : (
                  <PlayIcon className="h-5 w-5" />
                )}
              </button>
              <div className="h-0.5 w-28 overflow-hidden rounded-full bg-white/30 sm:w-40">
                <div
                  ref={fillRef}
                  className="h-full w-full origin-left bg-white transition-transform duration-200 ease-linear"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
