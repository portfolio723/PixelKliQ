import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative h-[calc(100dvh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')", filter: 'brightness(0.3)' }}
          data-ai-hint="abstract digital technology"
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-4 text-shadow-lg">
          Transforming Ideas into Impactful Digital Experiences
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
          End-to-end solutions for design, development, HR, telecommunication, and education.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className={cn(
            "font-bold text-base uppercase tracking-wider",
            "transition-all duration-300 ease-in-out",
            "shadow-[0_0_15px_rgba(var(--primary-rgb),0.4)]",
            "hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.8)] hover:scale-105"
          )}>
            <a href="#services">
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary" className={cn(
            "font-bold text-base uppercase tracking-wider",
            "transition-all duration-300 ease-in-out",
            "hover:bg-secondary/90 hover:scale-105"
          )}>
            <a href="#contact">Book a Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

    