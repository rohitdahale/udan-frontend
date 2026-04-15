import React from 'react';
import { cn } from '../../utils/cn'; // Will create this utility

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center px-6 py-3 font-medium transition-all duration-300 rounded-sm focus:outline-none";
  
  const variants = {
    primary: "bg-electric text-white hover:bg-electric-hover shadow-lg shadow-electric/30 hover:shadow-electric/50",
    secondary: "bg-navy-900 text-white hover:bg-navy-800",
    outline: "border-2 border-electric text-electric hover:bg-electric hover:text-white",
    ghost: "text-industrial-800 hover:text-electric hover:bg-industrial-100",
  };

  return (
    <button 
      className={cn(baseClasses, variants[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
};
