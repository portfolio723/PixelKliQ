'use client';
import { Briefcase, Building, GraduationCap, HeartPulse, ShoppingCart, Cpu } from 'lucide-react';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';
import { TextRevealByWord } from '../ui/text-reveal';

const industries = [
  {
    title: 'Startups & Entrepreneurs',
    icon: Briefcase,
    description: 'Launch and scale your venture with our comprehensive digital solutions.',
  },
  {
    title: 'Education & EdTech',
    icon: GraduationCap,
    description: 'Transform learning experiences with innovative and engaging technology.',
  },
  {
    title: 'Healthcare & Wellness',
    icon: HeartPulse,
    description: 'Empower patient care and wellness with secure and intuitive digital tools.',
  },
  {
    title: 'Real Estate & Construction',
    icon: Building,
    description: 'Streamline operations and showcase properties with cutting-edge tech.',
  },
  {
    title: 'eCommerce & Retail',
    icon: ShoppingCart,
    description: 'Boost sales and customer loyalty with seamless online shopping experiences.',
  },
  {
    title: 'SaaS & Technology Companies',
    icon: Cpu,
    description: 'Build, launch, and scale your software products with our expert partnership.',
  },
];

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
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
};

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <TextRevealByWord text="Industries We Empower" />
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We've partnered with a diverse range of clients to deliver exceptional results across various sectors.
          </p>
        </div>
        <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto"
        >
            {industries.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
            ))}
        </AnimatedContainer>
      </div>
    </section>
  );
}
