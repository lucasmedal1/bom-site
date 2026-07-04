const features = [
  {
    title: "Buy Only What You Need",
    description: [
      "No oversized inventory.",
      "No unnecessary waste.",
      "Just the exact blank required.",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <rect x="8" y="20" width="32" height="20" fill="#0F6FFF" opacity="0.15" rx="2" />
        <polygon points="8,20 24,8 40,20" fill="#2CB5A5" opacity="0.3" />
        <rect x="18" y="28" width="12" height="8" fill="#0F6FFF" opacity="0.4" rx="1" />
        <line x1="4" y1="44" x2="44" y2="44" stroke="#111" strokeWidth="0.5" opacity="0.2" strokeDasharray="2 2" />
      </svg>
    ),
    accent: "bg-teal/10 border-teal/20",
  },
  {
    title: "Quote in Under 30 Minutes",
    description: [
      "No email chains.",
      "No waiting days.",
      "Fast engineering support.",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <circle cx="24" cy="24" r="18" fill="none" stroke="#0F6FFF" strokeWidth="1.5" opacity="0.3" />
        <circle cx="24" cy="24" r="14" fill="none" stroke="#2CB5A5" strokeWidth="1" opacity="0.2" />
        <line x1="24" y1="24" x2="24" y2="14" stroke="#0F6FFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="24" x2="32" y2="24" stroke="#FF8C42" strokeWidth="1.5" strokeLinecap="round" />
        <text x="24" y="42" textAnchor="middle" fontSize="6" fill="#111" opacity="0.3" fontFamily="monospace">&lt;30</text>
      </svg>
    ),
    accent: "bg-ocean/10 border-ocean/20",
  },
  {
    title: "Material Certifications Included",
    description: [
      "Traceability.",
      "Documentation.",
      "Industrial-grade quality.",
    ],
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" aria-hidden>
        <rect x="10" y="6" width="28" height="36" fill="#FAFAF7" stroke="#0F6FFF" strokeWidth="1" opacity="0.5" rx="2" />
        <line x1="16" y1="16" x2="32" y2="16" stroke="#2CB5A5" strokeWidth="1.5" opacity="0.5" />
        <line x1="16" y1="22" x2="28" y2="22" stroke="#111" strokeWidth="0.8" opacity="0.2" />
        <line x1="16" y1="28" x2="30" y2="28" stroke="#111" strokeWidth="0.8" opacity="0.2" />
        <polygon points="30,32 34,36 26,36" fill="#2CB5A5" opacity="0.4" />
      </svg>
    ),
    accent: "bg-mint/20 border-teal/20",
  },
];

export default function WhySection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pixel-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-widest text-ocean/60">
            WHY BLUE OCEAN
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Why Blue Ocean Materials?
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group rounded-2xl border bg-white p-8 transition-all hover:shadow-lg hover:shadow-ocean/5 ${feature.accent}`}
            >
              <div className="mb-6 transition-transform group-hover:scale-105">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-charcoal">
                {feature.title}
              </h3>
              <div className="mt-4 space-y-1">
                {feature.description.map((line) => (
                  <p key={line} className="text-sm leading-relaxed text-charcoal/60">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
