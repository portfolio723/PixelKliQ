
"use client";

import { FC, ReactNode, useRef, useEffect, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const words = text.split(" ");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
       <div ref={targetRef} className={cn("relative z-0", className)}>
         <p
          className={
            "flex flex-wrap justify-center p-5 text-3xl font-bold text-black/20 dark:text-white/20 sm:p-8 sm:text-4xl"
          }
        >
        {words.map((word, i) => (
          <span key={i} className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-10"}>{word}</span>
            <span className={"text-transparent"}>{word}</span>
          </span>
        ))}
        </p>
      </div>
    );
  }

  return (
    <div ref={targetRef} className={cn("relative z-0", className)}>
      <p
        className={
          "flex flex-wrap justify-center p-5 text-3xl font-bold text-black/20 dark:text-white/20 sm:p-8 sm:text-4xl"
        }
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-10"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
