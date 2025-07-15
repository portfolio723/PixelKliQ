import About from '@/components/sections/about';
import Contact from '@/components/sections/contact';
import Hero from '@/components/sections/hero';
import Industries from '@/components/sections/industries';
import SeoGenerator from '@/components/sections/seo-generator';
import Services from '@/components/sections/services';
import Testimonials from '@/components/sections/testimonials';
import Footer from '@/components/shared/footer';
import Header from '@/components/shared/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Industries />
        <Testimonials />
        <Contact />
        <SeoGenerator />
      </main>
      <Footer />
    </div>
  );
}
