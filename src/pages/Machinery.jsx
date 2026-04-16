import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Wrench, Settings, Zap, Target, Cpu, Layers } from 'lucide-react';

const toolroomMachines = [
  { name: 'Blohm Simplex 7 Surface Grinder', units: 1, icon: <Settings size={28} /> },
  { name: 'Lathe Machine', units: 1, icon: <Wrench size={28} /> },
  { name: 'Vertical Milling Machine', units: 1, icon: <Zap size={28} /> },
  { name: 'VMC BFW BMV 50 TC24', units: 1, icon: <Cpu size={28} /> },
  { name: 'VMC Haas VF-2', units: 1, icon: <Cpu size={28} /> },
  { name: 'Wirecut EDM ER 600', units: 1, icon: <Target size={28} /> },
  { name: 'EDM Machine', units: 1, icon: <Zap size={28} /> },
  { name: 'EDM Hole Driller', units: 1, icon: <Target size={28} /> },
];

const mouldingMachines = [
  { name: 'Injection Moulding Machine 150 Ton', units: 2, icon: <Layers size={28} /> },
  { name: 'Electronica Injection Moulding 200 Ton', units: 3, icon: <Layers size={28} /> },
  { name: 'Electronica Injection Moulding 250 Ton', units: 1, icon: <Layers size={28} /> },
];

const Machinery = () => {
  return (
    <Layout title="Machinery | Udan Metaplast" description="Explore our state-of-the-art toolroom and moulding machinery.">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-navy-900 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <SectionHeading subtitle="Infrastructure" title="Our Equipment & Machinery" centered />
          <ScrollReveal>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Equipped with cutting-edge technology, our manufacturing facility houses high-precision machines 
              to deliver unparalleled quality and efficiency across toolroom and moulding operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Toolroom Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Precision Manufacturing" title="Toolroom Machinery" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {toolroomMachines.map((machine, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-electric/30 transition-all duration-300 h-full flex flex-col justify-between cursor-pointer">
                  <div>
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-electric shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                      {machine.icon}
                    </div>
                    <h3 className="text-xl font-bold font-display text-navy-900 mb-2 leading-tight">
                      {machine.name}
                    </h3>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200/60 flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Quantity</span>
                    <span className="text-lg font-bold text-electric bg-blue-50 px-3 py-1 rounded-md">
                      {machine.units} {machine.units > 1 ? 'Units' : 'Unit'}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moulding Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Mass Production" title="Moulding Machinery" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mouldingMachines.map((machine, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-electric/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-electric/10 transition-colors"></div>
                  
                  <div className="relative z-10 flex items-start flex-col gap-6">
                    <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center text-white shadow-md transform group-hover:-rotate-6 transition-transform duration-300">
                      {machine.icon}
                    </div>
                    
                    <div className="w-full">
                      <h3 className="text-2xl font-bold font-display text-navy-900 mb-4 pr-10">
                        {machine.name}
                      </h3>
                      
                      <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <span className="font-medium text-gray-600">Active Units</span>
                        <span className="text-2xl font-bold text-electric">
                          {machine.units}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Machinery;
