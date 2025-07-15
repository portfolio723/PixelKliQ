'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Settings2, Sparkles, Zap, ShieldCheck, LifeBuoy } from 'lucide-react';
import { ReactNode } from 'react';

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-headline font-semibold lg:text-5xl">Our Services</h2>
          <p className="mt-4 text-muted-foreground">We provide a wide range of digital services to help your business grow.</p>
        </div>
        <div className="mx-auto mt-8 grid max-w-sm justify-center gap-6 *:text-center @[480px]:grid-cols-2 @[768px]:max-w-full @[768px]:grid-cols-3 md:mt-16">
          <Card className="group border-0 bg-muted shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Zap className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Customizable</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Extensive customization options, allowing you to tailor every
                aspect to meet your specific needs.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-muted shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Settings2 className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">You have full control</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                From design elements to functionality, you have complete control
                to create a unique and personalized experience.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-muted shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <Sparkles className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Powered By AI</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Elements to functionality, you have complete control to create a
                unique experience.
              </p>
            </CardContent>
          </Card>
          
          <Card className="group border-0 bg-muted shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <ShieldCheck className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">Secure & Reliable</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                We build robust solutions with security as a top priority, ensuring your data and users are safe.
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-muted shadow-none">
            <CardHeader className="pb-3">
              <CardDecorator>
                <LifeBuoy className="size-6" aria-hidden />
              </CardDecorator>

              <h3 className="mt-6 font-medium">24/7 Support</h3>
            </CardHeader>

            <CardContent>
              <p className="text-sm">
                Our dedicated support team is available around the clock to assist you with any issues.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div
    aria-hidden
    className="relative mx-auto size-36 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
  >
    <div className="absolute inset-0 [--border:black] dark:[--border:white] bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-10" />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center rounded-lg border">
      {children}
    </div>
  </div>
);