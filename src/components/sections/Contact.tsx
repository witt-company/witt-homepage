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
  "rounded-lg border border-zinc-300 bg-background px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none";

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
    <Section id="contact" tone="muted">
      <Container>
        <SectionHeading
          title={content.heading}
          subtitle={content.subtitle}
          align="center"
        />
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 grid max-w-xl gap-4"
        >
          <input
            type="text"
            required
            placeholder={content.form.name}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass}
          />
          <input
            type="email"
            required
            placeholder={content.form.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
          />
          <textarea
            required
            rows={5}
            placeholder={content.form.message}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={inputClass}
          />
          <Button type="submit" className="justify-center">
            {content.form.submit}
          </Button>
        </form>
      </Container>
    </Section>
  );
}
