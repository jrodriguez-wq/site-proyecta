import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.RESEND_CONTACT_EMAIL ?? "admin@proyectafl.com";
const FROM_EMAIL = "Proyecta Web <noreply@proyectafl.com>";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
};

const validateBody = (body: unknown): { ok: true; data: ContactBody } | { ok: false; error: string } => {
  if (typeof body !== "object" || body === null) {
    return { ok: false, error: "Invalid request body" };
  }
  const b = body as Record<string, unknown>;
  const name = typeof b.name === "string" ? b.name.trim() : "";
  const email = typeof b.email === "string" ? b.email.trim() : "";
  const phone = typeof b.phone === "string" ? b.phone.trim() : "";
  const interest = typeof b.interest === "string" ? b.interest.trim() : "";

  if (!name) return { ok: false, error: "Name is required" };
  if (!email) return { ok: false, error: "Email is required" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { ok: false, error: "Invalid email" };
  if (!phone) return { ok: false, error: "Phone is required" };
  if (!interest) return { ok: false, error: "Interest is required" };

  return { ok: true, data: { name, email, phone, interest } };
};

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const validated = validateBody(body);
  if (!validated.ok) {
    return NextResponse.json(
      { error: validated.error },
      { status: 400 }
    );
  }

  const { name, email, phone, interest } = validated.data;
  const nameStr = name ?? "";
  const emailStr = email ?? "";
  const phoneStr = phone ?? "";
  const interestStr = interest ?? "";

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(nameStr)}</p>
    <p><strong>Email:</strong> ${escapeHtml(emailStr)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneStr)}</p>
    <p><strong>What interests you:</strong></p>
    <p>${escapeHtml(interestStr)}</p>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: CONTACT_EMAIL,
    replyTo: emailStr,
    subject: `Contact form: ${escapeHtml(nameStr)}`,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
