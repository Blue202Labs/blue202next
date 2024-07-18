"use client";

import rightArrow from "/public/icons/right-arrow.svg";
import { GradientButton } from "../components/GradientButton";
import blueWave from "/public/images/blue202bg.png";

import { ReactTyped } from "react-typed";
import Image from "next/image";

export const Hero: React.FC<{
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setLoaded }) => {
  return (
    <div className="relative h-screen xl:h-[60rem] text-white flex flex-col justify-center border-b-2-slate-600">
      <Image
        onLoad={() => {
          setLoaded(true);
        }}
        priority
        className="absolute z-20 h-full object-cover object-center"
        src={blueWave}
        unoptimized={true}
        alt="Abstract blue wave graphic."
      />
      <div className="relative z-30 flex flex-col justify-end min-w-96 h-fit w-1/2 max-w-7xl mx-auto gap-8 2xl:pt-36 p-4 xl:px-0">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold opacity-90 md:h-36 h-24 xl:h-fit text-nowrap">
            Need a{" "}
            <span className="lg:invisible">
              <br></br>
            </span>
            {
              <ReactTyped
                strings={[
                  "beautiful website?",
                  "dynamic web app?",
                  "bespoke software?",
                  "product MVP?",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            }
          </h1>
          <h2 className="text-3xl md:text-5xl xl:text-6xl font-semibold">
            We&apos;ve got you covered.
          </h2>
        </div>
        <p className="xl:text-lg font-light pb-2 max-w-[50rem]">
          We deliver modern, elegant web solutions to elevate your
          business&apos;s systems and online presence. Together, our team of
          experienced developers will propel you to the forefront of web
          technology.
        </p>
        <GradientButton
          className="px-5 xl:px-8 py-3 text-black font-semibold border border-black rounded-xl"
          colour1="#0d9488"
          colour2="#00FFC2"
          colour3="#fff4c7"
          href="/contact"
        >
          <p>Let&apos;s work together</p>
          <Image src={rightArrow} alt="Right arrow"></Image>
        </GradientButton>
      </div>
    </div>
  );
};
