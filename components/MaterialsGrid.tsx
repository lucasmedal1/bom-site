import Image from "next/image";

type Material = {
  name: string;
  chemical: string;
  desc: string;
  spec: string;
  forms: string[];
  image: string;
  accent: string;
};

const materials: Material[] = [
  {
    name: "PEEK",
    chemical: "Polyether ether ketone",
    desc: "High-temperature, chemical resistant performance polymer.",
    spec: "Aerospace · Semiconductor · Medical",
    forms: ["Sheet", "Rod", "Tube"],
    image: "/peek_img.jpg",
    accent: "#2CB5A5",
  },
  {
    name: "PEI",
    chemical: "Polyetherimide",
    desc: "Flame-retardant structural grade for demanding environments.",
    spec: "Aerospace · Medical · Electronics",
    forms: ["Sheet", "Rod"],
    image: "/pei_img.jpg",
    accent: "#FF8C42",
  },
  {
    name: "POM",
    chemical: "Polyoxymethylene (Acetal)",
    desc: "Low-friction, dimensionally stable machining stock.",
    spec: "Automation · Machining · Industrial",
    forms: ["Sheet", "Rod"],
    image: "/pom_img.png",
    accent: "#111111",
  },
  {
    name: "Nylon",
    chemical: "Polyamide",
    desc: "Tough, wear-resistant material for mechanical applications.",
    spec: "Industrial · Robotics · Automotive",
    forms: ["Sheet", "Rod", "Tube"],
    image: "/nylon_img.jpg",
    accent: "#FF6B5B",
  },
];

function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="group flex h-full flex-col border border-charcoal/10 bg-white transition-colors hover:border-charcoal/20">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/[0.03]">
        <Image
          src={material.image}
          alt={`${material.name} engineering plastic components`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="absolute inset-x-0 top-0 h-0.5"
          style={{ backgroundColor: material.accent }}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-wide text-charcoal">
              {material.name}
            </h3>
            <p className="mt-0.5 font-mono text-[10px] tracking-wide text-charcoal/45">
              {material.chemical}
            </p>
          </div>
          <span className="shrink-0 border border-teal/20 bg-teal/5 px-2 py-1 font-mono text-[9px] tracking-wider text-teal">
            IN STOCK
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/65">
          {material.desc}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {material.forms.map((form) => (
            <span
              key={form}
              className="border border-charcoal/8 px-2 py-0.5 font-mono text-[9px] tracking-wider text-charcoal/50"
            >
              {form.toUpperCase()}
            </span>
          ))}
        </div>

        <p className="mt-4 border-t border-charcoal/8 pt-3 font-mono text-[10px] tracking-wide text-charcoal/40">
          {material.spec}
        </p>
      </div>
    </article>
  );
}

export default function MaterialsGrid() {
  return (
    <section id="materials" className="relative border-y border-charcoal/5 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs tracking-widest text-ocean/60">
            INVENTORY
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Engineering Polymers
          </h2>
          <p className="mt-4 text-charcoal/60">
            Certified materials in standard stock forms — sheet, rod, and tube.
            Precision-cut to your specification and ready for immediate quoting.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((material) => (
            <MaterialCard key={material.name} material={material} />
          ))}
        </div>

        <p className="mt-10 text-center font-mono text-[10px] tracking-wider text-charcoal/35">
          ADDITIONAL GRADES AND CUSTOM FABRICATION AVAILABLE ON REQUEST
        </p>
      </div>
    </section>
  );
}
