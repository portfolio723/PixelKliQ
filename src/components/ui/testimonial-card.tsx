
import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
  icon: React.ReactNode
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  services?: string
  href?: string
  className?: string
}

export function TestimonialCard({
   author,
  text,
  services,
  href,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t h-full",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full border bg-background flex items-center justify-center">
            {author.icon}
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-md font-semibold leading-none">
              {author.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {author.handle}
            </p>
          </div>
        </div>
        <p className="sm:text-md mt-4 text-sm text-muted-foreground flex-grow">
          {text}
        </p>
      </div>
      {services && (
        <div className="mt-4 pt-4 border-t border-border/50">
          <p className="text-xs font-semibold text-foreground/80">Services Provided:</p>
          <p className="text-xs text-muted-foreground">{services}</p>
        </div>
      )}
    </Card>
  )
}
