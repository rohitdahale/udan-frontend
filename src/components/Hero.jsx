import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import heroImg from "@/assets/asset1.jpeg";
import { Counter } from "@/components/Counter";

const EASE = [0.22, 1, 0.36, 1];

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const bgX = useTransform(sx, (v) => v * -24);
  const bgY = useTransform(sy, (v) => v * -24);
  const gridX = useTransform(sx, (v) => v * 18);
  const gridY = useTransform(sy, (v) => v * 18);
  const fgX = useTransform(sx, (v) => v * 36);
  const fgY = useTransform(sy, (v) => v * 36);

  const { scrollY } = useScroll();
  const titleY = useTransform(scrollY, [0, 700], [0, 160]);
  const titleOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const bgZoom = useTransform(scrollY, [0, 700], [1.05, 1.18]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.55, 0.9]);

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-[#020c06] text-white">
      {/* Background image */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: bgZoom }}
        className="absolute -inset-12"
      >
        <img
          src={heroImg}
          alt="Precision CNC machining at UDAN Metaplast"
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.55]"
        />
      </motion.div>

      {/* Cinematic vignettes */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-[#020c06]/85 via-[#020c06]/55 to-[#020c06]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020c06] via-[#020c06]/30 to-transparent" />
      <div
        className="absolute -bottom-40 -left-40 w-[46rem] h-[46rem] rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle, rgba(46,125,50,0.55), transparent 60%)" }}
      />
      <div
        className="absolute -top-32 right-0 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-35"
        style={{ background: "radial-gradient(circle, rgba(102,187,106,0.55), transparent 60%)" }}
      />
      <div className="absolute inset-0 pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_50%,#000_120%)] opacity-60" />

      {/* Light beam */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: "-30%" }}
        animate={{ opacity: [0, 0.6, 0], x: ["-30%", "130%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-0 bottom-0 w-[40%] pointer-events-none mix-blend-screen"
        style={{ background: "linear-gradient(100deg, transparent 30%, rgba(163,227,168,0.18) 50%, transparent 70%)" }}
      />

      {/* Noise grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")",
        }}
      />

      {/* Blueprint grid */}
      <motion.div
        style={{ x: gridX, y: gridY }}
        aria-hidden
        className="absolute inset-0 opacity-[0.22] mix-blend-screen pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(102,187,106,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(102,187,106,0.55) 1px, transparent 1px)",
            backgroundSize: "86px 86px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 30%, transparent 80%)",
          }}
        />
      </motion.div>

      {/* Rotating engineering dial */}
      <motion.div
        style={{ x: fgX, y: fgY }}
        className="hidden md:block absolute -right-48 top-1/4 w-[720px] h-[720px] pointer-events-none opacity-[0.22]"
      >
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full text-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 3" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="100"
              y1="5"
              x2="100"
              y2="15"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${(360 / 24) * i} 100 100)`}
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <text
              key={i}
              x="100"
              y="22"
              fontSize="3"
              fill="currentColor"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
              transform={`rotate(${(360 / 12) * i} 100 100)`}
            >
              ±0.01
            </text>
          ))}
        </motion.svg>
      </motion.div>

      {/* Side rails */}
      <div className="hidden lg:block absolute left-6 top-28 bottom-28 w-px bg-white/10" />
      <div className="hidden lg:flex absolute left-3 top-28 bottom-28 flex-col justify-between text-[10px] tracking-[0.3em] uppercase text-white/40 [writing-mode:vertical-rl] [text-orientation:mixed]">
        <span>EST · 2009</span>
        <span>PRECISION ±0.01mm</span>
        <span>NASHIK · IN</span>
      </div>
      <div className="hidden lg:block absolute right-6 top-28 bottom-28 w-px bg-white/10" />
      <div className="hidden lg:flex absolute right-3 top-28 bottom-28 flex-col justify-between items-end text-[10px] tracking-[0.3em] uppercase text-white/40 [writing-mode:vertical-rl] [text-orientation:mixed]">
        <span>ISO 9001:2015</span>
        <span>5-AXIS · EDM · CMM</span>
        <span>IATF 16949 ALIGNED</span>
      </div>

      {/* Top status */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 pt-28 lg:pt-32"
      >
        <div className="container-x flex items-center justify-between text-[11px] tracking-[0.28em] uppercase font-semibold text-accent">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Global Engineering Partner · Live since 2009
          </div>
          <div className="hidden md:block text-white/40">
            CH·01 — Engineering Tomorrow
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: titleY, opacity: titleOpacity }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="container-x w-full grid lg:grid-cols-12 gap-10 items-end pb-20 lg:pb-24 pt-12">
          <div className="lg:col-span-9">
            <HeroHeadline />

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8, ease: EASE }}
              className="mt-10 max-w-xl text-base lg:text-lg text-white/65 leading-relaxed"
            >
              We engineer precision moulds and custom tooling for the world's most
              demanding manufacturers — built on advanced machinery, deep craft and
              tolerances measured in microns.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="mailto:support@udanmetaplast.com"
                className="group relative inline-flex items-center gap-2 rounded-full bg-accent text-primary px-8 py-4 text-sm font-semibold overflow-hidden hover:shadow-[0_18px_60px_-15px_rgba(102,187,106,0.85)] transition-shadow"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative">Start a Project</span>
                <ArrowRight className="relative w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md text-white px-8 py-4 text-sm font-semibold hover:bg-white/[0.1] hover:border-white/30 transition-all"
              >
                Explore Capabilities
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right-side floating spec card */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8, ease: EASE }}
            style={{ x: fgX, y: fgY }}
            className="lg:col-span-3 self-end"
          >
            <div className="relative rounded-2xl border border-white/12 bg-white/[0.05] backdrop-blur-xl p-6 overflow-hidden">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              <div className="text-[10px] tracking-[0.32em] uppercase text-accent font-semibold">
                Live Spec
              </div>
              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
                <Stat value={<Counter to={15} suffix="+" />} label="Years" />
                <Stat value={<Counter to={500} suffix="+" />} label="Projects" />
                <Stat value={<Counter to={98} suffix="%" />} label="On-time" />
                <Stat value="±0.01" label="mm tolerance" />
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>

      {/* Bottom scrolling spec ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md overflow-hidden"
      >
        <div className="container-x flex items-center gap-6 py-4">
          <div className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-accent font-semibold whitespace-nowrap">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" /> Capabilities
          </div>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
              className="flex gap-10 whitespace-nowrap"
            >
              {[
                "ISO 9001:2015",
                "IATF 16949 ALIGNED",
                "5-AXIS CNC",
                "EDM · WIRE CUT",
                "CMM INSPECTION",
                "HOT RUNNER SYSTEMS",
                "OEM EXPORTS",
                "DFM CONSULTATION",
                "MIRROR FINISH ±Ra 0.05",
                "12T MOULD CAPACITY",
                "ISO 9001:2015",
                "IATF 16949 ALIGNED",
                "5-AXIS CNC",
                "EDM · WIRE CUT",
                "CMM INSPECTION",
                "HOT RUNNER SYSTEMS",
                "OEM EXPORTS",
                "DFM CONSULTATION",
                "MIRROR FINISH ±Ra 0.05",
                "12T MOULD CAPACITY",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-10 text-[11px] tracking-[0.32em] uppercase text-white/55 font-medium">
                  {t}
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function HeroHeadline() {
  return (
    <h1 className="font-display font-bold tracking-[-0.045em] leading-[0.88] text-[clamp(3rem,10vw,9rem)]">
      <Line text="Engineering" delay={0.35} />
      <br />
      <span className="italic font-light bg-gradient-to-br from-white via-white to-[#a3e3a8] bg-clip-text text-transparent">
        <Line text="tomorrow," delay={0.55} />
      </span>
      <br />
      <span className="bg-gradient-to-br from-accent via-[#a3e3a8] to-accent bg-clip-text text-transparent">
        <Line text="today." delay={0.85} />
      </span>
    </h1>
  );
}

function Line({ text, delay }) {
  const words = text.split(" ");
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.06em]">
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pr-[0.25em] last:pr-0 align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: delay + i * 0.08, duration: 1, ease: EASE }}
            className="inline-block"
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="font-display font-bold text-2xl lg:text-3xl text-white tracking-tight">
        {value}
      </div>
      <div className="mt-1 text-[10px] tracking-[0.22em] uppercase text-white/55">{label}</div>
    </div>
  );
}
