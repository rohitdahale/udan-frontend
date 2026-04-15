import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = ({ children, title = 'Udan Metaplast | Modern Injection Molding Solutions', description = 'Precision plastic manufacturing for modern industries. Custom OEM solutions, engineering plastics, and packaging products.' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className="min-h-screen flex flex-col selection:bg-electric selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
