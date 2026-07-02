import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Car, HeartPulse, Laptop, Plane, Settings2, Package } from "lucide-react";

const industries = [
  { name: "Automotive", desc: "Dashboard components, internal trims, structural sections and critical under-the-hood components.", icon: Car },
  { name: "Medical Devices", desc: "Sterile surgical instruments, diagnostics tools, casing sets, and laboratory equipment parts.", icon: HeartPulse },
  { name: "Consumer Electronics", desc: "Durable outer casings, micro connectors, keypads, and high-precision internal structural brackets.", icon: Laptop },
  { name: "Aerospace", desc: "High-spec, low-weight, and heat-resistant polymer assemblies for cabin interiors and electronics casing.", icon: Plane },
  { name: "Industrial Equipment", desc: "Heavy-duty gears, protective instrument enclosures, valves, and resilient functional parts.", icon: Settings2 },
  { name: "Packaging", desc: "Custom closures, tamper-evident caps, thin-wall containers, and medical dispensing closures.", icon: Package }
];

export default function IndustriesServed() {
  return (
    <Layout
      title="Industries Served | UDAN Metaplast"
      description="Learn about the global industries we serve with our precision plastic components and tooling."
    >
      <PageHero
        eyebrow="Sectors"
        title="Engineering for critical industries."
        description="Our moulds and precision plastic components are trusted across safety-critical and high-aesthetic sectors worldwide."
      />

      <section className="py-28 lg:py-36 bg-background">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Our Footprint</div>
            <h2 className="mt-4 font-display font-bold text-3xl lg:text-5xl text-primary leading-[1.1]">
              Engineered solutions across applications.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.name} delay={idx * 0.05}>
                  <div className="group border border-hairline bg-surface p-10 rounded-3xl h-full hover:bg-background hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary mb-4">{ind.name}</h3>
                    <p className="text-lg text-ink-muted leading-relaxed">{ind.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs tracking-[0.22em] uppercase font-semibold text-accent">Global Supply Chain</div>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl leading-[1.05]">
              Seamless logistics for international brands.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/75 leading-relaxed">
              We ship precision moulds and high-volume components directly to manufacturing facilities across North America, Europe, and Asia. Our logistics team handles full customs clearance and documentation to ensure on-time delivery.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
