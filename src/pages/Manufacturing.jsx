import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2 } from "lucide-react";

export default function Manufacturing() {
  const capabilities = [
    "Over-molding & Insert Molding",
    "2-Shot Injection Molding",
    "High-cavitation Production Run",
    "Cleanroom Setup (ISO Class 8)",
    "Automation & Robot Extraction",
    "Post-molding Assemblies"
  ];

  return (
    <Layout
      title="Manufacturing Process | UDAN Metaplast"
      description="Learn about our high precision manufacturing infrastructure and injection molding capabilities."
    >
      <PageHero
        eyebrow="Infrastructure"
        title="State-of-the-art injection molding."
        description="Our manufacturing capability combines automated production cells with meticulous engineering controls to deliver zero-defect parts at scale."
      />

      <section className="py-28 lg:py-36 bg-background">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <Reveal className="lg:col-span-6">
              <div className="eyebrow">Production Cells</div>
              <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-primary leading-[1.1]">
                Advanced moulding and assembly facility.
              </h2>
              <p className="mt-6 text-lg text-ink-muted leading-relaxed">
                Our facility features highly automated hydraulic and electric injection molding machines ranging from 50 to 800-ton capacities. This allows us to manufacture components of varied sizes and complexities, from micro-precision parts to large industrial casings.
              </p>
              
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-sm font-medium text-ink">{cap}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-surface border border-hairline shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1565439390118-c2b3e8e1f0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Injection Molding Cell"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface border-y border-hairline">
        <div className="container-x grid md:grid-cols-3 gap-8">
          <Reveal>
            <div className="font-display font-bold text-4xl text-primary">50 - 800 T</div>
            <div className="mt-2 text-sm text-ink-muted uppercase tracking-wider font-semibold">Clamping Force Range</div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="font-display font-bold text-4xl text-primary">ISO Class 8</div>
            <div className="mt-2 text-sm text-ink-muted uppercase tracking-wider font-semibold">Cleanroom Manufacturing</div>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="font-display font-bold text-4xl text-primary">24 / 7</div>
            <div className="mt-2 text-sm text-ink-muted uppercase tracking-wider font-semibold">Continuous Operations</div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
