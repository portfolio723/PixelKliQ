
'use client';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { Target, Eye } from 'lucide-react';

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
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="text-center p-6 border rounded-lg">
                <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
                    <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                    To build a world where creativity, talent, and technology combine to create real-world impact.
                </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
                <div className="inline-flex items-center justify-center bg-primary text-primary-foreground rounded-full p-3 mb-4">
                     <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                    To be the most trusted partner for end-to-end digital growth in the modern era.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
