const links = {
  Products: ["PEEK", "Ultem", "Delrin", "PTFE", "All Materials"],
  Industries: ["Semiconductors", "Medical", "Aerospace", "Robotics"],
  Company: ["About", "Contact", "Careers"],
};

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3">
              <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden>
                <rect x="4" y="12" width="24" height="16" fill="#0F6FFF" rx="1" />
                <polygon points="4,12 16,4 28,12" fill="#2CB5A5" />
                <rect x="12" y="18" width="8" height="6" fill="#FAFAF7" opacity="0.9" />
              </svg>
              <span className="text-sm font-semibold text-charcoal">
                Blue Ocean Materials
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/50">
              The next generation digital infrastructure for engineering materials.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-charcoal/40 transition-colors hover:text-ocean"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <span className="text-charcoal/20">·</span>
              <a
                href="mailto:hello@blueoceanmaterials.com"
                className="font-mono text-xs text-charcoal/40 transition-colors hover:text-ocean"
              >
                Email
              </a>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-mono text-[10px] tracking-widest text-charcoal/40">
                {category.toUpperCase()}
              </h4>
              <ul className="mt-4 space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-charcoal/60 transition-colors hover:text-charcoal"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-charcoal/5 pt-8 sm:flex-row">
          <p className="font-mono text-[10px] text-charcoal/30">
            © {new Date().getFullYear()} Blue Ocean Materials. All rights reserved.
          </p>
          <div className="flex items-center gap-1 opacity-30">
            <div className="h-1 w-1 bg-ocean" />
            <div className="h-1 w-1 bg-teal" />
            <div className="h-1 w-1 bg-sunset" />
            <div className="h-1 w-1 bg-coral" />
          </div>
        </div>
      </div>
    </footer>
  );
}
