
'use client';

import React, { useState, useRef, useId, useMemo } from 'react';
import { motion, MotionConfigContext, LayoutGroup, Variants } from 'framer-motion';

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
  ease: [0.44, 0, 0.56, 1] as const
};

const transformTemplate1 = (_: any, t: string) => `translate(-50%, -50%) ${t}`;

// Custom Transition component to handle Framer Motion context correctly
const CustomTransition: React.FC<{ value: any; children: React.ReactNode }> = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = useMemo(() => ({ ...config, transition }), [config, transition]);

  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};


export const IconHover3D: React.FC<Props> = ({
  heading = "Library",
  text = "A comprehensive collection of digital books and resources for learning and research. ",
  variant = 'Default',
  className = "",
  style = {},
  width = 600,
  height = 150,
  ...restProps
}) => {
  const [currentVariant, setCurrentVariant] = useState<'Default' | 'Hover'>(variant);
  const refBinding = useRef<HTMLDivElement>(null);
  const defaultLayoutId = useId();

  const isHoverVariant = currentVariant === 'Hover';

  const handleMouseEnter = () => {
    setCurrentVariant('Hover');
  };

  const handleMouseLeave = () => {
    setCurrentVariant('Default');
  };

  const cubeSliceVariants: Variants = {
    hover: { "--border-color": "rgb(139, 47, 250)" },
    default: { "--border-color": "var(--foreground)" }
  };

  const sliceCubeVariants: Variants = {
    hover: { rotateX: -28, rotateY: -43, scale: 1.1 },
    default: { rotateX: 23, rotateY: 33, scale: 0.7 }
  };

  const cornerScaleVariants: Variants = {
    hover: { scale: 2.2 },
    default: { scale: 1 }
  };

  const titleTransition = {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    type: "tween" as const
  };

  const animateState = isHoverVariant ? "hover" : "default";

  return (
    <div style={{ width, height }}>
      <LayoutGroup id={defaultLayoutId}>
        <CustomTransition value={transition1}>
            <motion.div
              {...restProps}
              className={`icon-hover-3d ${className}`}
              data-framer-name="Default"
              data-highlight={true}
              ref={refBinding}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor: "var(--background)",
                alignContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                gap: "40px",
                height: "min-content",
                justifyContent: "center",
                overflow: "visible",
                padding: "20px",
                position: "relative",
                width: "min-content",
                borderRadius: "12px",
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
                  height: "100px",
                  justifyContent: "center",
                  overflow: "visible",
                  padding: "0px",
                  position: "relative",
                  width: "100px",
                  zIndex: 1,
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
                    scale: 0.3
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
                      transformPerspective: 1200
                    }}
                    transformTemplate={transformTemplate1}
                    variants={sliceCubeVariants}
                    animate={animateState}
                  >
                    {/* Slice 1 */}
                    <CustomTransition value={transition2}>
                      <motion.div
                        className="slice-1"
                        style={{ transformStyle: "preserve-3d", position: 'relative', width: '240px', height: '34px' }}
                      >
                         <motion.div style={{ position: 'absolute', width: '100%', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", zIndex: 120, transform: 'translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                         <motion.div style={{ position: 'absolute', width: '100%', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(180deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                         <motion.div style={{ position: 'absolute', width: '240px', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(90deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                         <motion.div style={{ position: 'absolute', width: '240px', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(-90deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                         <motion.div style={{ position: 'absolute', width: '100%', height: '240px', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateX(90deg) translateZ(17px)' }} variants={cubeSliceVariants} animate={animateState} />
                         <motion.div style={{ position: 'absolute', width: '100%', height: '240px', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateX(-90deg) translateZ(17px)' }} variants={cubeSliceVariants} animate={animateState} />
                      </motion.div>
                    </CustomTransition>

                    {/* Slice 2 */}
                    <CustomTransition value={transition2}>
                        <motion.div
                          className="slice-2"
                          style={{ transformStyle: "preserve-3d", position: 'relative', width: '240px', height: '34px' }}
                        >
                           <motion.div style={{ position: 'absolute', width: '100%', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", zIndex: 120, transform: 'translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '100%', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(180deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '240px', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(90deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '240px', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(-90deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '100%', height: '240px', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateX(90deg) translateZ(17px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '100%', height: '240px', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateX(-90deg) translateZ(17px)' }} variants={cubeSliceVariants} animate={animateState} />
                        </motion.div>
                      </CustomTransition>

                    {/* Slice 3 */}
                    <CustomTransition value={transition2}>
                        <motion.div
                          className="slice-3"
                          style={{ transformStyle: "preserve-3d", position: 'relative', width: '240px', height: '34px' }}
                        >
                           <motion.div style={{ position: 'absolute', width: '100%', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", zIndex: 120, transform: 'translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '100%', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(180deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '240px', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(90deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '240px', height: '100%', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateY(-90deg) translateZ(120px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '100%', height: '240px', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateX(90deg) translateZ(17px)' }} variants={cubeSliceVariants} animate={animateState} />
                           <motion.div style={{ position: 'absolute', width: '100%', height: '240px', border: "4px solid var(--border-color, var(--foreground))", backgroundColor: "var(--background)", transform: 'rotateX(-90deg) translateZ(17px)' }} variants={cubeSliceVariants} animate={animateState} />
                        </motion.div>
                      </CustomTransition>
                  </motion.div>
                  {/* Corner elements */}
                  <motion.div style={{ height: "24px", left: "14px", overflow: "hidden", position: "absolute", top: "14px", width: "24px", zIndex: 2, borderLeft: "4px solid var(--foreground)", borderTop: "4px solid var(--foreground)" }} variants={cornerScaleVariants} animate={animateState} />
                  <motion.div style={{ height: "24px", left: "14px", overflow: "hidden", position: "absolute", bottom: "14px", width: "24px", zIndex: 2, borderLeft: "4px solid var(--foreground)", borderBottom: "4px solid var(--foreground)" }} variants={cornerScaleVariants} animate={animateState} />
                  <motion.div style={{ height: "24px", overflow: "hidden", position: "absolute", right: "14px", bottom: "14px", width: "24px", zIndex: 2, borderRight: "4px solid var(--foreground)", borderBottom: "4px solid var(--foreground)" }} variants={cornerScaleVariants} animate={animateState} />
                  <motion.div style={{ height: "24px", overflow: "hidden", position: "absolute", right: "14px", top: "14px", width: "24px", zIndex: 2, borderRight: "4px solid var(--foreground)", borderTop: "4px solid var(--foreground)" }} variants={cornerScaleVariants} animate={animateState} />
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="content"
                style={{
                  alignContent: "flex-start", alignItems: "flex-start", display: "flex", flex: "none", flexDirection: "column", flexWrap: "nowrap", gap: "12px", height: "min-content", justifyContent: "center", maxWidth: "400px", overflow: "hidden", padding: "0px", position: "relative", width: "min-content"
                }}
              >
                {/* Text Container */}
                <motion.div
                  className="text-container"
                  style={{
                    alignContent: "center", alignItems: "center", display: "flex", flexDirection: "row", flexWrap: "nowrap", gap: "10px", height: "32px", justifyContent: "center", overflow: "visible", padding: "0px", position: "relative"
                  }}
                >
                  <motion.div
                    style={{
                      height: "32px", position: "relative", whiteSpace: "pre", width: "auto", fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontWeight: "600", fontSize: "18px", color: "var(--foreground)", userSelect: "none", cursor: "pointer", display: "flex", alignItems: "center", overflow: "hidden"
                    }}
                  >
                    <span className='mx-1 text-center' style={{ position: "relative", zIndex: 1 }}>{heading}</span>
                    <motion.span
                      className='mx-1 mt-0.5 text-center'
                      style={{ position: "absolute", top: 0, left: 0, color: "var(--background)", clipPath: `inset(0 100% 0 0)`, zIndex: 2 }}
                      animate={{ clipPath: `inset(0 ${isHoverVariant ? '0%' : '100%'} 0 0)` }}
                      transition={titleTransition}
                    >
                      {heading}
                    </motion.span>
                    <motion.div
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "var(--foreground)", transformOrigin: "left center", scaleX: 0, zIndex: 1 }}
                      animate={{ scaleX: isHoverVariant ? 1 : 0 }}
                      transition={titleTransition}
                    />
                  </motion.div>
                </motion.div>

                {/* Description Text */}
                <motion.div
                  style={{
                    height: "auto", position: "relative", whiteSpace: "pre-wrap", width: "400px", wordBreak: "break-word", wordWrap: "break-word", fontFamily: '"Inter", "Inter Placeholder", sans-serif', fontWeight: "400", fontSize: "16px", lineHeight: "1.5em", color: "color-mix(in srgb, var(--foreground) 70%, transparent)", userSelect: "none"
                  }}
                >
                  {text}
                </motion.div>
              </motion.div>
            </motion.div>
        </CustomTransition>
      </LayoutGroup>
    </div>
  );
};
