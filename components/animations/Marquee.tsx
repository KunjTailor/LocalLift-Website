'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number; // seconds per loop
  className?: string;
  fade?: boolean;
}

export function Marquee({ children, speed = 30, className, fade = true }: MarqueeProps) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        fade &&
          '[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <div
        className="flex w-max animate-marquee gap-12 will-change-transform"
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
