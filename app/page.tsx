import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  FileText,
  MapPin,
  MessageSquare,
  SearchCheck,
  Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { FAQList } from '@/components/sections/FAQList';
import { PageHero } from '@/components/sections/PageHero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { WebsiteOffer } from '@/components/sections/WebsiteOffer';
import { JsonLd } from '@/components/seo/JsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { benefits, faqItems, siteConfig, websiteOffer } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Professional Websites for Local Businesses | LocalLift Studios',
  description:
    'LocalLift Studios builds professional, mobile-friendly websites for local service businesses for a $500 one-time project fee.',
  path: '/',
});

const problems = [
  {
    title: 'An outdated first impression',
    description:
      'A cluttered or unfinished site can make a capable business look less established than it really is.',
    icon: FileText,
  },
  {
    title: 'Friction on a phone',
    description:
      'Small text, awkward menus, and hidden contact details make it harder for mobile visitors to take the next step.',
    icon: Smartphone,
  },
  {
    title: 'No clear path to inquire',
    description:
      'Visitors need concise service information and obvious ways to call, request a quote, or send a message.',
    icon: MessageSquare,
  },
] as const;

const scopeGroups = [
  {
    title: 'Design and pages',
    items: ['Up to five core pages', 'Custom professional design', 'Mobile-responsive layout'],
  },
  {
    title: 'Inquiry essentials',
    items: ['Contact or quote form', 'Click-to-call functionality', 'Clear service and contact paths'],
  },
  {
    title: 'Launch foundations',
    items: ['Local SEO foundations', 'Domain connection', 'Two revision rounds and handoff'],
  },
] as const;

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteConfig.url}/#website-build-service`,
  name: 'Professional Website Build',
  serviceType: 'Website design and development',
  description:
    'A focused professional website build for local service businesses, including up to five core pages, two reasonable revision rounds, launch, and handoff.',
  provider: { '@id': `${siteConfig.url}/#organization` },
  offers: {
    '@type': 'Offer',
    url: `${siteConfig.url}/pricing`,
    price: websiteOffer.price,
    priceCurrency: 'USD',
    description: 'One-time standard website-build project fee.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />

      <PageHero
        eyebrow="Websites for local service businesses"
        title={
          <>
            Professional Websites for Local Businesses.{' '}
            <span className="text-lift-blue">$500 Flat.</span>
          </>
        }
        description="We design and build modern, mobile-friendly websites for local service businesses for one straightforward price. No monthly LocalLift fees. Once it’s finished, it’s yours."
        className="pb-20 md:pt-40 md:pb-24"
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/free-review">
              Get a Free Website Review
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
            <Link href="/work">See Our Work</Link>
          </Button>
        </div>
        <p className="mt-5 text-sm font-bold text-lift-navy">
          $500 one-time <span aria-hidden="true">•</span> No monthly LocalLift fees{' '}
          <span aria-hidden="true">•</span> You own your website
        </p>
      </PageHero>

      <section className="bg-white py-16 md:py-20" aria-labelledby="benefits-heading">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="benefits-heading"
            eyebrow="The essentials"
            title="A website built around what local customers need"
            description="Clear information, a credible first impression, and an easy next step—without turning your website into another required LocalLift bill."
            className="max-w-3xl"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 md:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                  <benefit.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-text">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border-color bg-cloud py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Ideas made tangible"
              description="These demonstration builds show how we approach different local-service brands, page structures, and customer pathways."
              align="left"
              className="max-w-2xl"
            />
            <Button asChild variant="secondary">
              <Link href="/work">See Our Work</Link>
            </Button>
          </div>
          <div className="mt-10">
            <ProjectGrid />
          </div>
          <p className="mt-8 rounded-card border border-border-color bg-white p-4 text-sm leading-6 text-slate-text">
            Every project shown here is labeled as a concept build. These are design demonstrations and do
            not imply that the displayed businesses hired LocalLift Studios.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why it matters"
            title="Your website should make the next step obvious"
            description="The goal is not technical complexity. It is a professional, useful site that helps people understand your business and contact you."
            className="max-w-3xl"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problems.map((problem) => (
              <Card key={problem.title} className="p-7">
                <problem.icon className="h-6 w-6 text-lift-blue" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-bold">{problem.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-text">{problem.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border-color bg-soft-blue/55 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="The core website your business needs—for $500"
            description="The standard project covers up to five core pages. Page examples are choices within that limit, not additional unlimited pages."
            className="max-w-3xl"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.6fr]">
            <Card className="overflow-hidden border-lift-blue/20 bg-lift-navy p-7 text-white md:p-8">
              <CircleDollarSign className="h-8 w-8 text-blue-300" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold text-white">Five pages, chosen for your business</h3>
              <p className="mt-3 text-sm leading-7 text-cloud/75">
                A typical set might include Home, Services, About, Gallery or Projects, and Contact.
                We define the exact sitemap together before the build.
              </p>
              <Button asChild variant="secondary" className="mt-7 w-full sm:w-auto">
                <Link href="/pricing">See the full scope</Link>
              </Button>
            </Card>

            <div className="grid gap-5 md:grid-cols-3">
              {scopeGroups.map((group) => (
                <Card key={group.title} className="p-6">
                  <h3 className="text-lg font-bold">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-slate-text">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <SearchCheck className="mt-0.5 h-6 w-6 shrink-0 text-lift-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold">Local SEO foundations</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-text">
                    We set up page titles, meta descriptions, heading structure, mobile usability,
                    location and service information, and basic structured data when appropriate.
                    Search rankings are never guaranteed.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <FileText className="mt-0.5 h-6 w-6 shrink-0 text-lift-blue" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold">Clear project boundaries</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-text">
                    Larger sites, e-commerce, advanced booking, apps, databases, memberships, and
                    complex integrations require a separate quote.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-lift-navy py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.35),transparent_42%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-[0.14em] text-blue-300 uppercase">How it works</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Four steps. One clear finish line.
            </h2>
            <p className="mt-5 text-lg leading-8 text-cloud/75">
              We keep the project focused from the first review through final launch and handoff.
            </p>
          </div>
          <div className="mt-10">
            <ProcessSteps />
          </div>
          <p className="mt-8 rounded-card border border-blue-300/25 bg-blue-400/10 p-5 text-center text-base font-bold text-white">
            You keep the site. There is no LocalLift subscription.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why LocalLift"
            title="Agency-Quality Basics Without Agency Overhead"
            description="Local businesses should not need a five-figure agency contract just to have a clean, professional website. We keep the process focused on the core site your business actually needs."
            className="max-w-4xl"
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="p-7 md:p-9">
              <CircleDollarSign className="h-7 w-7 text-lift-blue" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold">Why $500 works</h3>
              <p className="mt-3 leading-7 text-slate-text">
                A defined five-page scope, a direct working relationship, and a clean handoff let us
                charge one straightforward project price without adding a required service plan.
              </p>
              <ul className="mt-6 grid gap-3 text-sm font-bold text-lift-navy sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {['No bloated retainers', 'No confusing packages', 'No required LocalLift plan'].map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl bg-cloud px-4 py-3">
                    <Check className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-7 md:p-9">
              <MapPin className="h-7 w-7 text-lift-blue" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-bold">Small Team. Direct Communication.</h3>
              <p className="mt-3 leading-7 text-slate-text">
                You work directly with the student-founded team building your website—not through
                layers of account management. That keeps decisions clear and the details close to the
                people doing the work.
              </p>
              <p className="mt-5 rounded-xl bg-soft-blue px-4 py-3 text-sm font-bold text-lift-navy">
                Based in Downingtown. Built for local businesses. Welcoming clients elsewhere, too.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-y border-border-color bg-cloud py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simple pricing"
            title="One Website. One Price."
            description="A complete standard website build with a defined scope, two revision rounds, and a final handoff."
            className="mb-10 max-w-3xl"
          />
          <WebsiteOffer />
        </div>
      </section>

      <section id="faq" className="bg-white py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.14em] text-lift-blue uppercase">Clear answers</p>
            <h2 id="faq-heading" className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-text md:text-lg">
              What the $500 project includes, what happens after launch, and what you will still control.
            </p>
          </div>
          <div className="mt-10">
            <FAQList items={faqItems} />
          </div>
        </div>
      </section>

      <section className="border-t border-badge-blue bg-soft-blue py-16 text-center md:py-24">
        <div className="mx-auto max-w-[760px] px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Ready for a better website?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-text">
            Start with a practical look at your current site—or tell us what you need if you are starting fresh.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/free-review">
                Get a Free Website Review
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <Link href="/contact#contact-form">Start Your Website</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
