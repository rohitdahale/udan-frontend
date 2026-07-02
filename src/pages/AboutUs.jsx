import React from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Compass, Eye, Flag, Gem, HeartHandshake, Sparkles } from "lucide-react";
import factoryImg from "@/assets/electronica injection molding 200 ton x3.jpg.jpeg";

export default function AboutUs() {
  return (
    <Layout
      title="About UDAN Metaplast — Precision Mould Manufacturers"
      description="Our story, mission and the engineering philosophy behind UDAN Metaplast's precision moulds and custom tooling."
    >
      <PageHero
        eyebrow="About UDAN"
        title="A precision story, fifteen years in the making."
        description="UDAN Metaplast was founded on a simple conviction — that great products begin with great tooling. Today we engineer moulds for some of the most demanding manufacturers in the world."
      />

      <section className="py-28 lg:py-36 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <div className="eyebrow">Our story</div>
            <h2 className="mt-5 font-display font-bold text-3xl lg:text-5xl text-primary leading-[1.1]">
              From a small toolroom to a globally trusted manufacturing partner.
            </h2>
            <div className="mt-8 space-y-6 text-lg text-ink-muted leading-relaxed">
              <p>
                What began as a focused toolroom has evolved into a full-spectrum precision
                mould manufacturing facility — supplying automotive OEMs, international luggage
                brands and industrial product manufacturers.
              </p>
              <p>
                Every year, we invest in machinery, people and process — because the standard
                of tooling defines the standard of every product made from it.
              </p>
              <p>
                Today, UDAN Metaplast operates a modern facility with advanced CNC, VMC, EDM
                and Wire Cut equipment, supported by a team of seasoned engineers and
                toolmakers.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-hairline">
              <img src={factoryImg} alt="UDAN Metaplast facility" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-surface border-y border-hairline">
        <div className="container-x grid md:grid-cols-2 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
          {[
            { icon: Flag, title: "Mission", desc: "To engineer precision tooling that elevates the quality, efficiency and global competitiveness of every manufacturer we partner with." },
            { icon: Eye, title: "Vision", desc: "To be recognised as one of the most trusted precision mould manufacturers, known for engineering depth, reliability and craftsmanship." },
          ].map((b) => (
            <div key={b.title} className="bg-background p-10 lg:p-14">
              <b.icon className="w-7 h-7 text-secondary" />
              <h3 className="mt-6 font-display font-bold text-3xl text-primary">{b.title}</h3>
              <p className="mt-4 text-lg text-ink-muted leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-background">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <div className="eyebrow">Core values</div>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl text-primary leading-[1.05]">
              The principles behind every project.
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gem, t: "Craftsmanship", d: "Every mould reflects decades of accumulated toolmaking expertise." },
              { icon: Sparkles, t: "Precision", d: "Tolerances measured in microns — held without compromise." },
              { icon: HeartHandshake, t: "Partnership", d: "We see ourselves as an extension of our clients' engineering teams." },
              { icon: Compass, t: "Integrity", d: "Honest timelines, transparent process and complete accountability." },
            ].map((v) => (
              <Reveal key={v.t}>
                <div className="h-full p-8 rounded-2xl border border-hairline bg-surface hover:bg-background hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <v.icon className="w-6 h-6 text-secondary" />
                  <h3 className="mt-6 font-display font-bold text-xl text-primary">{v.t}</h3>
                  <p className="mt-3 text-ink-muted">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-primary text-white">
        <div className="container-x grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div className="text-xs tracking-[0.22em] uppercase font-semibold text-accent">Manufacturing excellence</div>
            <h2 className="mt-5 font-display font-bold text-4xl lg:text-5xl leading-[1.05]">
              Precision is a system, not an accident.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-white/75 leading-relaxed">
              Every project flows through a disciplined sequence of design review, tooling
              engineering, machining, inspection and trial. Our processes ensure that quality
              is built in at every step — not corrected afterwards.
            </p>
            <p className="mt-6 text-lg text-white/75 leading-relaxed">
              Our leadership philosophy is rooted in engineering humility — listen carefully,
              measure precisely and deliver consistently. It is how we have grown from a
              single workshop to a globally trusted partner.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
