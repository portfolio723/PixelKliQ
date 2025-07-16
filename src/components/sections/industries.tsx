'use client';
import { TextRevealByWord } from '../ui/text-reveal';
import { TextGradientScroll } from '../ui/text-gradient-scroll';

const industryText = "We empower Startups & Entrepreneurs to launch and scale their ventures. In Education & EdTech, we transform learning with innovative technology. For Healthcare & Wellness, we build secure digital tools. In Real Estate & Construction, we streamline operations. For eCommerce & Retail, we boost sales and loyalty. And for SaaS & Technology Companies, we are expert partners in building and scaling products."

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
        <div className="max-w-3xl mx-auto text-xl md:text-2xl text-center">
            <TextGradientScroll text={industryText} />
        </div>
      </div>
    </section>
  );
}
