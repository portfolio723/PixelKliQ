'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Paintbrush, GanttChartSquare, Briefcase, Phone, GraduationCap } from 'lucide-react';

const subBrands = [
  {
    id: 'creatives',
    name: 'PixelKliQ Creatives',
    icon: <Paintbrush className="h-5 w-5 mr-2" />,
    services: ['Logo Design', 'Website Dev', 'UI/UX', 'Social Media Creatives', 'SEO'],
    perfectFor: 'Startups, Brands, Agencies',
    link: 'https://creatives.pixelkliq.in',
  },
  {
    id: 'solutions',
    name: 'PixelKliQ Solutions',
    icon: <GanttChartSquare className="h-5 w-5 mr-2" />,
    services: ['SaaS', 'ERP', 'CRM', 'API Integration', 'DevOps'],
    perfectFor: 'Tech Startups, Enterprises',
    link: 'https://solutions.pixelkliq.in',
  },
  {
    id: 'hr-services',
    name: 'PixelKliQ HR Services',
    icon: <Briefcase className="h-5 w-5 mr-2" />,
    services: ['Recruitment', 'Payroll', 'Virtual HR'],
    perfectFor: 'SMEs, Startups',
    link: 'https://hr.pixelkliq.in',
  },
  {
    id: 'tele-services',
    name: 'PixelKliQ Tele Services',
    icon: <Phone className="h-5 w-5 mr-2" />,
    services: ['Call Center Setup', 'CRM', 'Support', 'Lead Gen'],
    perfectFor: 'BPOs, Real Estate, EdTech',
    link: 'https://tele.pixelkliq.in',
  },
  {
    id: 'edutech',
    name: 'PixelKliQ Edutech',
    icon: <GraduationCap className="h-5 w-5 mr-2" />,
    services: ['Internships', 'Courses', 'Workshops'],
    perfectFor: 'Students, Colleges',
    link: 'https://edutech.pixelkliq.in',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our specialized digital solutions, segmented by our sub-brands to perfectly match your needs.
          </p>
        </div>

        <Tabs defaultValue="creatives" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 h-auto">
            {subBrands.map((brand) => (
              <TabsTrigger key={brand.id} value={brand.id} className="flex-1 flex items-center justify-center text-center py-2">
                 {brand.icon} {brand.name.replace('PixelKliQ ', '')}
              </TabsTrigger>
            ))}
          </TabsList>

          {subBrands.map((brand) => (
            <TabsContent key={brand.id} value={brand.id} className="mt-6">
              <Card className="border-border/50 bg-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">{brand.icon} {brand.name}</CardTitle>
                  <CardDescription>Perfect For: {brand.perfectFor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">What we offer:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                      {brand.services.map((service) => (
                        <li key={service} className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-3 text-primary" />
                          <span className="text-muted-foreground">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild>
                    <a href={brand.link} target="_blank" rel="noopener noreferrer">
                      Visit {brand.name.replace('PixelKliQ ', '')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
