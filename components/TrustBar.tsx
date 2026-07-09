const signals = [
  "Material certifications included",
  "Traceable supply chain",
  "Fast turnaround workflow",
  "Aerospace + semiconductor compatible",
];

const materials = ["PEEK", "PEI", "POM", "Nylon", "G10"];

export default function TrustBar() {
  return (
    <section className="border-y border-charcoal/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {materials.map((name) => (
            <span
              key={name}
              className="font-mono text-sm tracking-widest text-charcoal/40"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 border-t border-charcoal/5 pt-6">
          {signals.map((signal) => (
            <span
              key={signal}
              className="font-mono text-[10px] tracking-wider text-charcoal/45"
            >
              {signal.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
