function HeroIllustration() {
  return (
    <div className="relative w-full max-w-2xl lg:max-w-none">
      <svg
        viewBox="0 0 600 480"
        className="w-full h-auto"
        aria-hidden
        role="img"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7FDBCA" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#2CB5A5" stopOpacity="0.2" />
            <stop offset="70%" stopColor="#0F6FFF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2CB5A5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#0F6FFF" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="peekTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7FDBCA" />
            <stop offset="100%" stopColor="#2CB5A5" />
          </linearGradient>
          <linearGradient id="peekSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2CB5A5" />
            <stop offset="100%" stopColor="#1a9a8c" />
          </linearGradient>
          <linearGradient id="ultemTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C42" />
            <stop offset="100%" stopColor="#FF6B5B" />
          </linearGradient>
          <linearGradient id="ultemSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B5B" />
            <stop offset="100%" stopColor="#e55a4a" />
          </linearGradient>
          <linearGradient id="delrinTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FAFAF7" />
            <stop offset="100%" stopColor="#E8DFD0" />
          </linearGradient>
          <linearGradient id="delrinSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E8DFD0" />
            <stop offset="100%" stopColor="#d4cbb8" />
          </linearGradient>
          <linearGradient id="ptfeTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F6FFF" />
            <stop offset="100%" stopColor="#0a52cc" />
          </linearGradient>
          <linearGradient id="ptfeSide" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a52cc" />
            <stop offset="100%" stopColor="#083d99" />
          </linearGradient>
          <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0F6FFF" strokeWidth="0.3" opacity="0.15" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width="600" height="480" fill="url(#skyGrad)" rx="16" />
        <rect width="600" height="480" fill="url(#gridPattern)" rx="16" />

        {/* California hills */}
        <polygon points="0,380 120,300 240,340 360,280 480,320 600,260 600,480 0,480" fill="url(#hillGrad1)" />
        <polygon points="0,420 180,360 300,390 450,340 600,370 600,480 0,480" fill="#2CB5A5" opacity="0.06" />

        {/* Sun - geometric */}
        <circle cx="480" cy="80" r="40" fill="#FF8C42" opacity="0.15" />
        <circle cx="480" cy="80" r="28" fill="#FF6B5B" opacity="0.1" />

        {/* Ground plane grid */}
        <g transform="translate(100, 320)" opacity="0.2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <line key={`h${i}`} x1={i * 50} y1="0" x2={i * 50 - 200} y2="120" stroke="#0F6FFF" strokeWidth="0.5" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <line key={`v${i}`} x1="0" y1={i * 30} x2="400" y2={i * 30 - 60} stroke="#0F6FFF" strokeWidth="0.5" />
          ))}
        </g>

        {/* Isometric PEEK block - large */}
        <g className="animate-float-slow" transform="translate(180, 200)">
          <polygon points="0,40 60,10 120,40 60,70" fill="url(#peekTop)" />
          <polygon points="120,40 120,90 60,120 60,70" fill="url(#peekSide)" />
          <polygon points="0,40 0,90 60,120 60,70" fill="#1a9a8c" opacity="0.7" />
          <text x="30" y="58" fontSize="7" fill="white" fontFamily="monospace" opacity="0.8">PEEK</text>
        </g>

        {/* Isometric Ultem sheet */}
        <g className="animate-float" transform="translate(320, 160)">
          <polygon points="0,30 80,0 160,30 80,60" fill="url(#ultemTop)" />
          <polygon points="160,30 160,50 80,80 80,60" fill="url(#ultemSide)" />
          <polygon points="0,30 0,50 80,80 80,60" fill="#e55a4a" opacity="0.7" />
        </g>

        {/* Isometric Delrin rod stack */}
        <g className="animate-float-delayed" transform="translate(80, 240)">
          <rect x="20" y="0" width="12" height="60" fill="url(#delrinTop)" transform="skewX(-15)" />
          <rect x="36" y="5" width="12" height="55" fill="#E8DFD0" transform="skewX(-15)" />
          <rect x="52" y="10" width="12" height="50" fill="#d4cbb8" transform="skewX(-15)" />
        </g>

        {/* Isometric PTFE block - small */}
        <g className="animate-float" transform="translate(400, 240)">
          <polygon points="0,25 35,8 70,25 35,42" fill="url(#ptfeTop)" />
          <polygon points="70,25 70,55 35,72 35,42" fill="url(#ptfeSide)" />
          <polygon points="0,25 0,55 35,72 35,42" fill="#083d99" opacity="0.7" />
        </g>

        {/* Tall architectural sheet */}
        <g transform="translate(260, 100)">
          <polygon points="0,60 30,45 30,5 0,20" fill="#0F6FFF" opacity="0.2" />
          <polygon points="30,5 60,20 60,60 30,45" fill="#0F6FFF" opacity="0.35" />
          <line x1="5" y1="25" x2="25" y2="15" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.5" />
          <line x1="5" y1="40" x2="25" y2="30" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.5" />
          <line x1="5" y1="55" x2="25" y2="45" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.5" />
        </g>

        {/* Floating CAD outlines - nesting parts */}
        <g className="animate-float-delayed" opacity="0.7">
          <rect x="140" y="120" width="50" height="35" fill="none" stroke="#0F6FFF" strokeWidth="1" strokeDasharray="4 2" rx="2" />
          <circle cx="155" cy="137" r="8" fill="none" stroke="#2CB5A5" strokeWidth="0.8" strokeDasharray="3 2" />
          <rect x="168" y="128" width="16" height="18" fill="none" stroke="#FF8C42" strokeWidth="0.8" strokeDasharray="3 2" rx="1" />
          <line x1="140" y1="120" x2="130" y2="110" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.4" />
          <line x1="190" y1="120" x2="200" y2="110" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.4" />
          <line x1="140" y1="155" x2="130" y2="165" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.4" />
          <line x1="190" y1="155" x2="200" y2="165" stroke="#0F6FFF" strokeWidth="0.5" opacity="0.4" />
        </g>

        <g className="animate-float" opacity="0.5">
          <rect x="420" y="140" width="60" height="40" fill="none" stroke="#2CB5A5" strokeWidth="0.8" strokeDasharray="4 2" />
          <polygon points="435,155 450,148 465,155 450,162" fill="none" stroke="#FF6B5B" strokeWidth="0.6" />
          <rect x="440" y="165" width="20" height="10" fill="none" stroke="#0F6FFF" strokeWidth="0.6" strokeDasharray="2 2" />
        </g>

        {/* CAD crosshairs */}
        <g className="animate-blink">
          <line x1="350" y1="130" x2="350" y2="150" stroke="#0F6FFF" strokeWidth="1" />
          <line x1="340" y1="140" x2="360" y2="140" stroke="#0F6FFF" strokeWidth="1" />
        </g>
        <g className="animate-blink" style={{ animationDelay: "1s" }}>
          <line x1="100" y1="180" x2="100" y2="196" stroke="#2CB5A5" strokeWidth="0.8" />
          <line x1="92" y1="188" x2="108" y2="188" stroke="#2CB5A5" strokeWidth="0.8" />
        </g>

        {/* Dimension lines */}
        <g opacity="0.4" stroke="#111" strokeWidth="0.5" fill="#111" fontSize="6" fontFamily="monospace">
          <line x1="180" y1="330" x2="300" y2="330" />
          <line x1="180" y1="326" x2="180" y2="334" />
          <line x1="300" y1="326" x2="300" y2="334" />
          <text x="230" y="345">120mm</text>
        </g>

        {/* Pixel accent dots */}
        <rect x="50" y="60" width="4" height="4" fill="#0F6FFF" opacity="0.3" />
        <rect x="58" y="60" width="4" height="4" fill="#2CB5A5" opacity="0.3" />
        <rect x="50" y="68" width="4" height="4" fill="#FF8C42" opacity="0.3" />
        <rect x="540" y="200" width="4" height="4" fill="#FF6B5B" opacity="0.3" />
        <rect x="548" y="200" width="4" height="4" fill="#7FDBCA" opacity="0.3" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="upload"
      className="relative min-h-screen overflow-hidden pt-28 pb-20 lg:pt-32"
    >
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-teal/10 via-ocean/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-coral/8 via-sunset/5 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
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

            <ul className="mt-6 space-y-2">
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

            <div className="mt-10 flex flex-wrap items-center gap-4">
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

          <div className="relative">
            <div className="scanlines relative overflow-hidden rounded-2xl border border-charcoal/5 bg-white/40 p-4 shadow-2xl shadow-ocean/5 backdrop-blur-sm lg:p-6">
              <HeroIllustration />
            </div>
            <div className="absolute -bottom-4 -left-4 font-mono text-[10px] text-charcoal/30">
              ISO 9001 · TRACEABLE LOTS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
