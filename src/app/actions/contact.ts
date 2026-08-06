"use server";

import { resend } from "@/lib/resend";

export type ContactInput = {
  name: string;
  email: string;
  message: string;
  company?: string; // 허니팟 (봇 전용)
};

export async function sendContact(
  input: ContactInput,
): Promise<{ ok: boolean }> {
  // 허니팟이 채워졌으면 봇 → 조용히 성공 처리
  if (input.company) return { ok: true };

  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  if (!name || !email || !message) return { ok: false };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false };

  const { error } = await resend.emails.send({
    from: "WITT 홈페이지 <noreply@witt.it.kr>",
    to: ["witt.tour@gmail.com"],
    replyTo: email, // 받은 메일에서 바로 '답장'하면 문의자에게 감
    subject: `[WITT 문의] ${name}`,
    text: `이름: ${name}\n이메일: ${email}\n\n${message}`,
  });

  return { ok: !error };
}
