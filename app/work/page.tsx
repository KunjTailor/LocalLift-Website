'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

const projects = [
  {
    title: 'Oak & Stone',
    businessType: 'Kitchen & Bath',
    type: 'Authority Build',
    oldProblem: 'A luxury business stuck with a generic, template-based site that failed to showcase their high-end craftsmanship and authority in the market.',
    improvements: ['Luxury editorial design', 'Custom component animations', 'Authority-tier local SEO structure'],
    image: '/images/oak-stone-project.png',
    link: 'https://oak-and-stone.vercel.app/',
  },
  {
    title: 'Brandywine Landscaping & Hardscaping',
    businessType: 'Landscaping',
    type: 'Growth Build',
    oldProblem: 'Inconsistent branding and a cluttered mobile experience made it difficult for homeowners to find specific service details or request quotes.',
    improvements: ['Service-specific landing pages', 'Optimized mobile lead capture', 'Strategic keyword mapping'],
    image: '/images/brandywine-landscaping-project.png',
    link: 'https://brandywine-landscaping.vercel.app/',
  },
  {
    title: 'Shine & Shield',
    businessType: 'Auto Detailing',
    type: 'Launch Build',
    oldProblem: 'No online presence whatsoever, missing out on thousands of local searchers looking for high-quality mobile detailing services.',
    improvements: ['High-performance landing page', 'Integrated booking triggers', 'Mobile-first localized SEO'],
    image: '/images/shine-shield-project.png',
    link: 'https://demo-shine-and-shield.vercel.app/',
  },
];

export default function Work() {
  return (
    <div className="bg-cloud min-h-screen">
      <PageHero
        badge="Portfolio"
        title="Websites built for conversion"
        highlight={['conversion']}
        subtitle="We design simple, trust-building websites that turn local traffic into actual phone calls and booked appointments."
      >
        <div className="inline-flex items-center text-xs font-semibold text-slate-text bg-white border border-border-color rounded-pill py-2 px-4 shadow-sm">
          <Info className="w-4 h-4 mr-2 text-lift-blue" />
          Some projects are concept builds that show our exact design and strategy approach.
        </div>
      </PageHero>

      <div className="container mx-auto max-w-[1200px] px-4 py-20 md:py-28">
        <RevealList className="space-y-24 md:space-y-40">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-20`}
            >
              {/* Mockup Frame */}
              <div className="w-full lg:w-3/5 group relative">
                <div
                  aria-hidden
                  className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-lift-blue/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                />
                <Link
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block rounded-[16px] md:rounded-[20px] border border-border-color bg-white shadow-card overflow-hidden transition-all duration-500 hover:shadow-hover hover:-translate-y-1"
                >
                  <div className="h-8 border-b border-border-color bg-cloud flex items-center px-4">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <span className="ml-3 text-[11px] font-mono text-slate-text/70 truncate">
                      {project.link?.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </span>
                  </div>
                  <div className="relative aspect-[4/3] w-full bg-muted-slate/10 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lift-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-lift-navy opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
                      Visit live <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge>{project.type}</Badge>
                  <span className="text-sm font-semibold text-lift-blue">{project.businessType}</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-sans font-bold text-lift-navy leading-tight">
                  {project.title}
                </h2>
                <div className="relative bg-white rounded-card p-6 md:p-7 border border-border-color shadow-sm space-y-5 overflow-hidden">
                  <div aria-hidden className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-lift-blue/10 blur-2xl" />
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-muted-slate block mb-1.5">
                      Old Problem
                    </span>
                    <p className="text-sm text-lift-navy font-semibold leading-relaxed">{project.oldProblem}</p>
                  </div>
                  <div className="h-px bg-border-color w-full" />
                  <div className="relative">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-muted-slate block mb-2">
                      What we improved
                    </span>
                    <ul className="space-y-2.5">
                      {project.improvements.map((imp, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-text font-medium">
                          <CheckCircle2 className="w-4 h-4 text-success mr-2 shrink-0 mt-0.5" /> {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Magnetic strength={0.18}>
                  <Button asChild variant="outline" className="group">
                    <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer">
                      Visit live site
                      <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </div>
          ))}
        </RevealList>

        {/* CTA */}
        <div className="mt-24 md:mt-32">
          <Reveal>
            <Card className="dark-surface relative bg-lift-navy text-white text-center p-10 md:p-16 overflow-hidden shadow-card border-none">
              <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lift-blue blur-[100px] opacity-25 pointer-events-none rounded-full" />
              <div aria-hidden className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-purple-500 blur-[120px] opacity-20 pointer-events-none rounded-full" />
              <div
                aria-hidden
                className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />
              <h2 className="text-2xl md:text-4xl font-sans font-bold mb-6 relative z-10">
                Want your site to look this professional?
              </h2>
              <div className="relative z-10 inline-block">
                <Magnetic>
                  <Button asChild size="lg" className="bg-white text-lift-navy hover:bg-cloud transition-colors group">
                    <Link href="/free-review">
                      Get a Free Review First
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
