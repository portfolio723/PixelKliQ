import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "PixelKliQ transformed our online presence. Their team is creative, professional, and delivered beyond our expectations. Highly recommended!",
    name: "Sarah Jones",
    title: "CEO, TechCorp",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman portrait professional",
    initials: "SJ",
  },
  {
    quote: "Working with PixelKliQ was a game-changer. Their web solutions are top-notch, and the project was managed flawlessly from start to finish.",
    name: "David Chen",
    title: "Founder, HealthWell",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "man professional portrait",
    initials: "DC",
  },
  {
    quote: "The HR services provided by PixelKliQ helped us scale our team efficiently. They understand the tech landscape like no one else.",
    name: "Maria Garcia",
    title: "COO, FinancePro",
    avatarUrl: "https://placehold.co/100x100.png",
    dataAiHint: "woman face professional",
    initials: "MG",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are proud to have earned the trust of our amazing clients.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card/50 border-2 border-primary/20">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <p className="text-lg italic mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="flex items-center">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.dataAiHint} />
                          <AvatarFallback>{testimonial.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
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
