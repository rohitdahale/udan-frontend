import React from "react";
import { motion } from "framer-motion";

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-surface border-b border-hairline overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-5 font-display font-bold text-5xl lg:text-7xl leading-[1.02] text-primary">
            {title}
          </h1>
          <p className="mt-7 text-lg lg:text-xl text-ink-muted leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
