'use client';

import * as React from 'react';
import Link from 'next/link';
import { Check, Shield, Clock, Settings, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

const highlights = [
  'Custom design, never a stock template',
  'Most builds go live in 2-4 weeks',
  'The finished website is yours to keep',
];

const inclusionGroups = [
  {
    title: 'A design that earns trust',
    items: [
      'Custom design built around your brand and services',
      'Up to 5 core pages, mapped out with you',
      'Mobile-first layout that stays sharp on any screen',
      'Photo and gallery treatment that shows off real work',
    ],
  },
  {
    title: 'Built to bring in calls',
    items: [
      'Contact and quote form wired straight to your inbox',
      'One-tap click-to-call on every page',
      'Service pages that answer what customers ask first',
      'Clear next steps placed where people actually decide',
    ],
  },
  {
    title: 'Ready to be found',
    items: [
      'Local SEO foundations: titles, descriptions, headings',
      'Location and service-area details search engines can read',
      'Analytics setup so you can see what visitors do',
      'Speed and mobile-usability pass before launch',
    ],
  },
  {
    title: 'Launched and handed over',
    items: [
      'Domain connection and launch support',
      'Two revision rounds before go-live',
      'A short walkthrough so you know how everything works',
      '14-day post-launch window for build fixes',
      'Full ownership of the finished site, files, and access',
    ],
  },
];

export default function Pricing() {
  return (
    <div className="bg-cloud min-h-screen">
      <PageHero
        badge="Transparent Pricing"
        title="One package, no surprises"
        highlight={['surprises']}
        subtitle="Everything your website needs is in one package for one flat price—custom design, mobile optimization, local SEO foundations, launch, and handoff."
      />

      <div className="container mx-auto max-w-[1200px] px-4 py-20 md:py-24">
        {/* The Complete Launch Package */}
        <Reveal>
          <div className="relative max-w-[1000px] mx-auto mb-20 lg:mb-24">
            <div
              aria-hidden
              className="absolute -inset-px rounded-card bg-gradient-to-br from-lift-blue via-blue-500 to-purple-500 opacity-90 blur-sm"
            />
            <Card className="relative bg-white border-lift-blue shadow-card rounded-card p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-lift-blue to-purple-500 text-white text-[11px] uppercase tracking-wider font-extrabold px-4 py-1.5 rounded-bl-card rounded-tr-card flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Everything Included
              </div>

              <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                <div>
                  <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy">
                    The Complete Launch Package
                  </h2>
                  <p className="text-sm text-slate-text mt-3">
                    Your whole website—designed, built, launched, and handed to you.
                  </p>

                  <div className="mt-8 flex items-end gap-3">
                    <span className="text-[64px] leading-none font-sans font-extrabold bg-gradient-to-br from-lift-navy to-lift-blue bg-clip-text text-transparent">
                      $500
                    </span>
                    <span className="text-sm font-semibold text-slate-text pb-2">flat</span>
                  </div>
                  <p className="text-sm font-bold text-lift-blue mt-3">One project fee. Paid once.</p>

                  <ul className="space-y-4 mt-8 text-sm font-semibold text-lift-navy">
                    {highlights.map((f) => (
                      <li key={f} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 shrink-0 text-success" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Magnetic strength={0.18}>
                    <Button asChild className="w-full group mt-9">
                      <Link href="/contact">
                        Start Your Website
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </Magnetic>
                </div>

                <div className="md:border-l md:border-border-color md:pl-14">
                  <h3 className="text-xs uppercase tracking-wider font-extrabold text-lift-blue mb-6">
                    What&apos;s included
                  </h3>
                  <div className="space-y-6">
                    {inclusionGroups.map((g) => (
                      <div key={g.title}>
                        <h4 className="text-sm font-sans font-bold text-lift-navy mb-2.5">{g.title}</h4>
                        <ul className="space-y-2 text-sm text-slate-text font-medium">
                          {g.items.map((f) => (
                            <li key={f} className="flex items-start">
                              <Check className="w-4 h-4 mr-2.5 mt-0.5 shrink-0 text-success" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Reveal>

        {/* Feature/Term Details Matrix */}
        <Reveal>
          <div className="bg-white rounded-[24px] shadow-card border border-border-color overflow-hidden max-w-[1100px] mx-auto mb-12">
            <div className="relative p-8 md:p-10 border-b border-border-color bg-gradient-to-br from-cloud via-white to-soft-blue overflow-hidden">
              <div aria-hidden className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-lift-blue/10 blur-3xl" />
              <h2 className="relative text-2xl md:text-3xl font-sans font-bold text-lift-navy">
                Clear Terms &amp; Inclusions
              </h2>
              <p className="relative text-sm md:text-base text-slate-text mt-2 max-w-2xl">
                We don&apos;t hide the details. Here is exactly how the package works to protect you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border-color">
              {[
                {
                  Icon: Shield,
                  title: 'What the $500 covers',
                  body: (
                    <>
                      One <strong className="text-lift-navy font-bold">flat project fee</strong> covers the entire build: custom design, structure mapping, up to five core pages, local SEO foundations, launch, and handoff. It is paid once—there is nothing recurring to LocalLift.
                    </>
                  ),
                },
                {
                  Icon: Settings,
                  title: 'What you pay separately',
                  body: (
                    <>
                      Domain registration and hosting are paid <strong className="text-lift-navy font-bold">directly to those providers</strong>, so the accounts stay in your name. Significantly larger sites, e-commerce, booking systems, and complex integrations are quoted separately.
                    </>
                  ),
                },
                {
                  Icon: Clock,
                  title: 'Turnaround & Revisions',
                  body: (
                    <>
                      Most sites launch within <strong className="text-lift-navy font-bold">2 to 4 weeks</strong>. We include <strong className="text-lift-navy font-bold">two</strong> dedicated revision rounds before we push the live button, to ensure the site perfectly matches your vision.
                    </>
                  ),
                },
                {
                  Icon: Check,
                  title: 'Ownership & Handoff',
                  body: (
                    <>
                      Once the build is complete and paid, the website, its files, and the agreed access are <strong className="text-lift-navy font-bold">yours</strong>. We cover build fixes free for <strong className="text-lift-navy font-bold">14 days</strong> after launch, and you can take the site anywhere you like.
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
