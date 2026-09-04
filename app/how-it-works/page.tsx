import Link from 'next/link';
import { ArrowRight, CircleCheck, FolderInput, ReceiptText } from 'lucide-react';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { SectionHeading } from '@/components/sections/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { createPageMetadata } from '@/lib/metadata';

export const metadata = createPageMetadata({
  title: 'How It Works | LocalLift Studios',
  description:
    'See the four-step LocalLift website process: free review, build, two revision rounds, then launch and handoff after approval and final payment.',
  path: '/how-it-works',
});

const handoffDetails = [
  {
    icon: CircleCheck,
    title: 'Approval comes first',
    description: 'You see the finished website and use the two included reasonable revision rounds before final handoff.',
  },
  {
    icon: FolderInput,
    title: 'You receive control',
    description: 'After final payment, we provide the website and agreed files or access according to the handoff method.',
  },
  {
    icon: ReceiptText,
    title: 'Third-party costs are yours',
    description: 'You are responsible for domain, paid hosting, premium software, and other services selected for the site.',
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="How It Works"
        title={
          <>
            Four clear steps. <span className="text-lift-blue">Then the website is yours.</span>
          </>
        }
        description="A focused process keeps the project understandable, gives you room to review the work, and ends with a clear launch and handoff."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
      </PageHero>

      <section className="relative overflow-hidden bg-lift-navy px-4 py-20 text-white md:py-24" aria-labelledby="process-heading">
        <div className="hero-grid-dark absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1200px]">
          <Reveal>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="text-sm font-bold tracking-[0.16em] text-blue-300 uppercase">The Process</p>
              <h2 id="process-heading" className="mt-3 text-3xl font-bold text-white md:text-5xl">
                From review to Launch &amp; Handoff
              </h2>
              <p className="mt-5 text-base leading-7 text-cloud/75 md:text-lg">
                The project has a clear finish line. After handoff, there is no required LocalLift subscription or recurring
                LocalLift fee.
              </p>
            </div>
          </Reveal>
          <ProcessSteps detailed />
        </div>
      </section>

      <section className="bg-cloud px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="Before We Build"
            title="What we need from you"
            description="A focused build moves smoothly when we have accurate information and the materials that represent your business."
          />
          <Reveal>
            <Card className="mx-auto mt-10 max-w-[900px] border-border-color bg-white p-7 shadow-card md:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  'Accurate business and contact information',
                  'Your services and service-area details',
                  'Logo and brand assets, if available',
                  'Photos you have permission to use',
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm font-medium leading-6 text-lift-navy md:text-base">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border-color bg-white px-4 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px]">
          <SectionHeading
            eyebrow="After Launch"
            title="You keep the website"
            description="Once the project is approved, fully paid, and handed off, you control the site. LocalLift does not require an ongoing subscription."
          />
          <RevealList className="mt-12 grid gap-6 md:grid-cols-3">
            {handoffDetails.map((detail) => (
              <Card key={detail.title} className="h-full border-border-color bg-cloud p-6 shadow-light md:p-7">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-lift-blue">
                  <detail.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-lift-navy">{detail.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-text">{detail.description}</p>
              </Card>
            ))}
          </RevealList>
          <Reveal>
            <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-slate-text md:text-base">
              You can maintain the site yourself, hire someone else, or contact us for separately quoted future work,
              depending on availability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-soft-blue px-4 py-16 text-center md:py-20">
        <Reveal>
          <div className="mx-auto max-w-[760px]">
            <h2 className="text-3xl font-bold text-lift-navy md:text-4xl">Ready to begin with a clear first step?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-text">
              We will review your current website if you have one and talk through what a focused new site would need.
            </p>
            <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
              <Link href="/free-review">Get a Free Website Review</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
