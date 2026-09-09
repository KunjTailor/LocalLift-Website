'use client';

import * as React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
}

export function TiltCard({ children, className, max = 8 }: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const active = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 220, damping: 20, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 220, damping: 20, mass: 0.4 });
  const sa = useSpring(active, { stiffness: 220, damping: 24 });

  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const gxPct = useTransform(sx, (v) => `${v * 100}%`);
  const gyPct = useTransform(sy, (v) => `${v * 100}%`);
  const background = useMotionTemplate`radial-gradient(420px circle at ${gxPct} ${gyPct}, rgba(255,255,255,0.45), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => active.set(1)}
      onMouseLeave={() => {
        px.set(0.5);
        py.set(0.5);
        active.set(0);
      }}
      style={{ rotateX, rotateY }}
      className={cn('relative will-change-transform [transform-style:flat] [perspective:1000px]', className)}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background, opacity: sa }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
      />
    </motion.div>
  );
}
