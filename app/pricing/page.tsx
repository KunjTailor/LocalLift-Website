'use client';

import * as React from 'react';
import Link from 'next/link';
import { Check, Shield, Clock, Smartphone, Settings } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function Pricing() {
  return (
    <div className="bg-cloud min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <Badge className="mb-4">Transparent Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              Simple pricing, no surprises
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body">
              All plans include custom design, mobile optimization, secure hosting, and our dedicated monthly support team.
            </p>
          </Reveal>
        </div>

        {/* Pricing Cards */}
        <RevealList className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-20 lg:mb-24">
          
          {/* Launch Plan */}
          <Card hoverable className="h-full flex flex-col justify-between p-8 xl:p-10 border-border-color bg-white rounded-card">
            <div>
              <h3 className="text-xl font-sans font-bold text-lift-navy border-b border-border-color pb-4 mb-6">Launch</h3>
              <div className="mb-2">
                <span className="text-[40px] leading-none font-sans font-extrabold text-lift-navy">$499</span>
                <span className="text-sm font-semibold text-slate-text"> setup</span>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-sans font-bold text-lift-blue">$149</span>
                <span className="text-sm font-semibold text-slate-text"> / month</span>
              </div>
              <p className="text-sm text-slate-text mb-8 h-10">Best for businesses that need a clean, professional website fast.</p>
              
              <ul className="space-y-4 mb-8 text-sm font-semibold text-lift-navy">
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Up to 5 pages</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Mobile-responsive design</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Basic SEO setup</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Analytics setup</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-lift-blue mr-3 shrink-0" /> <span>1 monthly content update</span></li>
              </ul>
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href="/contact?plan=launch">Get Started</Link>
            </Button>
          </Card>

          {/* Growth Plan (Highlighted) */}
          <Card hoverable className="h-full flex flex-col justify-between p-8 xl:p-10 border-lift-blue shadow-card bg-white relative top-0 lg:-top-4 rounded-card">
            <div className="absolute top-0 right-0 bg-lift-blue text-white text-[11px] uppercase tracking-wider font-extrabold px-4 py-1.5 rounded-bl-card rounded-tr-card">
              Most Popular
            </div>
            <div>
              <h3 className="text-xl font-sans font-bold text-lift-navy border-b border-border-color pb-4 mb-6">Growth</h3>
              <div className="mb-2">
                <span className="text-[40px] leading-none font-sans font-extrabold text-lift-navy">$999</span>
                <span className="text-sm font-semibold text-slate-text"> setup</span>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-sans font-bold text-lift-blue">$249</span>
                <span className="text-sm font-semibold text-slate-text"> / month</span>
              </div>
              <p className="text-sm text-slate-text mb-8 h-10">Best for businesses that want more local visibility and service pages.</p>
              
              <ul className="space-y-4 mb-8 text-sm font-semibold text-lift-navy">
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Up to 10 pages</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Local keyword mapping</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Review integration</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Priority support</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-lift-blue mr-3 shrink-0" /> <span>2 monthly content updates</span></li>
              </ul>
            </div>
            <Button asChild className="w-full">
              <Link href="/contact?plan=growth">Get Started</Link>
            </Button>
          </Card>

          {/* Authority Plan */}
          <Card hoverable className="h-full flex flex-col justify-between p-8 xl:p-10 border-border-color bg-white rounded-card">
            <div>
              <h3 className="text-xl font-sans font-bold text-lift-navy border-b border-border-color pb-4 mb-6">Authority</h3>
              <div className="mb-2">
                <span className="text-[40px] leading-none font-sans font-extrabold text-lift-navy">$1,999</span>
                <span className="text-sm font-semibold text-slate-text"> setup</span>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-sans font-bold text-lift-blue">$399</span>
                <span className="text-sm font-semibold text-slate-text"> / month</span>
              </div>
              <p className="text-sm text-slate-text mb-8 h-10">Stronger long-term SEO and local credibility play for established brands.</p>
              
              <ul className="space-y-4 mb-8 text-sm font-semibold text-lift-navy">
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Up to 25 pages</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Deeper local SEO strategy</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Custom landing pages</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Monthly strategy call</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-lift-blue mr-3 shrink-0" /> <span>4 monthly content updates</span></li>
              </ul>
            </div>
            <Button variant="outline" asChild className="w-full">
              <Link href="/contact?plan=authority">Get Started</Link>
            </Button>
          </Card>
        </RevealList>

        {/* Feature/Term Details Matrix */}
        <Reveal>
          <div className="bg-white rounded-[24px] shadow-sm border border-border-color overflow-hidden max-w-[1000px] mx-auto mb-20 md:mb-24">
            <div className="p-8 md:p-10 border-b border-border-color bg-cloud/50">
              <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy">Clear Terms & Inclusions</h2>
              <p className="text-sm md:text-base text-slate-text mt-2 max-w-2xl">We don't hide the details. Here is exactly how our process and packages work to protect you.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border-color">
               
               <div className="flex flex-col divide-y divide-border-color">
                 <div className="p-6 md:p-8">
                   <h4 className="font-sans font-bold text-lift-navy mb-2 flex items-center"><Shield className="w-4 h-4 mr-2 text-lift-blue"/> Setup vs Monthly Fee</h4>
                   <p className="text-sm text-slate-text font-medium leading-relaxed">The <strong className="text-lift-navy font-bold">setup fee</strong> covers the custom design, structure mapping, and building your new website. The <strong className="text-lift-navy font-bold">monthly fee</strong> covers fast staging/hosting, SSL certificates, ongoing security, and your allotted monthly content updates.</p>
                 </div>
                 <div className="p-6 md:p-8">
                   <h4 className="font-sans font-bold text-lift-navy mb-2 flex items-center"><Settings className="w-4 h-4 mr-2 text-lift-blue"/> "1 Content Update" Defined</h4>
                   <p className="text-sm text-slate-text font-medium leading-relaxed">A single content update means a small batch of edits: swapping a team photo, updating business hours, changing a price, or updating a testimonial. It does <em>not</em> mean designing a brand new service page from scratch.</p>
                 </div>
               </div>

               <div className="flex flex-col divide-y divide-border-color">
                  <div className="p-6 md:p-8">
                   <h4 className="font-sans font-bold text-lift-navy mb-2 flex items-center"><Clock className="w-4 h-4 mr-2 text-lift-blue"/> Turnaround & Revisions</h4>
                   <p className="text-sm text-slate-text font-medium leading-relaxed">Most sites launch within <strong className="text-lift-navy font-bold">2 to 4 weeks</strong>. We include 1-2 dedicated revision rounds (depending on your plan) before we push the live button, to ensure the site perfectly matches your vision.</p>
                 </div>
                 <div className="p-6 md:p-8">
                   <h4 className="font-sans font-bold text-lift-navy mb-2 flex items-center"><Check className="w-4 h-4 mr-2 text-lift-blue"/> Ownership & Cancellation</h4>
                   <p className="text-sm text-slate-text font-medium leading-relaxed">You own your site domain and content. You can cancel your monthly plan at any time with <strong className="text-lift-navy font-bold">30 days notice</strong>. We will package your website files for you to take to any hosting provider you choose.</p>
                 </div>
               </div>

            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
