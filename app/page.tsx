'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, BarChart3, Check, MapPin, Minus, MonitorSmartphone, Plus, Search, Settings, Shield, ShieldCheck, Sparkles, Zap, Star, Globe2, Rocket, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { AnimatedHeading } from '@/components/animations/AnimatedHeading';
import { Magnetic } from '@/components/animations/MagneticButton';
import { Marquee } from '@/components/animations/Marquee';
import { Counter } from '@/components/animations/Counter';
import { HeroBackground } from '@/components/animations/HeroBackground';

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-28 overflow-hidden px-4">
        <HeroBackground />

        <div className="container mx-auto max-w-[1200px] relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border-color bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-semibold text-lift-navy shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              Now booking May 2026 launches
              <Sparkles className="w-3.5 h-3.5 text-lift-blue" />
            </div>
          </Reveal>

          <div className="mt-6">
            <AnimatedHeading
              as="h1"
              text="Affordable websites for local businesses that need more trust online"
              highlight={['trust']}
              className="text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] font-sans font-extrabold text-lift-navy max-w-5xl mx-auto tracking-tight"
            />
          </div>

          <Reveal delay={0.4}>
            <p className="mt-7 text-lg md:text-[19px] leading-[32px] font-body text-slate-text max-w-2xl mx-auto">
              LocalLift builds clean, mobile-friendly websites for local businesses and keeps them updated monthly so owners can focus on running the business.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <Button asChild size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                  <Link href="/free-review">
                    <span className="relative z-10 flex items-center">
                      Get a Free Website Review
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic strength={0.25}>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href="/work">See Our Work</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          {/* Trust Chips */}
          <Reveal delay={0.6}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-text">
              {['Transparent pricing', 'Mobile-first builds', 'Monthly support included', 'Local SEO foundations'].map((t) => (
                <div key={t} className="flex items-center whitespace-nowrap">
                  <Check className="w-4 h-4 mr-2 text-lift-blue" /> {t}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Value Proposition Grid */}
          <Reveal delay={0.7}>
            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { Icon: Zap, color: 'text-lift-blue', bg: 'bg-lift-blue/10', title: 'Premium Designs', body: 'High-end aesthetics that build instant authority for local brands.' },
                { Icon: BarChart3, color: 'text-success', bg: 'bg-success/10', title: 'Conversion Ready', body: 'Strategic layouts built to turn casual visitors into booked calls.' },
                { Icon: ShieldCheck, color: 'text-orange-500', bg: 'bg-orange-500/10', title: 'Ongoing Support', body: 'Monthly updates and technical care included—never out of date.' },
                { Icon: MapPin, color: 'text-purple-500', bg: 'bg-purple-500/10', title: 'Local SEO Mastery', body: 'Optimized from day one to dominate the Google search rankings.' },
              ].map(({ Icon, color, bg, title, body }) => (
                <div key={title} className="group relative bg-white/80 backdrop-blur border border-border-color rounded-card p-6 shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-1 hover:border-lift-blue/40">
                  <div className="absolute inset-0 rounded-card bg-gradient-to-br from-lift-blue/0 via-transparent to-purple-500/0 opacity-0 group-hover:from-lift-blue/[0.03] group-hover:to-purple-500/[0.05] group-hover:opacity-100 transition-opacity" />
                  <div className={`relative w-10 h-10 rounded-full ${bg} flex items-center justify-center mb-4 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="relative text-lg font-bold text-lift-navy mb-2">{title}</h3>
                  <p className="relative text-sm text-slate-text leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Marquee Trust Strip */}
      <section className="relative bg-white border-y border-border-color py-6 overflow-hidden">
        <Marquee speed={40}>
          {[
            { Icon: Star, text: '5.0 Founder-Led Service' },
            { Icon: Globe2, text: 'Sites Live Across 4 States' },
            { Icon: Rocket, text: 'Launch in 2-4 Weeks' },
            { Icon: ShieldCheck, text: 'SSL & Backups Included' },
            { Icon: Award, text: 'Built for Local Authority' },
            { Icon: MapPin, text: 'Local SEO Foundations' },
          ].map(({ Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3 text-lift-navy">
              <Icon className="w-5 h-5 text-lift-blue" />
              <span className="font-sans font-semibold text-base whitespace-nowrap">{text}</span>
              <span className="text-border-color text-2xl select-none ml-12">•</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Stats with Counters */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:divide-x divide-border-color">
            {[
              { v: 100, suffix: '%', label: 'Mobile-Optimized', sub: 'Every site we ship' },
              { v: 4, suffix: ' wks', label: 'Average Launch', sub: 'From kickoff to live' },
              { v: 99, suffix: '+', label: 'Lighthouse Score', sub: 'Performance target' },
              { v: 24, suffix: '/7', label: 'Always Online', sub: 'Hosting & monitoring' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.05} className="flex flex-col items-center justify-center lg:px-4">
                <div className="text-4xl md:text-5xl font-sans font-extrabold bg-gradient-to-br from-lift-navy to-lift-blue bg-clip-text text-transparent">
                  <Counter to={s.v} suffix={s.suffix} />
                </div>
                <div className="mt-2 font-sans font-bold text-lift-navy">{s.label}</div>
                <div className="text-sm text-slate-text">{s.sub}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we fix */}
      <section className="py-20 md:py-24 bg-cloud relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="container mx-auto px-4 max-w-[1200px] relative">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4">The Problem</Badge>
            <AnimatedHeading
              as="h2"
              text="Why most local websites fail to get customers"
              highlight={['fail']}
              className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-4"
            />
            <p className="text-slate-text text-lg max-w-2xl mx-auto mt-4">Most local business websites act as pure digital brochures that are hard to read, look terrible on mobile, and are impossible to update.</p>
          </div>

          <RevealList className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { Icon: MonitorSmartphone, title: 'Not mobile optimized', body: 'Sites that require pinching and zooming on phones instantly lose potential leads.' },
              { Icon: Search, title: 'Missing local SEO basics', body: "No clear location data, poor heading structure, and missing service areas mean Google can't find you." },
              { Icon: Settings, title: 'Impossible to update', body: "Business owners get stuck with old hours and outdated photos because they can't figure out how to edit their site." },
            ].map(({ Icon, title, body }) => (
              <Card key={title} hoverable className="border-border-color shadow-sm group relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-lift-blue/5 blur-2xl group-hover:bg-lift-blue/15 transition-colors duration-500" />
                <CardHeader className="relative">
                  <div className="w-12 h-12 rounded-xl bg-lift-blue/10 text-lift-blue flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-[22px]">{title}</CardTitle>
                  <CardDescription className="text-base mt-2">{body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </RevealList>
        </div>
      </section>

      {/* Featured Work — Tilt Cards */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <Badge className="mb-4">Portfolio</Badge>
              <AnimatedHeading
                as="h2"
                text="Recent transformations"
                highlight={['transformations']}
                className="text-3xl md:text-5xl font-sans font-bold text-lift-navy"
              />
            </div>
            <Magnetic strength={0.2}>
              <Button variant="outline" asChild className="mt-6 md:mt-0 w-full md:w-auto">
                <Link href="/work">View All Work <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </Magnetic>
          </div>

          <RevealList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { href: 'https://oak-and-stone.vercel.app/', img: '/images/oak-stone-project.png', alt: 'Oak & Stone Kitchen & Bath', tag: 'Authority Build', cat: 'Kitchen & Bath', title: 'Oak & Stone', desc: 'A luxury remodeling studio website built with complex animations and authority-tier SEO structure.' },
              { href: 'https://brandywine-landscaping.vercel.app/', img: '/images/brandywine-landscaping-project.png', alt: 'Brandywine Landscaping & Hardscaping', tag: 'Growth Build', cat: 'Landscaping', title: 'Brandywine Landscaping & Hardscaping', desc: 'Multi-page landscaping project highlighting service depth and clear mobile calls-to-action.' },
              { href: 'https://demo-shine-and-shield.vercel.app/', img: '/images/shine-shield-project.png', alt: 'Shine & Shield Mobile Detailing', tag: 'Launch Build', cat: 'Auto Detailing', title: 'Shine & Shield', desc: 'Clean, high-performance landing page build for a premium mobile auto detailing provider.' },
            ].map((p) => (
              <Link
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="rounded-card border border-border-color bg-white shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-card group-hover:-translate-y-1 group-hover:border-lift-blue/40 mb-5">
                  <div className="h-8 border-b border-border-color flex items-center px-3 bg-cloud">
                    <div className="flex space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <span className="ml-3 text-[11px] font-mono text-slate-text/70 truncate">
                      {p.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </span>
                  </div>
                  <div className="aspect-[4/3] relative w-full overflow-hidden bg-muted-slate/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lift-navy/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-lift-navy opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Visit live <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge>{p.tag}</Badge>
                  <span className="text-sm font-semibold text-lift-blue">{p.cat}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mb-1.5 group-hover:text-lift-blue transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-text text-sm leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </RevealList>
        </div>
      </section>

      {/* Process — animated dark section */}
      <section className="dark-surface relative py-20 md:py-28 bg-lift-navy text-white text-center sm:text-left overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div aria-hidden className="absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-lift-blue/30 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-500/25 blur-[120px]" />

        <div className="container mx-auto px-4 max-w-[1200px] relative">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-white/10 text-cloud border-none">How It Works</Badge>
            <AnimatedHeading
              as="h2"
              text="A simple, transparent process"
              highlight={['transparent']}
              className="text-3xl md:text-5xl font-sans font-bold text-white mb-4"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 relative">
            <div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent hidden lg:block" />

            {[
              { n: 1, title: 'Review & Planning', body: 'We review your current site or goals, establish a clear sitemap, and gather the necessary assets.' },
              { n: 2, title: 'Design & Build', body: 'We design and build the site simultaneously, focusing on mobile responsiveness and clear calls to action.' },
              { n: 3, title: 'Revisions & Launch', body: 'You review the site. We handle any revisions, attach your domain, and make it live for the world.' },
              { n: 4, title: 'Ongoing Updates', body: 'We host, secure, and maintain the site, while handling your monthly content updates.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative z-10 group text-center sm:text-left">
                <div className={`w-16 h-16 rounded-full ${i === 0 ? 'bg-lift-blue text-white' : 'bg-lift-navy border-2 border-lift-blue text-white'} flex items-center justify-center font-sans font-bold text-2xl mx-auto sm:mx-0 mb-5 shadow-light transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  {s.n}
                </div>
                <h3 className="text-xl font-sans font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-cloud/80 text-sm leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-24 bg-cloud relative overflow-hidden">
        <div aria-hidden className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-lift-blue/10 blur-[100px]" />
        <div aria-hidden className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-purple-300/20 blur-[100px]" />
        <div className="container mx-auto px-4 max-w-[1200px] relative">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4">Pricing</Badge>
            <AnimatedHeading
              as="h2"
              text="Transparent plans for growing businesses"
              highlight={['Transparent']}
              className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-4"
            />
            <p className="text-slate-text text-lg max-w-2xl mx-auto mt-4">Never wonder what you&apos;re paying for. All plans include professional design, fast hosting, and ongoing updates.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { name: 'Launch', sub: 'Best for businesses that need a clean, professional website fast.', setup: '$499', monthly: '$149', features: ['Up to 5 pages', 'Mobile-responsive design', 'Hosting, SSL, and Backups', '1 monthly content update'], cta: 'Get Started', href: '/contact?plan=launch', highlighted: false, variant: 'outline' as const },
              { name: 'Growth', sub: 'Best for businesses that want more local visibility and service pages.', setup: '$999', monthly: '$249', features: ['Everything in Launch', 'Up to 10 pages', 'Local SEO & keyword mapping', '2 monthly content updates'], cta: 'Get Started', href: '/contact?plan=growth', highlighted: true, variant: 'primary' as const },
              { name: 'Authority', sub: 'For a stronger long-term SEO and local credibility play.', setup: '$1,999', monthly: '$399', features: ['Everything in Growth', 'Up to 25 pages', 'Monthly strategy call', '4 monthly content updates'], cta: 'Get Started', href: '/contact?plan=authority', highlighted: false, variant: 'outline' as const },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.08} className="h-full">
                <div className={`relative h-full ${p.highlighted ? 'lg:-mt-4' : ''}`}>
                  {p.highlighted && (
                    <div aria-hidden className="absolute -inset-px rounded-card bg-gradient-to-br from-lift-blue via-blue-500 to-purple-500 opacity-80 blur-sm" />
                  )}
                  <Card hoverable className={`relative h-full flex flex-col justify-between p-8 bg-white ${p.highlighted ? 'border-lift-blue shadow-card' : 'border-border-color'}`}>
                    {p.highlighted && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-lift-blue to-purple-500 text-white text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-bl-card rounded-tr-card">MOST POPULAR</div>
                    )}
                    <div>
                      <h3 className="text-2xl font-bold font-sans text-lift-navy">{p.name}</h3>
                      <p className="text-sm text-slate-text mt-2 mb-6">{p.sub}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-sans font-extrabold text-lift-navy">{p.setup}</span>
                        <span className="text-slate-text font-semibold"> setup</span>
                      </div>
                      <div className="mb-8">
                        <span className="text-2xl font-sans font-bold text-lift-blue">{p.monthly}</span>
                        <span className="text-slate-text font-semibold"> / month</span>
                      </div>
                      <ul className="space-y-3 mb-8 text-sm text-lift-navy font-medium">
                        {p.features.map((f) => (
                          <li key={f} className="flex items-start"><Check className="w-5 h-5 text-success mr-3 shrink-0" /> {f}</li>
                        ))}
                      </ul>
                    </div>
                    <Magnetic strength={0.15}>
                      <Button variant={p.variant} asChild className="w-full">
                        <Link href={p.href}>{p.cta}</Link>
                      </Button>
                    </Magnetic>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[800px]">
          <Reveal>
            <Card className="relative bg-gradient-to-br from-soft-blue via-white to-soft-blue border-none shadow-card p-8 md:p-12 text-center rounded-[24px] overflow-hidden">
              <div aria-hidden className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-lift-blue/15 blur-3xl" />
              <div aria-hidden className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-purple-300/20 blur-3xl" />
              <div className="relative">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-white border border-border-color flex items-center justify-center shadow-sm">
                    <Shield className="w-8 h-8 text-lift-blue" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-lift-navy mb-4">Our Guarantee</h3>
                <p className="text-base md:text-lg text-slate-text font-medium leading-relaxed mb-6">
                  We are a student-founded studio that outworks the massive, expensive agencies. You will always know what we are doing, you will never be locked out of your own domain, and we won&apos;t treat your business like just another ticket number.
                </p>
                <div className="text-sm font-bold text-lift-navy uppercase tracking-widest">
                  Kunj &amp; Aryan — Founders, LocalLift
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-cloud border-t border-border-color">
        <div className="container mx-auto px-4 max-w-[800px]">
          <div className="text-center mb-12 md:mb-16">
            <AnimatedHeading
              as="h2"
              text="Frequently asked questions"
              className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-4"
            />
          </div>
          <div className="space-y-4">
            {[
              { q: 'Do I own my site?', a: 'Yes. After the initial build process and your first set of monthly payments are complete according to our terms, the content and domain belong to you.' },
              { q: 'What happens if I cancel?', a: 'You can cancel with 30 days written notice. If you wish to take the site elsewhere, we can package your site files, but you will need to find your own hosting.' },
              { q: 'What counts as one content update?', a: 'One content update is a small batch of edits on existing pages, such as text changes, photo swaps, updating your hours, or contact detail changes. It does not include designing a brand new page or custom functionality.' },
              { q: 'Is hosting included?', a: 'Yes, fast, secure global hosting and SSL certificates are included in your monthly plan. We handle all the tech so you never have to see a server dashboard.' },
              { q: 'How long does launch take?', a: 'Typically 2 to 4 weeks, depending on how quickly you can provide us with your photos, logo, and necessary company details.' },
              { q: 'How many revisions are included?', a: 'Depending on your plan, we offer 1 to 2 dedicated revision rounds before the final site launch to make sure the design fits your vision.' },
              { q: 'Do you write copy?', a: 'We provide light copywriting and structural editing to ensure the site converts. However, you will need to provide the foundational text (your services, company history, and policies).' },
              { q: 'Do you help with SEO?', a: 'Yes. We set up the foundational local SEO, including proper heading structures, meta tags, and schema data so Google can easily read your site.' },
              { q: 'Can I use my current domain?', a: 'Absolutely. When the site is ready to launch, we will guide you on pointing your existing domain to your new LocalLift website.' },
            ].map((faq, idx) => {
              const open = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-card p-5 md:p-6 cursor-pointer transition-all duration-300 bg-white shadow-sm ${open ? 'border-lift-blue shadow-card' : 'border-border-color hover:border-badge-blue'}`}
                  onClick={() => setOpenFaq(open ? null : idx)}
                >
                  <div className="flex justify-between items-center text-lift-navy font-sans font-bold text-base md:text-lg">
                    <span className="pr-4">{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-lift-blue text-white' : 'bg-cloud text-lift-blue'}`}>
                      {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                  <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-slate-text text-sm md:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 md:py-28 bg-soft-blue border-t border-badge-blue text-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(29,78,216,0.18) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-lift-blue/15 blur-[100px]" />
        <div className="container mx-auto px-4 max-w-[800px] relative">
          <Reveal>
            <AnimatedHeading
              as="h2"
              text="Ready to look professional online?"
              highlight={['professional']}
              className="text-3xl md:text-5xl font-sans font-bold text-lift-navy mb-6"
            />
            <p className="text-slate-text text-lg mb-10 mt-4">We&apos;ll give you honest feedback. We&apos;ll tell you if your current site is already working perfectly.</p>
            <div className="flex flex-col items-center">
              <Magnetic>
                <Button asChild size="lg" className="w-full sm:w-auto mb-4 group relative overflow-hidden">
                  <Link href="/free-review">
                    <span className="relative z-10 flex items-center">
                      Get a Free Website Review
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </Link>
                </Button>
              </Magnetic>
              <span className="text-sm font-medium text-slate-text flex items-center justify-center gap-1.5 whitespace-nowrap">
                <Shield className="w-4 h-4 text-lift-blue shrink-0" /> No pressure. We don&apos;t do hard sales.
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
