import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Ramesh",
      handle: "Director, Pago Analytics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      dataAiHint: "man professional portrait"
    },
    text: "PixelKliQ elevated our entire brand experience. From intuitive design to strategic marketing, their team truly understands startups like ours. Their commitment and timely execution stood out throughout.",
    services: "Branding and Marketing"
  },
  {
    author: {
      name: "Pragathi",
      handle: "Co-founder, The Jaava Pot",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      dataAiHint: "woman portrait professional"
    },
    text: "Starting a café was our dream, and PixelKliQ gave it life online. The logo, vibe, and user-friendly design captured our essence perfectly. Their team made everything seamless—even for non-tech founders like us.",
    services: "Logo Design, Branding, Web Design"
  },
  {
    author: {
      name: "Sudheer",
      handle: "Founder, Bharatha Bliss",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      dataAiHint: "man face professional"
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
