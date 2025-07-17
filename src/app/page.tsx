
'use client';
import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import { FeaturesSectionWithHoverEffects } from '@/components/blocks/feature-section-with-hover-effects';
import Hero from '@/components/sections/hero';
import Industries from '@/components/sections/industries';
import Testimonials from '@/components/sections/testimonials';
import Faq from '@/components/sections/faq';
import Footer from '@/components/shared/footer';
import { motion } from 'framer-motion';
import Header from '@/components/shared/header';
import WhyUs from '@/components/sections/why-us';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const MotionSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
  >
    {children}
  </motion.div>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <main className="flex-1">
        <MotionSection>
          <About />
        </MotionSection>
        <MotionSection>
          <WhyUs />
        </MotionSection>
        <MotionSection>
          <FeaturesSectionWithHoverEffects />
        </MotionSection>
        <MotionSection>
          <Industries />
        </MotionSection>
        <MotionSection>
          <Testimonials />
        </MotionSection>
        <MotionSection>
          <Faq />
        </MotionSection>
        <MotionSection>
          <Contact />
        </MotionSection>
      </main>
      <Footer />
    </div>
  );
}
