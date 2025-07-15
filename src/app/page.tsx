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

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <FeaturesSectionWithHoverEffects />
        <Industries />
        <Features />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
