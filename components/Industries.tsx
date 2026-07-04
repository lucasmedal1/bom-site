function IndustryIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Semiconductors: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect x="6" y="6" width="20" height="20" fill="currentColor" opacity="0.15" />
        <rect x="10" y="10" width="12" height="12" fill="currentColor" opacity="0.3" />
        <rect x="14" y="14" width="4" height="4" fill="currentColor" />
        <rect x="14" y="2" width="4" height="4" fill="currentColor" opacity="0.5" />
        <rect x="14" y="26" width="4" height="4" fill="currentColor" opacity="0.5" />
        <rect x="2" y="14" width="4" height="4" fill="currentColor" opacity="0.5" />
        <rect x="26" y="14" width="4" height="4" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    "Medical Devices": (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect x="13" y="4" width="6" height="24" fill="currentColor" opacity="0.4" />
        <rect x="4" y="13" width="24" height="6" fill="currentColor" opacity="0.4" />
        <rect x="14" y="14" width="4" height="4" fill="currentColor" />
      </svg>
    ),
    Aerospace: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <polygon points="16,4 20,14 28,16 20,18 16,28 12,18 4,16 12,14" fill="currentColor" opacity="0.3" />
        <polygon points="16,10 18,16 24,16 18,18 16,24 14,18 8,16 14,16" fill="currentColor" />
      </svg>
    ),
    Defense: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="1" />
        <polygon points="16,10 22,13 22,19 16,22 10,19 10,13" fill="currentColor" opacity="0.5" />
        <rect x="14" y="14" width="4" height="4" fill="currentColor" />
      </svg>
    ),
    "Industrial Automation": (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect x="4" y="12" width="8" height="8" fill="currentColor" opacity="0.3" />
        <rect x="12" y="8" width="8" height="8" fill="currentColor" opacity="0.5" />
        <rect x="20" y="12" width="8" height="8" fill="currentColor" opacity="0.3" />
        <rect x="12" y="20" width="8" height="8" fill="currentColor" opacity="0.4" />
        <rect x="14" y="14" width="4" height="4" fill="currentColor" />
      </svg>
    ),
    Robotics: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
        <rect x="8" y="8" width="16" height="12" fill="currentColor" opacity="0.3" rx="1" />
        <rect x="12" y="12" width="4" height="4" fill="currentColor" />
        <rect x="18" y="12" width="4" height="4" fill="currentColor" />
        <rect x="10" y="22" width="4" height="6" fill="currentColor" opacity="0.5" />
        <rect x="18" y="22" width="4" height="6" fill="currentColor" opacity="0.5" />
        <rect x="14" y="4" width="4" height="4" fill="currentColor" opacity="0.4" />
      </svg>
    ),
  };

  return icons[name] || null;
}

const industries = [
  "Semiconductors",
  "Medical Devices",
  "Aerospace",
  "Defense",
  "Industrial Automation",
  "Robotics",
];

export default function Industries() {
  return (
    <section id="industries" className="relative border-y border-charcoal/5 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-widest text-teal/80">
            APPLICATIONS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Industries
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group flex items-center gap-5 rounded-xl border border-charcoal/5 bg-off-white p-6 transition-all hover:border-charcoal/10 hover:bg-white hover:shadow-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-charcoal/5 text-charcoal transition-colors group-hover:bg-ocean/10 group-hover:text-ocean">
                <IndustryIcon name={industry} />
              </div>
              <div>
                <h3 className="font-medium text-charcoal">{industry}</h3>
                <p className="mt-0.5 font-mono text-[10px] tracking-wider text-charcoal/40">
                  ENGINEERING GRADE
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
