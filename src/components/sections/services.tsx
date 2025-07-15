import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code2, UsersRound, PhoneCall, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Palette,
    title: "Creatives",
    description: "Stunning brand identities, UI/UX design, and visual content that captivates and converts."
  },
  {
    icon: Code2,
    title: "Solutions",
    description: "Custom web and mobile application development with cutting-edge technologies for robust performance."
  },
  {
    icon: UsersRound,
    title: "HR Services",
    description: "Streamlined HR solutions, from talent acquisition to management, tailored to the tech industry."
  },
  {
    icon: PhoneCall,
    title: "Tele-calling",
    description: "Professional tele-calling services for lead generation, customer support, and market research."
  },
  {
    icon: GraduationCap,
    title: "EduTech",
    description: "Innovative internship programs and educational platforms to nurture the next generation of tech talent."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a wide range of digital services to help your business grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <Card key={service.title} className="text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 lg:mx-auto">
            {services.slice(3).map((service) => (
            <Card key={service.title} className="text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
