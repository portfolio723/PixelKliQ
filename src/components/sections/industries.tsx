"use client";

import { CheckCircle2, Server, GraduationCap, HeartPulse, Building, ShoppingCart, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Startups & Entrepreneurs",
    icon: <GraduationCap className="size-4 text-foreground" />,
  },
  {
    title: "Education & EdTech",
    icon: <GraduationCap className="size-4 text-foreground" />,
  },
  {
    title: "Healthcare & Wellness",
    icon: <HeartPulse className="size-4 text-foreground" />,
  },
  {
    title: "Real Estate & Construction",
    icon: <Building className="size-4 text-foreground" />,
  },
  {
    title: "eCommerce & Retail",
    icon: <ShoppingCart className="size-4 text-foreground" />,
  },
  {
    title: "SaaS & Technology Companies",
    icon: <Cpu className="size-4 text-foreground" />,
  },
];

const leftColumnIndustries = industries.slice(0, 3);
const rightColumnIndustries = industries.slice(3, 6);

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Industries() {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
            Industries We Empower
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We've partnered with a diverse range of clients to deliver exceptional results across various sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-4xl mx-auto">
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {leftColumnIndustries.map((industry, i) => (
              <motion.div key={industry.title} className="flex items-start gap-3" custom={i} variants={listVariants}>
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{industry.title}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { transition: { staggerChildren: 0.2, delay: 0.3 } }
            }}
          >
            {rightColumnIndustries.map((industry, i) => (
              <motion.div key={industry.title} className="flex items-start gap-3" custom={i} variants={listVariants}>
                <CheckCircle2 className="w-6 h-6 text-foreground flex-shrink-0 mt-1" />
                <span className="text-lg text-foreground">{industry.title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
