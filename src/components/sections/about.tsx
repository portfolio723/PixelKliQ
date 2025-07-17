'use client';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { IconHover3D } from '@/components/ui/icon-3d-hover';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl space-y-12 px-6">
        <div className="text-center">
          <TextRevealByWord text="Who We Are" />
          <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">
            Empowering businesses with creative thinking, scalable tech, and strategic execution.
          </p>
        </div>
        <div className="text-center max-w-4xl mx-auto">
            <p className="text-md md:text-lg text-foreground/80">
                PixelKLiQ is a multidisciplinary digital partner built to scale ideas into powerful outcomes. Based in India, we work with startups, enterprises, and institutions across the globe to design, develop, and deliver meaningful solutions that drive business transformation.
            </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto justify-items-center">
            <IconHover3D 
              heading="Our Mission"
              text="To build a world where creativity, talent, and technology combine to create real-world impact."
            />
            <IconHover3D 
              heading="Our Vision"
              text="To be the most trusted partner for end-to-end digital growth in the modern era."
            />
        </div>
      </div>
    </section>
  );
}
