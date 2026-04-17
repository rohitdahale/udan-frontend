import React from 'react';
import { ArrowRight, Settings, ShieldCheck, Factory, PlayCircle, Star, BadgeCheck } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProductShowcase } from '../components/ui/ProductShowcase';

import asset1 from '../assets/asset1.jpeg';

// Hardcoded data based on the website concept 
const stats = [
  { value: '150k+', label: 'Parts Manufactured Daily', icon: <Factory size={24} /> },
  { value: '25+', label: 'Years of Excellence', icon: <BadgeCheck size={24} /> },
  { value: '120+', label: 'Global B2B Partners', icon: <ShieldCheck size={24} /> },
  { value: '99.8%', label: 'Quality Assurance', icon: <Star size={24} /> },
];

const categories = [
  { title: 'Injection Molded Parts', desc: 'High-precision components for industrial applications.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Custom Plastic Components', desc: 'Tailored solutions designed to meet your exact specifications.', img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Packaging Products', desc: 'Durable, reliable, and sustainable packaging solutions.', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Engineering Plastics', desc: 'Robust materials engineered for extreme conditions.', img: 'https://images.unsplash.com/photo-1611078564024-db086749007f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
];

const Homepage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden bg-navy-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy-900/70 z-10"></div>
          <img 
            src={asset1} 
            alt="Plastic Injection Molding Factory" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] opacity-60"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric/30 bg-electric/10 text-electric mb-6 glass">
                <span className="w-2 h-2 rounded-full bg-electric animate-ping"></span>
                <span className="text-sm font-medium tracking-wide uppercase">Premium B2B Manufacturing</span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-tight mb-6">
                Precision Plastic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-blue-400">
                  Manufacturing
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                Empowering modern industries with high-quality injection molding, custom OEM solutions, and engineered plastic parts built for durability and scale.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" className="gap-2">
                  Explore Products <ArrowRight size={18} />
                </Button>
                <Button variant="outline" className="gap-2 border-white text-white hover:bg-white hover:text-navy-900">
                  <PlayCircle size={18} /> Watch Factory Tour
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cinematic Frame Animation Section */}
      <ProductShowcase />

      {/* Stats Section */}
      <section className="py-16 bg-white relative z-30 -mt-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-dark rounded-xl p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl border border-gray-100 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx} direction="up">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-16 h-16 rounded-full bg-electric/10 flex items-center justify-center text-electric mb-4">
                      {stat.icon}
                    </div>
                    <h3 className="text-4xl font-display font-bold text-navy-900 mb-2">{stat.value}</h3>
                    <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-industrial-100">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Our Core Capabilities" title="Premium Product Solutions" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, idx) => (
              <ScrollReveal key={idx} delay={0.1 * idx} className="group cursor-pointer">
                <div className="relative h-80 rounded-xl overflow-hidden bg-navy-900 shadow-xl">
                  <img 
                    src={category.img} 
                    alt={category.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-1 bg-electric mb-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 mb-4">
                      {category.desc}
                    </p>
                    <span className="text-electric font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 translate-y-2 group-hover:translate-y-0">
                      Learn More <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Timeline */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <SectionHeading subtitle="The Udan Advantage" title="Setting the Industry Standard" />
              <ScrollReveal>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  We don't just manufacture plastic parts; we engineer solutions that drive your business forward. With state-of-the-art machinery and rigorous quality control, we ensure every component meets global exporting standards.
                </p>
              </ScrollReveal>

              <div className="space-y-8">
                {[
                  { title: 'Advanced Technology', desc: 'Fully automated injection molding cells reducing lead time.' },
                  { title: 'Material Expertise', desc: 'Working with 50+ polymer grades for exact spec matching.' },
                  { title: 'ISO Certified Quality', desc: '100% inspection processes ensuring zero defect delivery.' }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={0.2 + (idx * 0.1)} className="flex gap-4">
                    <div className="w-12 h-12 rounded bg-navy-900 text-electric flex-shrink-0 flex items-center justify-center">
                      <Settings size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-navy-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <ScrollReveal delay={0.4} direction="left">
                <div className="absolute inset-0 bg-electric/10 translate-x-4 translate-y-4 rounded-xl -z-10"></div>
                <img 
                  src="https://plus.unsplash.com/premium_photo-1661843542816-5de48cbc9ee3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFByZWNpc2lvbiUyME1hY2hpbmluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Precision Machining" 
                  className="rounded-xl shadow-2xl w-full object-cover h-[600px]"
                />
              </ScrollReveal>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-900"></div>
        <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 glass-dark rounded-2xl p-10 md:p-16 border border-white/10">
          <div className="mb-8 md:mb-0 max-w-2xl">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                Ready to scale your production?
              </h2>
              <p className="text-gray-300 text-lg">
                Partner with Udan Metaplast for reliable, high-volume manufacturing with uncompromising quality.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="left">
            <Button variant="primary" className="text-lg px-8 py-4 whitespace-nowrap gap-2">
              Request a Quote <ArrowRight />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
