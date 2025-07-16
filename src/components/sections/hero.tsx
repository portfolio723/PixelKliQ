
'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Squares } from '@/components/ui/squares-background'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function Hero() {
    return (
        <main className="overflow-hidden" id="home">
            <section>
                <div className="relative h-[600px] md:h-[700px]">
                    <div className="absolute inset-0 h-full w-full">
                        <Squares 
                            direction="diagonal"
                            speed={0.5}
                            squareSize={30}
                            borderColor="rgba(255, 255, 255, 0.5)" 
                            hoverFillColor="hsl(var(--accent))"
                            className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                        />
                    </div>
                    <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,hsl(var(--background))_75%)]" />
                    
                    <div className="absolute inset-0 flex items-center justify-center pt-24 md:pt-20">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance font-semibold text-4xl md:text-6xl lg:mt-16">
                                        Transforming Ideas into Impactful Digital Experiences
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                                        End-to-end solutions for design, development, HR, telecommunication, and education.
                                    </p>
                                </AnimatedGroup>
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="rounded-[14px] p-0.5 transition-all duration-300 bg-transparent hover:bg-foreground/10">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base border border-border hover:bg-transparent transition-all duration-300">
                                            <Link href="#services">
                                                <span className="text-nowrap">Explore Services</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-10.5 rounded-xl px-5 bg-transparent border-white/50 hover:bg-white/10 hover:text-white">
                                        <Link href="#contact">
                                            <span className="text-nowrap">Book a Free Consultation</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
