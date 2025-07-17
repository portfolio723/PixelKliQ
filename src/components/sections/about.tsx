
'use client';

import { TextRevealByWord } from "../ui/text-reveal";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-pattern";
import { Features } from "../blocks/features-1";

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <div className="max-w-3xl mx-auto">
                        <TextRevealByWord text="Who We Are" />
                        <p className="mt-4 text-lg text-muted-foreground">
                            Empowering businesses with creative thinking, scalable tech, and strategic execution.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <GridPatternCard>
                        <GridPatternCardBody>
                            <h3 className="font-medium mb-1 text-foreground">
                                Our Mission
                            </h3>
                            <p className="text-wrap text-sm text-foreground/60">
                                To build a world where creativity, talent, and technology combine to create real-world impact.
                            </p>
                        </GridPatternCardBody>
                    </GridPatternCard>
                    <GridPatternCard>
                        <GridPatternCardBody>
                            <h3 className="font-medium mb-1 text-foreground">
                                Our Vision
                            </h3>
                            <p className="text-wrap text-sm text-foreground/60">
                                To be the most trusted partner for end-to-end digital growth in the modern era.
                            </p>
                        </GridPatternCardBody>
                    </GridPatternCard>
                </div>
                <div className="mt-8 max-w-4xl mx-auto">
                    <GridPatternCard>
                        <GridPatternCardBody>
                            <h3 className="font-medium mb-1 text-foreground">
                                About Team
                            </h3>
                            <p className="text-wrap text-sm text-foreground/60">
                                At PixelKliQ, our team is more than a group of experts—we're a digital powerhouse united by curiosity, creativity, and a shared drive to solve problems through design and technology. Each member brings a unique blend of experience across UI/UX, branding, development, content, and innovation strategy—collaborating to build experiences that matter.
                            </p>
                        </GridPatternCardBody>
                    </GridPatternCard>
                </div>
                <Features />
            </div>
        </section>
    );
};

export default About;
