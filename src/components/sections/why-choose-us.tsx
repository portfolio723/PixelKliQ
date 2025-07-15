import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Zap, Scale, MessageSquare, Briefcase } from "lucide-react";
import Link from 'next/link';
import { Button } from "../ui/button";

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "360° Service Portfolio",
    description: "From design to deployment, we offer a complete suite of services under one roof.",
  },
  {
    icon: <Scale className="w-8 h-8 text-primary" />,
    title: "Scalable Solutions",
    description: "We build for your future, ensuring our solutions grow with your business.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Agile + Creative Team",
    description: "Our dynamic team blends agile methodologies with creative thinking for rapid, innovative results.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "In-House Experts",
    description: "Every project is handled by our dedicated team of in-house specialists.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
    title: "Real-Time Collaboration",
    description: "We work with you, keeping you in the loop at every stage of the project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Why Choose PixelKliQ
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are more than just a service provider; we are your digital growth partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <Card key={index} className="bg-card/50 text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                            {feature.icon}
                        </div>
                        <CardTitle className="pt-4">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
             <Card className="bg-primary/10 text-center flex flex-col justify-center items-center border-2 border-dashed border-primary/50">
                <CardHeader>
                    <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
                        <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="pt-4">Ready to See the Proof?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">See what our clients have to say about their experience with us.</p>
                    <Button asChild>
                        <Link href="#testimonials">View Testimonials</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
