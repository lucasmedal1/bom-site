"use client";

import { useState } from "react";
import { formatMaterial } from "@/lib/rfq-email";

type Shape = "sheet" | "rod" | "tube" | "fabricated" | "other";
type DimensionMode = "manual" | "cad";

type QuoteMaterial = {
  id: string;
  shape: Shape;
  materialName: string;
  dimensionMode: DimensionMode;
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

const SHAPE_LABELS: Record<Shape, string> = {
  sheet: "Sheet / Film",
  rod: "Rod",
  tube: "Tube",
  fabricated: "Custom Fabricated",
  other: "Other",
};

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];

const emptyDraft = (): Omit<QuoteMaterial, "id"> => ({
  shape: "sheet",
  materialName: "",
  dimensionMode: "manual",
  thickness: "",
  width: "",
  length: "",
  height: "",
  diameter: "",
  outsideDiameter: "",
  insideDiameter: "",
  pieces: "",
  unit: "IN",
  details: "",
  cadFileName: "",
});

function formatQuoteMaterial(m: QuoteMaterial) {
  const { id: _id, ...material } = m;
  return formatMaterial(material);
}

type FormErrors = Partial<Record<
  | "materials"
  | "exportConfirm"
  | "consent"
  | "firstName"
  | "lastName"
  | "customerType"
  | "company"
  | "email"
  | "phone"
  | "address"
  | "city"
  | "state"
  | "zip",
  string
>>;

type MaterialErrors = Partial<Record<
  | "materialName"
  | "cadFile"
  | "thickness"
  | "width"
  | "length"
  | "diameter"
  | "outsideDiameter"
  | "insideDiameter"
  | "pieces",
  string
>>;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="field-error">{message}</p>;
}

function fieldClass(hasError: boolean) {
  return hasError ? "field-input field-invalid" : "field-input";
}

function selectClass(hasError: boolean) {
  return hasError ? "field-select field-invalid" : "field-select";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateMaterialDraft(draft: Omit<QuoteMaterial, "id">): MaterialErrors {
  const errors: MaterialErrors = {};

  if (!draft.materialName.trim()) {
    errors.materialName = "Material name is required.";
  }

  if (draft.dimensionMode === "cad" && !draft.cadFileName) {
    errors.cadFile = "Upload a CAD file or switch to manual dimensions.";
  }

  if (draft.dimensionMode === "manual" && draft.shape !== "other") {
    if (!draft.pieces.trim()) {
      errors.pieces = "Number of pieces is required.";
    }

    if (draft.shape === "sheet") {
      if (!draft.thickness.trim()) errors.thickness = "Thickness is required.";
      if (!draft.width.trim()) errors.width = "Width is required.";
      if (!draft.length.trim()) errors.length = "Length is required.";
    }

    if (draft.shape === "rod") {
      if (!draft.diameter.trim()) errors.diameter = "Diameter is required.";
      if (!draft.length.trim()) errors.length = "Length is required.";
    }

    if (draft.shape === "tube") {
      if (!draft.outsideDiameter.trim()) errors.outsideDiameter = "Outside diameter is required.";
      if (!draft.insideDiameter.trim()) errors.insideDiameter = "Inside diameter is required.";
      if (!draft.length.trim()) errors.length = "Length is required.";
    }
  }

  return errors;
}

function validateSubmission(values: {
  materials: QuoteMaterial[];
  exportConfirm: boolean;
  consent: boolean;
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
}): FormErrors {
  const errors: FormErrors = {};

  if (values.materials.length === 0) {
    errors.materials = "Add at least one material to your quote.";
  }

  if (!values.exportConfirm) {
    errors.exportConfirm = "Confirm your export control statement before submitting.";
  }

  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.lastName.trim()) errors.lastName = "Last name is required.";
  if (!values.customerType) errors.customerType = "Select a customer type.";
  if (!values.company.trim()) errors.company = "Company is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.address.trim()) errors.address = "Address is required.";
  if (!values.city.trim()) errors.city = "City is required.";
  if (!values.state) errors.state = "Select a state or region.";
  if (!values.zip.trim()) errors.zip = "Zip or postal code is required.";

  if (!values.consent) {
    errors.consent = "Accept the Terms of Use and Privacy Policy to continue.";
  }

  return errors;
}

export default function RFQForm() {
  const [materials, setMaterials] = useState<QuoteMaterial[]>([]);
  const [showMaterialForm, setShowMaterialForm] = useState(false);
  const [draft, setDraft] = useState(emptyDraft());
  const [draftCadFile, setDraftCadFile] = useState<File | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [exportConfirm, setExportConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [materialErrors, setMaterialErrors] = useState<MaterialErrors>({});

  const [quoteRef, setQuoteRef] = useState("");
  const [application, setApplication] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [consent, setConsent] = useState(false);

  const updateDraft = (field: keyof ReturnType<typeof emptyDraft>, value: string) => {
    setDraft((d) => ({ ...d, [field]: value }));
    setMaterialErrors((errors) => {
      if (!errors[field as keyof MaterialErrors]) return errors;
      const next = { ...errors };
      delete next[field as keyof MaterialErrors];
      return next;
    });
  };

  const clearFormError = (field: keyof FormErrors) => {
    setFormErrors((errors) => {
      if (!errors[field]) return errors;
      const next = { ...errors };
      delete next[field];
      return next;
    });
  };

  const setShape = (shape: Shape) => {
    setDraft((d) => ({
      ...emptyDraft(),
      shape,
      materialName: d.materialName,
      dimensionMode: shape === "fabricated" ? "cad" : d.dimensionMode,
    }));
    setDraftCadFile(null);
  };

  const handleDraftCad = (incoming: FileList | null) => {
    if (!incoming?.[0]) return;
    const file = incoming[0];
    setDraftCadFile(file);
    updateDraft("cadFileName", file.name);
    setFiles((prev) => [...prev, file]);
    setMaterialErrors((errors) => {
      if (!errors.cadFile) return errors;
      const next = { ...errors };
      delete next.cadFile;
      return next;
    });
  };

  const addMaterial = () => {
    const errors = validateMaterialDraft(draft);
    if (Object.keys(errors).length > 0) {
      setMaterialErrors(errors);
      return;
    }

    setMaterialErrors({});
    setMaterials((m) => [...m, { ...draft, id: crypto.randomUUID() }]);
    setDraft(emptyDraft());
    setDraftCadFile(null);
    setShowMaterialForm(false);
    clearFormError("materials");
  };

  const removeMaterial = (id: string) => {
    setMaterials((m) => m.filter((item) => item.id !== id));
  };

  const handleFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    setFiles((prev) => [...prev, ...Array.from(incoming)]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    const errors = validateSubmission({
      materials,
      exportConfirm,
      consent,
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
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSubmitError("");

      const contactFields: (keyof FormErrors)[] = [
        "firstName", "lastName", "customerType", "company", "email", "phone", "address", "city", "state", "zip",
      ];
      const scrollTarget = errors.materials
        ? "rfq-materials"
        : contactFields.some((field) => errors[field])
          ? "rfq-contact"
          : "rfq-submit";

      if (errors.materials) setShowMaterialForm(true);
      document.getElementById(scrollTarget)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    setFormErrors({});
    setSubmitting(true);
    setSubmitError("");

    const payload = {
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
      materials: materials.map(({ id: _id, ...material }) => material),
    };

    const formData = new FormData();
    formData.append("payload", JSON.stringify(payload));
    files.forEach((file) => formData.append("files", file));

    try {
      const response = await fetch("/api/rfq", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Failed to submit quote request.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Failed to submit quote request."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const showDimensionFields = draft.dimensionMode === "manual" && draft.shape !== "other";
  const showCadUpload = draft.dimensionMode === "cad";
  const formErrorList = Object.values(formErrors);

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-8">
        <h2 className="text-3xl font-semibold text-charcoal">Quote Submitted</h2>
        <p className="mt-4 text-charcoal/60">
          Thank you for your request. We&apos;ve received your quote details
          and any uploaded files. A representative will respond within 30
          minutes during business hours.
        </p>
        <p className="mt-4 font-mono text-xs text-charcoal/40">
          A confirmation has been sent to our team.
        </p>
        <a href="/" className="btn btn-primary mt-8 px-6 py-3 text-sm">
          Return Home
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-3xl px-6 pb-24 lg:px-8">
      <div className="mb-10">
        <p className="font-mono text-xs tracking-widest text-ocean/60">RFQ</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-charcoal">
          Request a Quote
        </h1>
        <p className="mt-3 text-charcoal/60">
          Add materials, specify dimensions or upload CAD, and receive a quote
          for the exact blank size you need.
        </p>
      </div>

      <section id="rfq-materials" className="border border-charcoal/10 bg-white p-6">
        <h2 className="text-lg font-semibold text-charcoal">Included Quote Materials</h2>

        {materials.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {materials.map((m) => (
              <li
                key={m.id}
                className="flex items-start justify-between gap-4 border border-charcoal/8 bg-off-white p-4"
              >
                <div>
                  <p className="font-mono text-xs text-teal">{SHAPE_LABELS[m.shape]}</p>
                  <p className="mt-1 text-sm text-charcoal">{formatQuoteMaterial(m)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeMaterial(m.id)}
                  className="shrink-0 font-mono text-[10px] uppercase tracking-wider text-charcoal/40 hover:text-coral"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-sm text-charcoal/50">No materials added yet.</p>
        )}
        <FieldError message={formErrors.materials} />

        {!showMaterialForm && (
          <button
            type="button"
            onClick={() => {
              setShowMaterialForm(true);
              clearFormError("materials");
            }}
            className="btn btn-secondary mt-4 px-4 py-2 text-xs"
          >
            + Add Another Material
          </button>
        )}
      </section>

      {showMaterialForm && (
        <section className="mt-4 border border-charcoal/10 bg-white p-6">
          <h3 className="text-base font-semibold text-charcoal">Material Request</h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {(Object.keys(SHAPE_LABELS) as Shape[]).map((shape) => (
              <button
                key={shape}
                type="button"
                onClick={() => setShape(shape)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                  draft.shape === shape
                    ? "bg-charcoal text-white"
                    : "border border-charcoal/15 bg-off-white text-charcoal/60 hover:border-charcoal/30"
                }`}
              >
                {SHAPE_LABELS[shape]}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="field-label">Material Name *</label>
              <input
                className={fieldClass(!!materialErrors.materialName)}
                placeholder="e.g. PEEK, PEI, POM, Nylon, G10"
                value={draft.materialName}
                onChange={(e) => updateDraft("materialName", e.target.value)}
              />
              <FieldError message={materialErrors.materialName} />
            </div>

            {draft.shape !== "other" && (
              <div className="sm:col-span-2 border border-charcoal/8 bg-off-white p-4">
                <p className="field-label">How should we size your material?</p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-charcoal/70">
                    <input
                      type="radio"
                      name="dimensionMode"
                      checked={draft.dimensionMode === "manual"}
                      onChange={() => updateDraft("dimensionMode", "manual")}
                      className="accent-ocean"
                    />
                    I&apos;ll specify dimensions
                  </label>
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-charcoal/70">
                    <input
                      type="radio"
                      name="dimensionMode"
                      checked={draft.dimensionMode === "cad"}
                      onChange={() => updateDraft("dimensionMode", "cad")}
                      className="accent-ocean"
                    />
                    Upload CAD — determine blank size for me
                  </label>
                </div>
                {draft.dimensionMode === "cad" && (
                  <p className="mt-3 text-xs leading-relaxed text-charcoal/50">
                    Upload your CAD file and we&apos;ll analyze the geometry to
                    determine the optimal material blank size. Quotes typically
                    returned in under 30 minutes.
                  </p>
                )}
              </div>
            )}

            {showCadUpload && (
              <div className="sm:col-span-2">
                <label className="field-label">
                  Upload CAD File {draft.dimensionMode === "cad" ? "*" : ""}
                </label>
                <div className={`mt-2 border border-dashed bg-ocean/5 p-6 text-center ${
                  materialErrors.cadFile ? "border-coral/40" : "border-ocean/30"
                }`}>
                  <p className="text-sm text-charcoal/60">
                    DXF, STEP, STP, PDF — we&apos;ll extract dimensions
                  </p>
                  <label className="btn btn-secondary mt-3 cursor-pointer px-4 py-2 text-xs">
                    Browse Files
                    <input
                      type="file"
                      accept=".dxf,.step,.stp,.pdf,.dwg,.iges,.igs"
                      className="hidden"
                      onChange={(e) => handleDraftCad(e.target.files)}
                    />
                  </label>
                  {draftCadFile && (
                    <p className="mt-3 font-mono text-xs text-teal">
                      {draftCadFile.name}
                    </p>
                  )}
                </div>
                <FieldError message={materialErrors.cadFile} />
              </div>
            )}

            {showDimensionFields && draft.shape === "sheet" && (
              <>
                <div>
                  <label className="field-label">Thickness *</label>
                  <input className={fieldClass(!!materialErrors.thickness)} value={draft.thickness} onChange={(e) => updateDraft("thickness", e.target.value)} />
                  <FieldError message={materialErrors.thickness} />
                </div>
                <div>
                  <label className="field-label">Width *</label>
                  <input className={fieldClass(!!materialErrors.width)} value={draft.width} onChange={(e) => updateDraft("width", e.target.value)} />
                  <FieldError message={materialErrors.width} />
                </div>
                <div>
                  <label className="field-label">Length *</label>
                  <input className={fieldClass(!!materialErrors.length)} value={draft.length} onChange={(e) => updateDraft("length", e.target.value)} />
                  <FieldError message={materialErrors.length} />
                </div>
              </>
            )}

            {showDimensionFields && draft.shape === "rod" && (
              <>
                <div>
                  <label className="field-label">Diameter *</label>
                  <input className={fieldClass(!!materialErrors.diameter)} value={draft.diameter} onChange={(e) => updateDraft("diameter", e.target.value)} />
                  <FieldError message={materialErrors.diameter} />
                </div>
                <div>
                  <label className="field-label">Length *</label>
                  <input className={fieldClass(!!materialErrors.length)} value={draft.length} onChange={(e) => updateDraft("length", e.target.value)} />
                  <FieldError message={materialErrors.length} />
                </div>
              </>
            )}

            {showDimensionFields && draft.shape === "tube" && (
              <>
                <div>
                  <label className="field-label">Outside Diameter *</label>
                  <input className={fieldClass(!!materialErrors.outsideDiameter)} value={draft.outsideDiameter} onChange={(e) => updateDraft("outsideDiameter", e.target.value)} />
                  <FieldError message={materialErrors.outsideDiameter} />
                </div>
                <div>
                  <label className="field-label">Inside Diameter *</label>
                  <input className={fieldClass(!!materialErrors.insideDiameter)} value={draft.insideDiameter} onChange={(e) => updateDraft("insideDiameter", e.target.value)} />
                  <FieldError message={materialErrors.insideDiameter} />
                </div>
                <div>
                  <label className="field-label">Length *</label>
                  <input className={fieldClass(!!materialErrors.length)} value={draft.length} onChange={(e) => updateDraft("length", e.target.value)} />
                  <FieldError message={materialErrors.length} />
                </div>
              </>
            )}

            {showDimensionFields && draft.shape === "fabricated" && (
              <>
                <div>
                  <label className="field-label">Length</label>
                  <input className="field-input" placeholder="Optional" value={draft.length} onChange={(e) => updateDraft("length", e.target.value)} />
                </div>
                <div>
                  <label className="field-label">Width</label>
                  <input className="field-input" placeholder="Optional" value={draft.width} onChange={(e) => updateDraft("width", e.target.value)} />
                </div>
                <div>
                  <label className="field-label">Height</label>
                  <input className="field-input" placeholder="Optional" value={draft.height} onChange={(e) => updateDraft("height", e.target.value)} />
                </div>
                <div>
                  <label className="field-label">Thickness</label>
                  <input className="field-input" placeholder="Optional" value={draft.thickness} onChange={(e) => updateDraft("thickness", e.target.value)} />
                </div>
              </>
            )}

            {draft.shape !== "other" && (
              <>
                <div>
                  <label className="field-label"># of Pieces *</label>
                  <input className={fieldClass(!!materialErrors.pieces)} value={draft.pieces} onChange={(e) => updateDraft("pieces", e.target.value)} />
                  <FieldError message={materialErrors.pieces} />
                </div>
                <div>
                  <label className="field-label">Unit of Measure</label>
                  <select className="field-select" value={draft.unit} onChange={(e) => updateDraft("unit", e.target.value)}>
                    <option value="IN">IN</option>
                    <option value="MM">MM</option>
                    <option value="FT">FT</option>
                  </select>
                </div>
              </>
            )}

            <div className="sm:col-span-2">
              <label className="field-label">Instructions and Material Details</label>
              <textarea
                className="field-textarea"
                placeholder="Color, grade, texture, tolerances, cutting or fabrication needs."
                value={draft.details}
                onChange={(e) => updateDraft("details", e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button type="button" onClick={addMaterial} className="btn btn-primary px-5 py-2.5 text-xs">
              Add to Quote
            </button>
            <button
              type="button"
              onClick={() => {
                setShowMaterialForm(false);
                setDraft(emptyDraft());
                setDraftCadFile(null);
                setMaterialErrors({});
              }}
              className="btn btn-secondary px-5 py-2.5 text-xs"
            >
              Cancel
            </button>
          </div>
        </section>
      )}

      <section className="form-section">
        <h2 className="text-lg font-semibold text-charcoal">Additional Drawings or Specifications</h2>
        <p className="mt-2 text-sm text-charcoal/50">
          Attach supporting files for your full quote request.
        </p>
        <div
          className="mt-4 border border-dashed border-charcoal/20 bg-off-white p-8 text-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        >
          <p className="text-sm text-charcoal/60">Drag & drop your files or</p>
          <label className="btn btn-secondary mt-3 cursor-pointer px-4 py-2 text-xs">
            Browse
            <input
              type="file"
              multiple
              accept=".pdf,.dxf,.step,.stp,.jpg,.jpeg,.png,.xls,.xlsx,.dwg"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
          </label>
          <p className="mt-3 font-mono text-[10px] text-charcoal/40">
            PDF, DXF, STEP, DWG, JPG, XLS · Max 4 MB per file
          </p>
        </div>
        {files.length > 0 && (
          <ul className="mt-3 space-y-1">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="font-mono text-xs text-charcoal/50">{f.name}</li>
            ))}
          </ul>
        )}
        <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-charcoal/60">
          <input
            type="checkbox"
            checked={exportConfirm}
            onChange={(e) => {
              setExportConfirm(e.target.checked);
              clearFormError("exportConfirm");
            }}
            className="mt-0.5 accent-ocean"
          />
          I confirm that I did not upload any documents controlled by U.S. Export Control Law.
        </label>
        <FieldError message={formErrors.exportConfirm} />
      </section>

      <section className="form-section">
        <label className="field-label">Quote Name or Reference #</label>
        <input className="field-input" value={quoteRef} onChange={(e) => setQuoteRef(e.target.value)} />
      </section>

      <section className="form-section">
        <label className="field-label">Tell us about your application</label>
        <textarea
          className="field-textarea"
          placeholder="Share details about your application to help us prepare the most accurate quote."
          value={application}
          onChange={(e) => setApplication(e.target.value)}
        />
      </section>

      <section id="rfq-contact" className="form-section">
        <h2 className="text-lg font-semibold text-charcoal">Provide Your Contact Information</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="field-label">First Name *</label>
            <input className={fieldClass(!!formErrors.firstName)} value={firstName} onChange={(e) => { setFirstName(e.target.value); clearFormError("firstName"); }} />
            <FieldError message={formErrors.firstName} />
          </div>
          <div>
            <label className="field-label">Last Name *</label>
            <input className={fieldClass(!!formErrors.lastName)} value={lastName} onChange={(e) => { setLastName(e.target.value); clearFormError("lastName"); }} />
            <FieldError message={formErrors.lastName} />
          </div>
          <div>
            <label className="field-label">Customer Type *</label>
            <select className={selectClass(!!formErrors.customerType)} value={customerType} onChange={(e) => { setCustomerType(e.target.value); clearFormError("customerType"); }}>
              <option value="">—</option>
              <option value="Commercial/Business">Commercial / Business</option>
              <option value="Residential">Residential</option>
              <option value="University/School">University / School</option>
              <option value="Non-profit">Non-profit</option>
            </select>
            <FieldError message={formErrors.customerType} />
          </div>
          <div>
            <label className="field-label">Company *</label>
            <input className={fieldClass(!!formErrors.company)} value={company} onChange={(e) => { setCompany(e.target.value); clearFormError("company"); }} />
            <FieldError message={formErrors.company} />
          </div>
          <div>
            <label className="field-label">Email Address *</label>
            <input type="email" className={fieldClass(!!formErrors.email)} value={email} onChange={(e) => { setEmail(e.target.value); clearFormError("email"); }} />
            <FieldError message={formErrors.email} />
          </div>
          <div>
            <label className="field-label">Phone *</label>
            <input type="tel" className={fieldClass(!!formErrors.phone)} value={phone} onChange={(e) => { setPhone(e.target.value); clearFormError("phone"); }} />
            <FieldError message={formErrors.phone} />
          </div>
          <div className="sm:col-span-2">
            <label className="field-label">Address *</label>
            <input className={fieldClass(!!formErrors.address)} value={address} onChange={(e) => { setAddress(e.target.value); clearFormError("address"); }} />
            <FieldError message={formErrors.address} />
          </div>
          <div>
            <label className="field-label">City *</label>
            <input className={fieldClass(!!formErrors.city)} value={city} onChange={(e) => { setCity(e.target.value); clearFormError("city"); }} />
            <FieldError message={formErrors.city} />
          </div>
          <div>
            <label className="field-label">State / Region *</label>
            <select className={selectClass(!!formErrors.state)} value={state} onChange={(e) => { setState(e.target.value); clearFormError("state"); }}>
              <option value="">—</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <FieldError message={formErrors.state} />
          </div>
          <div>
            <label className="field-label">Zip / Postal Code *</label>
            <input className={fieldClass(!!formErrors.zip)} value={zip} onChange={(e) => { setZip(e.target.value); clearFormError("zip"); }} />
            <FieldError message={formErrors.zip} />
          </div>
          <div>
            <label className="field-label">Country *</label>
            <select className="field-select" defaultValue="United States">
              <option value="United States">United States</option>
            </select>
          </div>
        </div>
      </section>

      <section id="rfq-submit" className="form-section">
        <label className="flex cursor-pointer items-start gap-3 text-sm text-charcoal/60">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              clearFormError("consent");
            }}
            className="mt-0.5 accent-ocean"
          />
          <span>
            I accept the Terms of Use and Privacy Policy. Written quotations
            expire 30 days after issue unless otherwise specified.
          </span>
        </label>
        <FieldError message={formErrors.consent} />

        {formErrorList.length > 0 && (
          <div className="form-error-summary mt-4">
            <p>Please complete the required fields before submitting.</p>
            <ul>
              {formErrorList.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          </div>
        )}

        {submitError && (
          <p className="mt-4 border border-coral/20 bg-coral/5 px-4 py-3 text-sm text-coral">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary mt-8 w-full px-8 py-4 text-sm disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {submitting ? "Submitting..." : "Submit My Quote"}
        </button>
      </section>
    </form>
  );
}
