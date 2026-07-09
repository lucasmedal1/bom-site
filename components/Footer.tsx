import Logo from "@/components/Logo";

const links = {
  Products: ["PEEK", "PEI", "POM", "Nylon", "G10"],
  Industries: ["Semiconductors", "Aerospace", "Medical", "Robotics"],
  Company: ["About", "Contact"],
};

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <Logo variant="light" className="h-8 w-8 shrink-0" />
              <span className="text-sm font-semibold text-charcoal">
                Blue Ocean Materials
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/50">
              Precision-cut engineering plastics.
              Operational supply for industrial buyers.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="mailto:lucas@blueoceanmaterials.com"
                className="block font-mono text-xs text-charcoal/40 transition-colors hover:text-ocean"
              >
                lucas@blueoceanmaterials.com
              </a>
              <a
                href="tel:+16506445101"
                className="block font-mono text-xs text-charcoal/40 transition-colors hover:text-ocean"
              >
                (650) 644-5101
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
                      href={
                        item === "PEEK" ||
                        item === "PEI" ||
                        item === "POM" ||
                        item === "Nylon" ||
                        item === "G10"
                          ? "#materials"
                          : "#"
                      }
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
          <p className="font-mono text-[10px] text-charcoal/30">
            CERTIFIED · TRACEABLE · OPERATIONAL
          </p>
        </div>
      </div>
    </footer>
  );
}
