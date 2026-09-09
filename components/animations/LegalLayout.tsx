'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { Reveal } from './Reveal';
import { PageHero } from './PageHero';

interface LegalLayoutProps {
  badge?: string;
  title: string;
  highlight?: string[];
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalLayout({
  badge = 'Legal',
  title,
  highlight,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="bg-white min-h-screen">
      <PageHero badge={badge} title={title} highlight={highlight} />

      <div className="container mx-auto max-w-[820px] px-4 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10 pb-6 border-b border-border-color">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-semibold text-slate-text hover:text-lift-blue transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to home
            </Link>
            {lastUpdated && (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-slate">
                Last updated: {lastUpdated}
              </span>
            )}
          </div>
        </Reveal>

        <Reveal>
          <article className="prose prose-slate max-w-none text-slate-text font-body space-y-6 [&_h2]:text-xl md:[&_h2]:text-2xl [&_h2]:font-sans [&_h2]:font-bold [&_h2]:text-lift-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:flex [&_h2]:items-center [&_h2]:gap-3 [&_h2]:before:content-[''] [&_h2]:before:w-1 [&_h2]:before:h-6 [&_h2]:before:rounded-full [&_h2]:before:bg-gradient-to-b [&_h2]:before:from-lift-blue [&_h2]:before:to-purple-500 [&_a]:text-lift-blue [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2">
            {children}
          </article>
        </Reveal>

        <Reveal>
          <div className="mt-16 p-6 md:p-8 rounded-card bg-gradient-to-br from-soft-blue via-white to-soft-blue border border-lift-blue/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-border-color flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-lift-blue" />
            </div>
            <div className="flex-1">
              <p className="font-sans font-bold text-lift-navy">Have questions about this policy?</p>
              <p className="text-sm text-slate-text mt-1">
                Email us at{' '}
                <a
                  href="mailto:team@localliftstudios.com"
                  className="text-lift-blue font-semibold underline"
                >
                  team@localliftstudios.com
                </a>{' '}
                and we&apos;ll get back to you within 1 business day.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
