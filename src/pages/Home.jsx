import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Reveal } from "@/components/Reveal";
import { Hero } from "@/components/Hero";
import { Counter } from "@/components/Counter";

// Local image assets
import heroImg from "@/assets/asset1.jpeg";
import factoryImg from "@/assets/electronica injection molding 200 ton x3.jpg.jpeg";
import qualityImg from "@/assets/Blohm Simplex 7 Surface Grinder.jpg.jpeg";
import cncImg from "@/assets/VMC Haas VF-2.jpg.jpeg";

// Unsplash premium image URLs for the showcases
const autoImg = "https://images.unsplash.com/photo-1617400324476-7484b3c16558?auto=format&fit=crop&w=1200&q=80";
const luggageImg = "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1200&q=80";
const injectionImg = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80";
const customImg = "https://images.unsplash.com/photo-1612550761236-e813928f7271?auto=format&fit=crop&w=1200&q=80";
const processImg = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80";

export default function Homepage() {
  return (
    <Layout
      title="UDAN Metaplast — Engineering Precision. Building Excellence."
      description="Precision moulds and custom tooling engineered for automotive, luggage and industrial OEMs. 15+ years of manufacturing excellence."
    >
      <Hero />
      <TrustBar />
      <Manifesto />
      <Industries />
      <ProductShowcase />
      <Capabilities />
      <MachineryInteractive />
      <Process />
      <WhyChoose />
      <Quality />
      <Testimonials />
      <ContactCTA />
    </Layout>
  );
}

/* ---------------- TrustBar ---------------- */
function TrustBar() {
  const items = [
    "ISO 9001:2015",
    "IATF 16949",
    "Global OEMs",
    "15+ Years",
    "500+ Projects",
    "±0.01mm",
  ];
  return (
    <section className="relative bg-[#020c06] text-white border-b border-white/5">
      <div className="container-x py-6 grid grid-cols-2 md:grid-cols-6 gap-y-4 gap-x-8 items-center">
        {items.map((it) => (
          <div key={it} className="text-[11px] tracking-[0.28em] uppercase text-white/55 text-center md:text-left font-semibold">
            {it}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Manifesto ---------------- */
function Manifesto() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative py-32 lg:py-48 bg-background overflow-hidden">
      <motion.div
        style={{ y }}
        aria-hidden
        className="absolute -right-32 top-20 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20"
      >
        <div className="w-full h-full" style={{ background: "radial-gradient(circle, var(--secondary), transparent 60%)" }} />
      </motion.div>

      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 items-end mb-16 lg:mb-24">
          <Reveal className="col-span-12 lg:col-span-2">
            <div className="eyebrow">02 · Ethos</div>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-10">
            <h2 className="font-display font-bold text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-primary">
              Precision is not a feature. <br/>
              <span className="italic font-light text-ink-muted">It is the foundation</span>{" "}
              <span className="text-secondary">of everything we engineer.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5 lg:col-start-3">
            <p className="text-lg lg:text-xl text-ink leading-relaxed">
              For over fifteen years, UDAN Metaplast has built moulds and tooling
              that shape the products you use every day — from automotive interiors
              to global travel luggage and high-volume industrial components.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-base lg:text-lg text-ink-muted leading-relaxed">
              We pair advanced CNC, EDM and inspection technology with a deeply
              experienced engineering team. Every project starts with one
              question: how do we hold this tolerance, every cycle, for a decade?
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-primary font-semibold"
            >
              Read our story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* Big animated counter band */}
        <div className="mt-24 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-px bg-hairline border border-hairline rounded-3xl overflow-hidden">
          {[
            { v: <Counter to={15} suffix="+" />, l: "Years of Engineering" },
            { v: <Counter to={500} suffix="+" />, l: "Projects Delivered" },
            { v: <Counter to={25} suffix="+" />, l: "Precision Machines" },
            { v: <Counter to={98} suffix="%" />, l: "On-Time Delivery" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-background p-8 lg:p-10">
                <div className="font-display font-bold text-4xl lg:text-6xl text-primary tracking-tight">{s.v}</div>
                <div className="mt-2 text-xs tracking-[0.22em] uppercase text-ink-muted font-semibold">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries (Bento) ---------------- */
function Industries() {
  const items = [
    { title: "Automotive", desc: "Interior trims, structural parts and under-the-hood components for global OEMs.", img: autoImg, span: "md:col-span-2 md:row-span-2" },
    { title: "Luggage", desc: "Hard-shell moulds for premium travel brands.", img: luggageImg, span: "" },
    { title: "Industrial", desc: "High-volume tooling and engineered enclosures.", img: injectionImg, span: "" },
    { title: "Consumer Products", desc: "Appliances, electronics housings, durables.", img: customImg, span: "md:col-span-2" },
  ];
  return (
    <section className="py-28 lg:py-40 bg-[#0a0f0c] text-white border-y border-white/5 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(102,187,106,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(102,187,106,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 items-end mb-16">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="text-[11px] tracking-[0.28em] uppercase text-accent font-semibold">03 · Industries</div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.035em]">
              Trusted across the industries <span className="italic font-light text-white/60">that demand the most.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-white/60 leading-relaxed">
              From safety-critical automotive components to mirror-finish consumer
              goods, our tooling holds tolerance across millions of cycles.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 md:auto-rows-[280px] gap-4 lg:gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} className={it.span}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#020c06]">
                <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-all duration-[1400ms] ease-out group-hover:opacity-80 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020c06] via-[#020c06]/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 lg:p-9">
                  <div className="text-[10px] tracking-[0.28em] uppercase text-accent font-semibold">0{i + 1}</div>
                  <h3 className="mt-3 font-display font-bold text-2xl lg:text-3xl">{it.title}</h3>
                  <p className="mt-2 text-sm text-white/65 max-w-md">{it.desc}</p>
                  <ArrowUpRight className="absolute top-7 right-7 w-5 h-5 text-white/40 transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Product Showcase (sticky scroll) ---------------- */
function ProductShowcase() {
  const products = [
    { title: "Automotive Moulds", tag: "Series 01", desc: "Precision tooling for vehicle interiors, exteriors and structural plastics — engineered for OEM tolerances.", img: autoImg, specs: ["Multi-cavity", "Hot-runner ready", "±0.01mm"] },
    { title: "Luggage Components", tag: "Series 02", desc: "Hard-shell, frames and trolley components for premium global luggage brands.", img: luggageImg, specs: ["Hard-shell", "Mirror finish", "Lightweight"] },
    { title: "Injection Moulds", tag: "Series 03", desc: "Multi-cavity, hot-runner and high-volume production moulds for global manufacturers.", img: injectionImg, specs: ["Up to 12T", "Long cycle life", "High polish"] },
    { title: "Custom Tooling", tag: "Series 04", desc: "Bespoke engineering for unique component geometries — built around your part.", img: customImg, specs: ["DFM led", "Prototype to prod", "End-to-end"] },
  ];
  return (
    <section className="py-28 lg:py-40 bg-background relative">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 items-end mb-16 lg:mb-20">
          <Reveal className="col-span-12 lg:col-span-8">
            <div className="eyebrow">04 · Catalogue</div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.035em] text-primary">
              Built with precision. <span className="italic font-light text-secondary">Delivered at scale.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <Link to="/products" className="group inline-flex items-center gap-2 text-primary font-semibold">
              View all products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={0.05}>
              <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-7 relative group overflow-hidden rounded-[2rem] bg-surface border border-hairline">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110" />
                  </div>
                  <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-[10px] tracking-[0.28em] uppercase font-semibold text-primary">
                    {p.tag}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="text-[10px] tracking-[0.32em] uppercase text-secondary font-semibold">— 0{i + 1}</div>
                  <h3 className="mt-4 font-display font-bold text-3xl lg:text-5xl text-primary tracking-[-0.025em] leading-[1.05]">{p.title}</h3>
                  <p className="mt-5 text-lg text-ink-muted leading-relaxed">{p.desc}</p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {p.specs.map((s) => (
                      <li key={s} className="px-3 py-1.5 rounded-full bg-surface border border-hairline text-xs font-medium text-ink">
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link to="/products" className="group mt-10 inline-flex items-center gap-2 text-primary font-semibold">
                    View details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities (parallax image + stats) ---------------- */
function Capabilities() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  const caps = [
    { k: "30,000+ sq.ft", v: "Manufacturing facility" },
    { k: "25+ Machines", v: "CNC, VMC, EDM & Wire Cut" },
    { k: "12 Tonnes", v: "Max mould weight capacity" },
    { k: "5-Axis", v: "Simultaneous machining" },
  ];
  return (
    <section ref={ref} className="relative min-h-[100vh] bg-[#020c06] text-white overflow-hidden">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img src={factoryImg} alt="UDAN manufacturing facility" className="w-full h-full object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c06]/70 via-[#020c06]/40 to-[#020c06]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "linear-gradient(rgba(102,187,106,0.6) 1px, transparent 1px)",
          backgroundSize: "100% 86px",
        }}
      />
      <div className="container-x relative py-32 lg:py-48">
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="text-[11px] tracking-[0.28em] uppercase text-accent font-semibold">05 · Capabilities</div>
            <h2 className="mt-6 font-display font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
              A facility engineered <br/>
              <span className="italic font-light text-white/65">for complexity.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg text-white/65 leading-relaxed">
              From single-cavity prototypes to multi-cavity production tooling, our
              facility is equipped to manufacture, inspect and validate moulds of
              every scale.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {caps.map((c, i) => (
            <Reveal key={c.k} delay={i * 0.08}>
              <div className="group relative h-full p-7 lg:p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                <div className="text-[10px] tracking-[0.28em] uppercase text-accent font-semibold">0{i + 1}</div>
                <div className="mt-4 font-display font-bold text-3xl lg:text-4xl tracking-tight">{c.k}</div>
                <div className="mt-2 text-sm text-white/55">{c.v}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link to="/machinery" className="group mt-14 inline-flex items-center gap-2 text-accent font-semibold">
            Explore the machinery
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Machinery Interactive (tabs) ---------------- */
function MachineryInteractive() {
  const machines = [
    { name: "5-Axis CNC", spec: "Simultaneous 5-axis machining for complex geometries", img: cncImg, num: "X5" },
    { name: "VMC", spec: "Vertical machining for high-precision mould bases", img: factoryImg, num: "V8" },
    { name: "EDM", spec: "Electrical discharge for micro-detail and sharp corners", img: qualityImg, num: "E3" },
    { name: "Wire Cut", spec: "Sub-micron precision wire cutting", img: cncImg, num: "W2" },
    { name: "CMM Inspection", spec: "Coordinate measuring for full dimensional traceability", img: qualityImg, num: "QC" },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="py-28 lg:py-40 bg-background border-y border-hairline">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <Reveal className="col-span-12 lg:col-span-8">
            <div className="eyebrow">06 · Machinery</div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.035em] text-primary">
              The machines behind <span className="italic font-light text-secondary">the millimetre.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col">
            {machines.map((m, i) => (
              <button
                key={m.name}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`group text-left border-t border-hairline last:border-b py-6 lg:py-8 flex items-center gap-6 transition-all ${active === i ? "pl-4" : "hover:pl-2"}`}
              >
                <div className={`text-xs tracking-[0.28em] font-semibold transition-colors ${active === i ? "text-secondary" : "text-ink-muted"}`}>
                  {m.num}
                </div>
                <div className="flex-1">
                  <div className={`font-display font-bold text-2xl lg:text-3xl tracking-tight transition-colors ${active === i ? "text-primary" : "text-ink-muted group-hover:text-primary"}`}>
                    {m.name}
                  </div>
                  {active === i && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.4 }} className="overflow-hidden">
                      <p className="mt-2 text-sm text-ink-muted">{m.spec}</p>
                    </motion.div>
                  )}
                </div>
                <ArrowUpRight className={`w-5 h-5 transition-all ${active === i ? "text-secondary translate-x-1 -translate-y-0.5" : "text-ink-muted/40"}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-32 self-start">
            <div className="relative aspect-[5/6] rounded-[2rem] overflow-hidden bg-[#020c06] border border-hairline">
              {machines.map((m, i) => (
                <motion.img
                  key={m.name}
                  src={m.img}
                  alt={m.name}
                  initial={false}
                  animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.08 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020c06]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white">
                <div>
                  <div className="text-[10px] tracking-[0.32em] uppercase text-accent font-semibold">Now showing</div>
                  <div className="mt-1 font-display font-bold text-2xl">{machines[active].name}</div>
                </div>
                <div className="text-right text-[10px] tracking-[0.28em] uppercase text-white/60">
                  {String(active + 1).padStart(2, "0")} / {String(machines.length).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process (vertical timeline w/ progress) ---------------- */
function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    { n: "01", title: "Requirement", desc: "Component analysis and feasibility study with your team." },
    { n: "02", title: "Design", desc: "Mould design in CAD with DFM optimisation and validation." },
    { n: "03", title: "Engineering", desc: "Tool engineering, material selection and process planning." },
    { n: "04", title: "Manufacturing", desc: "Precision machining on CNC, VMC, EDM and Wire Cut." },
    { n: "05", title: "Inspection", desc: "CMM and dimensional inspection with full QC reports." },
    { n: "06", title: "Delivery", desc: "Trial, validation and on-time global despatch." },
  ];

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-surface relative overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <Reveal className="col-span-12 lg:col-span-8">
            <div className="eyebrow">07 · Process</div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.035em] text-primary">
              From requirement to delivery — <span className="italic font-light text-secondary">engineered every step.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative grid lg:grid-cols-12 gap-10">
          {/* Sticky image */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-32 self-start">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden">
              <img src={processImg} alt="Engineering process" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-[10px] tracking-[0.28em] uppercase font-semibold text-primary">
                End-to-end
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            {/* Progress rail */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-hairline" />
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-secondary"
            />

            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="relative pl-16 pb-14 last:pb-0">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-secondary text-secondary text-xs font-bold font-display">
                    {s.n}
                  </div>
                  <h3 className="font-display font-bold text-2xl lg:text-3xl text-primary tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-ink-muted leading-relaxed max-w-lg">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */
function WhyChoose() {
  const items = [
    { k: "01", title: "Precision Engineering", desc: "Tolerances down to ±0.01mm across complex multi-cavity moulds." },
    { k: "02", title: "Advanced Machinery", desc: "CNC, VMC, EDM and Wire Cut equipment from world-class manufacturers." },
    { k: "03", title: "Experienced Team", desc: "Engineers and toolmakers with decades of mould-making expertise." },
    { k: "04", title: "Quality Assurance", desc: "ISO 9001:2015 systems with full inspection and material traceability." },
    { k: "05", title: "Timely Delivery", desc: "Disciplined project management with on-time delivery as a baseline." },
    { k: "06", title: "Custom Solutions", desc: "Tooling engineered around your component, not the other way around." },
  ];
  return (
    <section className="py-28 lg:py-40 bg-primary text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 30%, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 60%)" }}
      />
      <div className="container-x relative">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <Reveal className="col-span-12 lg:col-span-9">
            <div className="text-[11px] tracking-[0.28em] uppercase font-semibold text-accent">08 · Why UDAN</div>
            <h2 className="mt-5 font-display font-bold text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em]">
              Six reasons the world's manufacturers <span className="italic font-light text-white/60">choose us.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div className="group h-full bg-primary p-9 lg:p-11 hover:bg-secondary/40 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                <div className="font-display font-bold text-5xl text-accent/40">{it.k}</div>
                <h3 className="mt-6 font-display font-bold text-2xl">{it.title}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Quality ---------------- */
function Quality() {
  const items = [
    { title: "Quality Policy", desc: "Documented systems aligned with ISO 9001:2015 and automotive-grade processes." },
    { title: "Inspection", desc: "CMM, height gauges, surface testers and full digital traceability." },
    { title: "Precision", desc: "Tolerances held to ±0.01mm with calibrated metrology equipment." },
    { title: "Testing", desc: "Mould trials, dimensional validation and customer-witnessed approval runs." },
  ];
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="container-x grid lg:grid-cols-12 gap-16 items-start">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-square overflow-hidden rounded-[2rem]">
            <img src={qualityImg} alt="Mirror-finish precision mould cavity" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/20" />
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur text-[10px] tracking-[0.28em] uppercase font-semibold text-primary">
              ±0.01 mm
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="eyebrow">09 · Quality</div>
          <h2 className="mt-5 font-display font-bold text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[0.98] tracking-[-0.035em] text-primary">
            Where quality is <span className="italic font-light text-secondary">engineered,</span> not inspected.
          </h2>
          <p className="mt-6 text-lg text-ink-muted leading-relaxed">
            Quality at UDAN starts at the drawing board and continues to every machining
            operation, every measurement and every shipment. Our systems give global
            manufacturers complete confidence.
          </p>
          <div className="mt-10 space-y-px bg-hairline border border-hairline rounded-2xl overflow-hidden">
            {items.map((it) => (
              <div key={it.title} className="bg-background p-6 lg:p-8 flex gap-5 items-start">
                <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display font-bold text-lg text-primary">{it.title}</h3>
                  <p className="mt-1 text-ink-muted">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const t = [
    {
      quote: "UDAN consistently delivers tooling that runs flawlessly on the production floor. Their precision and reliability are unmatched.",
      author: "Director, Sourcing",
      org: "Global Automotive OEM",
    },
    {
      quote: "From design feedback to first article, every milestone was hit on time. Their engineering depth shows in the final tool.",
      author: "Head of Tooling",
      org: "International Luggage Brand",
    },
    {
      quote: "Their process discipline gives us complete confidence when launching new components at scale.",
      author: "VP Manufacturing",
      org: "Industrial Products Group",
    },
  ];
  return (
    <section className="py-28 lg:py-40 bg-surface border-y border-hairline">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <div className="eyebrow">Client trust</div>
          <h2 className="mt-5 font-display font-bold text-4xl lg:text-6xl text-primary leading-[1.05]">
            Trusted by manufacturers across continents.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {t.map((q, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="h-full bg-background rounded-3xl border border-hairline p-8 lg:p-10 flex flex-col">
                <Quote className="w-8 h-8 text-accent" />
                <p className="mt-6 text-lg text-ink leading-relaxed flex-1">"{q.quote}"</p>
                <div className="mt-8 pt-6 border-t border-hairline">
                  <div className="font-semibold text-primary">{q.author}</div>
                  <div className="text-sm text-ink-muted">{q.org}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 lg:gap-16 opacity-60">
          {["AUTOMOTIVE CO.", "LUGGAGE GROUP", "INDUSTRIAL OEM", "CONSUMER BRAND", "GLOBAL PARTS"].map((b) => (
            <div key={b} className="font-display font-bold tracking-[0.2em] text-sm text-primary">{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */
function ContactCTA() {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-primary p-12 lg:p-20">
            <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-secondary/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-xs tracking-[0.22em] uppercase font-semibold text-accent">Let's build together</div>
                <h2 className="mt-5 font-display font-bold text-4xl lg:text-6xl text-white leading-[1.05]">
                  Have a component<br />in mind?
                </h2>
                <p className="mt-6 text-lg text-white/70 max-w-md leading-relaxed">
                  Share your drawings or requirement. Our team will respond with a detailed
                  feasibility and timeline within 48 hours.
                </p>
              </div>
              <div className="lg:justify-self-end flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href="mailto:support@udanmetaplast.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent text-primary px-8 py-4 text-sm font-semibold hover:bg-white transition-all"
                >
                  Request a Quote <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 text-white px-8 py-4 text-sm font-semibold hover:bg-white/10 transition-all"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
