const services = [
  { name: "Anodizing", code: "TYPE II / TYPE III" },
  { name: "Chem-Film", code: "ALODINE / CHROMATE" },
  { name: "Plating", code: "NICKEL · COPPER · GOLD" },
];

export default function SurfaceFinishing() {
  return (
    <section id="finishing" className="relative border-y border-charcoal/5 bg-white py-24 lg:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-md border border-sunset/30 bg-sunset/5 px-3 py-1">
              <span className="font-mono text-[10px] font-medium tracking-widest text-sunset">
                COMING ONLINE
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Surface Finishing
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-charcoal/70">
              Automated anodizing, chem-film, and plating with software-driven
              scheduling and fast turnaround.
            </p>
            <p className="mt-3 text-sm text-charcoal/50">
              We are expanding capacity into surface finishing — integrated
              with our precision-cut materials supply chain.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-lg border border-charcoal/8 bg-off-white px-4 py-3"
                >
                  <p className="text-sm font-medium text-charcoal">{service.name}</p>
                  <p className="mt-0.5 font-mono text-[10px] tracking-wide text-charcoal/40">
                    {service.code}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-charcoal/8 bg-off-white p-8 lg:p-10">
            <div className="flex items-center justify-between border-b border-charcoal/8 pb-4">
              <span className="font-mono text-[10px] tracking-widest text-charcoal/40">
                PRODUCTION SCHEDULING
              </span>
              <span className="font-mono text-[10px] text-teal">ACTIVE</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal/60">Available slots</span>
                <span className="font-mono text-sm font-medium text-charcoal">Limited</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal/60">Turnaround</span>
                <span className="font-mono text-sm font-medium text-charcoal">3–5 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-charcoal/60">Certification</span>
                <span className="font-mono text-sm font-medium text-charcoal">Included</span>
              </div>
            </div>

            <div className="mt-4 h-px bg-charcoal/8" />

            <p className="mt-6 text-sm leading-relaxed text-charcoal/50">
              Limited intake during initial production rollout to ensure quality
              and turnaround consistency.
            </p>

            <a
              href="mailto:lucas@blueoceanmaterials.com?subject=Surface%20Finishing%20-%20Production%20Slot%20Request"
              className="btn btn-dark mt-6 w-full px-6 py-3.5 text-sm"
            >
              Secure First Production Slot
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
