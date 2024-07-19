"use client";

import Link from "next/link";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";

export const ResultsSummary = () => {
  return (
    <section className="pt-40 max-w-7xl mx-auto">
      <div className="py-20 flex flex-col max-w-5xl mx-auto px-8 md:pl-0">
        <h2 className="w-fit mx-auto text-3xl font-semibold">
          Let us lead your digital transformation.
        </h2>
        <h3 className="w-fit mx-auto text-2xl text-slate-600 font-light">
          Our work with Sizzler&apos;s Steakhouse Egypt:
        </h3>
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x-[1px] max-w-4xl mx-auto py-10 justify-center">
          <div className="p-10 w-80 flex flex-col">
            <div className="text-3xl font-semibold text-slate-800">60k</div>
            <div className="font-body-sans text-xl font-light">
              Monthly Unique Visitors
            </div>
          </div>
          <div className="p-10 w-72 flex flex-col">
            <div className="text-3xl font-semibold text-slate-800">Top 10</div>
            <div className="font-body-sans text-xl font-light">SEO Ranking</div>
            <div className="font-thin text-sm">
              On related keywords in Egypt.
            </div>
          </div>
          <div className="p-10 w-72 flex flex-col">
            <div className="text-3xl font-semibold text-slate-800">1200%</div>
            <div className="font-body-sans text-xl font-light">
              Visitor Increase
            </div>
            <div className="font-thin text-sm">
              Since we took on the project.
            </div>
          </div>
        </div>
        <Link
          className="place-self-end text-lg md:text-2xl flex flex-row gap-2 group pr-3 hover:pr-0 hover:underline text-slate-600 font-body-sans"
          href="/solutions/sizzler-egypt"
        >
          <div className="group-hover:pr-3">Read more about Sizzler&apos;s</div>
          <Image src={rightArrow} alt="Right arrow icon" />
        </Link>
      </div>
    </section>
  );
};
