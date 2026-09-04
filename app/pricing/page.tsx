import Link from 'next/link';
import { ArrowRight, Boxes, CircleDollarSign, KeyRound } from 'lucide-react';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { WebsiteOffer } from '@/components/sections/WebsiteOffer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';
import { websiteOffer } from '@/lib/site';

export const metadata = createPageMetadata({
  title: '$500 Website Build | LocalLift Studios',
  description:
    'One professional website for local businesses for a $500 one-time project fee. Up to five core pages, two revision rounds, launch, and handoff.',
  path: '/pricing',
});

const scopeDetails = [
  {
    icon: CircleDollarSign,
    title: 'One focused project',
    description:
      'The standard $500 fee covers one professional website with up to five agreed core pages and the listed launch services.',
  },
  {
    icon: Boxes,
    title: 'Clear limits',
    description:
      'Larger sites and advanced functionality are scoped separately, so the standard build stays straightforward for both sides.',
  },
  {
    icon: KeyRound,
    title: 'A real handoff',
    description:
      'After approval and final payment, we provide the website and agreed access or files. There is no required LocalLift subscription.',
  },
] as const;

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="One Website. One Price."
        title={
          <>
            A professional website. <span className="text-lift-blue">$500 one time.</span>
          </>
        }
        description="A clear, professional website build for local service businesses—with no required monthly LocalLift fee and no confusing package tiers."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </PageHero>

      <section className="px-4 py-20 md:py-24" aria-labelledby="website-offer-heading">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <div className="mb-10 text-center">
              <h2 id="website-offer-heading" className="text-3xl font-bold tracking-tight text-lift-navy md:text-5xl">
                Everything in the standard build
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-text md:text-lg">
                The pages are chosen around your business and count toward the five-page limit. A common site includes Home,
                Services, About, Projects, and Contact.
              </p>
            </div>
          </Reveal>
          <WebsiteOffer />
        </div>
      </section>

      <section className="border-y border-border-color bg-white px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Built to Stay Simple"
            title="A clear scope protects the price"
            description="LocalLift keeps the project focused on the core website a local business needs instead of building unnecessary complexity into every job."
          />
          <RevealList className="mt-12 grid gap-6 md:grid-cols-3">
            {scopeDetails.map((detail) => (
              <Card key={detail.title} className="h-full border-border-color bg-cloud p-6 shadow-light md:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                  <detail.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-lift-navy">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-text">{detail.description}</p>
              </Card>
            ))}
          </RevealList>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Agency-Quality Basics"
              title="The essentials, without agency overhead"
              description="Local businesses should not need a five-figure contract just to get a clean, credible website. We use a focused process, charge one straightforward project fee, and hand over the finished site."
              align="left"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="border-border-color bg-white p-7 shadow-card md:p-9">
              <ul className="space-y-5">
                {[
                  'No bloated retainers or confusing packages.',
                  'No required monthly LocalLift plan.',
                  websiteOffer.thirdPartyDisclosure,
                  websiteOffer.separateQuote,
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-text md:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lift-blue" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-lift-navy px-4 py-16 text-center text-white md:py-20">
        <Reveal>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to make the next step simple?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cloud/80">
              Start with a practical review, or tell us about the website your business needs.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/free-review">Get a Free Website Review</Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <Link href="/contact#contact-form">Start Your Website</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
