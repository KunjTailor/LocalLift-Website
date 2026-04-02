'use client';

import * as React from 'react';
import { Mail, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function Contact() {
  return (
    <div className="bg-cloud min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[1000px]">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body">
              Fill out the form below or email us directly. We'll reply within 1 business day.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Direct Contact Info */}
           <RevealList className="md:col-span-1 space-y-6">
              <Card className="p-6 border-border-color shadow-sm">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-lift-blue flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">Email us</h4>
                <a href="mailto:hello@locallift.local" className="text-lift-blue text-sm hover:underline font-semibold block">hello@locallift.local</a>
              </Card>

              <Card className="p-6 border-border-color shadow-sm">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-lift-blue flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">Response time</h4>
                <p className="text-slate-text text-sm">Within 1 business day</p>
              </Card>

              <Card className="p-6 border-border-color shadow-sm">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-lift-blue flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">Book a call</h4>
                <p className="text-slate-text text-sm mb-3">Schedule a 15-minute intro call to discuss your needs.</p>
                <a href="#" className="text-lift-blue text-sm font-semibold hover:underline">View Calendar &rarr;</a>
              </Card>
           </RevealList>

           {/* Contact Form */}
           <div className="md:col-span-2">
             <Reveal>
                <Card className="p-8 border-border-color shadow-card bg-white">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-lift-navy">Full Name <span className="text-error">*</span></label>
                        <input id="name" type="text" className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-lift-navy">Email Address <span className="text-error">*</span></label>
                        <input id="email" type="email" className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all" placeholder="john@company.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="business" className="text-sm font-semibold text-lift-navy">Business Name <span className="text-error">*</span></label>
                        <input id="business" type="text" className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all" placeholder="Acme Services" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="url" className="text-sm font-semibold text-lift-navy">Website URL</label>
                        <input id="url" type="url" className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all" placeholder="https://example.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="help" className="text-sm font-semibold text-lift-navy">What do you need help with? <span className="text-error">*</span></label>
                      <textarea id="help" rows={4} className="w-full rounded-[12px] border border-border-color bg-white p-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all resize-none" placeholder="Please describe your project or current challenges quickly..." required />
                    </div>

                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </Card>
             </Reveal>
           </div>
        </div>
      </div>
    </div>
  );
}
