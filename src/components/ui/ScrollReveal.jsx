import React from 'react';
import { motion } from 'framer-motion';

export const ScrollReveal = ({ children, className = '', delay = 0, y = 30, direction = 'up' }) => {
  const finalY = direction === 'up' ? y : direction === 'down' ? -y : 0;
  const finalX = direction === 'left' ? y : direction === 'right' ? -y : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: finalY, x: finalX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
