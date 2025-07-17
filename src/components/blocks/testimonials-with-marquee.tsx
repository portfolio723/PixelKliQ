
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { TextRevealByWord } from "../ui/text-reveal"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    services?: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
   title,
  description,
  testimonials,
  className
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className={cn(
      "bg-background text-foreground",
      "py-8 sm:py-12 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center text-center">
        <div className="text-center mb-12 px-4">
            <TextRevealByWord text={title} />
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                {description}
            </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:60s]">
            <div className="flex w-max shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                    key={`testimonial-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
             <div className="flex w-max shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]" aria-hidden="true">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={`testimonial-clone-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}
