'use client';

import type { ReactNode } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export function ParallaxSection({ children, className }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: ref,
    offset: ['start end', 'end start']
  });
  
  const y = useParallax(scrollYProgress, 50);

  return (
    <section ref={ref} className={cn("relative", className)}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </section>
  );
}
