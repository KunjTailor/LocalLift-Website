import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Mail, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';
import { PageHero } from '@/components/sections/PageHero';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createPageMetadata({
  title: 'Start Your Website | LocalLift Studios',
  description:
    'Tell LocalLift Studios about your local business and the professional website you need. The Complete Launch Package is a flat $500.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="Start Your Website"
        title="Tell us what your business needs."
        description="Share a few useful details and we’ll follow up about your website. The Complete Launch Package is a flat $500, and everything the build needs is already in it."
      >
        <p className="text-sm font-bold text-lift-blue sm:text-base">
          $500 flat <span aria-hidden="true">•</span> Up to 5 core pages{' '}
          <span aria-hidden="true">•</span> Two revision rounds
        </p>
      </PageHero>

      <section className="px-4 py-16 md:py-24" aria-labelledby="contact-form-title">
        <div className="mx-auto grid max-w-[1080px] gap-8 md:grid-cols-3 md:gap-12">
          <div className="md:col-span-2 md:col-start-2 md:row-start-1">
            <ContactForm
              id="contact-form"
              inquiryType="Website build"
              title="Start the conversation"
              description="A short, practical brief is enough. We’ll ask follow-up questions if we need anything else."
              submitLabel="Start Your Website"
            />
          </div>

          <aside
            className="space-y-5 md:col-start-1 md:row-start-1"
            aria-labelledby="contact-options-title"
          >
            <h2 id="contact-options-title" className="sr-only">
              Other ways to contact LocalLift Studios
            </h2>

            <Card className="p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-sans text-lg font-bold text-lift-navy">Email us directly</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-flex min-h-11 items-center break-all text-sm font-bold text-lift-blue underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2"
              >
                {siteConfig.email}
              </a>
            </Card>

            <Card className="p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-sans text-lg font-bold text-lift-navy">Prefer a quick call?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-text">
                Book a 15-minute conversation with the founders.
              </p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <Link href={siteConfig.calendlyUrl} target="_blank" rel="noopener noreferrer">
                  View Calendar
                  <span className="sr-only"> (opens in a new tab)</span>
                </Link>
              </Button>
            </Card>

            <Card className="p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-sans text-lg font-bold text-lift-navy">Local and direct</h3>
              <p className="mt-2 text-sm leading-6 text-slate-text">
                Based in {siteConfig.location}. You work directly with the people building your site.
              </p>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  );
}
