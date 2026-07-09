import { buildRfqEmail, type RfqPayload } from "@/lib/rfq-email";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const MAX_FILES = 8;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "Email service is not configured." },
        { status: 503 }
      );
    }

    const toEmail = process.env.RFQ_TO_EMAIL ?? "lucas@blueoceanmaterials.com";
    const fromEmail =
      process.env.RFQ_FROM_EMAIL ?? "Blue Ocean Materials <quotes@blueoceanmaterials.com>";
    const resend = new Resend(apiKey);

    const formData = await request.formData();
    const payloadRaw = formData.get("payload");

    if (typeof payloadRaw !== "string") {
      return Response.json({ error: "Invalid submission." }, { status: 400 });
    }

    const payload = JSON.parse(payloadRaw) as RfqPayload;

    if (
      !payload.firstName?.trim() ||
      !payload.lastName?.trim() ||
      !payload.email?.trim() ||
      !payload.phone?.trim() ||
      !payload.company?.trim()
    ) {
      return Response.json({ error: "Missing required contact fields." }, { status: 400 });
    }

    const uploadedFiles = formData.getAll("files").filter((entry): entry is File => entry instanceof File);

    if (uploadedFiles.length > MAX_FILES) {
      return Response.json({ error: `Maximum ${MAX_FILES} files allowed.` }, { status: 400 });
    }

    const attachments = [];
    for (const file of uploadedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        return Response.json(
          { error: `${file.name} exceeds the 4 MB file size limit.` },
          { status: 400 }
        );
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    const attachmentNames = uploadedFiles.map((file) => file.name);
    const { subject, text, html } = buildRfqEmail(payload, attachmentNames);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: payload.email,
      subject,
      text,
      html,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send quote request." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("RFQ submission error:", error);
    return Response.json({ error: "Failed to send quote request." }, { status: 500 });
  }
}
