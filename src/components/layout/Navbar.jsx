import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { 
    name: 'Products', 
    path: '/products',
    dropdown: [
      { name: 'Injection Molded Parts', path: '/products/injection-molded' },
      { name: 'Custom Plastic Components', path: '/products/custom' },
      { name: 'Packaging Products', path: '/products/packaging' },
      { name: 'Engineering Plastic Parts', path: '/products/engineering' },
      { name: 'OEM Manufacturing', path: '/products/oem' },
    ]
  },
  { name: 'Manufacturing', path: '/manufacturing' },
  { name: 'Machinery', path: '/machinery' },
  { name: 'Industries Served', path: '/industries' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide on scroll down, show on scroll up (Only on Home Page)
      if (location.pathname === '/') {
        if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true);  // Scrolling up
        }
      } else {
        setIsVisible(true); // Always visible on other pages
      }
      
      lastScrollYRef.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        (isScrolled || location.pathname !== '/') ? "glass-dark py-4" : "bg-transparent py-6",
        !isVisible ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-electric rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-display font-bold text-xl">U</span>
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight",
            isScrolled ? "text-white" : "text-white"
          )}>
            UDAN <span className="text-electric">METAPLAST</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              <Link 
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-electric flex items-center gap-1",
                  "text-white",
                  location.pathname === link.path && "text-electric"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown size={14} />}
              </Link>

              {/* Mega Menu / Dropdown */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 pt-4 w-64">
                  <div className="glass-dark border border-white/10 rounded-sm p-2 shadow-2xl">
                    {link.dropdown.map(drop => (
                      <Link
                        key={drop.name}
                        to={drop.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-electric hover:bg-white/5 rounded transition-colors"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+919579557674" className="flex items-center gap-2 text-white hover:text-electric transition-colors">
            <PhoneCall size={18} className="text-electric" />
            <span className="text-sm font-medium font-display tracking-wider">+91 919579 557674</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-navy-900 border-t border-white/10 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-[500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"
      )}>
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name}>
              <Link 
                to={link.path}
                className="text-white font-medium block py-2 hover:text-electric transition-colors"
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="pl-4 border-l border-white/10 mt-2 flex flex-col gap-2">
                  {link.dropdown.map(drop => (
                    <Link
                      key={drop.name}
                      to={drop.path}
                      className="text-gray-400 text-sm py-1 hover:text-electric transition-colors block"
                    >
                      {drop.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
