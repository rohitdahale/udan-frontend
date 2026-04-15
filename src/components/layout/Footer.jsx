import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">

          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-electric rounded-sm flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <span className="text-white font-display font-bold text-xl">U</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                UDAN <span className="text-electric">METAPLAST</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Precision plastic manufacturing for modern industries. Exploring the boundaries of injection molding and custom OEM solutions.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {['IN', 'FB', 'TW'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white hover:bg-electric hover:border-electric transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Products', 'Manufacturing', 'Industries Served', 'Contact'].map(link => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-electric transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-electric" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 text-lg">Our Products</h4>
            <ul className="flex flex-col gap-3">
              {[
                'Injection Molded Parts',
                'Custom Components',
                'Packaging Products',
                'Engineering Plastics',
                'OEM Solutions'
              ].map(product => (
                <li key={product}>
                  <Link to="/products" className="text-gray-400 hover:text-electric transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="text-electric" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold mb-6 text-lg">Get in Touch</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin className="text-electric shrink-0" size={18} />
                <span>Nashik, Maharashtra, India</span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone className="text-electric shrink-0" size={18} />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Mail className="text-electric shrink-0" size={18} />
                <a href="mailto:support@udanmetaplast.in" className="hover:text-white transition-colors">support@udanmetaplast.in</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Udan Metaplast. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
