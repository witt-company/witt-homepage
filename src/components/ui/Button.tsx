import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-strong",
  secondary:
    "border border-primary text-primary hover:bg-primary hover:text-white",
};

type ButtonProps = { variant?: Variant; children: ReactNode } & (
  ComponentProps<"button"> | (ComponentProps<"a"> & { href: string })
);

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [base, variants[variant], className]
    .filter(Boolean)
    .join(" ");

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(props as ComponentProps<"button">)}
    >
      {children}
    </button>
  );
}
