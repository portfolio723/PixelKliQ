
'use client';
import {
  Building2,
  HeartPulse,
  Rocket,
  School,
  ShoppingBag,
  Laptop,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { TextRevealByWord } from '../ui/text-reveal';
import type { ComponentProps, ReactNode } from 'react';

const features = [
  {
    title: 'Startups & Entrepreneurs',
    icon: Rocket,
    description: 'Launch and scale your venture with our comprehensive digital solutions.',
  },
  {
    title: 'Education & EdTech',
    icon: School,
    description: 'Transform learning with innovative technology and engaging platforms.',
  },
  {
    title: 'Healthcare & Wellness',
    icon: HeartPulse,
    description: 'Build secure, compliant, and user-friendly digital tools for patients and providers.',
  },
  {
    title: 'Real Estate & Construction',
    icon: Building2,
    description: 'Streamline operations, from project management to client interaction, with custom software.',
  },
  {
    title: 'eCommerce & Retail',
    icon: ShoppingBag,
    description: 'Boost sales and customer loyalty with our tailored eCommerce solutions.',
  },
  {
    title: 'SaaS & Technology',
    icon: Laptop,
    description: 'As expert partners, we help build, scale, and maintain your software products.',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-8 sm:py-12 bg-background">
      <div className="mx-auto w-full max-w-5xl space-y-16 px-4">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
          <div className="text-center mb-12">
            <TextRevealByWord text="Industries We Empower" />
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We've partnered with a diverse range of clients to deliver exceptional results across various sectors.
            </p>
          </div>
        </AnimatedContainer>

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>['className'];
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
