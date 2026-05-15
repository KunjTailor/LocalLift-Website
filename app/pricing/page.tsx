'use client';

import * as React from 'react';
import Link from 'next/link';
import { Check, Shield, Clock, Settings, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

const plans = [
  {
    name: 'Launch',
    setup: '$499',
    monthly: '$149',
    sub: 'Best for businesses that need a clean, professional website fast.',
    features: [
      'Up to 5 pages',
      'Mobile-responsive design',
      'Basic SEO setup',
      'Analytics setup',
      '1 monthly content update',
    ],
    href: '/contact?plan=launch',
    highlighted: false,
  },
  {
    name: 'Growth',
    setup: '$999',
    monthly: '$249',
    sub: 'Best for businesses that want more local visibility and service pages.',
    features: [
      'Up to 10 pages',
      'Local keyword mapping',
      'Review integration',
      'Priority support',
      '2 monthly content updates',
    ],
    href: '/contact?plan=growth',
    highlighted: true,
  },
  {
    name: 'Authority',
    setup: '$1,999',
    monthly: '$399',
    sub: 'Stronger long-term SEO and local credibility play for established brands.',
    features: [
      'Up to 25 pages',
      'Deeper local SEO strategy',
      'Custom landing pages',
      'Monthly strategy call',
      '4 monthly content updates',
    ],
    href: '/contact?plan=authority',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-cloud min-h-screen">
      <PageHero
        badge="Transparent Pricing"
        title="Simple pricing, no surprises"
        highlight={['surprises']}
        subtitle="All plans include custom design, mobile optimization, secure hosting, and our dedicated monthly support team."
      />

      <div className="container mx-auto max-w-[1200px] px-4 py-20 md:py-24">
        {/* Pricing Cards */}
        <RevealList className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-20 lg:mb-24">
          {plans.map((p) => (
            <div key={p.name} className={`relative h-full ${p.highlighted ? 'lg:-mt-6' : ''}`}>
              {p.highlighted && (
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-card bg-gradient-to-br from-lift-blue via-blue-500 to-purple-500 opacity-90 blur-sm"
                />
              )}
              <Card
                hoverable
                className={`relative h-full flex flex-col justify-between p-8 xl:p-10 bg-white rounded-card transition-all duration-300 ${p.highlighted ? 'border-lift-blue shadow-card' : 'border-border-color'}`}
              >
                {p.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-lift-blue to-purple-500 text-white text-[11px] uppercase tracking-wider font-extrabold px-4 py-1.5 rounded-bl-card rounded-tr-card flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-sans font-bold text-lift-navy border-b border-border-color pb-4 mb-6">
                    {p.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-[44px] leading-none font-sans font-extrabold bg-gradient-to-br from-lift-navy to-lift-blue bg-clip-text text-transparent">
                      {p.setup}
                    </span>
                    <span className="text-sm font-semibold text-slate-text"> setup</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-2xl font-sans font-bold text-lift-blue">{p.monthly}</span>
                    <span className="text-sm font-semibold text-slate-text"> / month</span>
                  </div>
                  <p className="text-sm text-slate-text mb-8 min-h-10">{p.sub}</p>

                  <ul className="space-y-4 mb-8 text-sm font-semibold text-lift-navy">
                    {p.features.map((f, i) => (
                      <li key={f} className="flex items-start">
                        <Check
                          className={`w-5 h-5 mr-3 shrink-0 ${i === p.features.length - 1 ? 'text-lift-blue' : 'text-success'}`}
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Magnetic strength={0.18}>
                  <Button
                    variant={p.highlighted ? 'primary' : 'outline'}
                    asChild
                    className="w-full group"
                  >
                    <Link href={p.href}>
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Magnetic>
              </Card>
            </div>
          ))}
        </RevealList>

        {/* Feature/Term Details Matrix */}
        <Reveal>
          <div className="bg-white rounded-[24px] shadow-card border border-border-color overflow-hidden max-w-[1100px] mx-auto mb-12">
            <div className="relative p-8 md:p-10 border-b border-border-color bg-gradient-to-br from-cloud via-white to-soft-blue overflow-hidden">
              <div aria-hidden className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-lift-blue/10 blur-3xl" />
              <h2 className="relative text-2xl md:text-3xl font-sans font-bold text-lift-navy">
                Clear Terms &amp; Inclusions
              </h2>
              <p className="relative text-sm md:text-base text-slate-text mt-2 max-w-2xl">
                We don&apos;t hide the details. Here is exactly how our process and packages work to protect you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-color">
              {[
                {
                  Icon: Shield,
                  title: 'Setup vs Monthly Fee',
                  body: (
                    <>
                      The <strong className="text-lift-navy font-bold">setup fee</strong> covers the custom design, structure mapping, and building your new website. The <strong className="text-lift-navy font-bold">monthly fee</strong> covers fast staging/hosting, SSL certificates, ongoing security, and your allotted monthly content updates.
                    </>
                  ),
                },
                {
                  Icon: Settings,
                  title: '"1 Content Update" Defined',
                  body: (
                    <>
                      A single content update means a small batch of edits: swapping a team photo, updating business hours, changing a price, or updating a testimonial. It does <em>not</em> mean designing a brand new service page from scratch.
                    </>
                  ),
                },
                {
                  Icon: Clock,
                  title: 'Turnaround & Revisions',
                  body: (
                    <>
                      Most sites launch within <strong className="text-lift-navy font-bold">2 to 4 weeks</strong>. We include 1-2 dedicated revision rounds (depending on your plan) before we push the live button, to ensure the site perfectly matches your vision.
                    </>
                  ),
                },
                {
                  Icon: Check,
                  title: 'Ownership & Cancellation',
                  body: (
                    <>
                      You own your site domain and content. You can cancel your monthly plan at any time with <strong className="text-lift-navy font-bold">30 days notice</strong>. We will package your website files for you to take to any hosting provider you choose.
                    </>
                  ),
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="group p-6 md:p-8 transition-colors hover:bg-cloud/40">
                  <h4 className="font-sans font-bold text-lift-navy mb-2 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-lift-blue/10 text-lift-blue flex items-center justify-center mr-3 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                    {title}
                  </h4>
                  <p className="text-sm text-slate-text font-medium leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
