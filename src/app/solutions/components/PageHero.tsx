"use client";

import Image from "next/image";
import blueWave from "/public/images/blue202bg.png";
import blueWaveMobile from "/public/images/blue202backmobile.png";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";

export const PageHero: React.FC<{
  heading: string;
  description: string;
}> = ({ heading, description }) => {
  const isMobile = useCheckMobileScreen();

  return (
    <>
      <div className="relative px-4 w-full h-[30rem] text-slate-100 bg-blue-wave-mobile bg-[length:100vw_30rem] lg:bg-blue-wave bg-no-repeat bg-fixed flex flex-col justify-center items-center text-center gap-4 pt-10">
        <Image
          priority
          className="absolute z-20 h-full object-cover object-center"
          src={isMobile ? blueWaveMobile : blueWave}
          fetchPriority="high"
          alt="Abstract blue wave graphic."
        />
        <h1 className="z-30 mt-10 mx-auto text-3xl lg:text-4xl font-body-sans font-medium">
          {heading}
        </h1>
        <p className="z-30 px-8 lg:px-0 lg:max-w-2xl text-lg lg:text-2xl font-light">
          {description}
        </p>
        <a
          href="/contact"
          className="z-30 bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans"
        >
          Contact Us
        </a>
      </div>
    </>
  );
};
