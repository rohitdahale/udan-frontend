import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const AboutUs = () => {
  return (
    <Layout title="About Us | Udan Metaplast" description="Learn about our 25+ years of excellence in plastic injection molding.">
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Who We Are" title="Pioneers in Plastic Manufacturing" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <ScrollReveal>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Factory Interior" 
                className="rounded-2xl shadow-2xl"
              />
            </ScrollReveal>
            <div>
              <ScrollReveal delay={0.2}>
                <h3 className="text-3xl font-display font-bold text-navy-900 mb-6">Our Mission</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  To provide world-class, precision-engineered plastic components that empower industries to innovate faster and build better products. At Udan Metaplast, we merge advanced technology with deep material expertise to deliver solutions that simply work.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-10">
                  <div className="border-l-4 border-electric pl-4">
                    <h4 className="text-2xl font-bold text-navy-900">25+</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</p>
                  </div>
                  <div className="border-l-4 border-electric pl-4">
                    <h4 className="text-2xl font-bold text-navy-900">ISO</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">9001:2015 Certified</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading subtitle="Global Footprint" title="Export Quality. Engineered Locally." centered />
          <ScrollReveal>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              Based in Pune, India, our state-of-the-art facility services over 120 global B2B partners across North America, Europe, and Asia. We are dedicated to maintaining the highest exporting standards in every batch we produce.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
