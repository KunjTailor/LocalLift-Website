'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { AnimatedHeading } from './AnimatedHeading';
import { Reveal } from './Reveal';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string[];
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  align?: 'center' | 'left';
}

export function PageHero({
  badge,
  title,
  highlight = [],
  subtitle,
  children,
  className,
  align = 'center',
}: PageHeroProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border-b border-border-color bg-white',
        className
      )}
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(15,23,42,0.12) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />
      {/* Soft glows */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-lift-blue/20 blur-[110px]"
        animate={{ x: [0, 30, -10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-300/25 blur-[110px]"
        animate={{ x: [0, -40, 10, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className={cn(
          'relative container mx-auto max-w-[1100px] px-4 pt-28 md:pt-36 pb-16 md:pb-20',
          align === 'center' ? 'text-center' : 'text-left'
        )}
      >
        {badge && (
          <Reveal>
            <Badge className="mb-5">{badge}</Badge>
          </Reveal>
        )}
        <AnimatedHeading
          as="h1"
          text={title}
          highlight={highlight}
          className="text-4xl md:text-6xl font-sans font-extrabold text-lift-navy tracking-tight leading-[1.05]"
        />
        {subtitle && (
          <Reveal delay={0.4}>
            <p
              className={cn(
                'mt-6 text-lg md:text-xl text-slate-text font-body leading-relaxed',
                align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'
              )}
            >
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.5}>
            <div className="mt-8">{children}</div>
          </Reveal>
        )}
      </div>
    </div>
  );
}
