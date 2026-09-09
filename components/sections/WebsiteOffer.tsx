import Link from 'next/link';
import { Check, Info, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { websiteOffer } from '@/lib/site';
import { cn } from '@/lib/utils';

interface WebsiteOfferProps {
  compact?: boolean;
  className?: string;
}

export function WebsiteOffer({ compact = false, className }: WebsiteOfferProps) {
  const groups = compact
    ? websiteOffer.inclusionGroups.map((group) => ({
        title: group.title,
        items: group.items.slice(0, 3) as readonly string[],
      }))
    : websiteOffer.inclusionGroups;

  return (
    <Card
      className={cn(
        'mx-auto max-w-[1080px] overflow-hidden border-lift-blue/30 bg-white shadow-card',
        className,
      )}
    >
      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative overflow-hidden bg-lift-navy p-8 text-white sm:p-10 lg:p-12">
          <div
            className="absolute -top-24 -right-16 h-64 w-64 rounded-full bg-lift-blue/50 blur-[80px]"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-blue-100 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-blue-300" aria-hidden="true" />
              Our only package
            </span>
            <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {websiteOffer.name}
            </h3>
            <p className="mt-3 text-base leading-7 text-cloud/85">{websiteOffer.tagline}</p>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-6xl font-extrabold tracking-tight sm:text-7xl">
                {websiteOffer.priceLabel}
              </span>
              <span className="pb-2 text-sm font-bold tracking-wide text-blue-100 uppercase">
                Flat
              </span>
            </div>
            <p className="mt-2 text-sm font-bold tracking-wide text-blue-200">
              {websiteOffer.cadence}
            </p>

            <ul className="mt-7 space-y-3">
              {websiteOffer.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 font-semibold text-white">
                  <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-blue-300" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-card border border-white/15 bg-white/10 p-4">
              <p className="flex items-start gap-3 text-sm leading-6 text-white">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
                <span>{websiteOffer.ownership}</span>
              </p>
            </div>

            <Button asChild size="lg" className="mt-8 w-full bg-white text-lift-navy hover:bg-cloud">
              <Link href="/contact#contact-form">Start Your Website</Link>
            </Button>
          </div>
        </div>

        <div className="p-8 sm:p-10 lg:p-12">
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-border-color pb-5">
            <div>
              <p className="text-xs font-bold tracking-[0.14em] text-lift-blue uppercase">
                Everything included
              </p>
              <h4 className="mt-1 text-2xl font-bold text-lift-navy">
                The whole site, start to finish
              </h4>
            </div>
            <span className="hidden rounded-pill bg-soft-blue px-3 py-1.5 text-xs font-bold text-lift-blue sm:inline-flex">
              {websiteOffer.pageLimit}
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {groups.map((group) => (
              <div key={group.title}>
                <h5 className="text-sm font-extrabold tracking-tight text-lift-navy">{group.title}</h5>
                <ul className="mt-3 space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 font-medium text-slate-text"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {compact ? (
            <Button asChild variant="link" className="mt-7 h-auto px-0">
              <Link href="/pricing">See the full scope and pricing</Link>
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
