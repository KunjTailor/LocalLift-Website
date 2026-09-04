'use client';

import * as React from 'react';
import { motion, useInView, useReducedMotion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export function Reveal({ children, className, delay = 0, ...props }: RevealProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      animate={
        prefersReducedMotion || isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 16 }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.3,
              ease: 'easeOut' as const,
              delay,
            }
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface RevealListProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  staggerDelay?: number;
}

export function RevealList({ children, className, staggerDelay = 0.08, ...props }: RevealListProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' });
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    show: { 
      opacity: 1, y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut' as const,
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial={prefersReducedMotion ? false : 'hidden'}
      animate={prefersReducedMotion || isInView ? 'show' : 'hidden'}
      className={cn(className)}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
