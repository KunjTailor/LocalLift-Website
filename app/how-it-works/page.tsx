'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Paintbrush, Rocket, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

const steps = [
  {
    icon: MessageSquare,
    title: '1. Review & Planning',
    timeline: 'Week 1',
    desc: "We start with a zero-pressure review. You fill out a simple onboarding form. We'll map out your site's structure, gather your logo and photos, and plan the exact pages you need to rank locally.",
  },
  {
    icon: Paintbrush,
    title: '2. Design & Build',
    timeline: 'Weeks 2-3',
    desc: "We design a clean, responsive prototype. Instead of sending confusing PDFs, we send you a working link so you can see exactly how it feels on your phone and desktop.",
  },
  {
    icon: Rocket,
    title: '3. Revisions & Launch',
    timeline: 'Week 4',
    desc: 'You review the site. We handle any revisions, attach your custom domain, optimize your performance tags, and make the website live for the world.',
  },
  {
    icon: Wrench,
    title: '4. Ongoing Support',
    timeline: 'Monthly',
    desc: "We don't abandon you after launch. We handle the hosting, software updates, security, and your monthly content edits so you can just run your business.",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen">
      <PageHero
        badge="Our Process"
        title="Simple steps, no headaches"
        highlight={['headaches']}
        subtitle="We know you don't have time to manage a web project. We've structured our process to require very little of your time."
      />

      <div className="container mx-auto px-4 max-w-[900px] py-20 md:py-28">
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute left-[27px] sm:left-[38px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-lift-blue/40 via-border-color to-purple-400/40 md:-translate-x-1/2"
          />

          <RevealList className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12`}
              >
                {/* Center Icon */}
                <div className="absolute left-[3px] sm:left-[14px] md:left-1/2 md:-ml-[24px] top-1 w-12 h-12 rounded-full bg-white border-4 border-cloud text-lift-blue flex items-center justify-center shadow-card z-10 group/icon">
                  <span aria-hidden className="absolute inset-0 rounded-full bg-lift-blue/15 animate-ping" />
                  <step.icon className="relative w-5 h-5" />
                </div>

                {/* Content */}
                <Card
                  className={`group w-full pl-16 sm:pl-0 sm:w-[calc(100%-80px)] sm:ml-20 md:ml-0 md:w-[calc(50%-48px)] p-6 md:p-7 shadow-light hover:shadow-card hover:border-lift-blue/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                >
                  <div
                    aria-hidden
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-lift-blue/5 blur-2xl group-hover:bg-lift-blue/15 transition-colors duration-500"
                  />
                  <div className="relative flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-sans font-bold text-xl text-lift-navy">{step.title}</h3>
                    <Badge className="bg-cloud text-slate-text shrink-0">{step.timeline}</Badge>
                  </div>
                  <p className="relative text-slate-text text-sm leading-relaxed">{step.desc}</p>
                </Card>
              </div>
            ))}
          </RevealList>
        </div>

        {/* Post-launch */}
        <div className="mt-28 md:mt-36 pt-16 border-t border-border-color text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4 text-lift-navy">
              What happens after launch?
            </h2>
            <p className="text-slate-text text-lg mb-8 leading-relaxed">
              Your monthly plan covers our ongoing support. If you need a new photo swapped, hours changed, or a quick testimonial added, just email us. We handle the tech so you don&apos;t have to.
            </p>
            <Magnetic>
              <Button asChild size="lg" className="group">
                <Link href="/pricing">
                  View Plans &amp; Pricing
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </Magnetic>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
