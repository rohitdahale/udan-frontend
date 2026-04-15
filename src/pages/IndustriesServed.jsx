import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const IndustriesServed = () => {
  const industries = [
    { name: 'Automotive', desc: 'Dashboard components, trims, under-the-hood parts.' },
    { name: 'Medical Devices', desc: 'Sterile surgical instruments, enclosures, and diagnostic equipment parts.' },
    { name: 'Consumer Electronics', desc: 'Durable casings, connectors, and precision internal brackets.' },
    { name: 'Aerospace', desc: 'Lightweight, high-strength specialized polymer components.' },
    { name: 'Industrial Equipment', desc: 'Gears, housing, and highly resilient functional parts.' },
    { name: 'Packaging', desc: 'Custom closures, tamper-evident caps, and robust containers.' },
  ];

  return (
    <Layout title="Industries Served | Udan Metaplast" description="Industries we serve with our precision plastic components.">
      <section className="pt-32 pb-20 bg-navy-900 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <SectionHeading subtitle="Where We Fit In" title={<span className="text-white relative inline-block">Global Industries We Serve<div className="absolute -bottom-3 h-1 bg-electric w-1/2 left-1/4"></div></span>} centered />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {industries.map((ind, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx}>
                <div className="glass-dark border border-white/10 p-8 rounded-xl h-full hover:border-electric/50 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-electric/20 text-electric flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {/* Placeholder icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{ind.name}</h3>
                  <p className="text-gray-400">{ind.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustriesServed;
