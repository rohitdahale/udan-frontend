import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import logoImg from "@/assets/logowebsite.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/machinery", label: "Machinery" },
  { to: "/industries", label: "Industries Served" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [showQuoteMenu, setShowQuoteMenu] = useState(false);
  
  const lastScrollY = useRef(0);
  const quoteMenuRef = useRef(null);
  const location = useLocation();

  const isLightText = location.pathname === "/" && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Toggle dark styling background when scrolled a bit
      setScrolled(currentScrollY > 12);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (!open) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setVisible(false);
          setShowQuoteMenu(false); // also hide popover when navbar scrolls away
        } else {
          setVisible(true);
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (quoteMenuRef.current && !quoteMenuRef.current.contains(event.target)) {
        setShowQuoteMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-hairline"
          : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src={logoImg}
            alt="UDAN Metaplast Logo"
            className={`h-11 w-auto transition-all duration-300 ${isLightText ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative ${
                isLightText ? "text-white/75 hover:text-white" : "text-ink-muted hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Request Quote Button with Dropdown Popover */}
        <div className="relative hidden lg:block" ref={quoteMenuRef}>
          <button
            onClick={() => setShowQuoteMenu((prev) => !prev)}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:shadow-lg ${
              isLightText
                ? "bg-accent text-primary hover:bg-white hover:shadow-accent/20"
                : "bg-primary text-primary-foreground hover:bg-secondary hover:shadow-primary/20"
            }`}
          >
            Request Quote
          </button>
          
          {showQuoteMenu && (
            <div className="absolute right-0 mt-2.5 w-64 bg-background border border-hairline rounded-2xl p-5 shadow-2xl z-50 animate-fade-in text-ink">
              <div className="text-xs font-semibold tracking-wider uppercase text-secondary mb-3">Direct Contact</div>
              <div className="space-y-3">
                <a
                  href="tel:+919371678364"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-surface hover:bg-hairline text-ink transition-colors"
                >
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-ink-muted font-medium">Call Us</div>
                    <div className="text-sm font-semibold">+91 93716 78364</div>
                  </div>
                </a>
                <a
                  href="mailto:support@udanmetaplast.com"
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-surface hover:bg-hairline text-ink transition-colors"
                >
                  <Mail className="w-4 h-4 text-secondary shrink-0" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider text-ink-muted font-medium">Email Us</div>
                    <div className="text-sm font-semibold">support@udanmetaplast.com</div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`lg:hidden p-2 transition-colors duration-300 ${isLightText ? "text-white" : "text-ink"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-hairline animate-fade-in">
          <div className="container-x py-6 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-ink border-b border-hairline"
              >
                {l.label}
              </Link>
            ))}
            
            {/* Mobile direct contact buttons */}
            <div className="mt-4 pt-4 border-t border-hairline flex flex-col gap-3">
              <a
                href="tel:+919371678364"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="w-4 h-4" /> Call +91 93716 78364
              </a>
              <a
                href="mailto:support@udanmetaplast.com"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2.5 rounded-full border border-hairline bg-surface px-5 py-3 text-sm font-semibold text-ink"
              >
                <Mail className="w-4 h-4 text-secondary" /> Email Support
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
