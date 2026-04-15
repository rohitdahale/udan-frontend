import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const Contact = () => {
  return (
    <Layout title="Contact Us | Udan Metaplast">
      <section className="pt-32 pb-20 bg-industrial-100 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading subtitle="Get In Touch" title="Partner with Udan Metaplast" centered />
          
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="w-full md:w-2/5 bg-navy-900 p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-hero-pattern opacity-10 bg-cover bg-center"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-10">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-electric/20 rounded-full flex items-center justify-center text-electric">📍</div>
                    <p>Nashik, Maharashtra, India</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-electric/20 rounded-full flex items-center justify-center text-electric">📞</div>
                    <p>+91 98765 43210</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-electric/20 rounded-full flex items-center justify-center text-electric">✉️</div>
                    <p>support@udanmetaplast.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-3/5 p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-industrial-100 border-none rounded-sm focus:ring-2 focus:ring-electric" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-industrial-100 border-none rounded-sm focus:ring-2 focus:ring-electric" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-industrial-100 border-none rounded-sm focus:ring-2 focus:ring-electric" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-industrial-100 border-none rounded-sm focus:ring-2 focus:ring-electric" placeholder="Your Company Ltd." />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-industrial-100 border-none rounded-sm focus:ring-2 focus:ring-electric resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button variant="primary" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
