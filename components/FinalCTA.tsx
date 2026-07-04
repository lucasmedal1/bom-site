function HorizonIllustration() {
  return (
    <svg
      viewBox="0 0 1200 300"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="horizonSky" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7FDBCA" stopOpacity="0.15" />
          <stop offset="30%" stopColor="#2CB5A5" stopOpacity="0.1" />
          <stop offset="60%" stopColor="#0F6FFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id="horizonWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0F6FFF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2CB5A5" stopOpacity="0.03" />
        </linearGradient>
        <pattern id="horizonGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F6FFF" strokeWidth="0.4" opacity="0.1" />
        </pattern>
      </defs>

      <rect width="1200" height="300" fill="url(#horizonSky)" />
      <rect y="150" width="1200" height="150" fill="url(#horizonWater)" />
      <rect y="150" width="1200" height="150" fill="url(#horizonGrid)" />

      {/* Geometric mountains */}
      <polygon points="0,180 200,100 400,160 600,80 800,140 1000,90 1200,150 1200,300 0,300" fill="#2CB5A5" opacity="0.06" />
      <polygon points="0,200 300,130 500,170 700,110 900,160 1200,130 1200,300 0,300" fill="#0F6FFF" opacity="0.04" />

      {/* Low-poly sun */}
      <polygon points="950,60 980,45 1010,60 980,75" fill="#FF8C42" opacity="0.2" />
      <polygon points="960,55 980,40 1000,55 980,70" fill="#FF6B5B" opacity="0.15" />

      {/* Horizon line */}
      <line x1="0" y1="150" x2="1200" y2="150" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.15" />

      {/* Floating geometric shapes */}
      <g className="animate-float-slow" opacity="0.3">
        <polygon points="100,120 130,100 160,120 130,140" fill="#2CB5A5" />
        <polygon points="1050,100 1080,80 1110,100 1080,120" fill="#0F6FFF" />
      </g>
    </svg>
  );
}

export default function FinalCTA() {
  return (
    <section id="quote" className="relative overflow-hidden py-32 lg:py-40">
      <HorizonIllustration />
      <div className="scanlines absolute inset-0" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="font-mono text-xs tracking-widest text-ocean/60">
          GET STARTED
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
          Need Engineering Plastics Fast?
        </h2>
        <p className="mt-4 text-lg text-charcoal/60">
          Upload your CAD file today.
        </p>

        <a
          href="#upload"
          className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-ocean px-10 py-5 text-base font-semibold text-white shadow-2xl shadow-ocean/30 transition-all hover:bg-ocean/90 hover:shadow-ocean/40"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:-translate-y-1">
            <path d="M10 3v9M10 3l3.5 3.5M10 3L6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M4 15h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Upload CAD File
        </a>

        <p className="mt-6 font-mono text-xs text-charcoal/40">
          DXF · STEP · PDF · No account required
        </p>
      </div>
    </section>
  );
}
