
'use client';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { Features4 } from '../blocks/features-4';


export default function WhyUs() {
    return (
        <section id="why-us" className="py-8 md:py-16">
            <div className="container mx-auto max-w-5xl space-y-16 px-6">
                <div className="text-center mb-12">
                    <TextRevealByWord text="Why Choose PixelKliQ" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We are more than just a service provider; we are your digital growth partner.</p>
                </div>
                <div className="flex items-center justify-center w-full">
                   <Features4 />
                </div>
            </div>
        </section>
    )
}
