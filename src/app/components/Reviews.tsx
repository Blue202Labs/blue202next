"use client";

import { Heading } from "./Heading";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";
import { AnimatedGradientBorder } from "./AnimatedBorder";
import { FadeIn } from "./FadeIn";
import Link from "next/link";
import { useState } from "react";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";

const ReviewData = [
  {
    author: "Youssef Beyram",
    company: "Co-Founder at San Diego Wholesalers",
    href: "/results/san-diego-wholesalers",
    text: (
      <p className="md:text-lg font-normal font-body-sans">
        Blue202 revolutionized our operations at San Diego Wholesalers! Their
        bespoke CRM solution and Inventory Management System streamlined our
        processes impeccably. <br></br> <br></br>
        Exceptional team, innovative solutions, and a{" "}
        <span className="font-semibold text-blue-900">game-changer</span> for
        our business. Highly recommend their expertise!
      </p>
    ),
  },
  {
    author: "Ziad Malhas",
    company: "Owner of Sizzler Steakhouse",
    href: "/results/sizzler-egypt",
    text: (
      <p className="md:text-lg font-normal font-body-sans">
        Exceeded our expectations! They crafted a stellar website and executed
        targeted marketing campaigns for Sizzler Steakhouse, driving significant
        traffic and boosting our online presence. Exceptional service,
        creativity, and results. Highly recommend for top-notch marketing and
        web development services!
      </p>
    ),
  },
  {
    author: "Samir Hammam",
    company: "Founder at Salheya Agriculture",
    href: "/solutions/websites",
    text: (
      <p className="md:text-lg font-normal font-body-sans">
        Blue202 delivered an outstanding website for Salheya Agro. Their
        expertise in web development transformed our online presence,
        contributing to increased visibility and growth.
      </p>
    ),
  },
];

export const Reviews = () => {
  const [inFocus, setInFocus] = useState(0);

  return (
    <section className="relative md:my-48 bg-blue-swirl bg-cover min-h-[45rem] overflow-hidden">
      <div className="z-30 absolute bg-gradient-to-l from-[#f0f6fc] bg-cover h-[45rem] w-2/3 right-0 bottom-0 pointer-events-none xl:block hidden"></div>
      <div className="overflow-x-clip flex flex-col md:flex-row gap-10 py-20">
        <div className="flex flex-col gap-14 md:w-2/3 px-4 md:pr-0 pl-10 xl:pl-48">
          <div className="order-2 md:order-1 flex flex-row gap-6 pr-6">
            <button
              name="Previous Item"
              onClick={() => inFocus !== 0 && setInFocus(prev => prev - 1)}
            >
              <svg
                className="opacity-55 hover:opacity-100 group w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                transform="rotate(90)"
              >
                <path
                  className={
                    inFocus === 0
                      ? "fill-[#6e96c4]"
                      : "fill-[#0077ff] group-hover:fill-[#004cff]"
                  }
                  d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                />
              </svg>
            </button>
            <button
              name="Next Item"
              onClick={() =>
                inFocus !== ReviewData.length - 1 &&
                setInFocus(prev => prev + 1)
              }
            >
              <svg
                className="opacity-55 hover:opacity-100 group w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                transform="rotate(-90)"
              >
                <path
                  className={
                    inFocus === ReviewData.length - 1
                      ? "fill-[#6e96c4]"
                      : "fill-[#0077ff] group-hover:fill-[#004cff]"
                  }
                  d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
                />
              </svg>
            </button>
          </div>
          <h2 className="order-1 md:order-2 text-5xl md:text-6xl font-semibold md:min-w-96 text-slate-800">
            Hear what our clients have to say{" "}
            <span className="hidden md:inline">👉</span>
          </h2>
        </div>
        <div className="flex flex-row gap-4 md:gap-10 overflow-hidden pl-4 md:pl-12">
          {ReviewData.map((review, index) => (
            <ReviewCard
              key={`review-${index}`}
              inFocus={inFocus}
              index={index}
              {...review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({
  author,
  company,
  text,
  inFocus,
  index,
  href,
}: {
  author: string;
  company: string;
  text: JSX.Element;
  inFocus: number;
  index: number;
  href: string;
}) => {
  const focused = inFocus === index;
  const isMobile = useCheckMobileScreen();

  return (
    <div
      className={`flex-none w-[90%] md:w-[25rem] ${
        focused ? "z-40 opacity-100" : "z-20 opacity-80"
      }`}
      style={{
        transform: `translateX(-${inFocus * 100 + 6 * inFocus}%)`,
        //        transform: `translateX(-${inFocus * (340 + 32 * inFocus)}px)`,
        transition: "transform 0.3s ease", // Add a smooth transition
      }}
    >
      <FadeIn direction="left" offset={isMobile ? 10 : 50} once={true}>
        <AnimatedGradientBorder
          rounded="xl"
          colour1="#57a5ff"
          colour2={focused ? "#0021f5" : "#57a5ff"}
          className="relative group"
        >
          <div
            className={`min-h-[35rem] p-8 md:p-12 rounded-xl bg-white text-slate-600 gap-8 flex flex-col justify-between opacity-100 transition duration-200 ${
              focused
                ? " group-hover:opacity-30 group-hover:bg-slate-300 group-active:opacity-30 group-active:bg-slate-300"
                : ""
            }`}
          >
            {text}
            <div className="text-right">
              <p className="font-semibold text-slate-800">{author}</p>
              <p className="text-slate-600">{company}</p>
            </div>
          </div>
          <Link
            href={href}
            className={`absolute place-self-center top-[40%] opacity-0 transition duration-200 flex flex-row items-center bg-white drop-shadow-sm px-4 py-2 rounded-md ${
              focused
                ? "group-hover:opacity-80 group-active:opacity-80 active:underline hover:underline"
                : "hidden"
            }`}
          >
            Read More
            <Image alt="" src={rightArrow} className="ml-2 h-4 w-4" />
          </Link>
        </AnimatedGradientBorder>
      </FadeIn>
    </div>
  );
};
