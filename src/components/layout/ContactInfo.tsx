import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

import type { Dictionary } from "@/i18n/types";

type ContactInfoProps = {
  info: Dictionary["contact"]["info"];
};

export function ContactInfo({ info }: ContactInfoProps) {
  return (
    <ul className="space-y-3 text-zinc-300">
      <li className="flex items-center gap-3">
        <PhoneIcon className="h-5 w-5 shrink-0 text-teal-400" />
        <a
          href={`tel:${info.phone.replace(/[^0-9+]/g, "")}`}
          className="hover:text-white"
        >
          {info.phone}
        </a>
      </li>
      <li className="flex items-center gap-3">
        <EnvelopeIcon className="h-5 w-5 shrink-0 text-teal-400" />
        <a href={`mailto:${info.email}`} className="hover:text-white">
          {info.email}
        </a>
      </li>
      <li className="flex items-start gap-3">
        <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
        <span>{info.address}</span>
      </li>
    </ul>
  );
}
