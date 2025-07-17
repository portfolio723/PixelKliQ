
'use client';

import DisplayCards from "@/components/ui/display-cards";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { ClipboardList, Code, Rocket } from "lucide-react";

const processCards = [
    {
      icon: <ClipboardList className="size-4 text-cyan-300" />,
      title: "Discover & Define",
      description: "We start by understanding your vision.",
      date: "Phase 1",
      iconClassName: "bg-cyan-800",
      titleClassName: "text-cyan-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Code className="size-4 text-purple-300" />,
      title: "Design & Develop",
      description: "Crafting solutions with precision.",
      date: "Phase 2",
      iconClassName: "bg-purple-800",
      titleClassName: "text-purple-500",
      className:
        "[grid-area:stack] translate-x-4 translate-y-10 md:translate-x-12 md:translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Rocket className="size-4 text-pink-300" />,
      title: "Deploy & Iterate",
      description: "Launching and refining for success.",
      date: "Phase 3",
      iconClassName: "bg-pink-800",
      titleClassName: "text-pink-500",
      className:
        "[grid-area:stack] translate-x-8 translate-y-20 md:translate-x-24 md:translate-y-20 hover:translate-y-10",
    },
];

export default function Process() {
    return (
        <section id="process" className="pt-8 sm:pt-12 pb-24 sm:pb-24">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <TextRevealByWord text="Our Process" />
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-2">
                        Simple, Strategic, Seamless
                    </p>
                </div>
                <div className="flex w-full items-center justify-center pt-8">
                    <div className="w-full max-w-3xl">
                        <DisplayCards cards={processCards} />
                    </div>
                </div>
            </div>
        </section>
    );
}
