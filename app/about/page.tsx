'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function About() {
  return (
    <div className="bg-cloud min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[900px]">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <Badge className="mb-4 bg-badge-blue text-lift-blue">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              We build trust.
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body">
              LocalLift is a web studio based in Downingtown, Pennsylvania, focused on helping local businesses look more credible online with clear, affordable websites and ongoing support.
            </p>
          </Reveal>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-card bg-muted-slate/20">
                <img src="/images/kunj-tailor.png" alt="Kunj Tailor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-lift-navy mb-1">Kunj Tailor</h3>
              <p className="text-lift-blue font-semibold text-sm mb-4 text-center">Co-Founder<br/>Operations & Client Relations</p>
              <p className="text-center text-slate-text text-sm max-w-xs">
                Handles financials, customer relations, and business operations. Kunj ensures that every project stays on track and you are communicated with clearly from day one.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
             <div className="flex flex-col items-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-card bg-muted-slate/20">
                <img src="/images/aryan-mitra.png" alt="Aryan Mitra" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-lift-navy mb-1">Aryan Mitra</h3>
              <p className="text-lift-blue font-semibold text-sm mb-4 text-center">Co-Founder<br/>Technical Director & Design</p>
              <p className="text-center text-slate-text text-sm max-w-xs">
                Designs the websites and manages the technical deployment. Aryan focuses on fast-loading code, clean UI structures, and ensuring your site looks perfect on all unqiue mobile screens.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values / Trust block */}
        <div className="bg-white rounded-card shadow-card py-10 px-6 md:p-16 border border-border-color mb-16">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-lift-blue" />
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy">Why local businesses trust us</h2>
            </div>
          </Reveal>
          <RevealList className="space-y-8">
            <div className="border-l-2 border-lift-blue pl-6">
              <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">Honest, student-founded hustle</h4>
              <p className="text-slate-text text-sm">We don't have a giant agency overhead or hide behind fake corporate stock photos. You work directly with us, and we are accountable to the results we produce.</p>
            </div>
            <div className="border-l-2 border-lift-blue pl-6">
              <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">Simplicity wins</h4>
              <p className="text-slate-text text-sm">Local business websites don't need highly animated 3D cubes. They need clear contact info, trust markers, and easy mobile navigation. We strip out the noise.</p>
            </div>
            <div className="border-l-2 border-lift-blue pl-6">
              <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">Fast communication</h4>
              <p className="text-slate-text text-sm">We know how frustrating it is when web designers disappear. We promise replies to your direct support requests within 1 business day.</p>
            </div>
          </RevealList>
        </div>

        {/* Final CTA */}
        <div className="text-center border-t border-border-color pt-16">
          <Reveal>
             <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-6">Let's see if we're a good fit.</h2>
             <Button asChild size="lg" className="bg-lift-blue text-white hover:bg-lift-blue-hover w-full sm:w-auto">
               <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
             </Button>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
