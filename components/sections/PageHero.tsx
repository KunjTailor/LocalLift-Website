import type { ReactNode } from 'react';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = 'center',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden border-b border-border-color bg-white px-4 pt-28 pb-16 md:pt-36 md:pb-20',
        className,
      )}
    >
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-40 left-[8%] h-[360px] w-[360px] rounded-full bg-lift-blue/15 blur-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-[5%] h-[320px] w-[320px] rounded-full bg-sky-300/20 blur-[110px]"
        aria-hidden="true"
      />

      <div
        className={cn(
          'relative z-10 mx-auto max-w-[1000px]',
          align === 'center' ? 'text-center' : 'text-left',
        )}
      >
        <Badge className="mb-5 bg-white/85 shadow-sm backdrop-blur">{eyebrow}</Badge>
        <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-lift-navy sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p
          className={cn(
            'mt-6 max-w-2xl text-lg leading-8 text-slate-text md:text-xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
