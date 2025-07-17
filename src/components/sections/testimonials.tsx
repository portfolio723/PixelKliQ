import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"
import { Building, Leaf, Gem } from "lucide-react";

const testimonials = [
  {
    author: {
      name: "Ramesh",
      handle: "Director, Pago Analytics",
      icon: <Building className="h-6 w-6 text-foreground" />,
    },
    text: "PixelKliQ elevated our entire brand experience. From intuitive design to strategic marketing, their team truly understands startups like ours. Their commitment and timely execution stood out throughout.",
    services: "Branding and Marketing"
  },
  {
    author: {
      name: "Pragathi",
      handle: "Co-founder, The Jaava Pot",
      icon: <Leaf className="h-6 w-6 text-foreground" />,
    },
    text: "Starting a café was our dream, and PixelKliQ gave it life online. The logo, vibe, and user-friendly design captured our essence perfectly. Their team made everything seamless—even for non-tech founders like us.",
    services: "Logo Design, Branding, Web Design"
  },
  {
    author: {
      name: "Sudheer",
      handle: "Founder, Bharatha Bliss",
      icon: <Gem className="h-6 w-6 text-foreground" />,
    },
    text: "We needed a brand that honors Indian tradition while appealing to a modern audience. PixelKliQ helped us strike that balance beautifully. They delivered branding and website designs that truly reflect our purpose.",
    services: "Branding, Content, eCommerce Website"
  }
];

export default function Testimonials() {
  return (
    <TestimonialsSection
      title="What Our Clients Say"
      description="We are proud to have earned the trust of our amazing clients."
      testimonials={testimonials}
    />
  )
}
