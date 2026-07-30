import { ContactInfo } from "@/components/layout/ContactInfo";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";

type FooterProps = {
  contact: Dictionary["contact"];
  footer: Dictionary["footer"];
};

export function Footer({ contact, footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {contact.heading}
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            {contact.subtitle}
          </p>
          <Button href={`mailto:${contact.info.email}`} className="mt-8">
            {contact.cta}
          </Button>
        </div>

        <div className="mt-14 grid gap-10 border-t border-zinc-800 pt-10 sm:grid-cols-2">
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
