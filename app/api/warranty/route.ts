import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = process.env.RESEND_CONTACT_EMAIL ?? "admin@proyectafl.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "Proyecta Web <noreply@admin.proyectafl.com>";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

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

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Warranty service is not configured" },
      { status: 500 }
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 }
    );
  }

  const city = (formData.get("city") as string)?.trim() ?? "";
  const propertyAddress = (formData.get("propertyAddress") as string)?.trim() ?? "";
  const firstName = (formData.get("firstName") as string)?.trim() ?? "";
  const lastName = (formData.get("lastName") as string)?.trim() ?? "";
  const phone = (formData.get("phone") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const languagePreference = (formData.get("languagePreference") as string)?.trim() || "English";
  const problemDescription = (formData.get("problemDescription") as string)?.trim() ?? "";
  const categories = formData.getAll("category") as string[];

  if (!city) return NextResponse.json({ error: "City is required" }, { status: 400 });
  if (!propertyAddress) return NextResponse.json({ error: "Property address is required" }, { status: 400 });
  if (!firstName) return NextResponse.json({ error: "First name is required" }, { status: 400 });
  if (!lastName) return NextResponse.json({ error: "Last name is required" }, { status: 400 });
  if (!phone) return NextResponse.json({ error: "Phone is required" }, { status: 400 });
  if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  if (!problemDescription) return NextResponse.json({ error: "Problem description is required" }, { status: 400 });
  if (!categories.length) return NextResponse.json({ error: "Please select at least one category" }, { status: 400 });

  const photoFile = formData.get("problemPhoto") as File | null;
  let attachment: { filename: string; content: Buffer } | undefined;

  if (photoFile && photoFile.size > 0) {
    if (photoFile.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "Photo must be 10MB or smaller" },
        { status: 400 }
      );
    }
    if (!ALLOWED_TYPES.includes(photoFile.type)) {
      return NextResponse.json(
        { error: "Photo must be JPG, PNG, or WebP" },
        { status: 400 }
      );
    }
    const arrayBuffer = await photoFile.arrayBuffer();
    attachment = {
      filename: photoFile.name || "problem-photo.jpg",
      content: Buffer.from(arrayBuffer),
    };
  }

  const categoriesList = categories.length ? categories.join(", ") : "—";
  const html = `
    <h2>New warranty claim</h2>
    <p><strong>City:</strong> ${escapeHtml(city)}</p>
    <p><strong>Property address:</strong> ${escapeHtml(propertyAddress)}</p>
    <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
    <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Language preference:</strong> ${escapeHtml(languagePreference)}</p>
    <p><strong>Category/categories:</strong> ${escapeHtml(categoriesList)}</p>
    <p><strong>Problem description:</strong></p>
    <p>${escapeHtml(problemDescription)}</p>
    ${attachment ? `<p><em>See attached photo: ${escapeHtml(attachment.filename)}</em></p>` : ""}
  `;

  try {
    const payload: Parameters<Resend["emails"]["send"]>[0] = {
      from: FROM_EMAIL,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `Warranty claim: ${escapeHtml(propertyAddress)} – ${escapeHtml(firstName)} ${escapeHtml(lastName)}`,
      html,
    };
    if (attachment) payload.attachments = [attachment];

    const { error } = await resend.emails.send(payload);

    if (error) {
      console.error("[api/warranty] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to submit warranty claim. Please try again or contact us directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[api/warranty] Unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to submit warranty claim. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
