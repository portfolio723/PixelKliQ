
'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Mail, Phone, Youtube, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterLink {
	title: string;
	href?: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigate',
		links: [
			{ title: 'Home', href: '#home' },
			{ title: 'About', href: '#about' },
			{ title: 'Services', href: '#services' },
			{ title: 'Testimonials', href: '#testimonials' },
			{ title: 'FAQ', href: '#faq' },
		],
	},
    {
        label: 'Social',
        links: [
            { title: 'LinkedIn', href: 'https://www.linkedin.com/company/pixelkliq/', icon: Linkedin },
            { title: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577039267314', icon: Facebook },
            { title: 'Instagram', href: 'https://www.instagram.com/pixelkliq?igsh=MWhzZmkxaHB5NzhmeA==', icon: Instagram },
            { title: 'Youtube', href: 'https://www.youtube.com/@PixelKliQ', icon: Youtube },
        ]
    },
	{
		label: 'Legal',
		links: [
			{ title: 'Privacy policy' },
			{ title: 'Terms of use' },
			{ title: 'Refund policy' },
			{ title: 'Compliance' },
		],
	},
];

const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*jna_8wb5YV4qpHjN2WHTOA.png"
            alt="PixelKliQ Logo"
            width={120}
            height={28}
            className={cn('h-7 w-auto', className)}
        />
    )
}

export default function Footer() {
	return (
		<footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center gap-2">
                        <Logo className="w-auto"/>
                    </div>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <a href="mailto:careers@pixelkliq.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                            <Mail className="size-4" />
                            <span>Careers@pixelkliq.com</span>
                        </a>
                        <a href="mailto:info@pixelkliq.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                            <Mail className="size-4" />
                            <span>info@pixelkliq.com</span>
                        </a>
                        <a href="tel:+919032847675" className="flex items-center gap-2 hover:text-foreground transition-colors">
                            <Phone className="size-4" />
                            <span>+91 90328 47675</span>
                        </a>
                    </div>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0 pt-4">
						© {new Date().getFullYear()} PixelKliQ. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs uppercase tracking-wider font-semibold">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
                                            {link.href ? (
                                                <a
                                                    href={link.href}
                                                    className="hover:text-foreground inline-flex items-center transition-all duration-300"
                                                >
                                                    {link.icon && <link.icon className="me-2 size-4" />}
                                                    {link.title}
                                                </a>
                                            ) : (
                                                <span className="inline-flex items-center">
                                                    {link.icon && <link.icon className="me-2 size-4" />}
                                                    {link.title}
                                                </span>
                                            )}
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
            <div className="w-full text-center mt-12">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5">
                    Dev by PixelKliQ Creatives
                </p>
            </div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
