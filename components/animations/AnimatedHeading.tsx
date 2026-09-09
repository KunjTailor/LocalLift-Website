'use client';

import * as React from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  highlight?: string[];
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}

export function AnimatedHeading({
  text,
  className,
  highlight = [],
  as: Tag = 'h1',
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-15% 0px' });
  const words = text.split(' ');

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const word: Variants = {
    hidden: { opacity: 0, y: '0.6em', filter: 'blur(8px)' },
    show: {
      opacity: 1,
      y: '0em',
      filter: 'blur(0px)',
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className="block"
    >
      <Tag className={cn('block', className)}>
        {words.map((w, i) => {
          const isHi = highlight.includes(w.replace(/[^a-zA-Z]/g, ''));
          return (
            <span
              key={`${w}-${i}`}
              className="inline-block overflow-hidden align-baseline"
            >
              <motion.span
                variants={word}
                className={cn(
                  'inline-block whitespace-pre',
                  isHi &&
                    'bg-gradient-to-br from-lift-blue via-blue-500 to-purple-500 bg-clip-text text-transparent'
                )}
              >
                {w}
                {i < words.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          );
        })}
      </Tag>
    </motion.div>
  );
}
