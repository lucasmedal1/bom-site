export default function Hero() {
  return (
    <section
      id="quote"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-28 lg:py-32"
    >
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-teal/10 via-ocean/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-white/80 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-teal" />
          <span className="font-mono text-xs tracking-wide text-charcoal/60">
            QUOTING ACTIVE · &lt;30 MIN TURNAROUND
          </span>
        </div>

        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-[3.5rem]">
          Engineering Plastics,
          <br />
          <span className="text-charcoal">Delivered Smarter.</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
          Receive a quote in under 30 minutes. Precision-cut PEEK, Ultem,
          Delrin, PPS, PTFE and other engineering polymers.
        </p>

        <div className="mt-6 flex justify-center">
          <ul className="space-y-2 text-left">
            {[
              "Material certifications included.",
              "Traceable supply chain.",
              "Aerospace and semiconductor compatible materials.",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-charcoal/60"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 text-teal">
                  <rect x="5" y="0" width="2" height="12" fill="currentColor" opacity="0.4" />
                  <rect x="0" y="5" width="12" height="2" fill="currentColor" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:lucas@blueoceanmaterials.com?subject=Quote%20Request"
            className="btn btn-primary px-7 py-3.5 text-sm shadow-lg shadow-ocean/25 hover:shadow-xl hover:shadow-ocean/30"
          >
            Request a Quote
          </a>
        </div>

        <p className="mt-6 font-mono text-[10px] tracking-wider text-charcoal/40">
          SAME-DAY QUOTING AVAILABLE · CERTIFICATIONS INCLUDED
        </p>
      </div>
    </section>
  );
}
