import { ContactInfo } from "@/components/layout/ContactInfo";
import { Logo } from "@/components/ui/Logo";
import type { Dictionary } from "@/i18n/types";

type FooterProps = {
  contact: Dictionary["contact"];
  footer: Dictionary["footer"];
};

export function Footer({ contact, footer }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a3b34] text-gray-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-gray-700 pb-10 md:grid-cols-3">
          {/* 브랜드 */}
          <div>
            <Logo variant="mono" className="h-7 w-auto text-white" />
            <p className="mt-4 text-sm tracking-wide text-gray-400">
              SMART ENERGY IT SOLUTIONS
            </p>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-teal-400">
              {contact.labels.info}
            </h3>
            <ContactInfo info={contact.info} />
          </div>

          {/* 바로 가기 */}
          <div>
            <h3 className="mb-4 text-base font-semibold text-teal-400">
              {contact.labels.links}
            </h3>
            <ul className="space-y-2">
              {contact.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          © {year} {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
