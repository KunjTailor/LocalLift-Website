'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function FreeReview() {
  return (
    <div className="bg-cloud min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-[800px]">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Reveal>
            <Badge className="mb-6 bg-badge-blue text-lift-blue">Private Invitation</Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-lift-navy leading-tight mb-6">
              Get a free website review for your local business
            </h1>
            <p className="text-lg text-slate-text font-body leading-relaxed mb-8">
              We reach out to local businesses when we see clear website opportunities. We'll send you a short video explaining how your site could generate more trust. If your site is already doing its job, we will say that too.
            </p>
          </Reveal>
        </div>

        {/* Video Section */}
        <Reveal delay={0.1}>
          <div className="bg-white rounded-frame p-2 shadow-card border border-border-color mb-16 relative group cursor-pointer">
            <div className="aspect-video bg-lift-navy rounded-card relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-black/40 z-10 transition-colors group-hover:bg-black/20" />
              <div className="w-16 h-16 rounded-full bg-lift-blue text-white flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <Badge className="bg-black/50 text-white border-transparent">1:45 • Intro from our Founder</Badge>
              </div>
            </div>
          </div>
        </Reveal>

        {/* What the review covers */}
        <div className="mb-16">
          <Reveal delay={0.2}>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mb-8 text-center">What we look for in your review</h2>
          </Reveal>
          <RevealList className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Homepage clarity & messaging', 'Mobile usability and layout', 'Trust factors and credibility', 'Clear calls-to-action', 'Local SEO basic structure', 'Page speed & technical setup'].map((item, idx) => (
              <Card key={idx} className="p-4 border-border-color flex items-center shadow-light">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 shrink-0" />
                <span className="text-sm font-semibold text-lift-navy">{item}</span>
              </Card>
            ))}
          </RevealList>
        </div>

        {/* See a sample audit */}
        <div className="mb-24">
          <Reveal delay={0.3}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-sans font-bold text-lift-navy mb-2">See a sample video review</h2>
              <p className="text-slate-text text-sm mb-6">This is exactly what you can expect us to send you.</p>
              
              <div className="bg-white rounded-frame p-2 shadow-light border border-border-color max-w-[600px] mx-auto relative group cursor-pointer mb-6">
                <div className="aspect-[4/3] bg-muted-slate/20 rounded-card relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-lift-navy flex items-center justify-center shadow">
                     <Play className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="bg-lift-navy rounded-frame p-10 text-center text-white relative overflow-hidden shadow-card">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lift-blue blur-[80px] opacity-30 pointer-events-none rounded-full" />
            
            <h2 className="text-3xl font-sans font-bold mb-4 relative z-10">Request your free review</h2>
            <p className="text-cloud/80 text-sm md:text-base mb-8 max-w-lg mx-auto relative z-10 hover:text-cloud transition-colors">
              We typically record and send your review within 1-2 business days.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <Button size="lg" className="w-full sm:w-auto bg-lift-blue hover:bg-lift-blue-hover text-white">
                <Mail className="w-4 h-4 mr-2" />
                Email your URL
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto border-transparent">
                <Calendar className="w-4 h-4 mr-2" />
                Book a Quick Call Instead
              </Button>
            </div>
             <div className="mt-8 flex items-center justify-center gap-2 text-xs font-semibold text-cloud/70 relative z-10">
                <ShieldCheck className="w-4 h-4 text-lift-blue" />
                <span>No pressure. No annoying followup drips.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
