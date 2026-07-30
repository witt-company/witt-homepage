import { CheckCircleIcon } from "@heroicons/react/24/solid";

type FeatureItemProps = {
  title: string;
  body: string;
};

export function FeatureItem({ title, body }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
      <div>
        <h4 className="text-base font-semibold text-zinc-900">{title}</h4>
        <p className="mt-1 leading-relaxed text-zinc-600">{body}</p>
      </div>
    </div>
  );
}
