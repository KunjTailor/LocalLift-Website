'use client';

import * as React from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

export function HeroBackground() {
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  const xPct = useMotionValue('50%');
  const yPct = useMotionValue('40%');

  React.useEffect(() => {
    const unsubX = sx.on('change', (v) => xPct.set(`${v}%`));
    const unsubY = sy.on('change', (v) => yPct.set(`${v}%`));
    return () => {
      unsubX();
      unsubY();
    };
  }, [sx, sy, xPct, yPct]);

  const glow = useMotionTemplate`radial-gradient(600px circle at ${xPct} ${yPct}, rgba(29, 78, 216, 0.18), transparent 60%)`;

  React.useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(15,23,42,0.18) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* animated blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-lift-blue/30 blur-[110px]"
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute top-20 right-0 h-[520px] w-[520px] rounded-full bg-purple-400/25 blur-[110px]"
        animate={{ x: [0, -50, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-cyan-300/30 blur-[110px]"
        animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* cursor-tracked highlight */}
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="absolute inset-0"
      />

      {/* fade to white at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
