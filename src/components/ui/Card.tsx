import type { ReactNode } from "react";

type CardProps = {
  icon?: ReactNode;
  title: string;
  body: string;
  className?: string;
};

export function Card({ icon, title, body, className }: CardProps) {
  return (
    <div
      className={[
        "flex h-full flex-col rounded-2xl border border-zinc-200 bg-background p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md sm:p-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon ? (
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
      <p className="mt-2 leading-relaxed text-zinc-600">{body}</p>
    </div>
  );
}
