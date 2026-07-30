import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section">;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={["py-20 sm:py-28", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
