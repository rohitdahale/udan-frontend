import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const productLines = [
    {
      title: "Injection Molded Parts",
      tag: "Series 01",
      desc: "Complex geometries with tight tolerances. We leverage cutting-edge injection molding technology to deliver high volumes with zero defect tolerance.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      specs: ["High Cavitation", "Automated Cells", "Hot Runner Options"]
    },
    {
      title: "Custom Plastic Components",
      tag: "Series 02",
      desc: "Designed and engineered exactly to your technical specifications. Built to withstand demanding stress, temperatures, and physical requirements.",
      img: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1200&q=80",
      specs: ["Engineering Grade Polymers", "Insert Molding", "Overmolding"]
    },
    {
      title: "Packaging Products",
      tag: "Series 03",
      desc: "Sustainable and reliable packaging solutions for medical, cosmetic, and FMCG sectors. Engineered for high cycle efficiency and clean release.",
      img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      specs: ["High Cycle Speed", "Clean Room Grade", "Precise Closures"]
    }
  ];

  return (
    <Layout
      title="Our Products | UDAN Metaplast"
      description="Explore our range of premium plastic injection molded products and custom components."
    >
      <PageHero
        eyebrow="Our Products"
        title="Precision engineered solutions."
        description="We manufacture custom tooling and high-precision plastic components that meet the rigorous standards of global manufacturers."
      />

      <section className="py-28 lg:py-36 bg-background">
        <div className="container-x">
          <div className="grid gap-16 lg:gap-24">
            {productLines.map((prod, idx) => (
              <Reveal key={prod.title} delay={idx * 0.05}>
                <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="lg:col-span-7 relative group overflow-hidden rounded-[2rem] bg-surface border border-hairline">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-[10px] tracking-[0.28em] uppercase font-semibold text-primary">
                      {prod.tag}
                    </div>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="text-[10px] tracking-[0.32em] uppercase text-secondary font-semibold">— 0{idx + 1}</div>
                    <h3 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-primary tracking-[-0.025em] leading-[1.1]">{prod.title}</h3>
                    <p className="mt-5 text-lg text-ink-muted leading-relaxed">{prod.desc}</p>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {prod.specs.map((s) => (
                        <li key={s} className="px-3 py-1.5 rounded-full bg-surface border border-hairline text-xs font-medium text-ink">
                          {s}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="group mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                    >
                      Request Technical Spec
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-t border-hairline">
        <div className="container-x text-center max-w-3xl">
          <Reveal>
            <div className="eyebrow">Custom Solutions</div>
            <h2 className="mt-4 font-display font-bold text-3xl lg:text-4xl text-primary">Need a custom component?</h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">
              We work directly with your engineering teams to develop prototypes, design moulds, and run high-volume production batches aligned to your specifications.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-all"
            >
              Consult with an Engineer
            </a>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
