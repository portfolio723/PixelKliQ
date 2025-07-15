import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import { FeaturesSectionWithHoverEffects } from '@/components/blocks/feature-section-with-hover-effects';
import Hero from '@/components/sections/hero';
import Industries from '@/components/sections/industries';
import Testimonials from '@/components/sections/testimonials';
import Features from '@/components/sections/features';
import Faq from '@/components/sections/faq';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';
import { ParallaxSection } from '@/components/shared/parallax-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <ParallaxSection>
          <About />
        </ParallaxSection>
        <ParallaxSection>
          <FeaturesSectionWithHoverEffects />
        </ParallaxSection>
        <ParallaxSection>
          <Industries />
        </ParallaxSection>
        <ParallaxSection>
          <Features />
        </ParallaxSection>
        <ParallaxSection>
          <Testimonials />
        </ParallaxSection>
        <ParallaxSection>
          <Faq />
        </ParallaxSection>
        <ParallaxSection>
          <Contact />
        </ParallaxSection>
      </main>
      <Footer />
    </div>
  );
}
