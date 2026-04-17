import React from 'react';
import { Layout } from '../components/layout/Layout';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { Wrench, Settings, Zap, Target, Cpu, Layers } from 'lucide-react';

import blohmGrinder from '../assets/Blohm Simplex 7 Surface Grinder.jpg.jpeg';
import latheMachine from '../assets/Lathe Machine.jpg.jpeg';
import millingMachine from '../assets/Vertical milling machine.jpg.jpeg';
import vmcBfw from '../assets/VMC BFW BMV 50 TC24.png';
import vmcHaas from '../assets/VMC Haas VF-2.jpg.jpeg';
import wirecutEdm from '../assets/Wirecut EDM ER 600.webp';
import edmMachine from '../assets/EDM Machine.jpg.jpeg';
import edmHoleDriller from '../assets/EDM Hole-Driller 1.jpg.jpeg';
import molding150 from '../assets/150 ton x2  injection molding.png';
import molding200 from '../assets/electronica injection molding 200 ton x3.jpg.jpeg';
import molding250 from '../assets/electronica injection molding 250 ton  - Copy.jpg.jpeg';

const toolroomMachines = [
  { name: 'Blohm Simplex 7 Surface Grinder', units: 1, icon: <Settings size={28} />, image: blohmGrinder },
  { name: 'Lathe Machine', units: 1, icon: <Wrench size={28} />, image: latheMachine },
  { name: 'Vertical Milling Machine', units: 1, icon: <Zap size={28} />, image: millingMachine },
  { name: 'VMC BFW BMV 50 TC24', units: 1, icon: <Cpu size={28} />, image: vmcBfw },
  { name: 'VMC Haas VF-2', units: 1, icon: <Cpu size={28} />, image: vmcHaas },
  { name: 'Wirecut EDM ER 600', units: 1, icon: <Target size={28} />, image: wirecutEdm },
  { name: 'EDM Machine', units: 1, icon: <Zap size={28} />, image: edmMachine },
  { name: 'EDM Hole Driller', units: 1, icon: <Target size={28} />, image: edmHoleDriller },
];

const mouldingMachines = [
  { name: 'Injection Moulding Machine 150 Ton', units: 2, icon: <Layers size={28} />, image: molding150 },
  { name: 'Electronica Injection Moulding 200 Ton', units: 3, icon: <Layers size={28} />, image: molding200 },
  { name: 'Electronica Injection Moulding 250 Ton', units: 1, icon: <Layers size={28} />, image: molding250 },
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
                <div className="group relative overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-64 cursor-pointer">
                  <img src={machine.image} alt={machine.name} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-start">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                        {machine.icon}
                        </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-display text-white mb-3 leading-tight drop-shadow-md">
                        {machine.name}
                      </h3>
                      <div className="inline-flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wider">Quantity</span>
                        <span className="text-sm font-bold text-white bg-electric/90 px-2.5 py-1 rounded backdrop-blur-sm shadow-sm">
                          {machine.units} {machine.units > 1 ? 'Units' : 'Unit'}
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

      {/* Moulding Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Mass Production" title="Moulding Machinery" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mouldingMachines.map((machine, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-80 cursor-pointer">
                  <img src={machine.image} alt={machine.name} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 shadow-sm transform group-hover:-rotate-6 transition-transform duration-300">
                      {machine.icon}
                    </div>
                    
                    <div className="w-full">
                      <h3 className="text-2xl font-bold font-display text-white mb-4 pr-4 drop-shadow-lg">
                        {machine.name}
                      </h3>
                      
                      <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                        <span className="font-medium text-gray-200">Active Units</span>
                        <span className="text-2xl font-bold text-electric drop-shadow-md">
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
