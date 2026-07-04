export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-charcoal/5 py-32 lg:py-40">
      <div className="absolute inset-0 blueprint-grid opacity-40" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <p className="font-mono text-xs tracking-widest text-ocean/60">
          PLACE AN ORDER
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
          Need Engineering Plastics Fast?
        </h2>
        <p className="mt-4 text-lg text-charcoal/60">
          Request a quote today. Most requests answered in under 30 minutes
          during business hours.
        </p>

        <a
          href="mailto:lucas@blueoceanmaterials.com?subject=Quote%20Request"
          className="btn btn-primary mt-10 px-10 py-5 text-sm shadow-lg shadow-ocean/20"
        >
          Request a Quote
        </a>

        <p className="mt-6 font-mono text-xs text-charcoal/40">
          CERTIFICATIONS INCLUDED · NATIONWIDE SHIPPING
        </p>
      </div>
    </section>
  );
}
