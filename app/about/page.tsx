import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, MessagesSquare, Target } from 'lucide-react';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'About LocalLift Studios',
  description:
    'Meet the student-founded LocalLift team in Downingtown, Pennsylvania. Work directly with the people designing and building your $500 website.',
  path: '/about',
});

const founders = [
  {
    name: 'Kunj Tailor',
    role: 'Co-Founder · Operations & Client Communication',
    image: '/images/kunj-tailor.webp',
    alt: 'Kunj Tailor, co-founder of LocalLift Studios',
    description:
      'Kunj coordinates projects and client communication, helping keep the scope, materials, and next steps clear from the first conversation through handoff.',
  },
  {
    name: 'Aryan Mitra',
    role: 'Co-Founder · Design & Development',
    image: '/images/aryan-mitra.webp',
    alt: 'Aryan Mitra, co-founder of LocalLift Studios',
    description:
      'Aryan designs and builds each website with an emphasis on clear structure, mobile usability, and a polished presentation suited to the business.',
  },
] as const;

const workingPrinciples = [
  {
    icon: MessagesSquare,
    title: 'Direct communication',
    description: 'You speak with the people planning and building the website, not an account manager passing messages between departments.',
  },
  {
    icon: Target,
    title: 'Focused scope',
    description: 'We concentrate on the core pages and inquiry paths a local service business needs, keeping the $500 standard build straightforward.',
  },
  {
    icon: MapPin,
    title: 'Local perspective',
    description: 'We are based in Downingtown and build for local businesses there and beyond, with attention to how customers actually browse and call.',
  },
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <PageHero
        eyebrow="About LocalLift"
        title={
          <>
            Small team. <span className="text-lift-blue">Direct communication.</span>
          </>
        }
        description={`LocalLift is a student-founded web studio based in ${siteConfig.location}. We build focused, professional websites for local service businesses without requiring an ongoing LocalLift subscription.`}
      >
        <p className="font-sans text-sm font-bold tracking-[0.12em] text-lift-blue uppercase">
          Based in Downingtown. Built for local businesses.
        </p>
      </PageHero>

      <section className="border-b border-border-color bg-white px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1000px]">
          <SectionHeading
            eyebrow="Founder-Led"
            title="Meet the people building your website"
            description="LocalLift stays intentionally small so every project gets direct attention from the founders responsible for the work."
          />
          <RevealList className="mt-12 grid gap-8 md:grid-cols-2">
            {founders.map((founder) => (
              <Card key={founder.name} className="h-full border-border-color bg-cloud p-7 text-center shadow-light md:p-9">
                <div className="relative mx-auto mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-card md:h-48 md:w-48">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    sizes="(max-width: 767px) 160px, 192px"
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-lift-navy">{founder.name}</h3>
                <p className="mt-2 text-sm font-bold text-lift-blue">{founder.role}</p>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-6 text-slate-text">{founder.description}</p>
              </Card>
            ))}
          </RevealList>
        </div>
      </section>

      <section className="px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="How We Work"
            title="Professional work without layers of agency process"
            description="The student-founded story matters because it shapes how we work: closely, carefully, and with a direct line between the business owner and the builders."
          />
          <RevealList className="mt-12 grid gap-6 md:grid-cols-3">
            {workingPrinciples.map((principle) => (
              <Card key={principle.title} className="h-full border-border-color bg-white p-6 shadow-light md:p-7">
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
            <h2 className="text-3xl font-bold text-white md:text-4xl">Tell us what your business needs online</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cloud/80">
              We will give you a straightforward view of what is worth improving and whether the standard website build is a fit.
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
