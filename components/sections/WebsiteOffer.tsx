import Link from 'next/link';
import { Check, Info, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { websiteOffer } from '@/lib/site';
import { cn } from '@/lib/utils';

interface WebsiteOfferProps {
  compact?: boolean;
  className?: string;
}

export function WebsiteOffer({ compact = false, className }: WebsiteOfferProps) {
  const inclusions = compact
    ? websiteOffer.inclusions.slice(0, 9)
    : websiteOffer.inclusions;

  return (
    <Card
      className={cn(
        'mx-auto max-w-[980px] overflow-hidden border-lift-blue/30 bg-white shadow-card',
        className,
      )}
    >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative overflow-hidden bg-lift-navy p-8 text-white sm:p-10 lg:p-12">
          <div
            className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-lift-blue/50 blur-[80px]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-sm font-bold tracking-[0.16em] text-blue-200 uppercase">
              {websiteOffer.name}
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-6xl font-extrabold tracking-tight sm:text-7xl">
                {websiteOffer.priceLabel}
              </span>
              <span className="pb-2 text-sm font-bold tracking-wide text-blue-100 uppercase">
                One time
              </span>
            </div>
            <p className="mt-5 text-base leading-7 text-cloud/85">
              One focused, professional website build with a clear finish line and handoff.
            </p>
            <div className="mt-7 rounded-card border border-white/15 bg-white/10 p-4">
              <p className="flex items-start gap-3 text-sm leading-6 text-white">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                <span>
                  No LocalLift subscription. No required monthly LocalLift maintenance fee.
                </span>
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 w-full bg-white text-lift-navy hover:bg-cloud">
              <Link href="/contact#contact-form">Start Your Website</Link>
            </Button>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mb-7 flex items-center justify-between gap-4 border-b border-border-color pb-5">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-lift-blue uppercase">Included</p>
              <h3 className="mt-1 text-2xl font-bold text-lift-navy">The core site your business needs</h3>
            </div>
            <span className="hidden rounded-pill bg-soft-blue px-3 py-1.5 text-xs font-bold text-lift-blue sm:inline-flex">
              {websiteOffer.pageLimit}
            </span>
          </div>
          <ul className="grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 font-medium text-lift-navy">
                <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-success" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {compact ? (
            <Button asChild variant="link" className="mt-6 h-auto px-0">
              <Link href="/pricing">See full scope and pricing</Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 border-t border-border-color bg-cloud p-6 text-sm leading-6 text-slate-text md:grid-cols-2 md:p-8">
        <p className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-lift-blue" aria-hidden="true" />
          <span>{websiteOffer.thirdPartyDisclosure}</span>
        </p>
        <p className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-lift-blue" aria-hidden="true" />
          <span>{websiteOffer.separateQuote}</span>
        </p>
      </div>
    </Card>
  );
}
