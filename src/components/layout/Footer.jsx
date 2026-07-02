import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-primary font-display font-bold">
                U
              </div>
              <div>
                <div className="font-display font-bold text-lg tracking-tight">UDAN Metaplast</div>
                <div className="text-[10px] tracking-[0.22em] uppercase opacity-70">Precision Moulds</div>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed opacity-75 max-w-sm">
              Engineering precision moulds and custom tooling for automotive, luggage and industrial
              manufacturers across the globe.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:bg-accent hover:text-primary hover:border-accent transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            items={[
              { label: "About", to: "/about" },
              { label: "Manufacturing", to: "/manufacturing" },
              { label: "Machinery", to: "/machinery" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterCol
            title="Products"
            items={[
              { label: "Automotive Moulds", to: "/products" },
              { label: "Luggage Components", to: "/products" },
              { label: "Injection Moulds", to: "/products" },
              { label: "Custom Tooling", to: "/products" },
            ]}
          />

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide uppercase opacity-90">Contact</h4>
            <ul className="mt-6 space-y-4 text-sm opacity-80">
              <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><span>Plot no H146/1/1, MIDC Ambad,<br/>Nashik, Maharashtra 422010</span></li>
              <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" />+91 93716 78364</li>
              <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" />contact@udanmetaplast.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs opacity-70">
          <p>© {new Date().getFullYear()} UDAN Metaplast. All rights reserved.</p>
          <p>ISO 9001:2015 Certified · IATF 16949 Aligned · Make in India</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="font-display font-semibold text-sm tracking-wide uppercase opacity-90">{title}</h4>
      <ul className="mt-6 space-y-3 text-sm opacity-80">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="hover:text-accent transition-colors">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
