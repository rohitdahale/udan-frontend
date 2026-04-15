import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';

const Products = () => {
  return (
    <Layout title="Our Products | Udan Metaplast" description="Explore our range of premium plastic injection molded products and custom components.">
      <section className="pt-32 pb-20 bg-industrial-100 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="What We Make" title="Precision Engineered Products" />
          
          <div className="grid grid-cols-1 gap-12">
            {[
              { title: 'Injection Molded Parts', desc: 'Complex geometries with tight tolerances.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Custom Plastic Components', desc: 'Designed exactly to your specifications.', img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { title: 'Packaging Products', desc: 'Sustainable and reliable packaging solutions.', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((prod, idx) => (
              <ScrollReveal key={idx} delay={0.1} className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-100">
                <img src={prod.img} alt={prod.title} className="w-full md:w-1/3 object-cover h-64 md:h-auto" />
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-display text-navy-900 mb-4">{prod.title}</h3>
                  <p className="text-gray-600 mb-6">{prod.desc} Leveraging cutting-edge injection molding technology to deliver high volumes with zero defect tolerance.</p>
                  <button className="text-electric font-medium uppercase tracking-wide text-sm self-start hover:underline">View Specs &rarr;</button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
