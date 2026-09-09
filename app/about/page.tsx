'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Zap, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

const founders = [
  {
    name: 'Kunj Tailor',
    role: 'Co-Founder',
    title: 'Operations & Client Relations',
    img: '/images/kunj-tailor.png',
    bio: 'Handles financials, customer relations, and business operations. Kunj ensures that every project stays on track and you are communicated with clearly from day one.',
  },
  {
    name: 'Aryan Mitra',
    role: 'Co-Founder',
    title: 'Technical Director & Design',
    img: '/images/aryan-mitra.png',
    bio: 'Designs the websites and manages the technical deployment. Aryan focuses on fast-loading code, clean UI structures, and ensuring your site looks perfect on all unique mobile screens.',
  },
];

const values = [
  {
    Icon: Sparkles,
    title: 'Honest, student-founded hustle',
    body: "We don't have a giant agency overhead or hide behind fake corporate stock photos. You work directly with us, and we are accountable to the results we produce.",
  },
  {
    Icon: Zap,
    title: 'Simplicity wins',
    body: "Local business websites don't need highly animated 3D cubes. They need clear contact info, trust markers, and easy mobile navigation. We strip out the noise.",
  },
  {
    Icon: MessageCircle,
    title: 'Fast communication',
    body: 'We know how frustrating it is when web designers disappear. We promise replies to your direct support requests within 1 business day.',
  },
];

export default function About() {
  return (
    <div className="bg-cloud min-h-screen">
      <PageHero
        badge="About Us"
        title="We build trust."
        highlight={['trust.']}
        subtitle="LocalLift is a web studio based in Downingtown, Pennsylvania, focused on helping local businesses look more credible online with clear, affordable websites and ongoing support."
      />

      <div className="container mx-auto max-w-[1000px] px-4 py-20 md:py-24">
        {/* Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-24">
          {founders.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1}>
              <div className="group relative">
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-card bg-gradient-to-br from-lift-blue/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                />
                <div className="relative flex flex-col items-center bg-white rounded-card p-8 border border-border-color shadow-sm group-hover:shadow-card group-hover:-translate-y-1 transition-all duration-300">
                  <div className="relative mb-6">
                    <div
                      aria-hidden
                      className="absolute -inset-2 rounded-full bg-gradient-to-br from-lift-blue to-purple-500 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-500"
                    />
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-card bg-muted-slate/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={f.img}
                        alt={f.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-sans font-bold text-lift-navy mb-1">{f.name}</h3>
                  <p className="text-lift-blue font-semibold text-sm mb-4 text-center">
                    {f.role}
                    <br />
                    {f.title}
                  </p>
                  <p className="text-center text-slate-text text-sm leading-relaxed max-w-xs">{f.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Values / Trust block */}
        <div className="relative bg-white rounded-[24px] shadow-card border border-border-color overflow-hidden mb-16">
          <div aria-hidden className="absolute -top-32 -right-32 w-72 h-72 rounded-full bg-lift-blue/10 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full bg-purple-300/15 blur-3xl" />

          <div className="relative p-8 md:p-14">
            <Reveal>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-xl bg-lift-blue/10 text-lift-blue flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy">
                  Why local businesses trust us
                </h2>
              </div>
            </Reveal>
            <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="group relative p-6 rounded-card border border-border-color bg-cloud/40 hover:bg-white hover:border-lift-blue/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-lift-blue text-white flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold font-sans text-lift-navy mb-2">{title}</h4>
                  <p className="text-slate-text text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </RevealList>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-8">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-6">
              Let&apos;s see if we&apos;re a good fit.
            </h2>
            <Magnetic>
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get in Touch
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
