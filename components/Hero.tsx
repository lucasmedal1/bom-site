export default function Hero() {
  return (
    <section
      id="upload"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-28 lg:py-32"
    >
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-teal/10 via-ocean/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-coral/8 via-sunset/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ocean/15 bg-white/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-teal animate-pulse-soft" />
            <span className="font-mono text-xs tracking-wide text-charcoal/70">
              DIGITAL MATERIALS PLATFORM
            </span>
          </div>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-[3.5rem]">
            Engineering Plastics,
            <br />
            <span className="bg-gradient-to-r from-ocean via-teal to-ocean bg-clip-text text-transparent">
              Delivered Smarter.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-charcoal/70">
            Upload your CAD file and receive a quote in under 30 minutes.
            Precision-cut PEEK, Ultem, Delrin, PPS, PTFE and other advanced
            engineering materials.
          </p>

          <div className="mt-6 flex justify-center">
            <ul className="space-y-2 text-left">
              {[
                "Order only what you need.",
                "No minimum order.",
                "Material certifications included.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-charcoal/60"
                >
                <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0 text-teal">
                  <rect x="4" y="0" width="4" height="4" fill="currentColor" />
                  <rect x="0" y="4" width="4" height="4" fill="currentColor" opacity="0.5" />
                  <rect x="4" y="4" width="4" height="4" fill="currentColor" opacity="0.7" />
                </svg>
                {item}
              </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#upload"
              className="group inline-flex items-center gap-2 rounded-xl bg-ocean px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-ocean/25 transition-all hover:bg-ocean/90 hover:shadow-xl hover:shadow-ocean/30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:-translate-y-0.5">
                <path d="M8 2v8M8 2l3 3M8 2L5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Upload CAD File
            </a>
            <a
              href="#quote"
              className="inline-flex items-center gap-2 rounded-xl border border-charcoal/15 bg-white/80 px-7 py-3.5 text-sm font-semibold text-charcoal backdrop-blur-sm transition-all hover:border-charcoal/25 hover:bg-white"
            >
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
