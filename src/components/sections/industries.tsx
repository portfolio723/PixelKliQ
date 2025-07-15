import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const industries = [
  { name: "TechCorp", logo: "https://placehold.co/150x60.png", dataAiHint: "tech company logo" },
  { name: "HealthWell", logo: "https://placehold.co/150x60.png", dataAiHint: "healthcare company logo" },
  { name: "FinancePro", logo: "https://placehold.co/150x60.png", dataAiHint: "finance company logo" },
  { name: "EduGreat", logo: "https://placehold.co/150x60.png", dataAiHint: "education company logo" },
  { name: "RetailRift", logo: "https://placehold.co/150x60.png", dataAiHint: "retail company logo" },
  { name: "EstateEase", logo: "https://placehold.co/150x60.png", dataAiHint: "real estate logo" },
  { name: "FoodieFiesta", logo: "https://placehold.co/150x60.png", dataAiHint: "food industry logo" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;ve partnered with a diverse range of clients to deliver exceptional results.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {industries.map((industry, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={industry.logo}
                        alt={`${industry.name} logo`}
                        width={150}
                        height={60}
                        data-ai-hint={industry.dataAiHint}
                        className="filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
