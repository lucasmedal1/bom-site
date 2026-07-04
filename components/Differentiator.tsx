const metrics = [
  {
    value: "<30",
    unit: "min",
    label: "Quote Turnaround",
    color: "text-ocean",
  },
  {
    value: "No",
    unit: "",
    label: "Minimum Order",
    color: "text-teal",
  },
  {
    value: "Full",
    unit: "",
    label: "Material Certification",
    color: "text-sunset",
  },
  {
    value: "Fast",
    unit: "",
    label: "Nationwide Shipping",
    color: "text-charcoal",
  },
];

export default function Differentiator() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/[0.02] via-transparent to-teal/[0.02]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs tracking-widest text-ocean/60">
            OPERATIONS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            Modern Software.
            <br />
            <span className="text-charcoal/50">Industrial Reliability.</span>
          </h2>
          <p className="mt-4 text-charcoal/60">
            Software-driven quoting and scheduling. Industrial-grade fulfillment
            and certification on every order.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-charcoal/5 bg-white p-8 text-center"
            >
              <div className={`font-mono text-3xl font-semibold tracking-tight ${metric.color}`}>
                {metric.value}
                {metric.unit && (
                  <span className="text-lg text-charcoal/40"> {metric.unit}</span>
                )}
              </div>
              <p className="mt-2 text-sm font-medium text-charcoal/70">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {[
            "ISO 9001 CERTIFIED",
            "TRACEABLE LOT NUMBERS",
            "MILL CERTIFICATIONS",
            "MADE IN USA",
          ].map((badge) => (
            <span
              key={badge}
              className="font-mono text-[10px] tracking-widest text-charcoal/40"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
