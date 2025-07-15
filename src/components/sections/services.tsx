'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Palette, Layers, Briefcase, Phone, GraduationCap, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const services = [
  {
    title: 'PixelKLiQ Creatives',
    icon: <Palette className="w-8 h-8 text-primary" />,
    services: ['Logo Design', 'Website Dev', 'UI/UX', 'Social Media Creatives', 'SEO'],
    perfectFor: 'Startups, Brands, Agencies',
    link: 'http://creatives.pixelkliq.in',
    color: 'hsl(var(--chart-1))',
  },
  {
    title: 'PixelKLiQ Solutions',
    icon: <Layers className="w-8 h-8 text-primary" />,
    services: ['SaaS', 'ERP', 'CRM', 'API Integration', 'DevOps'],
    perfectFor: 'Tech Startups, Enterprises',
    link: 'http://solutions.pixelkliq.in',
    color: 'hsl(var(--chart-2))',
  },
  {
    title: 'PixelKLiQ HR Services',
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    services: ['Recruitment', 'Payroll', 'Virtual HR'],
    perfectFor: 'SMEs, Startups',
    link: 'http://hr.pixelkliq.in',
    color: 'hsl(var(--chart-3))',
  },
  {
    title: 'PixelKLiQ Tele Services',
    icon: <Phone className="w-8 h-8 text-primary" />,
    services: ['Call Center Setup', 'CRM', 'Support', 'Lead Gen'],
    perfectFor: 'BPOs, Real Estate, EdTech',
    link: 'http://tele.pixelkliq.in',
    color: 'hsl(var(--chart-4))',
  },
  {
    title: 'PixelKLiQ Edutech',
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    services: ['Internships', 'Courses', 'Workshops'],
    perfectFor: 'Students, Colleges',
    link: 'http://edutech.pixelkliq.in',
    color: 'hsl(var(--chart-5))',
  },
];

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
  <a
    href={service.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block"
  >
    <Card
      className={cn(
        'h-full flex flex-col transition-all duration-300 ease-in-out',
        'border-2 border-transparent',
        'group-hover:border-primary group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:-translate-y-2'
      )}
    >
      <CardHeader className="flex-row items-start gap-4">
        <div
          className="p-3 rounded-full bg-primary/10"
          style={{ '--primary-color': service.color } as React.CSSProperties}
        >
          {service.icon}
        </div>
        <div>
          <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
          <CardDescription>Perfect For: {service.perfectFor}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <div>
          <p className="font-semibold mb-2 text-foreground/90">Services offered:</p>
          <div className="flex flex-wrap gap-2">
            {service.services.map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 text-right">
            <div className="inline-flex items-center text-primary font-semibold group-hover:underline">
                Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </div>
      </CardContent>
    </Card>
  </a>
);

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We provide a wide range of digital services, segmented by specialty, to help your business grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}