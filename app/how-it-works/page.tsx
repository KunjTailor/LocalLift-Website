'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowDown, MessageSquare, Paintbrush, Rocket, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

const steps = [
  {
    icon: MessageSquare,
    title: "1. Review & Planning",
    timeline: "Week 1",
    desc: "We start with a zero-pressure review. You fill out a simple onboarding form. We'll map out your site's structure, gather your logo and photos, and plan the exact pages you need to rank locally."
  },
  {
    icon: Paintbrush,
    title: "2. Design & Build",
    timeline: "Weeks 2-3",
    desc: "We design a clean, responsive prototype. Instead of sending confusing PDFs, we send you a working link so you can see exactly how it feels on your phone and desktop."
  },
  {
    icon: Rocket,
    title: "3. Revisions & Launch",
    timeline: "Week 4",
    desc: "You review the site. We handle any revisions, attach your custom domain, optimize your performance tags, and make the website live for the world."
  },
  {
    icon: Wrench,
    title: "4. Ongoing Support",
    timeline: "Monthly",
    desc: "We don't abandon you after launch. We handle the hosting, software updates, security, and your monthly content edits so you can just run your business."
  }
];

export default function HowItWorks() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[800px]">
        {/* Header */}
        <div className="text-center mb-20">
          <Reveal>
             <Badge className="mb-4">Our Process</Badge>
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              Simple steps, no headaches
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-xl mx-auto font-body">
              We know you don't have time to manage a web project. We've structured our process to require very little of your time.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line hidden on extremely small screens */}
          <div className="absolute left-[38px] md:left-1/2 top-4 bottom-4 w-px bg-border-color hidden sm:block md:-translate-x-1/2" />
          
          <RevealList className="space-y-12">
            {steps.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col sm:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-6 md:gap-12`}>
                
                {/* Center Icon */}
                <div className="hidden sm:flex absolute left-[38px] md:left-1/2 -ml-[24px] top-6 w-12 h-12 rounded-full bg-cloud border-4 border-white text-lift-blue items-center justify-center shadow-sm z-10 transition-transform hover:scale-110">
                  <step.icon className="w-5 h-5" />
                </div>
                
                {/* Content */}
                <Card className={`w-full sm:w-[calc(100%-80px)] md:w-[calc(50%-48px)] p-8 shadow-light hover:shadow-card hover:border-badge-blue transition-all duration-300 ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="font-sans font-bold text-xl text-lift-navy">{step.title}</h3>
                    <Badge className="bg-cloud text-slate-text shrink-0">{step.timeline}</Badge>
                  </div>
                  <p className="text-slate-text text-sm leading-relaxed">{step.desc}</p>
                </Card>
              </div>
            ))}
          </RevealList>
        </div>

        {/* Post-launch */}
         <div className="mt-32 pt-20 border-t border-border-color text-center max-w-2xl mx-auto">
            <Reveal>
              <h2 className="text-3xl font-sans font-bold mb-4 text-lift-navy">What happens after launch?</h2>
              <p className="text-slate-text text-lg mb-8">
                Your monthly plan covers our ongoing support. If you need a new photo swapped, hours changed, or a quick testimonial added, just email us. We handle the tech so you don't have to.
              </p>
              <Button asChild size="lg">
                <Link href="/pricing">View Plans & Pricing</Link>
              </Button>
            </Reveal>
         </div>

      </div>
    </div>
  );
}
