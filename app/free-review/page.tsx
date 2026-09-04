import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CalendarDays,
  LayoutPanelTop,
  MonitorSmartphone,
  MousePointerClick,
  ShieldCheck,
} from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Free Website Review | LocalLift Studios',
  description:
    'Get a practical, no-pressure review of your local-business website covering mobile usability, trust, calls to action, and website structure.',
  path: '/free-review',
});

const reviewAreas = [
  {
    title: 'Mobile usability',
    description: 'Whether customers can read, navigate, call, and request a quote easily from a phone.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Trust and clarity',
    description: 'Whether the page quickly explains what you do and gives visitors reasons to trust the business.',
    icon: ShieldCheck,
  },
  {
    title: 'Calls to action',
    description: 'Whether the next step—calling, requesting a quote, or getting in touch—is clear and easy to find.',
    icon: MousePointerClick,
  },
  {
    title: 'Website structure',
    description: 'Whether services, locations, headings, and core information are organized in a useful way.',
    icon: LayoutPanelTop,
  },
] as const;

export default function FreeReviewPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="Free Website Review"
        title="Practical feedback for a clearer local-business website."
        description="We’ll review your current site and point out a few useful improvements around mobile usability, trust, calls to action, and website structure. No hard sell."
      >
        <a
          href="#review-form"
          className="inline-flex min-h-12 items-center justify-center rounded-button bg-lift-blue px-6 text-[15px] font-semibold text-white shadow-light transition-all hover:-translate-y-px hover:bg-lift-blue-hover hover:shadow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2"
        >
          Get a Free Website Review
        </a>
      </PageHero>

      <section className="px-4 py-16 md:py-24" aria-labelledby="review-form-title">
        <div className="mx-auto grid max-w-[1120px] items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="lg:col-start-2 lg:row-start-1">
            <ContactForm
              id="review-form"
              inquiryType="Free website review"
              title="Request your free review"
              description="Tell us about your business and share your current website if you have one. We’ll respond with the most useful next step."
              submitLabel="Get a Free Website Review"
            />
          </div>

          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-sm font-bold tracking-[0.14em] text-lift-blue uppercase">
              A useful first step
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-lift-navy">
              Honest observations, not a free custom redesign.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-text">
              We keep the review focused. You’ll get practical feedback about the current site and a clear explanation of what could be improved. If the site is already doing its job, we’ll say so.
            </p>
            <ul className="mt-7 space-y-3 text-sm font-semibold text-lift-navy">
              {[
                'No obligation to hire LocalLift',
                'No rankings or lead guarantees',
                'No required monthly LocalLift plan',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border-color bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeading
            eyebrow="What We Review"
            title="A few details that make a real difference"
            description="The review stays centered on the parts of a website that matter most to a local customer trying to understand and contact your business."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviewAreas.map((area) => (
              <Card key={area.title} className="h-full p-6 shadow-sm">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                  <area.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-lg font-bold text-lift-navy">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-text">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 text-center md:py-20" aria-labelledby="review-call-title">
        <div className="mx-auto max-w-[720px] rounded-[24px] bg-lift-navy p-8 text-white shadow-card md:p-12">
          <CalendarDays className="mx-auto h-8 w-8 text-blue-300" aria-hidden="true" />
          <h2 id="review-call-title" className="mt-5 text-3xl font-bold text-white">
            Prefer to talk it through?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-cloud/80">
            Book a short introduction instead. We’ll learn about the business and answer straightforward questions about the $500 website build.
          </p>
          <Button asChild size="lg" className="mt-7 bg-white text-lift-navy hover:bg-cloud">
            <Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a 15-Minute Call
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
