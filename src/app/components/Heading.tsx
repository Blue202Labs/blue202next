"use client";

import { ReactNode, useState, useEffect, useRef } from "react";

export const Heading: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.8 });

  return (
    <div>
      <h3 className="pl-12 text-blue-900 font-semibold text-2xl">{children}</h3>
      <div
        ref={ref}
        className={`border-b-4 border-[#49A8FF] transition-all duration-500 delay-300 ${
          isVisible ? "w-24" : "w-0"
        }`}
      ></div>
    </div>
  );
};

const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};
