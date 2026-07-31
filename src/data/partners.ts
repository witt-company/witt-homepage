export type Partner = {
  name: string;
  logo?: string; // public/ 기준 경로
  href?: string;
};

export const partners: Partner[] = [
  { name: "KEPCO", logo: "/logos/partners/partners_kepco.svg" },
  { name: "KEPRI", logo: "/logos/partners/partners_kepri.svg" },
  { name: "KDN", logo: "/logos/partners/partners_kdn.svg" },
  { name: "TTA", logo: "/logos/partners/partners_tta.svg" },
  { name: "KSGI", logo: "/logos/partners/partners_ksgi.svg" },
  { name: "Nuriflex", logo: "/logos/partners/partners_nuriflex.svg" },
  { name: "TIDE", logo: "/logos/partners/partners_tide.svg" },
  { name: "Songam", logo: "/logos/partners/partners_songam.svg" },
  { name: "TBIT", logo: "/logos/partners/partners_tbit.svg" },
];
