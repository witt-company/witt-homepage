import { ContactInfo } from "@/components/layout/ContactInfo";
import type { Dictionary } from "@/i18n/types";

type FooterProps = {
  contact: Dictionary["contact"];
  footer: Dictionary["footer"];
};

export function Footer({ contact, footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              {contact.labels.info}
            </h3>
            <ContactInfo info={contact.info} />
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              {contact.labels.links}
            </h3>
            <ul className="space-y-2">
              {contact.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
          © {year} {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
