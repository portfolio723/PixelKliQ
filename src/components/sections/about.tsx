"use client";

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Users, FolderKanban, Building2, Rocket, Eye, Workflow } from "lucide-react";
import { cn } from '@/lib/utils';

const Counter = ({ value, duration = 2000 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const increment = end / (duration / 16); 

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [value, duration, inView]);

  return <span ref={ref} className="text-4xl font-bold text-foreground">{count}+</span>;
};

const coreValues = [
    {
        title: "Our Mission",
        description: "To build a world where creativity, talent & tech create real-world impact.",
        icon: <Rocket className="w-6 h-6 text-foreground" />
    },
    {
        title: "Our Vision",
        description: "To be the most trusted end-to-end digital growth partner for businesses worldwide.",
        icon: <Eye className="w-6 h-6 text-foreground" />
    },
    {
        title: "Our Approach",
        description: "Agile | Creative | Scalable. We adapt to your needs, innovate with purpose, and build for the future.",
        icon: <Workflow className="w-6 h-6 text-foreground" />
    }
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A digital powerhouse helping startups, enterprises & institutions scale through design thinking and innovation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
                {coreValues.map((value) => (
                    <div key={value.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full">
                           {value.icon}
                        </div>
                        <div>
                            <h3 className="text-xl font-headline font-semibold">{value.title}</h3>
                            <p className="mt-1 text-muted-foreground">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
