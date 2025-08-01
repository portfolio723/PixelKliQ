
"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, ArrowRight } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Glow } from "@/components/ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: React.ReactNode;
  description: string;
  actions: HeroAction[];
  image: {
    light: string;
    dark: string;
    alt: string;
  };
}

export function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const imageSrc = resolvedTheme === "light" ? image.light : image.dark;

  return (
    <section
      className={cn(
        "bg-background text-foreground",
        "relative overflow-hidden py-8 sm:py-12 md:py-16 px-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 sm:gap-16 pt-8">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            {title}
          </h1>

          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              {actions.map((action, index) => (
                <Button key={index} variant={action.variant} size="lg" asChild>
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <div className="relative w-full h-24">
             <Glow
              variant="center"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
