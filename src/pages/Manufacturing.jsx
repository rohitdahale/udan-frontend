import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const Manufacturing = () => {
  return (
    <Layout title="Manufacturing Process | Udan Metaplast" description="Learn about our high precision manufacturing infrastructure.">
      <section className="pt-32 pb-20 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Infrastructure" title="State-Of-The-Art Manufacturing" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h3 className="text-2xl font-display font-bold text-navy-900">Advanced Injection Molding Cell</h3>
                <p className="text-gray-600">
                  Our facility features highly automated hydraulic and electric injection molding machines ranging from 50 to 800-ton capacities. This allows us to manufacture components of varied sizes and complexities, from micro-precision parts to large industrial casings.
                </p>
                <div className="bg-industrial-100 p-6 rounded-lg border-l-4 border-electric">
                  <h4 className="font-bold text-navy-900 mb-2">Capabilities</h4>
                  <ul className="text-gray-600 space-y-2 list-inside list-disc">
                    <li>Over-molding & Insert Molding</li>
                    <li>2-Shot Molding</li>
                    <li>High-cavitation Production</li>
                    <li>Cleanroom Setup (ISO Class 8)</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <img 
                src="https://images.unsplash.com/photo-1565439390118-c2b3e8e1f0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Injection Molding Machine" 
                className="w-full h-full object-cover rounded-xl shadow-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
