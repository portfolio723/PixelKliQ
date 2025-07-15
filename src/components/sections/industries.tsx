"use client";

import { cn } from "@/lib/utils";
import { Building, HeartPulse, GraduationCap, LandPlot, Utensils, ShoppingCart, Briefcase } from "lucide-react";
import React from "react";

interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

function DisplayCard({
  className,
  icon = <Briefcase className="size-4 text-primary" />,
  title = "Tech",
  description = "Innovative tech solutions",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-border bg-muted/70 p-4 backdrop-blur-sm transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-primary/50 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-3",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <span className="relative inline-block rounded-full bg-primary/20 p-2 text-primary">
          {icon}
        </span>
        <p className="text-lg font-semibold text-foreground">{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

function DisplayCards({ cards }: DisplayCardsProps) {
  return (
    <div className="grid h-96 w-full [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 group/stack">
      {cards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}


const industryCards: DisplayCardProps[] = [
    { 
        title: "Technology", 
        description: "SaaS, ERP & App Development", 
        icon: <Briefcase className="size-5" />,
        className: "[grid-area:stack] z-10 transition-all duration-300 ease-in-out group-hover/stack:-translate-y-32"
    },
    { 
        title: "Healthcare", 
        description: "Clinic Management & Telemedicine", 
        icon: <HeartPulse className="size-5" />,
        className: "[grid-area:stack] z-20 translate-y-12 transition-all duration-300 ease-in-out group-hover/stack:-translate-y-16"
    },
    { 
        title: "Education", 
        description: "E-learning Platforms & Edutech", 
        icon: <GraduationCap className="size-5" />,
        className: "[grid-area:stack] z-30 translate-y-24 transition-all duration-300 ease-in-out group-hover/stack:translate-y-0"
    },
     { 
        title: "Real Estate", 
        description: "CRM & Property Portals", 
        icon: <LandPlot className="size-5" />,
        className: "[grid-area:stack] z-40 translate-y-36 transition-all duration-300 ease-in-out group-hover/stack:translate-y-16",
    },
    { 
        title: "F & B", 
        description: "Restaurant & Delivery Solutions", 
        icon: <Utensils className="size-5" />,
        className: "[grid-area:stack] z-50 translate-y-48 transition-all duration-300 ease-in-out group-hover/stack:translate-y-32",
    },
    { 
        title: "E-Commerce", 
        description: "Online Stores & Marketplaces", 
        icon: <ShoppingCart className="size-5" />,
        className: "[grid-area:stack] z-60 translate-y-60 transition-all duration-300 ease-in-out group-hover/stack:translate-y-48",
    },
];


export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-24">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We&apos;ve partnered with a diverse range of clients to deliver exceptional results across various sectors.
          </p>
        </div>
        <div className="flex items-center justify-center">
             <DisplayCards cards={industryCards} />
        </div>
      </div>
    </section>
  );
}
