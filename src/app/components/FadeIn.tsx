"use client";

import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  toggle?: boolean;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  offset?: number;
  once?: boolean;
  disableAnimation?: boolean;
};

export function FadeIn({
  children,
  className,
  toggle = true,
  direction = "up",
  duration = 1.5,
  offset = 8,
  once = false,
  disableAnimation = false,
}: FadeInProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: once });
  const isInView = toggle && inViewResult;

  useEffect(() => {
    if (isInView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const getVariants = (direction: string) => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: offset },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: duration },
          },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -offset },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: duration },
          },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: offset },
          show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: duration },
          },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -offset },
          show: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: duration },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: offset },
          show: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", duration: duration },
          },
        };
    }
  };

  const containerVariants = getVariants(direction);

  if (disableAnimation) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}
