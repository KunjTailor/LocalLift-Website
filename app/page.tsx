'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Check, CheckCircle2, MapPin, Minus, MonitorSmartphone, Play, Plus, Search, Settings, Shield, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { cn } from '@/lib/utils';

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      {/* 3. Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden px-4">
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-soft-blue rounded-full blur-[100px] opacity-60 pointer-events-none" />

        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <Reveal>
            <h1 className="text-[38px] leading-[46px] md:text-[56px] md:leading-[64px] font-sans font-extrabold text-lift-navy max-w-4xl mx-auto tracking-tight">
              Affordable websites for local businesses that need more trust online
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg md:text-[18px] leading-[30px] font-body text-slate-text max-w-2xl mx-auto">
              LocalLift builds clean, mobile-friendly websites for local businesses and keeps them updated monthly so owners can focus on running the business.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/free-review">
                  Get a Free Website Review
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href="/work">See Our Work</Link>
              </Button>
            </div>
          </Reveal>

          {/* Trust Chips */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-text">
              <div className="flex items-center whitespace-nowrap"><Check className="w-4 h-4 mr-2 text-lift-blue" /> Transparent pricing</div>
              <div className="flex items-center whitespace-nowrap"><Check className="w-4 h-4 mr-2 text-lift-blue" /> Mobile-first builds</div>
              <div className="flex items-center whitespace-nowrap"><Check className="w-4 h-4 mr-2 text-lift-blue" /> Monthly support included</div>
              <div className="flex items-center whitespace-nowrap"><Check className="w-4 h-4 mr-2 text-lift-blue" /> Local SEO foundations</div>
            </div>
          </Reveal>

          {/* Clean Value Proposition Grid - Replaces messy mockups */}
          <Reveal delay={0.4}>
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="bg-white border border-border-color rounded-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-lift-blue/10 flex items-center justify-center mb-4 text-lift-blue">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-lift-navy mb-2">Premium Designs</h3>
                <p className="text-sm text-slate-text leading-relaxed">High-end aesthetics that build instant authority for local brands.</p>
              </div>

              <div className="bg-white border border-border-color rounded-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center mb-4 text-success">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-lift-navy mb-2">Conversion Ready</h3>
                <p className="text-sm text-slate-text leading-relaxed">Strategic layouts built to turn casual visitors into booked calls.</p>
              </div>

              <div className="bg-white border border-border-color rounded-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 text-orange-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-lift-navy mb-2">Ongoing Support</h3>
                <p className="text-sm text-slate-text leading-relaxed">Monthly updates and technical care included—never out of date.</p>
              </div>

              <div className="bg-white border border-border-color rounded-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-lift-navy mb-2">Local SEO Mastery</h3>
                <p className="text-sm text-slate-text leading-relaxed">Optimized from day one to dominate the Google search rankings.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Instant Trust Strip */}
      <section className="bg-white border-y border-border-color py-10">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:divide-x divide-border-color">
            <Reveal className="flex flex-col items-center justify-center">
              <span className="font-sans font-bold text-lg md:text-xl text-lift-navy mb-1">Clear Setup</span>
              <span className="text-sm text-slate-text">+ Monthly Pricing</span>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col items-center justify-center lg:pl-8">
              <span className="font-sans font-bold text-lg md:text-xl text-lift-navy mb-1">Ongoing Care</span>
              <span className="text-sm text-slate-text">Real support after launch</span>
            </Reveal>
            <Reveal delay={0.2} className="flex flex-col items-center justify-center lg:pl-8">
              <span className="font-sans font-bold text-lg md:text-xl text-lift-navy mb-1">Fast Turnaround</span>
              <span className="text-sm text-slate-text">Built in 2-4 weeks</span>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-col items-center justify-center lg:pl-8">
              <span className="font-sans font-bold text-lg md:text-xl text-lift-navy mb-1">Local Focus</span>
              <span className="text-sm text-slate-text">Built for service businesses</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. What we fix */}
      <section className="py-20 md:py-24 bg-cloud">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4">The Problem</Badge>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-4">Why most local websites fail to get customers</h2>
            <p className="text-slate-text text-lg max-w-2xl mx-auto">Most local business websites act as pure digital brochures that are hard to read, look terrible on mobile, and are impossible to update.</p>
          </div>

          <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverable className="border-border-color shadow-sm">
              <CardHeader>
                <MonitorSmartphone className="w-8 h-8 text-lift-blue mb-4" />
                <CardTitle className="text-[22px]">Not mobile optimized</CardTitle>
                <CardDescription className="text-base mt-2">Sites that require pinching and zooming on phones instantly lose potential leads.</CardDescription>
              </CardHeader>
            </Card>
            <Card hoverable className="border-border-color shadow-sm">
              <CardHeader>
                <Search className="w-8 h-8 text-lift-blue mb-4" />
                <CardTitle className="text-[22px]">Missing local SEO basics</CardTitle>
                <CardDescription className="text-base mt-2">No clear location data, poor heading structure, and missing service areas mean Google can't find you.</CardDescription>
              </CardHeader>
            </Card>
            <Card hoverable className="border-border-color shadow-sm">
              <CardHeader>
                <Settings className="w-8 h-8 text-lift-blue mb-4" />
                <CardTitle className="text-[22px]">Impossible to update</CardTitle>
                <CardDescription className="text-base mt-2">Business owners get stuck with old hours and outdated photos because they can't figure out how to edit their site.</CardDescription>
              </CardHeader>
            </Card>
          </RevealList>
        </div>
      </section>

      {/* 6. Featured Work */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <Badge className="mb-4">Portfolio</Badge>
              <h2 className="text-3xl md:text-5xl font-sans font-bold text-lift-navy">Recent transformations</h2>
            </div>
            <Button variant="outline" asChild className="mt-6 md:mt-0 w-full md:w-auto">
              <Link href="/work">View All Work</Link>
            </Button>
          </div>

          <RevealList className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 pl-0">
            {/* Project 1: Oak & Stone */}
            <div className="group cursor-pointer">
              <Link href="https://oak-and-stone.vercel.app/" target="_blank" rel="noopener noreferrer" className="block mb-6 rounded-card border border-border-color bg-cloud overflow-hidden transition-all duration-200 ease-out hover:shadow-card hover:-translate-y-1">
                <div className="h-8 border-b border-border-color flex items-center px-4 bg-white">
                  <div className="flex space-x-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                  </div>
                </div>
                <div className="aspect-video relative w-full overflow-hidden">
                  <img src="/images/Screenshot 2026-04-05 at 4.32.44 PM.png" alt="Oak & Stone Kitchen & Bath" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
                </div>
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge>Authority Build</Badge>
                <span className="text-sm font-semibold text-lift-blue">Kitchen & Bath</span>
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mb-2 group-hover:text-lift-blue transition-colors">Oak & Stone</h3>
              <p className="text-slate-text text-sm">A luxury remodeling studio website built with complex animations and authority-tier SEO structure.</p>
            </div>

            {/* Project 2: Brandywine */}
             <div className="group cursor-pointer">
              <Link href="https://brandywine-landscaping.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-6 block rounded-card border border-border-color bg-cloud overflow-hidden transition-all duration-200 ease-out hover:shadow-card hover:-translate-y-1">
                <div className="h-8 border-b border-border-color flex items-center px-4 bg-white">
                  <div className="flex space-x-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                  </div>
                </div>
                <div className="aspect-video relative w-full overflow-hidden">
                  <img src="/images/Screenshot 2026-04-05 at 4.33.09 PM.png" alt="Brandywine Landscaping & Hardscaping" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
                </div>
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge>Growth Build</Badge>
                <span className="text-sm font-semibold text-lift-blue">Landscaping</span>
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mb-2 group-hover:text-lift-blue transition-colors">Brandywine Landscaping & Hardscaping</h3>
              <p className="text-slate-text text-sm">Multi-page landscaping project highlighting service depth and clear mobile calls-to-action.</p>
            </div>

            {/* Project 3: Shine & Shield */}
             <div className="group cursor-pointer">
              <Link href="https://demo-shine-and-shield.vercel.app/" target="_blank" rel="noopener noreferrer" className="mb-6 block rounded-card border border-border-color bg-cloud overflow-hidden transition-all duration-200 ease-out hover:shadow-card hover:-translate-y-1">
                <div className="h-8 border-b border-border-color flex items-center px-4 bg-white">
                  <div className="flex space-x-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border-color" />
                  </div>
                </div>
                <div className="aspect-video relative w-full overflow-hidden">
                  <img src="/images/Screenshot 2026-04-05 at 4.34.04 PM.png" alt="Shine & Shield Mobile Detailing" className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" />
                </div>
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge>Launch Build</Badge>
                <span className="text-sm font-semibold text-lift-blue">Auto Detailing</span>
              </div>
              <h3 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mb-2 group-hover:text-lift-blue transition-colors">Shine & Shield</h3>
              <p className="text-slate-text text-sm">Clean, high-performance landing page build for a premium mobile auto detailing provider.</p>
            </div>
          </RevealList>
        </div>
      </section>

      {/* 8. Process Section */}
      <section className="py-20 md:py-24 bg-lift-navy text-white text-center sm:text-left">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-white/10 text-cloud border-none">How It Works</Badge>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">A simple, transparent process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="absolute top-8 left-0 w-full h-px bg-white/20 hidden lg:block" />

            <Reveal delay={0.0} className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-lift-blue flex items-center justify-center font-sans font-bold text-2xl mx-auto sm:mx-0 mb-6 shadow-light">1</div>
              <h3 className="text-xl font-sans font-bold mb-3">Review & Planning</h3>
              <p className="text-cloud/80 text-sm">We review your current site or goals, establish a clear sitemap, and gather the necessary assets.</p>
            </Reveal>
            <Reveal delay={0.1} className="relative z-10 pt-4 md:pt-0">
              <div className="w-16 h-16 rounded-full bg-lift-navy border-2 border-lift-blue flex items-center justify-center font-sans font-bold text-2xl mx-auto sm:mx-0 mb-6">2</div>
              <h3 className="text-xl font-sans font-bold mb-3">Design & Build</h3>
              <p className="text-cloud/80 text-sm">We design and build the site simultaneously, focusing on mobile responsiveness and clear calls to action.</p>
            </Reveal>
            <Reveal delay={0.2} className="relative z-10 pt-4 md:pt-0">
              <div className="w-16 h-16 rounded-full bg-lift-navy border-2 border-lift-blue flex items-center justify-center font-sans font-bold text-2xl mx-auto sm:mx-0 mb-6">3</div>
              <h3 className="text-xl font-sans font-bold mb-3">Revisions & Launch</h3>
              <p className="text-cloud/80 text-sm">You review the site. We handle any revisions, attach your domain, and make it live for the world.</p>
            </Reveal>
            <Reveal delay={0.3} className="relative z-10 pt-4 md:pt-0">
              <div className="w-16 h-16 rounded-full bg-lift-navy border-2 border-lift-blue flex items-center justify-center font-sans font-bold text-2xl mx-auto sm:mx-0 mb-6">4</div>
              <h3 className="text-xl font-sans font-bold mb-3">Ongoing Updates</h3>
              <p className="text-cloud/80 text-sm">We host, secure, and maintain the site, while handling your monthly content updates.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 9. Pricing */}
      <section className="py-20 md:py-24 bg-cloud">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-4">Transparent plans for growing businesses</h2>
            <p className="text-slate-text text-lg max-w-2xl mx-auto">Never wonder what you're paying for. All plans include professional design, fast hosting, and ongoing updates.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Reveal className="h-full">
              <Card hoverable className="h-full flex flex-col justify-between p-8 border-border-color bg-white">
                <div>
                  <h3 className="text-2xl font-bold font-sans text-lift-navy">Launch</h3>
                  <p className="text-sm text-slate-text mt-2 mb-6">Best for businesses that need a clean, professional website fast.</p>
                  <div className="mb-6">
                    <span className="text-4xl font-sans font-extrabold text-lift-navy">$499</span>
                    <span className="text-slate-text font-semibold"> setup</span>
                  </div>
                  <div className="mb-8">
                    <span className="text-2xl font-sans font-bold text-lift-blue">$149</span>
                    <span className="text-slate-text font-semibold"> / month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-lift-navy font-medium">
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Up to 5 pages</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Mobile-responsive design</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Hosting, SSL, and Backups</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> 1 monthly content update</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact?plan=launch">Get Started</Link>
                </Button>
              </Card>
            </Reveal>

            <Reveal delay={0.1} className="h-full">
              <Card hoverable className="h-full flex flex-col justify-between p-8 border-lift-blue shadow-card bg-white relative top-0 lg:-top-4">
                <div className="absolute top-0 right-0 bg-lift-blue text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-bl-card rounded-tr-card">MOST POPULAR</div>
                <div>
                  <h3 className="text-2xl font-bold font-sans text-lift-navy">Growth</h3>
                  <p className="text-sm text-slate-text mt-2 mb-6">Best for businesses that want more local visibility and service pages.</p>
                  <div className="mb-6">
                    <span className="text-4xl font-sans font-extrabold text-lift-navy">$999</span>
                    <span className="text-slate-text font-semibold"> setup</span>
                  </div>
                  <div className="mb-8">
                    <span className="text-2xl font-sans font-bold text-lift-blue">$249</span>
                    <span className="text-slate-text font-semibold"> / month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-lift-navy font-medium">
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Everything in Launch</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Up to 10 pages</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Local SEO & keyword mapping</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> 2 monthly content updates</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact?plan=growth">Get Started</Link>
                </Button>
              </Card>
            </Reveal>

            <Reveal delay={0.2} className="h-full">
              <Card hoverable className="h-full flex flex-col justify-between p-8 border-border-color bg-white">
                <div>
                  <h3 className="text-2xl font-bold font-sans text-lift-navy">Authority</h3>
                  <p className="text-sm text-slate-text mt-2 mb-6">For a stronger long-term SEO and local credibility play.</p>
                  <div className="mb-6">
                    <span className="text-4xl font-sans font-extrabold text-lift-navy">$1,999</span>
                    <span className="text-slate-text font-semibold"> setup</span>
                  </div>
                  <div className="mb-8">
                    <span className="text-2xl font-sans font-bold text-lift-blue">$399</span>
                    <span className="text-slate-text font-semibold"> / month</span>
                  </div>
                  <ul className="space-y-3 mb-8 text-sm text-lift-navy font-medium">
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Everything in Growth</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Up to 25 pages</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> Monthly strategy call</li>
                    <li className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> 4 monthly content updates</li>
                  </ul>
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/contact?plan=authority">Get Started</Link>
                </Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Proof Section (New) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <Reveal>
            <Card className="bg-soft-blue border-none shadow-none p-8 md:p-12 text-center rounded-[24px]">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-white border border-border-color flex items-center justify-center shadow-sm">
                  <Shield className="w-8 h-8 text-lift-blue" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-4">Our Guarantee</h3>
              <p className="text-base md:text-lg text-slate-text font-medium leading-relaxed mb-6">
                We are a student-founded studio that outworks the massive, expensive agencies. You will always know what we are doing, you will never be locked out of your own domain, and we won't treat your business like just another ticket number.
              </p>
              <div className="text-sm font-bold text-lift-navy uppercase tracking-widest">
                Kunj & Aryan — Founders, LocalLift
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="py-20 md:py-24 bg-cloud border-t border-border-color">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-4">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do I own my site?", a: "Yes. After the initial build process and your first set of monthly payments are complete according to our terms, the content and domain belong to you." },
              { q: "What happens if I cancel?", a: "You can cancel with 30 days written notice. If you wish to take the site elsewhere, we can package your site files, but you will need to find your own hosting." },
              { q: "What counts as one content update?", a: "One content update is a small batch of edits on existing pages, such as text changes, photo swaps, updating your hours, or contact detail changes. It does not include designing a brand new page or custom functionality." },
              { q: "Is hosting included?", a: "Yes, fast, secure global hosting and SSL certificates are included in your monthly plan. We handle all the tech so you never have to see a server dashboard." },
              { q: "How long does launch take?", a: "Typically 2 to 4 weeks, depending on how quickly you can provide us with your photos, logo, and necessary company details." },
              { q: "How many revisions are included?", a: "Depending on your plan, we offer 1 to 2 dedicated revision rounds before the final site launch to make sure the design fits your vision." },
              { q: "Do you write copy?", a: "We provide light copywriting and structural editing to ensure the site converts. However, you will need to provide the foundational text (your services, company history, and policies)." },
              { q: "Do you help with SEO?", a: "Yes. We set up the foundational local SEO, including proper heading structures, meta tags, and schema data so Google can easily read your site." },
              { q: "Can I use my current domain?", a: "Absolutely. When the site is ready to launch, we will guide you on pointing your existing domain to your new LocalLift website." }
            ].map((faq, idx) => (
              <div key={idx} className="border border-border-color rounded-card p-5 md:p-6 cursor-pointer hover:border-badge-blue transition-colors bg-white shadow-sm" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                <div className="flex justify-between items-center text-lift-navy font-sans font-bold text-base md:text-lg">
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === idx ? <Minus className="w-5 h-5 text-lift-blue shrink-0" /> : <Plus className="w-5 h-5 text-lift-blue shrink-0" />}
                </div>
                {openFaq === idx && (
                  <Reveal>
                    <p className="mt-4 text-slate-text text-sm md:text-base leading-relaxed">{faq.a}</p>
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="py-20 md:py-24 bg-soft-blue border-t border-badge-blue text-center">
        <div className="container mx-auto px-4 max-w-[800px]">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-6">Ready to look professional online?</h2>
            <p className="text-slate-text text-lg mb-10">We'll give you honest feedback. We'll tell you if your current site is already working perfectly.</p>
            <div className="flex flex-col items-center">
              <Button asChild size="lg" className="w-full sm:w-auto mb-4">
                <Link href="/free-review">Get a Free Website Review</Link>
              </Button>
              <span className="text-sm font-medium text-slate-text flex items-center justify-center gap-1.5 whitespace-nowrap"><Shield className="w-4 h-4 text-lift-blue shrink-0" /> No pressure. We don't do hard sales.</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
