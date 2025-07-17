
'use client';
import { cn } from "@/lib/utils";
import {
  IconPalette,
  IconServerCog,
  IconSchool,
  IconUsers,
  IconPhone,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { TextRevealByWord } from "../ui/text-reveal";
import { motion } from "framer-motion";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "PixelKLiQ Creatives",
      description:
        "Logo Design, Website Dev, UI/UX, Social Media Creatives, SEO.",
      icon: <IconPalette />,
      link: "#",
    },
    {
      title: "PixelKLiQ Solutions",
      description:
        "SaaS, ERP, CRM, API Integration, DevOps.",
      icon: <IconServerCog />,
      link: "#",
    },
    {
      title: "PixelKLiQ Edutech",
      description:"Internships, Courses, Workshops.",
      icon: <IconSchool />,
      link: "#",
    },
    {
      title: "PixelKLiQ HR Services",
      description: "Recruitment, Payroll, Virtual HR.",
      icon: <IconUsers />,
      link: "#",
    },
    {
      title: "PixelKLiQ Tele Services",
      description: "Call Center Setup, CRM, Support, Lead Gen.",
      icon: <IconPhone />,
      link: "#",
    },
  ];
  return (
    <section id="services" className="relative py-8 sm:py-12 overflow-hidden">
       <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <TextRevealByWord text="Our Services" />
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We offer a wide range of services to help you build and scale your business.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
        ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  link,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  link: string;
}) => {
  
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        "border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <motion.div 
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={iconVariants}
      >
        {icon}
      </motion.div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
      <div className="relative z-10 mt-4 px-10 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-300">
        <Button variant="secondary" asChild>
          <a href={link}>Learn More</a>
        </Button>
      </div>
    </div>
  );
};
