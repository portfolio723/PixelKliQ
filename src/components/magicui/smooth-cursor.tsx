
'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export const SmoothCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const cursorSize = 16;

  const mouse = {
    x: useSpring(0, { stiffness: 500, damping: 50 }),
    y: useSpring(0, { stiffness: 500, damping: 50 }),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    document.body.addEventListener('mouseenter', () => setIsHovering(true));
    document.body.addEventListener('mouseleave', () => setIsHovering(false));
    
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      document.body.removeEventListener('mouseenter', () => setIsHovering(true));
      document.body.removeEventListener('mouseleave', () => setIsHovering(false));
    };
  }, [cursorSize]);

  return (
    <motion.div
      style={{
        left: mouse.x,
        top: mouse.y,
        opacity: isHovering ? 1 : 0,
      }}
      className={cn(
        "pointer-events-none fixed z-[999] h-4 w-4 rounded-full bg-primary",
        "hidden md:block" // Hide on mobile devices
      )}
    />
  );
};
