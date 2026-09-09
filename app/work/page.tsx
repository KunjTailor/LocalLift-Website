import Link from 'next/link';
import { ArrowRight, Eye, LayoutPanelTop, Smartphone } from 'lucide-react';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'Website Design Work | LocalLift Studios',
  description:
    'Explore LocalLift concept builds for remodeling, landscaping, and auto-detailing businesses, each clearly labeled as a demonstration project.',
  path: '/work',
});

const designPrinciples = [
  {
    icon: LayoutPanelTop,
    title: 'Clear service structure',
    description: 'Visitors can understand what the business offers without digging through cluttered pages or technical language.',
  },
  {
    icon: Smartphone,
    title: 'Useful on a phone',
    description: 'Navigation, service details, call actions, and quote pathways are designed around smaller screens first.',
  },
  {
    icon: Eye,
    title: 'Credible presentation',
    description: 'Thoughtful typography, spacing, imagery, and project details help each concept feel appropriate for its trade.',
  },
] as const;

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="Selected Work"
        title={
          <>
            Website concepts for <span className="text-lift-blue">local service businesses.</span>
          </>
        }
        description="The projects shown here are demonstration builds—not commissioned client work. Each one shows how we approach clear services, mobile usability, and practical inquiry paths."
      >
        <div className="inline-flex max-w-2xl items-start gap-3 rounded-card border border-lift-blue/20 bg-soft-blue px-4 py-3 text-left text-sm leading-6 text-slate-text">
          <span className="mt-0.5 rounded-pill bg-lift-blue px-2.5 py-0.5 text-xs font-bold text-white">Concept Build</span>
          <span>These examples demonstrate our design direction and do not imply that the businesses hired LocalLift.</span>
        </div>
      </PageHero>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <Reveal>
            <div className="mb-12">
              <SectionHeading
                eyebrow="Demonstration Projects"
                title="See the thinking behind each build"
                description="Every project below is individually labeled and described as a concept. We do not attach invented testimonials, client results, or performance claims."
                align="left"
              />
            </div>
          </Reveal>
          <ProjectGrid detailed />
        </div>
      </section>

      <section className="border-y border-border-color bg-white px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Our Approach"
            title="Designed around what customers need to do"
            description="A local-business website should make services easy to understand and the next step easy to find. These are the basics we demonstrate in every concept."
          />
          <RevealList className="mt-12 grid gap-6 md:grid-cols-3">
            {designPrinciples.map((principle) => (
              <Card key={principle.title} className="h-full border-border-color bg-cloud p-6 shadow-light md:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                  <principle.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-lift-navy">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-text">{principle.description}</p>
              </Card>
            ))}
          </RevealList>
        </div>
      </section>

      <section className="bg-lift-navy px-4 py-16 text-center text-white md:py-20">
        <Reveal>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Want a website shaped around your business?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cloud/80">
              Start with a practical review, or tell us what you need from a new site. The Complete Launch Package
              is a flat $500, and the finished website is yours.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </Reveal>
      </section>
    </div>
  );
}
