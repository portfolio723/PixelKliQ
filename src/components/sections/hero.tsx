
import { HeroSection } from "@/components/blocks/hero-section";
import { Icons } from "@/components/ui/icons";
import { ArrowRight, Book, Bot } from "lucide-react";


export default function Hero() {
  return (
    <HeroSection
      title={
        <>
          Transforming Ideas into <br />
          Impactful Digital Experiences
        </>
      }
      description="End-to-end solutions for design, development, HR, telecommunication, and education."
      actions={[
        {
          text: "Explore Services",
          href: "#services",
          variant: "default",
          icon: <ArrowRight className="h-5 w-5" />,
        },
        {
          text: "Book a Consultation",
          href: "#contact",
          variant: "secondary",
        },
      ]}
      image={{
        light: "https://placehold.co/1248x765.png",
        dark: "https://placehold.co/1248x765.png",
        alt: "PixelKliQ Digital Solutions",
      }}
    />
  );
}
