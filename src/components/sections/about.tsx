'use client';
import { Briefcase, MessageSquare, Scale, Users, Zap, CheckCircle } from 'lucide-react'
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { motion } from 'framer-motion';

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


export default function About() {

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: { 
          opacity: 1, 
          scale: 1, 
          rotate: 0,
          transition: { duration: 0.4, ease: "easeOut" }
        },
      };

    return (
        <section id="about" className="py-16 md:py-20">
            <div className="container mx-auto max-w-5xl space-y-16 px-6">
                <div className="text-center mb-12">
                    <TextRevealByWord text="Why Choose PixelKliQ" />
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">We are more than just a service provider; we are your digital growth partner.</p>
                </div>
                 <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                         <div key={feature.title} className="space-y-3">
                            <div className="flex items-center gap-2 text-foreground">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={iconVariants}
                                >
                                    {feature.icon}
                                </motion.div>
                                <h3 className="text-sm font-medium">{feature.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    )
}
