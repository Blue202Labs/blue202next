"use client";

import rightArrow from "/public/icons/right-arrow.svg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";
import { FadeIn } from "../components/FadeIn";
import upsPortal from "/public/images/ups-store/ups-portal.jpeg";
import sahily from "/public/images/sahily/sahily-lp.png";
import swift from "/public/images/swift/swift-hero.png";
import { ResultsTags } from "../results/data";

const ReviewData = [
  {
    title: "Swift Distribution Website",
    href: "/results/swift-distribution",
    tags: ResultsTags.swift,
    image: swift,
  },
  {
    title: "The UPS Store Employee Portal",
    href: "/results/ups-store",
    tags: ResultsTags.ups,
    image: upsPortal,
  },
  {
    title: "Sahily Landing Page",
    href: "/results/sahily-app",
    tags: ResultsTags.sahily,
    image: sahily,
  },
];

export const RecentWork = () => {
  return (
    <section className="w-fit mx-auto text-slate-800 flex flex-col gap-14 mb-48 px-4 max-w-[99vw] overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="h-1 w-full bg-gray-200 hidden md:block"></div>
        <h2 className="text-4xl font-bold text-nowrap">Our Recent Work</h2>
        <div className="h-1 w-full bg-gray-200"></div>
      </div>
      <div className="flex flex-row gap-4 overflow-x-scroll md:overflow-hidden no-scrollbar">
        {ReviewData.map((review, index) => (
          <WorkCard key={`result-${index}`} {...review} />
        ))}
      </div>
      <Link
        href="/results"
        className="flex gap-2 items-center text-slate-600 place-self-end"
      >
        See more of our work
        <Image alt="" src={rightArrow} className="h-4 w-4 mt-1" />
      </Link>
    </section>
  );
};

const WorkCard = ({
  title,
  image,
  tags,
  href,
}: {
  image: StaticImageData;
  title: string;
  tags: string[];
  href: string;
}) => {
  const isMobile = useCheckMobileScreen();

  return (
    <div className={`flex-none w-80 md:w-[30rem] relative`}>
      <FadeIn direction="left" offset={isMobile ? 10 : 50} once={true}>
        <div className="border border-[#0021f5] rounded-xl group flex w-fit items-center justify-center">
          <div
            className={`min-h-[30rem] md:min-h-[35rem] h-full p-8 rounded-xl bg-white text-slate-900 gap-8 flex flex-col items-center
              opacity-100 transition duration-200 md:group-hover:opacity-30 md:group-hover:bg-slate-300 md:group-active:opacity-10 
            `}
          >
            <Image
              className="rounded object-cover md:h-64"
              src={image}
              width={500}
              height={300}
              alt=""
            />
            <h4 className="text-2xl">{title}</h4>
            <div className="flex flex-row flex-wrap gap-2 md:gap-4">
              {tags.map((tag, i) => (
                <div
                  key={`result-${title}-tag-${i}`}
                  className="bg-white px-4 py-2 shadow-blurred rounded-lg text-xs md:text-sm text-slate-600 font-light"
                >
                  {tag}
                </div>
              ))}
            </div>
            <Link
              href={href}
              className={`font-light absolute bottom-12
             px-4 py-2 rounded-md group-hover:opacity-80 group-active:opacity-80 active:underline 
              hover:underline
            `}
            >
              Read More
            </Link>
          </div>
          <Link
            href={href}
            className={`hidden md:flex absolute place-self-center top-[40%] opacity-0 transition duration-200 flex-row items-center 
              bg-white drop-shadow-sm px-4 py-2 rounded-md group-hover:opacity-80 group-active:opacity-80 active:underline 
              hover:underline
            `}
          >
            Read More
            <Image alt="" src={rightArrow} className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};
