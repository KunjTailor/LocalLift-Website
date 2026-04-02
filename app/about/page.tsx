'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function About() {
  return (
    <div className="bg-cloud min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[900px]">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
            <Badge className="mb-4 bg-badge-blue text-lift-blue">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              We build trust.
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body">
              LocalLift is a student-founded web studio focused on helping local businesses look more credible online with clear, affordable websites and ongoing support.
            </p>
          </Reveal>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-card bg-muted-slate/20">
                {/* Real founder headshot placeholder */}
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&fit=crop" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-lift-navy mb-1">Founder 1</h3>
              <p className="text-lift-blue font-semibold text-sm mb-4">Co-Founder & Design</p>
              <p className="text-center text-slate-text text-sm">Passionate about clean UI design that drives action. Focuses on ensuring your potential customers can find what they need in seconds.</p>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
             <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-card bg-muted-slate/20">
                {/* Real founder headshot placeholder */}
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&fit=crop" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-sans font-bold text-lift-navy mb-1">Founder 2</h3>
              <p className="text-lift-blue font-semibold text-sm mb-4">Co-Founder & Development</p>
              <p className="text-center text-slate-text text-sm">Dedicated to fast-loading code and mobile-first development. Manages the ongoing support to keep your site running smoothly.</p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <div className="bg-white rounded-card shadow-card p-10 md:p-16 border border-border-color">
          <Reveal>
            <h2 className="text-3xl font-sans font-bold text-lift-navy mb-8">What we believe in</h2>
          </Reveal>
          <RevealList className="space-y-8">
            <div className="border-l-2 border-lift-blue pl-6">
              <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">Honesty over everything</h4>
              <p className="text-slate-text text-sm">We don't guarantee #1 Google rankings or make fake promises. We promise clean design and hard work.</p>
            </div>
            <div className="border-l-2 border-lift-blue pl-6">
              <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">Simplicity wins</h4>
              <p className="text-slate-text text-sm">Local business websites don't need highly animated 3D cubes. They need clear contact info and easy mobile navigation.</p>
            </div>
            <div className="border-l-2 border-lift-blue pl-6">
              <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">Fast communication</h4>
              <p className="text-slate-text text-sm">We pride ourselves on our response times. We promise replies to your support requests within 1 business day.</p>
            </div>
          </RevealList>
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <Reveal>
             <h2 className="text-3xl font-sans font-bold text-lift-navy mb-6">Let's see if we're a good fit.</h2>
             <Button asChild size="lg" className="bg-lift-blue text-white hover:bg-lift-blue-hover">
               <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
             </Button>
          </Reveal>
        </div>

      </div>
    </div>
  );
}
