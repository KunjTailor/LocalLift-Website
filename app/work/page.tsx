'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

const projects = [
  {
    title: 'Oak & Stone',
    businessType: 'Kitchen & Bath',
    type: 'Authority Build',
    oldProblem: 'A luxury business stuck with a generic, template-based site that failed to showcase their high-end craftsmanship and authority in the market.',
    improvements: ['Luxury editorial design', 'Custom component animations', 'Authority-tier local SEO structure'],
    image: '/images/Screenshot 2026-04-05 at 4.32.44 PM.png',
    link: 'https://oak-and-stone.vercel.app/',
  },
  {
    title: 'Brandywine',
    businessType: 'Landscaping',
    type: 'Growth Build',
    oldProblem: 'Inconsistent branding and a cluttered mobile experience made it difficult for homeowners to find specific service details or request quotes.',
    improvements: ['Service-specific landing pages', 'Optimized mobile lead capture', 'Strategic keyword mapping'],
    image: '/images/Screenshot 2026-04-05 at 4.33.09 PM.png',
    link: 'https://brandywine-landscaping.vercel.app/',
  },
  {
    title: 'Shine & Shield',
    businessType: 'Auto Detailing',
    type: 'Launch Build',
    oldProblem: 'No online presence whatsoever, missing out on thousands of local searchers looking for high-quality mobile detailing services.',
    improvements: ['High-performance landing page', 'Integrated booking triggers', 'Mobile-first localized SEO'],
    image: '/images/Screenshot 2026-04-05 at 4.34.04 PM.png',
    link: 'https://demo-shine-and-shield.vercel.app/',
  }
];

export default function Work() {
  return (
    <div className="bg-cloud min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Reveal>
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              Websites built for conversion
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body mb-6">
              We design simple, trust-building websites that turn local traffic into actual phone calls and booked appointments.
            </p>
            <div className="flex items-center justify-center text-xs font-semibold text-slate-text bg-white border border-border-color rounded-pill py-2 px-4 shadow-sm inline-flex">
              <Info className="w-4 h-4 mr-2 text-lift-blue" />
              Some projects are concept builds that show our exact design and strategy approach.
            </div>
          </Reveal>
        </div>

        {/* Projects */}
        <RevealList className="space-y-16 md:space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-20`}>
              
              {/* Mockup Frame */}
              <div className="w-full lg:w-3/5">
                <Link href={project.link || '#'} target="_blank" rel="noopener noreferrer" className="block rounded-[16px] md:rounded-[20px] border border-border-color bg-white shadow-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-6 md:h-8 border-b border-border-color bg-cloud flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] w-full bg-muted-slate/10 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
                  </div>
                </Link>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge>{project.type}</Badge>
                  <span className="text-sm font-semibold text-lift-blue">{project.businessType}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy">{project.title}</h2>
                <div className="bg-white rounded-card p-6 border border-border-color shadow-sm space-y-5">
                   <div>
                     <span className="text-[11px] uppercase tracking-wider font-bold text-muted-slate block mb-1">Old Problem</span>
                     <p className="text-sm text-lift-navy font-semibold">{project.oldProblem}</p>
                   </div>
                   <div className="h-px bg-border-color w-full" />
                   <div>
                     <span className="text-[11px] uppercase tracking-wider font-bold text-muted-slate block mb-2">What we improved</span>
                     <ul className="space-y-2">
                       {project.improvements.map((imp, i) => (
                         <li key={i} className="flex items-start text-sm text-slate-text font-medium">
                           <CheckCircle2 className="w-4 h-4 text-success mr-2 shrink-0 mt-0.5" /> {imp}
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
              </div>

            </div>
          ))}
        </RevealList>

         {/* CTA */}
         <div className="mt-24 md:mt-32">
            <Reveal>
              <Card className="bg-lift-navy text-white text-center p-8 md:p-12 overflow-hidden relative shadow-card border-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-lift-blue blur-[80px] md:blur-[100px] opacity-30 md:opacity-20 pointer-events-none rounded-full" />
                 <h2 className="text-2xl md:text-3xl font-sans font-bold mb-6 relative z-10">Want your site to look this professional?</h2>
                 <Button asChild size="lg" className="bg-white text-lift-navy hover:bg-cloud relative z-10 transition-colors w-full sm:w-auto">
                   <Link href="/free-review">Get a Free Review First</Link>
                 </Button>
              </Card>
            </Reveal>
         </div>

      </div>
    </div>
  );
}
