const materials = ["PEEK", "Ultem®", "Delrin®", "PTFE", "PPS", "PVDF"];

export default function TrustBar() {
  return (
    <section className="border-y border-charcoal/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {materials.map((name) => (
            <span
              key={name}
              className="font-mono text-sm tracking-widest text-charcoal/40 transition-colors hover:text-charcoal/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
