import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Wrench, Settings, Zap, Target, Cpu, Layers, X } from "lucide-react";

import blohmGrinder from "@/assets/Blohm Simplex 7 Surface Grinder.jpg.jpeg";
import latheMachine from "@/assets/Lathe Machine.jpg.jpeg";
import millingMachine from "@/assets/Vertical milling machine.jpg.jpeg";
import vmcBfw from "@/assets/VMC BFW BMV 50 TC24.png";
import vmcHaas from "@/assets/VMC Haas VF-2.jpg.jpeg";
import wirecutEdm from "@/assets/Wirecut EDM ER 600.webp";
import edmMachine from "@/assets/EDM Machine.jpg.jpeg";
import edmHoleDriller from "@/assets/EDM Hole-Driller 1.jpg.jpeg";
import molding150 from "@/assets/150 ton x2  injection molding.png";
import molding200 from "@/assets/electronica injection molding 200 ton x3.jpg.jpeg";
import molding250 from "@/assets/electronica injection molding 250 ton  - Copy.jpg.jpeg";

const toolroomMachines = [
  {
    name: "Blohm Simplex 7 Surface Grinder",
    units: 1,
    icon: Settings,
    image: blohmGrinder,
    specs: {
      type: "Surface Grinding",
      capacity: "700mm x 350mm table stroke",
      accuracy: "Flatness accuracy within 0.002mm",
      application: "Mould core and cavity insert plate flattening"
    }
  },
  {
    name: "Lathe Machine",
    units: 1,
    icon: Wrench,
    image: latheMachine,
    specs: {
      type: "Manual turning center",
      capacity: "400mm swing diameter over bed, 1000mm length",
      accuracy: "Turning tolerance within 0.01mm",
      application: "Cylindrical turning, boring, threading, and pin fabrication"
    }
  },
  {
    name: "Vertical Milling Machine",
    units: 1,
    icon: Zap,
    image: millingMachine,
    specs: {
      type: "Manual vertical milling",
      capacity: "1200mm x 300mm table dimension",
      accuracy: "Machining accuracy within 0.025mm",
      application: "Block preparation, pocket milling, and primary metal removal"
    }
  },
  {
    name: "VMC BFW BMV 50 TC24",
    units: 1,
    icon: Cpu,
    image: vmcBfw,
    specs: {
      type: "3-Axis Vertical Machining Center",
      capacity: "800mm x 500mm table travel, 24 tool stations",
      accuracy: "Positioning accuracy within 0.005mm",
      application: "Automated machining of core-cavity blocks and guide holes"
    }
  },
  {
    name: "VMC Haas VF-2",
    units: 1,
    icon: Cpu,
    image: vmcHaas,
    specs: {
      type: "High-Performance 3-Axis Vertical Machining Center",
      capacity: "762mm x 406mm x 508mm travels, 8100 RPM spindle",
      accuracy: "Repeatability accuracy of 0.0025mm",
      application: "High speed steel machining, complex 3D profiles, and electrodes"
    }
  },
  {
    name: "Wirecut EDM ER 600",
    units: 1,
    icon: Target,
    image: wirecutEdm,
    specs: {
      type: "CNC Wire Cut EDM",
      capacity: "600mm x 400mm x 300mm table travel",
      accuracy: "Sub-micron surface finish (0.001mm accuracy)",
      application: "Cutting through-holes, punch profiles, and tight slot inserts"
    }
  },
  {
    name: "EDM Machine",
    units: 1,
    icon: Zap,
    image: edmMachine,
    specs: {
      type: "CNC Spark Erosion Sinker EDM",
      capacity: "800mm x 500mm x 350mm tank volume",
      accuracy: "Erosion surface finish down to 0.1 microns",
      application: "Machining deep ribs, blind pockets, and texturing surface faces"
    }
  },
  {
    name: "EDM Hole Driller",
    units: 1,
    icon: Target,
    image: edmHoleDriller,
    specs: {
      type: "EDM Spark Small Hole Drilling",
      capacity: "0.3mm to 3.0mm hole diameter, 300mm max depth",
      accuracy: "Positional accuracy within 0.02mm",
      application: "Drilling starter holes for wire cut EDM wire insertion"
    }
  },
];

const mouldingMachines = [
  {
    name: "Injection Moulding Machine 150 Ton",
    units: 2,
    icon: Layers,
    image: molding150,
    specs: {
      type: "Hydraulic Plastic Injection Moulding",
      capacity: "150 Tons clamping force, 180g shot weight capacity",
      accuracy: "Repetitive moulding control within 0.1g",
      application: "Production of luggage parts, industrial casings, and small trims"
    }
  },
  {
    name: "Electronica Injection Moulding 200 Ton",
    units: 3,
    icon: Layers,
    image: molding200,
    specs: {
      type: "Hydraulic Servo Injection Moulding",
      capacity: "200 Tons clamping force, 320g shot weight capacity",
      accuracy: "Clamping control accuracy within 0.05%",
      application: "Medium sized custom plastic parts and automotive components"
    }
  },
  {
    name: "Electronica Injection Moulding 250 Ton",
    units: 1,
    icon: Layers,
    image: molding250,
    specs: {
      type: "Heavy Duty Servo Injection Moulding",
      capacity: "250 Tons clamping force, 480g shot weight capacity",
      accuracy: "Injection profile response time 0.01 seconds",
      application: "High-volume packaging products, lids, and outer housings"
    }
  },
];

export default function Machinery() {
  const [selectedMachine, setSelectedMachine] = useState(null);

  return (
    <Layout
      title="Machinery | UDAN Metaplast"
      description="Explore our state-of-the-art toolroom and moulding machinery."
    >
      <PageHero
        eyebrow="Infrastructure"
        title="Our Equipment & Machinery"
        description="Equipped with cutting-edge technology, our manufacturing facility houses high-precision machines to deliver unparalleled quality across toolroom and moulding operations."
      />

      {/* Toolroom Section */}
      <section className="py-28 lg:py-36 bg-background">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Precision Manufacturing</div>
            <h2 className="mt-4 font-display font-bold text-3xl lg:text-5xl text-primary leading-[1.1]">
              Toolroom Machinery
            </h2>
            <p className="text-sm text-ink-muted mt-2">Click on any machine to view technical specifications.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {toolroomMachines.map((machine, index) => {
              const Icon = machine.icon;
              return (
                <Reveal key={machine.name} delay={index * 0.05}>
                  <div
                    onClick={() => setSelectedMachine(machine)}
                    className="group relative overflow-hidden rounded-2xl border border-hairline bg-[#020c06] h-72 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={machine.image}
                      alt={machine.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020c06] via-[#020c06]/60 to-transparent" />
                    
                    <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                      <div className="flex justify-start">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/25 mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-white mb-3 leading-tight drop-shadow-md">
                          {machine.name}
                        </h3>
                        <div className="inline-flex items-center gap-2">
                          <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Quantity</span>
                          <span className="text-xs font-bold text-primary bg-accent px-2.5 py-1 rounded-full shadow-sm">
                            {machine.units} {machine.units > 1 ? "Units" : "Unit"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moulding Section */}
      <section className="py-28 lg:py-36 bg-surface border-t border-hairline">
        <div className="container-x">
          <Reveal>
            <div className="eyebrow">Mass Production</div>
            <h2 className="mt-4 font-display font-bold text-3xl lg:text-5xl text-primary leading-[1.1]">
              Moulding Machinery
            </h2>
            <p className="text-sm text-ink-muted mt-2">Click on any machine to view technical specifications.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {mouldingMachines.map((machine, index) => {
              const Icon = machine.icon;
              return (
                <Reveal key={machine.name} delay={index * 0.08}>
                  <div
                    onClick={() => setSelectedMachine(machine)}
                    className="group relative overflow-hidden rounded-[2rem] border border-hairline bg-[#020c06] h-80 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={machine.image}
                      alt={machine.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover opacity-50 transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020c06] via-[#020c06]/60 to-transparent" />
                    
                    <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/25 shadow-sm transform group-hover:-rotate-6 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      
                      <div className="w-full">
                        <h3 className="text-2xl font-bold font-display text-white mb-4 pr-4 drop-shadow-lg">
                          {machine.name}
                        </h3>
                        
                        <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                          <span className="font-semibold text-gray-200 text-sm">Active Units</span>
                          <span className="text-2xl font-bold text-accent drop-shadow-md">
                            {machine.units}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Detail Modal */}
      {selectedMachine && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/40 backdrop-blur-md animate-fade-in">
          <div className="bg-background border border-hairline rounded-[2rem] p-8 lg:p-10 w-full max-w-2xl relative shadow-2xl animate-scale-in text-ink">
            <button
              onClick={() => setSelectedMachine(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-hairline bg-surface hover:bg-hairline flex items-center justify-center transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 text-primary" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 items-center mt-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-hairline">
                <img
                  src={selectedMachine.image}
                  alt={selectedMachine.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-primary leading-tight">
                  {selectedMachine.name}
                </h3>
                <div className="mt-2.5 inline-flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-ink-muted uppercase tracking-wider">Quantity</span>
                  <span className="text-xs font-bold text-primary bg-accent px-2.5 py-0.5 rounded-full">
                    {selectedMachine.units} {selectedMachine.units > 1 ? "Units" : "Unit"}
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-ink-muted font-bold">Equipment Type</h4>
                    <p className="mt-1 text-sm font-semibold text-primary">{selectedMachine.specs.type}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-ink-muted font-bold">Working Capacity</h4>
                    <p className="mt-1 text-sm text-ink">{selectedMachine.specs.capacity}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-ink-muted font-bold">Tolerance / Accuracy</h4>
                    <p className="mt-1 text-sm text-ink">{selectedMachine.specs.accuracy}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-wider text-ink-muted font-bold">Core Application</h4>
                    <p className="mt-1 text-sm text-ink">{selectedMachine.specs.application}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
