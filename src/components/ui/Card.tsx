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
        "rounded-xl border border-zinc-200 bg-background p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon ? <div className="mb-4 text-primary">{icon}</div> : null}
      <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
      <p className="mt-3 leading-relaxed text-zinc-600">{body}</p>
    </div>
  );
}
