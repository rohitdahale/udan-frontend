import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const [showQuoteMenu, setShowQuoteMenu] = useState(false);
  const quoteMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground font-display font-bold tracking-tight">
            U
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-[15px] tracking-tight text-ink">UDAN</div>
            <div className="text-[10px] tracking-[0.22em] uppercase text-ink-muted -mt-0.5">Metaplast</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-sm font-medium text-ink-muted hover:text-primary transition-colors relative"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Request Quote Button with Dropdown Popover */}
        <div className="relative hidden lg:block" ref={quoteMenuRef}>
          <button
            onClick={() => setShowQuoteMenu((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-secondary transition-all hover:shadow-lg hover:shadow-primary/20"
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
          className="lg:hidden text-ink p-2"
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
