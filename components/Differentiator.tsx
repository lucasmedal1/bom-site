const metrics = [
  {
    value: "<30",
    unit: "min",
    label: "Minute Quotes",
    color: "text-ocean",
  },
  {
    value: "No",
    unit: "",
    label: "Minimum Order",
    color: "text-teal",
  },
  {
    value: "Material",
    unit: "",
    label: "Certifications",
    color: "text-sunset",
  },
  {
    value: "Fast",
    unit: "",
    label: "Nationwide Shipping",
    color: "text-coral",
  },
];

export default function Differentiator() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.03] via-transparent to-teal/[0.03]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            Modern Software.
            <br />
            <span className="text-charcoal/50">Industrial Reliability.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="relative rounded-2xl border border-charcoal/5 bg-white p-8 text-center transition-all hover:shadow-lg hover:shadow-ocean/5"
            >
              <div className="absolute top-4 right-4 font-mono text-[8px] tracking-widest text-charcoal/20">
                METRIC
              </div>
              <div className={`font-mono text-3xl font-semibold tracking-tight ${metric.color}`}>
                {metric.value}
                {metric.unit && (
                  <span className="text-lg text-charcoal/40"> {metric.unit}</span>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-charcoal/70">
                {metric.label}
              </p>
              <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-ocean/30 to-transparent" />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-40">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-charcoal">
            <svg width="12" height="12" viewBox="0 0 12 12">
              <rect x="0" y="0" width="5" height="5" fill="#0F6FFF" />
              <rect x="7" y="0" width="5" height="5" fill="#2CB5A5" />
              <rect x="0" y="7" width="5" height="5" fill="#FF8C42" />
              <rect x="7" y="7" width="5" height="5" fill="#FF6B5B" />
            </svg>
            ISO 9001 CERTIFIED
          </div>
          <div className="font-mono text-[10px] tracking-widest text-charcoal">
            TRACEABLE LOT NUMBERS
          </div>
          <div className="font-mono text-[10px] tracking-widest text-charcoal">
            MADE IN USA
          </div>
        </div>
      </div>
    </section>
  );
}
