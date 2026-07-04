export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-charcoal/5 bg-off-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden>
              <rect x="4" y="12" width="24" height="16" fill="#0F6FFF" rx="1" />
              <polygon points="4,12 16,4 28,12" fill="#2CB5A5" />
              <rect x="12" y="18" width="8" height="6" fill="#FAFAF7" opacity="0.9" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight text-charcoal">
            Blue Ocean Materials
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#materials"
            className="text-sm text-charcoal/60 transition-colors hover:text-charcoal"
          >
            Materials
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
            href="#quote"
            className="hidden text-sm font-medium text-charcoal/70 transition-colors hover:text-charcoal sm:block"
          >
            Request Quote
          </a>
          <a
            href="#upload"
            className="rounded-lg bg-ocean px-4 py-2 text-sm font-medium text-white transition-all hover:bg-ocean/90 hover:shadow-lg hover:shadow-ocean/20"
          >
            Upload CAD
          </a>
        </div>
      </nav>
    </header>
  );
}
