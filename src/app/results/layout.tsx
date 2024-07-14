"use client";

import Image from "next/image";
import { PageHero } from "../solutions/components/PageHero";
import Link from "next/link";
import { ReactNode, useState } from "react";

const ResultsLayout = ({
  children,
  sizzlers,
}: {
  children: ReactNode;
  sizzlers: ReactNode;
}) => {
  const [toLoad, setToLoad] = useState(4);

  return (
    <main className="bg-black">
      <div className="px-4 w-full h-[30rem] text-slate-800 flex flex-col justify-center items-center text-center gap-4 pt-10 bg-slate-50">
        <h1 className="mt-10 mx-auto text-8xl bg-left-bottom font-body-sans bg-blue-wave-mobile bg-[length:25rem_5rem] bg-clip-text text-transparent font-extrabold">
          Our Work
        </h1>
        <p className="px-8 lg:px-0 lg:max-w-2xl text-lg lg:text-2xl font-light">
          We'll let it speak for itself.
        </p>
        <a
          href="/contact"
          className="bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans"
        >
          Contact Us
        </a>
      </div>
      <div className="grid grid-cols-2">
        <Link
          key="post-link-1"
          href="/results/ups-store"
          className="col-span-2 relative h-[30rem]"
        >
          <div className="z-10 absolute w-full bg-[url('/images/people-computer.jpg')] bg-cover opacity-40 h-full group-hover:opacity-30 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">
              Aspen Dental
            </h2>
            <div className="flex flex-row gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Employee Portal
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Secure API
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Knowledge Base
              </div>
            </div>
          </div>
          {sizzlers}
        </Link>
        <Link
          key="post-link-2"
          href="/results/ups-store"
          className="relative h-[30rem] group"
        >
          <div className="z-10 absolute bg-left w-full bg-[url('/images/ups-truck.jpg')] opacity-40 h-full group-hover:opacity-30 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">
              The UPS Store
            </h2>
            <div className="flex flex-row gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Web App
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                LMS
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Company Dashboard
              </div>
            </div>
          </div>
        </Link>
        <Link
          key="post-link-3"
          href="/results/sizzlers-egypt"
          className="relative h-[30rem] group"
        >
          <div className="z-10 absolute bg-top bg-cover w-full bg-[url('/images/people-table.jpg')] h-full group-hover:opacity-40 opacity-60 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">
              Zyntex Group
            </h2>
            <div className="flex flex-row gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Digital Marketing
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Buisiness Development
              </div>
            </div>
          </div>
        </Link>
        <Link
          key="post-link-4"
          href="/results/sizzlers-egypt"
          className="relative min-h-[30rem] col-span-2 group"
        >
          <div className="z-10 absolute bg-center w-full bg-[url('/images/madie-hamilton-dZ-HI4EuWcA-unsplash.jpg')] h-full group-hover:opacity-40 opacity-60 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">
              Sizzler Egypt
            </h2>
            <div className="flex flex-row gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Website
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                UI/UX Design
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Digital Marketing
              </div>
            </div>
          </div>
        </Link>
        <Link
          key="post-link-5"
          href="/results/san-diego-wholesalers"
          className="relative group row-span-2 h-full"
        >
          <div className="z-10 absolute bg-top bg-cover w-full bg-[url('/images/logistics.jpg')] h-full group-hover:opacity-40 opacity-60 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">
              San Diego Wholesalers
            </h2>
            <div className="flex flex-row flex-wrap gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Buisiness Development
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Market Analysis
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Digital Marketing
              </div>
            </div>
          </div>
        </Link>
        <Link
          key="post-link-6"
          href="/results/sizzlers-egypt"
          className="relative h-[30rem] group"
        >
          <div className="z-10 absolute bg-center bg-cover w-full bg-[url('/images/people-group.jpg')] h-full group-hover:opacity-40 opacity-60 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">RxForms</h2>
            <div className="flex flex-row flex-wrap gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Web App
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                eCommerce
              </div>
            </div>
          </div>
        </Link>
        <Link
          key="post-link-7"
          href="/results/sizzlers-egypt"
          className="relative h-[30rem] group"
        >
          <div className="z-10 absolute bg-top bg-cover w-full bg-[url('/images/ekh.jpg')] h-full group-hover:opacity-40 opacity-60 transition duration-200"></div>
          <div className="z-20 relative w-full h-full p-20 transition flex flex-col justify-end">
            <h2 className="text-8xl text-white text-opacity-85">
              Egypt Kuwait Holdings
            </h2>
            <div className="flex flex-row flex-wrap gap-4 pt-4 font-body-sans">
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Infrastructure Audit
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Cybersecurity
              </div>
              <div className="bg-slate-50 bg-opacity-60 rounded-md text-sm px-6 py-2">
                Technical Consulting
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default ResultsLayout;
