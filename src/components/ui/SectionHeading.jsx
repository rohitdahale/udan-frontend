import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const SectionHeading = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      <ScrollReveal>
        <span className="text-electric font-bold tracking-wider uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-navy-900 mb-6 relative inline-block">
          {title}
          <div className={`absolute -bottom-3 h-1 bg-electric w-1/2 ${centered ? 'left-1/4' : 'left-0'}`}></div>
        </h2>
      </ScrollReveal>
    </div>
  );
};
