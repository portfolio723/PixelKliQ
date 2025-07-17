'use client';
import { TextRevealByWord } from '@/components/ui/text-reveal';
import { IconHover3D } from '@/components/ui/icon-3d-hover';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="container mx-auto max-w-5xl space-y-12 px-6">
        <div className="text-center">
          <TextRevealByWord text="Who We Are" />
          <p className="text-muted-foreground mt-4 text-lg max-w-3xl mx-auto">
            Empowering businesses with creative thinking, scalable tech, and strategic execution.
          </p>
        </div>
        <div className="text-center max-w-4xl mx-auto">
            <p className="text-md md:text-lg text-foreground/80">
                PixelKLiQ is a multidisciplinary digital partner built to scale ideas into powerful outcomes. Based in India, we work with startups, enterprises, and institutions across the globe to design, develop, and deliver meaningful solutions that drive business transformation.
            </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto justify-items-center">
        <pre className="text-xs text-left whitespace-pre-wrap">
{`You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
\`\`\`tsx
icon-3d-hover.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, MotionConfigContext, LayoutGroup } from 'framer-motion';

// Types
interface Props {
  heading?: string;
  text?: string;
  variant?: 'Default' | 'Hover';
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

// Transitions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.4,
  type: "spring" as const
};

const transition2 = {
  delay: 0,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1] as [number, number, number, number],
  type: "tween" as const
};

const transformTemplate1 = (_: any, t: string) => \`translate(-50%, -50%) \${t}\`;

// Transition wrapper component
const Transition: React.FC<{ value: any; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};


const Variants = motion.create(React.Fragment);

export const IconHover3D: React.FC<Props> = ({
  heading = "Library",
  text = "A comprehensive collection of digital books and resources for learning and research. ",
  variant = 'Default',
  className = "",
  style = {},
  width = 600, // Increased from 369
  height = 150, // Increased from 71
  ...restProps
}) => {  const [currentVariant, setCurrentVariant] = useState<'Default' | 'Hover'>(variant);
  const [gestureState, setGestureState] = useState({ isHovered: false });
  const refBinding = useRef<HTMLDivElement>(null);
  const defaultLayoutId = React.useId();

  const isHoverVariant = currentVariant === 'Hover';
  const variants = [currentVariant === 'Default' ? 'GPnJri30y' : 'zEwHlJ7zp'];

  const handleMouseEnter = async () => {
    setGestureState({ isHovered: true });
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = async () => {
    setGestureState({ isHovered: false });
    setCurrentVariant('Default');
  };

  const cubeSliceVariants = {
    zEwHlJ7zp: {
      "--border-color": "rgb(139, 47, 250)"
    }
  };
  const titleVariants = {
    default: {
      "--fill-width": "0%"
    },
    hovered: {
      "--fill-width": "100%"
    }
  };

  // Add this new transition for the title
  const titleTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing curve
    type: "tween" as const
  };


  const sliceCubeVariants = {
    zEwHlJ7zp: {
      rotateX: -28,
      rotateY: -43,
      scale: 1.1
    }
  };

  const cornerScaleVariants = {
    zEwHlJ7zp: {
      scale: 2.2
    }
  };

  const bgFillVariants = {
    zEwHlJ7zp: {
      opacity: 1
    }
  };



  return (
    <div style={{ width, height }}>
      <LayoutGroup id={defaultLayoutId}>
        <Variants animate={variants} initial={false}>
          <Transition value={transition1}>
            <motion.div
              {...restProps}
              className={\`icon-hover-3d \${className}\`}
              data-framer-name="Default"
              data-highlight={true}
              ref={refBinding}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={currentVariant === 'Hover' ? handleMouseLeave : undefined}              style={{
                backgroundColor: "var(--background)",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: "40px", // Increased gap
                height: "min-content",
                justifyContent: "center",
                overflow: "visible",
                padding: "20px", // Added padding
                position: "relative",
                width: "min-content",
                borderRadius: "12px", // Added border radius
                border: "1px solid color-mix(in srgb, var(--foreground) 10%, transparent)",
                ...style
              }}
            >
              {/* Icon Container */}
              <motion.div
                className="icon-container"
                data-framer-name="Icon"
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flex: "none",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: "10px",
                  height: "100px", // Increased from 64px
                  justifyContent: "center",
                  overflow: "visible",
                  padding: "0px",
                  position: "relative",
                  width: "100px", // Increased from 64px                  zIndex: 1,
                  border: "1px solid color-mix(in srgb, var(--foreground) 20%, transparent)"
                }}
              >
                {/* BG Container */}
                <motion.div
                  className="bg-container"
                  data-framer-name="BG"
                  style={{
                    flex: "none",
                    height: "348px",
                    overflow: "visible",
                    position: "relative",
                    width: "348px",
                    zIndex: 2,
                    scale: 0.3 // Increased from 0.2
                  }}
                >
                  {/* Slice Cube */}
                  <motion.div
                    className="slice-cube"
                    data-framer-name="Slice Cube"
                    style={{
                      alignContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flex: "none",
                      flexDirection: "column",
                      flexWrap: "nowrap",
                      gap: "28px",
                      height: "min-content",
                      justifyContent: "center",
                      left: "50%",
                      overflow: "visible",
                      padding: "0px",
                      position: "absolute",
                      top: "50%",
                      transformStyle: "preserve-3d",
                      width: "min-content",
                      zIndex: 3,
                      rotate: 49,
                      rotateX: 23,
                      rotateY: 33,
                      scale: 0.7,
                      transformPerspective: 1200
                    }}
                    transformTemplate={transformTemplate1}
                    variants={sliceCubeVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  >
                    {/* Slice 1 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-1"
                        data-framer-name="Slice 1"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px", border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 2 - Similar structure */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-2"
                        data-framer-name="Slice 2"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px", border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 3 - Similar structure */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-3"
                        data-framer-name="Slice 3"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px", border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>
                  </motion.div>
                  {/* Corner elements */}
                  <motion.div
                  style={{
                    flex: "none",
                    height: "24px",
                    left: isHoverVariant ? "-6px" : "14px",
                    overflow: "hidden",
                    position: "absolute",
                    top: isHoverVariant ? "-6px" : "14px",
                    width: "24px",
                    zIndex: 2,
                    borderLeft: "4px solid var(--foreground)",
                    borderTop: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                  style={{
                    flex: "none",
                    height: "24px",
                    left: isHoverVariant ? "-6px" : "14px",
                    overflow: "hidden",
                    position: "absolute",
                    top: isHoverVariant ? "330px" : "310px",
                    width: "24px",
                    zIndex: 2,
                    borderLeft: "4px solid var(--foreground)",
                    borderBottom: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                  style={{
                    bottom: isHoverVariant ? "-6px" : "14px",
                    flex: "none",
                    height: "24px",
                    overflow: "hidden",
                    position: "absolute",
                    right: isHoverVariant ? "-6px" : "14px",
                    width: "24px",
                    zIndex: 2,
                    borderRight: "4px solid var(--foreground)",
                    borderBottom: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                  style={{
                    flex: "none",
                    height: "24px",
                    overflow: "hidden",
                    position: "absolute",
                    right: isHoverVariant ? "-6px" : "14px",
                    top: isHoverVariant ? "-6px" : "14px",
                    width: "24px",
                    zIndex: 2,
                    borderRight: "4px solid var(--foreground)",
                    borderTop: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="content"
                data-framer-name="Content"
                style={{
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                  flex: "none",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "12px", // Increased gap
                  height: "min-content",
                  justifyContent: "center",
                  maxWidth: "400px", // Increased max width
                  overflow: "hidden",
                  padding: "0px",
                  position: "relative",
                  width: "min-content"
                }}
              >
                {/* Text Container */}
                <motion.div
                  className="text-container"
                  data-framer-name="Text"
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flex: "none",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "10px",
                    height: "32px", // Increased height
                    justifyContent: "center",
                    overflow: "visible",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  {/* BG Fill - Hidden for clean black/white effect */}
                  <motion.div
                    className="bg-fill"
                    data-framer-name="BG Fill"
                    style={{
                      flex: "none",
                      height: "32px", // Increased height
                      left: "0px",
                      overflow: "hidden",
                      position: "absolute",
                      top: "calc(50% - 16px)", // Adjusted for new height
                      width: "1px", // Keep minimal
                      zIndex: 0,
                      backgroundColor: "transparent", // Made transparent
                      opacity: 0 // Always hidden
                    }}
                  />                  {/* Heading Text with hover effect */}
                  <motion.div
                    style={{
                      flex: "none",
                      height: "32px", // Increased height
                      position: "relative",
                      whiteSpace: "pre",
                      width: "auto",
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontWeight: "600",
                      fontSize: "18px", // Increased font size
                      color: "var(--foreground)",
                      userSelect: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden"
                    }}
                  >
                    {/* Background text (white) */}
                    <span className='mx-1 text-center' style={{ position: "relative", zIndex: 1 }}>
                      {heading}
                    </span>                    {/* Animated overlay text (black) */}
                    <motion.span
                    className='mx-1 mt-0.5 text-center'
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        color: "var(--background)",
                        clipPath: \`inset(0 \${isHoverVariant ? '0%' : '100%'} 0 0)\`,
                        zIndex: 2
                      }}
                      animate={{
                        clipPath: \`inset(0 \${isHoverVariant ? '0%' : '100%'} 0 0)\`
                      }}
                      transition={titleTransition}
                    >
                      {heading}
                    </motion.span>

                    {/* White background fill that moves from left to right */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--foreground)",
                        transformOrigin: "left center",
                        scaleX: 0,
                        zIndex: 1
                      }}
                      animate={{
                        scaleX: isHoverVariant ? 1 : 0
                      }}
                      transition={titleTransition}
                    />
                  </motion.div>
                </motion.div>

                {/* Description Text */}
                <motion.div
                  style={{
                    flex: "none",
                    height: "auto",
                    position: "relative",
                    whiteSpace: "pre-wrap",
                    width: "400px", // Increased width
                    wordBreak: "break-word",
                    wordWrap: "break-word",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontWeight: "400", // Reduced weight for better readability
                    fontSize: "16px", // Increased font size
                    lineHeight: "1.5em", // Improved line height
                    color: "color-mix(in srgb, var(--foreground) 70%, transparent)",
                    userSelect: "none"
                  }}
                >
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
          </Transition>
        </Variants>
      </LayoutGroup>
    </div>
  );
};

demo.tsx
// This is file with demos of your component
// Each export is one usecase for your component

import { IconHover3D } from "@/components/ui/icon-3d-hover";

const DemoOne = () => {
  return <IconHover3D />;
};

export { DemoOne };

\`\`\`

Install NPM dependencies:
\`\`\`bash
framer-motion
\`\`\`

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them`}
</pre>
<pre className="text-xs text-left whitespace-pre-wrap">
{`You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
\`\`\`tsx
icon-3d-hover.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, MotionConfigContext, LayoutGroup } from 'framer-motion';

// Types
interface Props {
  heading?: string;
  text?: string;
  variant?: 'Default' | 'Hover';
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

// Transitions
const transition1 = {
  bounce: 0,
  delay: 0,
  duration: 0.4,
  type: "spring" as const
};

const transition2 = {
  delay: 0,
  duration: 0.4,
  ease: [0.44, 0, 0.56, 1] as [number, number, number, number],
  type: "tween" as const
};

const transformTemplate1 = (_: any, t: string) => \`translate(-50%, -50%) \${t}\`;

// Transition wrapper component
const Transition: React.FC<{ value: any; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};


const Variants = motion.create(React.Fragment);

export const IconHover3D: React.FC<Props> = ({
  heading = "Library",
  text = "A comprehensive collection of digital books and resources for learning and research. ",
  variant = 'Default',
  className = "",
  style = {},
  width = 600, // Increased from 369
  height = 150, // Increased from 71
  ...restProps
}) => {  const [currentVariant, setCurrentVariant] = useState<'Default' | 'Hover'>(variant);
  const [gestureState, setGestureState] = useState({ isHovered: false });
  const refBinding = useRef<HTMLDivElement>(null);
  const defaultLayoutId = React.useId();

  const isHoverVariant = currentVariant === 'Hover';
  const variants = [currentVariant === 'Default' ? 'GPnJri30y' : 'zEwHlJ7zp'];

  const handleMouseEnter = async () => {
    setGestureState({ isHovered: true });
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = async () => {
    setGestureState({ isHovered: false });
    setCurrentVariant('Default');
  };

  const cubeSliceVariants = {
    zEwHlJ7zp: {
      "--border-color": "rgb(139, 47, 250)"
    }
  };
  const titleVariants = {
    default: {
      "--fill-width": "0%"
    },
    hovered: {
      "--fill-width": "100%"
    }
  };

  // Add this new transition for the title
  const titleTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94], // Smoother easing curve
    type: "tween" as const
  };


  const sliceCubeVariants = {
    zEwHlJ7zp: {
      rotateX: -28,
      rotateY: -43,
      scale: 1.1
    }
  };

  const cornerScaleVariants = {
    zEwHlJ7zp: {
      scale: 2.2
    }
  };

  const bgFillVariants = {
    zEwHlJ7zp: {
      opacity: 1
    }
  };



  return (
    <div style={{ width, height }}>
      <LayoutGroup id={defaultLayoutId}>
        <Variants animate={variants} initial={false}>
          <Transition value={transition1}>
            <motion.div
              {...restProps}
              className={\`icon-hover-3d \${className}\`}
              data-framer-name="Default"
              data-highlight={true}
              ref={refBinding}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={currentVariant === 'Hover' ? handleMouseLeave : undefined}              style={{
                backgroundColor: "var(--background)",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: "40px", // Increased gap
                height: "min-content",
                justifyContent: "center",
                overflow: "visible",
                padding: "20px", // Added padding
                position: "relative",
                width: "min-content",
                borderRadius: "12px", // Added border radius
                border: "1px solid color-mix(in srgb, var(--foreground) 10%, transparent)",
                ...style
              }}
            >
              {/* Icon Container */}
              <motion.div
                className="icon-container"
                data-framer-name="Icon"
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flex: "none",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  gap: "10px",
                  height: "100px", // Increased from 64px
                  justifyContent: "center",
                  overflow: "visible",
                  padding: "0px",
                  position: "relative",
                  width: "100px", // Increased from 64px                  zIndex: 1,
                  border: "1px solid color-mix(in srgb, var(--foreground) 20%, transparent)"
                }}
              >
                {/* BG Container */}
                <motion.div
                  className="bg-container"
                  data-framer-name="BG"
                  style={{
                    flex: "none",
                    height: "348px",
                    overflow: "visible",
                    position: "relative",
                    width: "348px",
                    zIndex: 2,
                    scale: 0.3 // Increased from 0.2
                  }}
                >
                  {/* Slice Cube */}
                  <motion.div
                    className="slice-cube"
                    data-framer-name="Slice Cube"
                    style={{
                      alignContent: "center",
                      alignItems: "center",
                      display: "flex",
                      flex: "none",
                      flexDirection: "column",
                      flexWrap: "nowrap",
                      gap: "28px",
                      height: "min-content",
                      justifyContent: "center",
                      left: "50%",
                      overflow: "visible",
                      padding: "0px",
                      position: "absolute",
                      top: "50%",
                      transformStyle: "preserve-3d",
                      width: "min-content",
                      zIndex: 3,
                      rotate: 49,
                      rotateX: 23,
                      rotateY: 33,
                      scale: 0.7,
                      transformPerspective: 1200
                    }}
                    transformTemplate={transformTemplate1}
                    variants={sliceCubeVariants}
                    animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  >
                    {/* Slice 1 */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-1"
                        data-framer-name="Slice 1"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px", border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 2 - Similar structure */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-2"
                        data-framer-name="Slice 2"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px", border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>

                    {/* Slice 3 - Similar structure */}
                    <Transition value={transition2}>
                      <motion.div
                        className="slice-3"
                        data-framer-name="Slice 3"
                        style={{
                          alignContent: "center",
                          alignItems: "center",
                          display: "flex",
                          flex: "none",
                          flexDirection: "row",
                          flexWrap: "nowrap",
                          gap: "10px",
                          height: "min-content",
                          justifyContent: "center",
                          overflow: "visible",
                          padding: "0px",
                          position: "relative",
                          transformStyle: "preserve-3d",
                          width: "min-content"
                        }}
                      >
                        {/* Front */}
                        <motion.div
                          className="slice-1-front"
                          data-framer-name="Front"
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            height: "34px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "relative",
                            width: "240px", border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            zIndex: 120
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Back */}
                        <motion.div
                          className="slice-1-back"
                          data-framer-name="Back" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "0px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 180,
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Right */}
                        <motion.div
                          className="slice-1-right"
                          data-framer-name="Right" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            left: "120px",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Left */}
                        <motion.div
                          className="slice-1-left"
                          data-framer-name="Left" style={{
                            alignContent: "center",
                            alignItems: "center",
                            bottom: "0px",
                            display: "flex",
                            flex: "none",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            gap: "10px",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "0px",
                            position: "absolute",
                            right: "120px",
                            top: "0px",
                            width: "240px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateY: -90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Top */}
                        <motion.div
                          className="slice-1-top"
                          data-framer-name="Top" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-120px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                        {/* Bottom */}
                        <motion.div
                          className="slice-1-bottom"
                          data-framer-name="Bottom" style={{
                            flex: "none",
                            height: "240px",
                            left: "0px",
                            overflow: "hidden",
                            position: "absolute",
                            right: "0px",
                            top: "-86px",
                            zIndex: 1,
                            border: "4px solid var(--foreground)",
                            backgroundColor: "var(--background)",
                            rotateX: 90
                          }}
                          variants={cubeSliceVariants}
                          animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                        />
                      </motion.div>
                    </Transition>
                  </motion.div>
                  {/* Corner elements */}
                  <motion.div
                  style={{
                    flex: "none",
                    height: "24px",
                    left: isHoverVariant ? "-6px" : "14px",
                    overflow: "hidden",
                    position: "absolute",
                    top: isHoverVariant ? "-6px" : "14px",
                    width: "24px",
                    zIndex: 2,
                    borderLeft: "4px solid var(--foreground)",
                    borderTop: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                  style={{
                    flex: "none",
                    height: "24px",
                    left: isHoverVariant ? "-6px" : "14px",
                    overflow: "hidden",
                    position: "absolute",
                    top: isHoverVariant ? "330px" : "310px",
                    width: "24px",
                    zIndex: 2,
                    borderLeft: "4px solid var(--foreground)",
                    borderBottom: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                  style={{
                    bottom: isHoverVariant ? "-6px" : "14px",
                    flex: "none",
                    height: "24px",
                    overflow: "hidden",
                    position: "absolute",
                    right: isHoverVariant ? "-6px" : "14px",
                    width: "24px",
                    zIndex: 2,
                    borderRight: "4px solid var(--foreground)",
                    borderBottom: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                  <motion.div
                  style={{
                    flex: "none",
                    height: "24px",
                    overflow: "hidden",
                    position: "absolute",
                    right: isHoverVariant ? "-6px" : "14px",
                    top: isHoverVariant ? "-6px" : "14px",
                    width: "24px",
                    zIndex: 2,
                    borderRight: "4px solid var(--foreground)",
                    borderTop: "4px solid var(--foreground)",
                    scale: 1
                  }}
                  variants={cornerScaleVariants}
                  animate={isHoverVariant ? 'zEwHlJ7zp' : 'default'}
                  />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="content"
                data-framer-name="Content"
                style={{
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  display: "flex",
                  flex: "none",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  gap: "12px", // Increased gap
                  height: "min-content",
                  justifyContent: "center",
                  maxWidth: "400px", // Increased max width
                  overflow: "hidden",
                  padding: "0px",
                  position: "relative",
                  width: "min-content"
                }}
              >
                {/* Text Container */}
                <motion.div
                  className="text-container"
                  data-framer-name="Text"
                  style={{
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flex: "none",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "10px",
                    height: "32px", // Increased height
                    justifyContent: "center",
                    overflow: "visible",
                    padding: "0px",
                    position: "relative",
                  }}
                >
                  {/* BG Fill - Hidden for clean black/white effect */}
                  <motion.div
                    className="bg-fill"
                    data-framer-name="BG Fill"
                    style={{
                      flex: "none",
                      height: "32px", // Increased height
                      left: "0px",
                      overflow: "hidden",
                      position: "absolute",
                      top: "calc(50% - 16px)", // Adjusted for new height
                      width: "1px", // Keep minimal
                      zIndex: 0,
                      backgroundColor: "transparent", // Made transparent
                      opacity: 0 // Always hidden
                    }}
                  />                  {/* Heading Text with hover effect */}
                  <motion.div
                    style={{
                      flex: "none",
                      height: "32px", // Increased height
                      position: "relative",
                      whiteSpace: "pre",
                      width: "auto",
                      fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                      fontWeight: "600",
                      fontSize: "18px", // Increased font size
                      color: "var(--foreground)",
                      userSelect: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      overflow: "hidden"
                    }}
                  >
                    {/* Background text (white) */}
                    <span className='mx-1 text-center' style={{ position: "relative", zIndex: 1 }}>
                      {heading}
                    </span>                    {/* Animated overlay text (black) */}
                    <motion.span
                    className='mx-1 mt-0.5 text-center'
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        color: "var(--background)",
                        clipPath: \`inset(0 \${isHoverVariant ? '0%' : '100%'} 0 0)\`,
                        zIndex: 2
                      }}
                      animate={{
                        clipPath: \`inset(0 \${isHoverVariant ? '0%' : '100%'} 0 0)\`
                      }}
                      transition={titleTransition}
                    >
                      {heading}
                    </motion.span>

                    {/* White background fill that moves from left to right */}
                    <motion.div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "var(--foreground)",
                        transformOrigin: "left center",
                        scaleX: 0,
                        zIndex: 1
                      }}
                      animate={{
                        scaleX: isHoverVariant ? 1 : 0
                      }}
                      transition={titleTransition}
                    />
                  </motion.div>
                </motion.div>

                {/* Description Text */}
                <motion.div
                  style={{
                    flex: "none",
                    height: "auto",
                    position: "relative",
                    whiteSpace: "pre-wrap",
                    width: "400px", // Increased width
                    wordBreak: "break-word",
                    wordWrap: "break-word",
                    fontFamily: '"Inter", "Inter Placeholder", sans-serif',
                    fontWeight: "400", // Reduced weight for better readability
                    fontSize: "16px", // Increased font size
                    lineHeight: "1.5em", // Improved line height
                    color: "color-mix(in srgb, var(--foreground) 70%, transparent)",
                    userSelect: "none"
                  }}
                >
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
          </Transition>
        </Variants>
      </LayoutGroup>
    </div>
  );
};

demo.tsx
// This is file with demos of your component
// Each export is one usecase for your component

import { IconHover3D } from "@/components/ui/icon-3d-hover";

const DemoOne = () => {
  return <IconHover3D />;
};

export { DemoOne };

\`\`\`

Install NPM dependencies:
\`\`\`bash
framer-motion
\`\`\`

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them`}
</pre>
        </div>
      </div>
    </section>
  );
}
