
'use client';
import { Briefcase, MessageSquare, Scale, Users, Zap, CheckCircle } from 'lucide-react'
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { motion } from 'framer-motion';
import { CardStack } from '../ui/card-stack';

const features = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    title: "360° Service Portfolio",
    description: "From design to deployment, we offer a complete suite of services under one roof.",
  },
  {
    icon: <Scale className="w-4 h-4" />,
    title: "Scalable Solutions",
    description: "We build for your future, ensuring our solutions grow with your business.",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Agile + Creative Team",
    description: "Our dynamic team blends agile methodologies with creative thinking for rapid, innovative results.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "In-House Experts",
    description: "Every project is handled by our dedicated team of in-house specialists.",
  },
  {
    icon: <MessageSquare className="w-4 h-4" />,
    title: "Real-Time Collaboration",
    description: "We work with you, keeping you in the loop at every stage of the project.",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Proven Results",
    description: "Our track record speaks for itself. Check out what our clients have to say.",
  },
];

const cardStackItems = [
    {
        id: 0,
        name: "360° Service Portfolio",
        designation: "One-Stop Solution",
        content: <p>From design to deployment, we offer a complete suite of services under one roof, ensuring seamless integration and consistent quality across your entire project.</p>
    },
    {
        id: 1,
        name: "Scalable Solutions",
        designation: "Future-Proof Growth",
        content: <p>We build for your future, ensuring our solutions are robust, flexible, and ready to grow with your business, adapting to new challenges and opportunities.</p>
    },
    {
        id: 2,
        name: "Agile + Creative Team",
        designation: "Innovative & Fast",
        content: <p>Our dynamic team blends agile methodologies with creative thinking for rapid, innovative results that keep you ahead of the curve.</p>
    }
]


export default function WhyUs() {
    return (
        <section id="why-us" className="py-8 md:py-16">
            <div className="container mx-auto max-w-5xl space-y-16 px-6">
                <div className="text-center mb-12">
                    <TextRevealByWord text="Why Choose PixelKliQ" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We are more than just a service provider; we are your digital growth partner.</p>
                </div>
                <div className="flex items-center justify-center w-full">
                    <CardStack items={cardStackItems} />
                </div>
            </div>
        </section>
    )
}
