export type RfqMaterial = {
  shape: string;
  materialName: string;
  dimensionMode: string;
  thickness: string;
  width: string;
  length: string;
  height: string;
  diameter: string;
  outsideDiameter: string;
  insideDiameter: string;
  pieces: string;
  unit: string;
  details: string;
  cadFileName: string;
};

export type RfqPayload = {
  quoteRef: string;
  application: string;
  firstName: string;
  lastName: string;
  customerType: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  materials: RfqMaterial[];
};

const SHAPE_LABELS: Record<string, string> = {
  sheet: "Sheet / Film",
  rod: "Rod",
  tube: "Tube",
  fabricated: "Custom Fabricated",
  other: "Other",
};

export function formatMaterial(m: RfqMaterial) {
  const parts = [SHAPE_LABELS[m.shape] ?? m.shape, m.materialName];

  if (m.dimensionMode === "cad") {
    parts.push(m.cadFileName ? `CAD: ${m.cadFileName}` : "CAD upload — blank size TBD");
  } else if (m.shape === "sheet") {
    parts.push(`${m.thickness}×${m.width}×${m.length} ${m.unit}`);
  } else if (m.shape === "rod") {
    parts.push(`Ø${m.diameter} × ${m.length} ${m.unit}`);
  } else if (m.shape === "tube") {
    parts.push(`OD${m.outsideDiameter} ID${m.insideDiameter} × ${m.length} ${m.unit}`);
  } else if (m.shape === "fabricated") {
    const dims = [m.length, m.width, m.height, m.thickness].filter(Boolean);
    if (dims.length) parts.push(`${dims.join(" × ")} ${m.unit}`);
  }

  if (m.pieces) parts.push(`${m.pieces} pcs`);
  if (m.details) parts.push(m.details);
  return parts.filter(Boolean).join(" · ");
}

export function buildRfqEmail(payload: RfqPayload, attachmentNames: string[]) {
  const {
    quoteRef,
    application,
    firstName,
    lastName,
    customerType,
    company,
    email,
    phone,
    address,
    city,
    state,
    zip,
    materials,
  } = payload;

  const materialLines =
    materials.length > 0
      ? materials.map((m, i) => `${i + 1}. ${formatMaterial(m)}`)
      : ["(none listed)"];

  const text = [
    "QUOTE REQUEST — Blue Ocean Materials",
    "",
    quoteRef && `Reference: ${quoteRef}`,
    "",
    "MATERIALS:",
    ...materialLines,
    "",
    attachmentNames.length > 0 && `Attached files: ${attachmentNames.join(", ")}`,
    "",
    application && `Application:\n${application}`,
    "",
    "CONTACT:",
    `${firstName} ${lastName}`,
    company && `Company: ${company}`,
    customerType && `Type: ${customerType}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `${address}, ${city}, ${state} ${zip}`,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; color: #111; line-height: 1.5;">
      <h2 style="margin: 0 0 16px; font-size: 20px;">Quote Request — Blue Ocean Materials</h2>
      ${quoteRef ? `<p><strong>Reference:</strong> ${escapeHtml(quoteRef)}</p>` : ""}
      <h3 style="margin: 24px 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em;">Materials</h3>
      <ol style="margin: 0; padding-left: 20px;">
        ${materialLines.map((line) => `<li style="margin-bottom: 8px;">${escapeHtml(line)}</li>`).join("")}
      </ol>
      ${
        attachmentNames.length > 0
          ? `<p style="margin-top: 16px;"><strong>Attached files:</strong> ${escapeHtml(attachmentNames.join(", "))}</p>`
          : ""
      }
      ${
        application
          ? `<h3 style="margin: 24px 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em;">Application</h3><p style="white-space: pre-wrap;">${escapeHtml(application)}</p>`
          : ""
      }
      <h3 style="margin: 24px 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em;">Contact</h3>
      <p style="margin: 0;">
        ${escapeHtml(`${firstName} ${lastName}`)}<br />
        ${company ? `${escapeHtml(company)}<br />` : ""}
        ${customerType ? `${escapeHtml(customerType)}<br />` : ""}
        <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a><br />
        ${escapeHtml(phone)}<br />
        ${escapeHtml(`${address}, ${city}, ${state} ${zip}`)}
      </p>
    </div>
  `;

  const subject = quoteRef ? `RFQ: ${quoteRef}` : `RFQ from ${firstName} ${lastName}`;

  return { subject, text, html };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
