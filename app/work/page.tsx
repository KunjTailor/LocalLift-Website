'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

const projects = [
  {
    title: 'Pipeline Pros SEO Redesign',
    businessType: 'Local Plumber',
    type: 'Sample Redesign',
    oldProblem: 'Outdated site that was impossible to use on mobile.',
    improvements: ['Mobile usability', 'Click-to-call headers', 'Service-area pages'],
    image: 'https://images.unsplash.com/photo-1581094363628-8da22d106f23?q=80&w=2400&auto=format&fit=crop',
  },
  {
    title: 'Sunny Smiles Dental Center',
    businessType: 'Family Dentist',
    type: 'Concept Build',
    oldProblem: 'No online booking integration, generic template look.',
    improvements: ['Clear booking calendar CTA', 'Team trust bios', 'Patient reviews section'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2400&auto=format&fit=crop',
  },
  {
    title: 'Elite Edge Landscape',
    businessType: 'Landscaping & Hardscaping',
    type: 'Demo Project',
    oldProblem: 'Slow loading images and confusing service breakdown.',
    improvements: ['Optimized project gallery', 'Lead capture forms', 'Speed optimization'],
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?q=80&w=2400&auto=format&fit=crop',
  }
];

export default function Work() {
  return (
    <div className="bg-cloud min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              Websites built for conversion
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body">
              We design simple, trust-building websites that turn local traffic into actual phone calls and booked appointments.
            </p>
          </Reveal>
        </div>

        {/* Projects */}
        <RevealList className="space-y-24 md:space-y-32">
          {projects.map((project, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              
              {/* Mockup Frame */}
              <div className="w-full lg:w-3/5">
                <div className="rounded-frame border border-border-color bg-white shadow-card overflow-hidden">
                  <div className="h-8 border-b border-border-color bg-cloud flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] w-full bg-muted-slate/10 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                  <Badge>{project.type}</Badge>
                  <span className="text-sm font-semibold text-lift-blue">{project.businessType}</span>
                </div>
                <h2 className="text-3xl font-sans font-bold text-lift-navy">{project.title}</h2>
                <div className="bg-white rounded-card p-6 border border-border-color shadow-sm space-y-4">
                   <div>
                     <span className="text-xs uppercase tracking-wider font-bold text-muted-slate block mb-1">Old Problem</span>
                     <p className="text-sm text-lift-navy font-semibold">{project.oldProblem}</p>
                   </div>
                   <div className="h-px bg-border-color w-full" />
                   <div>
                     <span className="text-xs uppercase tracking-wider font-bold text-muted-slate block mb-2">What we improved</span>
                     <ul className="space-y-2">
                       {project.improvements.map((imp, i) => (
                         <li key={i} className="flex items-start text-sm text-slate-text">
                           <CheckCircle2 className="w-4 h-4 text-success mr-2 shrink-0 mt-0.5" /> {imp}
                         </li>
                       ))}
                     </ul>
                   </div>
                </div>
                <Button variant="outline" className="group">
                  View Full Case Study <ArrowUpRight className="ml-2 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>

            </div>
          ))}
        </RevealList>

         {/* CTA */}
         <div className="mt-32">
            <Reveal>
              <Card className="bg-lift-navy text-white text-center p-12 overflow-hidden relative shadow-card">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lift-blue blur-[100px] opacity-20 pointer-events-none rounded-full" />
                 <h2 className="text-3xl font-sans font-bold mb-6 relative z-10">Want your site to look this professional?</h2>
                 <Button asChild size="lg" className="bg-white text-lift-navy hover:bg-cloud relative z-10 transition-colors">
                   <Link href="/free-review">Get a Free Review First</Link>
                 </Button>
              </Card>
            </Reveal>
         </div>

      </div>
    </div>
  );
}
