"use client";

import { ComponentProps, useState } from "react";
import { toast } from "sonner";

import { sendContact } from "@/app/actions/contact";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary } from "@/i18n/types";

type ContactProps = {
  content: Dictionary["contact"];
};

const inputClass =
  "w-full rounded-lg border border-zinc-300 bg-background px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none";

export function Contact({ content }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // 허니팟
  const [pending, setPending] = useState(false);

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = async (
    e,
  ) => {
    e.preventDefault();
    if (pending) return;
    setPending(true);
    try {
      const result = await sendContact({ name, email, message, company });
      if (result.ok) {
        toast.success(content.form.success);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(content.form.error);
      }
    } catch {
      toast.error(content.form.error);
    } finally {
      setPending(false);
    }
  };

  return (
    <Section id="contact" tone="default">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-xl rounded-2xl border border-zinc-200 bg-background p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-4">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                {content.form.name}
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={content.form.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                {content.form.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={content.form.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">
                {content.form.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder={content.form.message}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={inputClass}
              />
            </div>

            {/* 허니팟: 사용자에겐 숨김, 봇만 채움 */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="hidden"
            />

            <Button
              type="submit"
              disabled={pending}
              className="w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? content.form.sending : content.form.submit}
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
