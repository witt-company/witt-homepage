export type Partner = {
  name: string;
  logo?: string; // 예: "/logos/partners/example.svg" (public/ 기준)
  href?: string;
};

// placeholder — 실제 고객사 로고를 public/logos/partners/ 에 넣고 아래를 교체
export const partners: Partner[] = [
  { name: "Client 1" },
  { name: "Client 2" },
  { name: "Client 3" },
  { name: "Client 4" },
  { name: "Client 5" },
  { name: "Client 6" },
];
