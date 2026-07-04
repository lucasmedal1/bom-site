const steps = [
  {
    number: "1",
    title: "Upload CAD",
    label: "STEP",
    details: ["DXF", "PDF"],
    icon: (
      <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
        <rect x="12" y="8" width="40" height="48" fill="#FAFAF7" stroke="#0F6FFF" strokeWidth="1.5" rx="3" />
        <path d="M20 24h24M20 32h18M20 40h22" stroke="#111" strokeWidth="1" opacity="0.15" />
        <path d="M32 44v-8l4 4 4-4v8" stroke="#0F6FFF" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Receive Quote",
    label: "STEP",
    details: ["Price", "Lead Time", "Material"],
    icon: (
      <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
        <rect x="8" y="16" width="48" height="36" fill="#FAFAF7" stroke="#2CB5A5" strokeWidth="1.5" rx="3" />
        <text x="32" y="34" textAnchor="middle" fontSize="10" fill="#0F6FFF" fontFamily="monospace" fontWeight="bold">$</text>
        <line x1="16" y1="42" x2="48" y2="42" stroke="#111" strokeWidth="0.8" opacity="0.15" />
        <rect x="40" y="12" width="16" height="10" fill="#FF8C42" opacity="0.3" rx="2" />
        <text x="48" y="19" textAnchor="middle" fontSize="5" fill="#111" fontFamily="monospace">&lt;30m</text>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Receive Precision-Cut Material",
    label: "STEP",
    details: ["Ready for machining."],
    icon: (
      <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden>
        <polygon points="16,40 32,24 48,40 32,56" fill="#2CB5A5" opacity="0.2" />
        <polygon points="20,36 32,24 44,36 32,48" fill="#0F6FFF" opacity="0.15" stroke="#0F6FFF" strokeWidth="1" />
        <line x1="32" y1="24" x2="32" y2="12" stroke="#2CB5A5" strokeWidth="1" className="animate-blink" />
        <line x1="26" y1="18" x2="38" y2="18" stroke="#2CB5A5" strokeWidth="1" className="animate-blink" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 blueprint-grid-fine">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ocean/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-widest text-teal/80">
            PROCESS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            How It Works
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {i < steps.length - 1 && (
                <div className="absolute top-20 left-[calc(50%+80px)] hidden h-px w-[calc(100%-160px)] bg-gradient-to-r from-ocean/30 to-teal/30 lg:block" />
              )}

              <div className="mb-4 font-mono text-4xl font-light text-ocean/20">
                {step.number}
              </div>

              <div className="mb-6 rounded-2xl border border-charcoal/5 bg-white p-6 shadow-sm">
                {step.icon}
              </div>

              <p className="font-mono text-[10px] tracking-[0.2em] text-charcoal/40">
                {step.label}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-charcoal">
                {step.title}
              </h3>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {step.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-md border border-charcoal/8 bg-off-white px-3 py-1 font-mono text-xs text-charcoal/60"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              {i < steps.length - 1 && (
                <div className="mt-6 text-charcoal/20 lg:hidden">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
