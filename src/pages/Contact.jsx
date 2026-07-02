import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Layout
      title="Contact — UDAN Metaplast"
      description="Get in touch with UDAN Metaplast. Factory address, business hours, email and enquiry form."
    >
      <PageHero
        eyebrow="Contact"
        title="Let's engineer your next component, together."
        description="Send us your drawings or describe your requirement. Our engineering team responds within 48 hours with a detailed feasibility."
      />

      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-5 space-y-8">
            <ContactCard
              icon={MapPin}
              label="Factory Address"
              value={
                <>
                  Plot no H146/1/1, MIDC Ambad,
                  <br />
                  Nashik, Maharashtra 422010,
                  <br />
                  India
                </>
              }
            />
            <ContactCard icon={Phone} label="Phone" value="+91 93716 78364" />
            <ContactCard icon={Mail} label="Email" value="support@udanmetaplast.com" />
            <ContactCard
              icon={Clock}
              label="Business Hours"
              value={
                <>
                  Sun – Fri · 9:30 – 17:30 IST
                  <br />
                  Saturday closed
                </>
              }
            />
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-hairline bg-surface p-8 lg:p-12">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-primary">Send an enquiry</h2>
              <p className="mt-2 text-ink-muted">We typically respond within one business day.</p>

              {submitted ? (
                <div className="mt-10 rounded-2xl border border-secondary/30 bg-secondary/5 p-8 text-center animate-fade-in">
                  <div className="font-display font-bold text-2xl text-primary">Thank you.</div>
                  <p className="mt-2 text-ink-muted">Your enquiry has been received. Our team will reach out shortly.</p>
                </div>
              ) : (
                <form
                  className="mt-8 grid sm:grid-cols-2 gap-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Field label="Full Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                  <Field label="Subject" name="subject" wrap />
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold tracking-wide uppercase text-ink-muted">Project Details</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-secondary transition-colors"
                      placeholder="Tell us about your component, volumes and timeline…"
                    />
                  </div>
                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-secondary transition-colors"
                    >
                      Send Enquiry
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 bg-background">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-hairline aspect-[16/8]">
              <iframe
                title="UDAN Metaplast location"
                src="https://www.google.com/maps?q=Udan+Metaplast,+Plot+no+H146/1/1,+MIDC+Ambad,+Nashik,+Maharashtra+422010&output=embed"
                className="w-full h-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">{label}</div>
        <div className="mt-2 text-lg text-ink leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, wrap }) {
  return (
    <div className={wrap ? "sm:col-span-2" : ""}>
      <label className="text-xs font-semibold tracking-wide uppercase text-ink-muted">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-hairline bg-background px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:border-secondary transition-colors"
      />
    </div>
  );
}
