'use client';

import * as React from 'react';
import Link from 'next/link';
import { Play, CheckCircle2, ShieldCheck, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function FreeReview() {
  return (
    <div className="bg-cloud min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4">
      <div className="container mx-auto max-w-[800px]">
        
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <Badge className="mb-6 bg-badge-blue text-lift-blue">Private Invitation</Badge>
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-lift-navy leading-tight mb-6 tracking-tight">
              Get a free website review for your local business
            </h1>
            <p className="text-lg md:text-xl text-slate-text font-body leading-relaxed md:leading-relaxed mb-8 max-w-2xl mx-auto">
              We reach out to local businesses when we see clear website opportunities. We'll send you a short video explaining how your site could generate more trust. If your site is already doing its job, we will honestly tell you that too.
            </p>
          </Reveal>
        </div>

        {/* Video Section */}
        <Reveal delay={0.1}>
          <div className="bg-white/80 backdrop-blur-sm rounded-frame p-2 shadow-light border border-border-color mb-16 md:mb-24 relative group cursor-pointer max-w-3xl mx-auto">
            <div className="aspect-video bg-muted-slate/20 rounded-[16px] md:rounded-[20px] relative overflow-hidden flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2400&fit=crop" alt="Loom Audit Thumbnail placeholder" className="absolute inset-0 w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-lift-navy/40 z-10 transition-colors group-hover:bg-lift-navy/30" />
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lift-blue text-white flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 md:w-10 md:h-10 ml-1 md:ml-1.5" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <Badge className="bg-lift-navy/80 backdrop-blur-md text-white border-transparent py-1.5">Short Intro from Kunj & Aryan</Badge>
              </div>
            </div>
          </div>
        </Reveal>

        {/* What the review covers */}
        <div className="mb-20 md:mb-24">
          <Reveal delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-8 text-center">What we look for in your review</h2>
          </Reveal>
          <RevealList className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Homepage clarity & messaging', 'Mobile usability and layout', 'Trust factors and credibility', 'Clear calls-to-action', 'Local SEO basic structure', 'Page speed & technical setup'].map((item, idx) => (
              <Card key={idx} className="p-4 md:p-5 border border-border-color flex items-center shadow-sm bg-white hover:border-badge-blue transition-colors">
                <CheckCircle2 className="w-5 h-5 text-success mr-3 shrink-0" />
                <span className="text-sm font-bold font-sans text-lift-navy">{item}</span>
              </Card>
            ))}
          </RevealList>
        </div>

        {/* See a sample audit */}
        <div className="mb-24 md:mb-32">
          <Reveal delay={0.3}>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-2">See a sample video review</h2>
              <p className="text-slate-text text-base mb-8">This is exactly what you can expect us to record and send to you.</p>
              
              <div className="bg-white rounded-frame p-2 shadow-sm border border-border-color max-w-[600px] mx-auto relative group cursor-pointer">
                <div className="aspect-[16/9] bg-muted-slate/20 rounded-card relative flex items-center justify-center overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&fit=crop" alt="Client screenshot" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                   <div className="w-12 h-12 rounded-full bg-white text-lift-navy flex items-center justify-center shadow z-20 group-hover:scale-110 transition-transform">
                     <Play className="w-5 h-5 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="bg-lift-navy rounded-[24px] md:rounded-[32px] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-card border-none">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lift-blue blur-[100px] opacity-30 pointer-events-none rounded-full" />
            
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 relative z-10">Request your free review</h2>
            <p className="text-cloud/80 text-base mb-10 max-w-lg mx-auto relative z-10 font-medium">
              We typically record and send your personalized review video within 1 business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 relative z-10 mb-8">
              <Button size="lg" asChild className="w-full sm:w-auto bg-lift-blue hover:bg-lift-blue-hover text-white">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Request Your Free Review
                </Link>
              </Button>
              <Button size="lg" asChild variant="secondary" className="w-full sm:w-auto border-transparent text-lift-navy font-bold">
                <Link href="https://calendly.com/localliftstudio/quick-intro-call" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Quick Call Instead
                </Link>
              </Button>
            </div>
             <div className="flex items-center justify-center gap-2 text-sm font-bold text-cloud/90 relative z-10 bg-black/20 py-2 px-4 rounded-full mx-auto w-max max-w-full">
                <ShieldCheck className="w-4 h-4 text-success" />
                <span>No pressure. No spam. Just honest feedback.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
