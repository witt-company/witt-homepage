import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section"> & {
  tone?: "default" | "muted";
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  default: "bg-background",
  muted: "bg-zinc-50",
};

export function Section({
                          tone = "default",
                          className,
                          ...props
                        }: SectionProps) {
  return (
    <section
      className={["py-20 sm:py-28", toneClass[tone], className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
