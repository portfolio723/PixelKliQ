import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Sarah Jones",
      handle: "@sarahj",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      dataAiHint: "woman portrait professional"
    },
    text: "PixelKliQ transformed our online presence. Their team is creative, professional, and delivered beyond our expectations. Highly recommended!",
    href: "#"
  },
  {
    author: {
      name: "David Chen",
      handle: "@davidc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      dataAiHint: "man professional portrait"
    },
    text: "Working with PixelKliQ was a game-changer. Their web solutions are top-notch, and the project was managed flawlessly from start to finish.",
    href: "#"
  },
  {
    author: {
      name: "Maria Garcia",
      handle: "@mariag",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      dataAiHint: "woman face professional"
    },
    text: "The HR services provided by PixelKliQ helped us scale our team efficiently. They understand the tech landscape like no one else."
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
