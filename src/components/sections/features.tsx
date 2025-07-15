import { Briefcase, MessageSquare, Scale, Users, Zap } from 'lucide-react'

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
];


export default function Features() {
    return (
        <section id="why-choose-us" className="py-16 md:py-20">
            <div className="container mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-headline font-bold lg:text-5xl">Why Choose PixelKliQ</h2>
                    <p className="text-muted-foreground">We are more than just a service provider; we are your digital growth partner.</p>
                </div>
                 <div className="relative mx-auto grid max-w-2xl lg:max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                         <div key={feature.title} className="space-y-3">
                            <div className="flex items-center gap-2 text-foreground">
                                {feature.icon}
                                <h3 className="text-sm font-medium">{feature.title}</h3>
                            </div>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                     <div className="space-y-2">
                         <div className="flex items-center gap-2 text-foreground">
                             <Zap className="size-4" />
                              <h3 className="text-sm font-medium">Ready to See the Proof?</h3>
                         </div>
                         <p className="text-sm text-muted-foreground">See what our clients have to say about their experience with us. <a href="#testimonials" className="text-primary hover:underline">View Testimonials</a></p>
                     </div>
                 </div>
            </div>
        </section>
    )
}
