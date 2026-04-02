'use client';

import * as React from 'react';
import Link from 'next/link';
import { Check, X, Shield, Clock, Smartphone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealList } from '@/components/animations/Reveal';

export default function Pricing() {
  return (
    <div className="bg-cloud min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16">
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
        <RevealList className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto mb-24">
          
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
            <Button variant="outline" className="w-full">Get Started</Button>
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
            <Button className="w-full">Get Started</Button>
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
              <p className="text-sm text-slate-text mb-8 h-10">Stronger long-term SEO and credibility play for established brands.</p>
              
              <ul className="space-y-4 mb-8 text-sm font-semibold text-lift-navy">
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Up to 25 pages</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Deeper SEO strategy</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Custom landing pages</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> <span>Monthly strategy call</span></li>
                <li className="flex items-start"><Check className="w-5 h-5 text-lift-blue mr-3 shrink-0" /> <span>4 monthly content updates</span></li>
              </ul>
            </div>
            <Button variant="outline" className="w-full">Get Started</Button>
          </Card>
        </RevealList>

        {/* Feature Comparison */}
        <Reveal>
          <div className="bg-white rounded-card shadow-card border border-border-color overflow-hidden max-w-[1000px] mx-auto mb-24">
            <div className="p-8 border-b border-border-color bg-cloud/50">
              <h2 className="text-2xl font-sans font-bold text-lift-navy">What's included in every plan</h2>
              <p className="text-sm text-slate-text mt-2">We don't nickel-and-dime you for the basics.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-border-color">
              <div className="p-6">
                <Shield className="w-6 h-6 text-lift-blue mb-3" />
                <h4 className="font-sans font-bold text-lift-navy mb-2">Secure Hosting & SSL</h4>
                <p className="text-sm text-slate-text">Fast global servers and security certificates included.</p>
              </div>
              <div className="p-6 border-t md:border-t-0 border-border-color">
                <Clock className="w-6 h-6 text-lift-blue mb-3" />
                <h4 className="font-sans font-bold text-lift-navy mb-2">Automated Backups</h4>
                <p className="text-sm text-slate-text">We keep secure copies so you never lose your website.</p>
              </div>
              <div className="p-6 border-t md:border-t-0 border-border-color">
                <Smartphone className="w-6 h-6 text-lift-blue mb-3" />
                <h4 className="font-sans font-bold text-lift-navy mb-2">Mobile Optimization</h4>
                <p className="text-sm text-slate-text">Built to look perfect on every possible screen size.</p>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </div>
  );
}
