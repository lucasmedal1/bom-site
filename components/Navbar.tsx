export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-charcoal/5 bg-off-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="font-display text-sm font-semibold tracking-wide text-charcoal">
          Blue Ocean Materials
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#materials"
            className="text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Materials
          </a>
          <a
            href="#finishing"
            className="text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Finishing
          </a>
          <a
            href="#industries"
            className="text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Industries
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            How It Works
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="mailto:lucas@blueoceanmaterials.com?subject=Quote%20Request"
            className="btn btn-primary px-4 py-2 text-sm"
          >
            Request a Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
