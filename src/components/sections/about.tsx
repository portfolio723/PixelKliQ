
'use client';

import DisplayCards from "@/components/ui/display-cards";
import { TextRevealByWord } from "../ui/text-reveal";

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="max-w-lg">
                        <TextRevealByWord text="Who We Are" />
                        <p className="mt-4 text-lg text-muted-foreground">
                            Empowering businesses with creative thinking, scalable tech, and strategic execution.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            PixelKLiQ is a multidisciplinary digital partner built to scale ideas into powerful outcomes. Based in India, we work with startups, enterprises, and institutions across the globe to design, develop, and deliver meaningful solutions that drive business transformation.
                        </p>
                    </div>
                    <div className="flex items-center justify-center lg:justify-end">
                        <DisplayCards />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
