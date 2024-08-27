"use client";

import { useAnimation, useInView, motion } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

export const ExpandingTitle = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();

  const ref = useRef(null);
  const inView = useInView(ref);

  const widthVariants = {
    hidden: { width: "min-content" },
    expanded: {
      width: "100%",
      transition: {
        transitionTimingFunction: "ease-in",
        duration: 0.7,
        delay: 0.05,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("expanded");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      variants={widthVariants}
      ref={ref}
      initial="hidden"
      animate={controls}
      className="whitespace-nowrap text-xl md:text-5xl font-mono-text text-right"
    >
      <h3 className="text-2xl text-white font-semibold md:text-4xl py-4 md:py-8 px-8 md:px-24 bg-gradient-to-l from-blue-400  mt-32 mb-10 md:my-32">
        {children}
      </h3>
    </motion.div>
  );
};
