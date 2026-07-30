import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={["mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
