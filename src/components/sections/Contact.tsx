"use client";

import { ComponentProps, useState } from "react";

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

  const handleSubmit: NonNullable<ComponentProps<"form">["onSubmit"]> = (e) => {
    e.preventDefault();
    const subject = `[WITT] ${name || email}`;
    const body = `${message}\n\n---\n${name} <${email}>`;
    window.location.href = `mailto:${content.info.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
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
          className="mx-auto mt-12 max-w-xl rounded-2xl border border-zinc-200 bg-background p-6 shadow-sm sm:p-8"
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
            <Button type="submit" className="w-full">
              {content.form.submit}
            </Button>
          </div>
        </form>
      </Container>
    </Section>
  );
}
