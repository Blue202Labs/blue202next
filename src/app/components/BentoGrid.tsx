import { ReactNode } from "react";
import rightArrow from "/public/icons/right-arrow.svg";

import { cn } from "../lib/utils";
import Image from "next/image";
import Link from "next/link";
import BlurFade from "./BlurFade";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  icon,
  description,
  href,
  cta,
  idx,
}: {
  name: string;
  className: string;
  background: ReactNode;
  icon: any;
  description: string;
  href: string;
  cta: string;
  idx: number;
}) => (
  <BlurFade
    delay={0.25 + idx * 0.05}
    inView
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl h-full",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      className
    )}
  >
    <div className="max-h-[50px] z-10 object-cover">{background}</div>
    <div className="z-20 bg-gradient-to-t from-white">
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <div className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-neutral-700">{name}</h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>
      <div
        className={cn(
          "absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <Link
          href={href}
          className="flex flex-row items-center hover:bg-stone-200 p-2 rounded-md text-sm"
        >
          {cta}
          <Image alt="" src={rightArrow} className="ml-2 h-4 w-4" />
        </Link>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
    </div>
  </BlurFade>
);

export { BentoCard, BentoGrid };
