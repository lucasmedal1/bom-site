function MaterialIcon({ type }: { type: string }) {
  const configs: Record<string, { top: string; side: string; front: string; shape: "block" | "sheet" | "rod" }> = {
    PEEK: { top: "#7FDBCA", side: "#2CB5A5", front: "#1a9a8c", shape: "block" },
    Ultem: { top: "#FF8C42", side: "#FF6B5B", front: "#e55a4a", shape: "sheet" },
    Delrin: { top: "#FAFAF7", side: "#E8DFD0", front: "#d4cbb8", shape: "rod" },
    PTFE: { top: "#0F6FFF", side: "#0a52cc", front: "#083d99", shape: "block" },
    PPS: { top: "#E8DFD0", side: "#c9b99a", front: "#b0a080", shape: "sheet" },
    PVDF: { top: "#2CB5A5", side: "#1a9a8c", front: "#147a6e", shape: "block" },
    Nylon: { top: "#FF6B5B", side: "#e55a4a", front: "#cc4a3a", shape: "rod" },
    HDPE: { top: "#7FDBCA", side: "#5bc4b0", front: "#3aad98", shape: "sheet" },
  };

  const c = configs[type] || configs.PEEK;

  if (c.shape === "rod") {
    return (
      <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden>
        <ellipse cx="40" cy="60" rx="20" ry="6" fill={c.front} opacity="0.3" />
        <rect x="28" y="20" width="24" height="42" fill={c.side} rx="2" />
        <ellipse cx="40" cy="20" rx="12" ry="5" fill={c.top} />
        <ellipse cx="40" cy="20" rx="8" ry="3" fill="white" opacity="0.2" />
      </svg>
    );
  }

  if (c.shape === "sheet") {
    return (
      <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden>
        <polygon points="10,50 40,30 70,50 40,70" fill={c.front} opacity="0.5" />
        <polygon points="10,50 40,30 40,10 10,30" fill={c.side} opacity="0.7" />
        <polygon points="40,10 70,30 40,30" fill={c.top} />
        <line x1="40" y1="10" x2="40" y2="30" stroke="white" strokeWidth="0.5" opacity="0.3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden>
      <polygon points="20,45 45,30 70,45 45,60" fill={c.top} />
      <polygon points="70,45 70,60 45,75 45,60" fill={c.side} />
      <polygon points="20,45 20,60 45,75 45,60" fill={c.front} />
      <line x1="32" y1="40" x2="58" y2="40" stroke="white" strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

const materials = [
  { name: "PEEK", desc: "High-temp, chemical resistant" },
  { name: "Ultem", desc: "Flame retardant, structural" },
  { name: "Delrin", desc: "Low friction acetal" },
  { name: "PTFE", desc: "Non-stick, chemically inert" },
  { name: "PPS", desc: "Dimensional stability" },
  { name: "PVDF", desc: "UV and chemical resistance" },
  { name: "Nylon", desc: "Tough, wear resistant" },
  { name: "HDPE", desc: "Lightweight, impact resistant" },
];

export default function MaterialsGrid() {
  return (
    <section id="materials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-widest text-ocean/60">
            CATALOG
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Materials
          </h2>
          <p className="mt-4 text-charcoal/60">
            Advanced engineering plastics, precision-cut to your specifications.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((mat) => (
            <div
              key={mat.name}
              className="group relative overflow-hidden rounded-2xl border border-charcoal/5 bg-white p-6 transition-all hover:border-ocean/20 hover:shadow-lg hover:shadow-ocean/5"
            >
              <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-ocean/5 to-transparent transition-opacity group-hover:opacity-100 opacity-0" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-mono text-sm font-semibold tracking-wide text-charcoal">
                    {mat.name}
                  </h3>
                  <p className="mt-1 text-xs text-charcoal/50">{mat.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex justify-center transition-transform group-hover:scale-110 group-hover:-translate-y-1">
                <MaterialIcon type={mat.name} />
              </div>
              <div className="mt-4 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="font-mono text-[10px] text-ocean">VIEW SPECS →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
