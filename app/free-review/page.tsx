'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, Mail, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

export default function FreeReview() {
  return (
    <div className="bg-cloud min-h-screen">
      <PageHero
        badge="Private Invitation"
        title="Get a free website review for your local business"
        highlight={['free']}
        subtitle="We reach out to local businesses when we see clear website opportunities. We'll send you a short video explaining how your site could generate more trust. If your site is already doing its job, we'll honestly tell you that too."
      />

      <div className="container mx-auto max-w-[900px] px-4 py-16 md:py-20">
        {/* Banner Image */}
        <Reveal delay={0.1}>
          <div className="bg-white/80 backdrop-blur-sm rounded-frame p-2 shadow-card border border-border-color mb-20 md:mb-24 relative group max-w-3xl mx-auto">
            <div className="aspect-video bg-muted-slate/20 rounded-[16px] md:rounded-[20px] relative overflow-hidden flex items-end justify-start p-6 md:p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2400&fit=crop"
                alt="Website Audit Setup"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lift-navy/85 via-lift-navy/30 to-transparent z-10" />
              <div className="relative z-20">
                <Badge className="bg-white text-lift-navy border-transparent py-1.5 font-bold mb-3">
                  Comprehensive Analysis
                </Badge>
                <h3 className="text-white text-2xl md:text-4xl font-bold font-sans drop-shadow">
                  We review your site&apos;s performance
                </h3>
              </div>
            </div>
          </div>
        </Reveal>

        {/* What the review covers */}
        <div className="mb-20 md:mb-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-2 text-center">
              What we look for in your review
            </h2>
            <p className="text-slate-text text-center max-w-xl mx-auto mb-10">
              Six concrete things we check so the feedback is specific, not generic.
            </p>
          </Reveal>
          <RevealList className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Homepage clarity & messaging',
              'Mobile usability and layout',
              'Trust factors and credibility',
              'Clear calls-to-action',
              'Local SEO basic structure',
              'Page speed & technical setup',
            ].map((item) => (
              <Card
                key={item}
                className="group p-5 border border-border-color flex items-center shadow-sm bg-white hover:border-lift-blue/40 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-success/10 text-success flex items-center justify-center mr-4 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <span className="text-sm font-bold font-sans text-lift-navy">{item}</span>
              </Card>
            ))}
          </RevealList>
        </div>

        {/* Insight Image */}
        <div className="mb-20 md:mb-24">
          <Reveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-2">
                Actionable insights for growth
              </h2>
              <p className="text-slate-text text-base mb-8 max-w-xl mx-auto">
                Discover exactly what&apos;s holding your website back from converting more visitors.
              </p>
              <div className="bg-white rounded-frame p-2 shadow-card border border-border-color max-w-[700px] mx-auto relative group">
                <div className="aspect-[16/9] bg-muted-slate/20 rounded-card relative flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&fit=crop"
                    alt="Data and analytics"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lift-navy/40 to-transparent z-10" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* CTA */}
        <Reveal>
          <div className="dark-surface relative bg-lift-navy rounded-[24px] md:rounded-[32px] p-10 md:p-14 text-center text-white overflow-hidden shadow-card">
            <div aria-hidden className="absolute top-0 right-0 w-[400px] h-[400px] bg-lift-blue blur-[100px] opacity-30 pointer-events-none rounded-full" />
            <div aria-hidden className="absolute -bottom-32 -left-20 w-[400px] h-[400px] bg-purple-500 blur-[120px] opacity-25 pointer-events-none rounded-full" />
            <div
              aria-hidden
              className="absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            <h2 className="relative z-10 text-3xl md:text-4xl font-sans font-bold mb-4 text-white">
              Request your free review
            </h2>
            <p className="relative z-10 text-cloud/85 text-base md:text-lg mb-10 max-w-lg mx-auto font-medium leading-relaxed">
              We typically record and send your personalized review video within 1 business day.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-8">
              <Magnetic>
                <Button size="lg" asChild className="w-full sm:w-auto bg-lift-blue hover:bg-lift-blue-hover text-white group">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Request Your Free Review
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button size="lg" asChild variant="secondary" className="w-full sm:w-auto border-transparent text-lift-navy font-bold">
                  <Link href="https://calendly.com/localliftstudio/quick-intro-call" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Quick Call Instead
                  </Link>
                </Button>
              </Magnetic>
            </div>
            <div className="relative z-10 flex items-center justify-center gap-2 text-sm font-bold text-cloud/90 bg-black/20 py-2 px-4 rounded-full mx-auto w-max max-w-full">
              <ShieldCheck className="w-4 h-4 text-success" />
              <span>No pressure. No spam. Just honest feedback.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
