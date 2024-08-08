"use client";

import { useState } from "react";
import { ResultsPost } from "./Post";
import { ResultsTags } from "./data";
import Globe from "../components/Globe";

const ResultsPage = () => {
  return (
    <main className="bg-black">
      <div
        className="relative z-30 px-4 w-full h-[50rem] text-slate-800 flex flex-col justify-center 
      items-center text-center gap-4 pt-10 bg-slate-50"
      >
        <h1 className="z-30 mt-10 mx-auto text-8xl bg-left-bottom font-body-sans text-[#1a0faa] font-extrabold">
          Our Work
        </h1>
        <p className="z-30 px-8 lg:px-0 lg:max-w-2xl text-lg lg:text-2xl font-light">
          We&apos;ll let it speak for itself.
        </p>
        <a
          href="/contact"
          className="z-30 bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans"
        >
          Contact Us
        </a>
        <div className="z-20 relative w-full bottom-96">
          <Globe />
        </div>
      </div>
      <div className="relative z-40 flex flex-col md:grid md:grid-cols-2 bg-black">
        <ResultsPost
          heading="Aspen Dental"
          route="aspen-dental"
          tags={ResultsTags.aspen}
          className="col-span-2"
          bg="bg-people-computer"
        />
        <ResultsPost
          heading="The UPS Store"
          route="ups-store"
          tags={ResultsTags.ups}
          bg="bg-ups-truck bg-left"
        />
        <ResultsPost
          heading="Zyntex Group"
          route="zyntex-group"
          tags={ResultsTags.zyntex}
          bg="bg-people-table bg-top"
        />
        <ResultsPost
          heading="Sizzler Egypt"
          tags={ResultsTags.sizzler}
          bg="bg-steak"
          route="sizzler-egypt"
          className="col-span-2"
        />
        <ResultsPost
          heading="San Diego Wholesalers"
          tags={ResultsTags.sanDiego}
          bg="bg-logistics"
          route="san-diego-wholesalers"
          className="row-span-2"
        />
        <ResultsPost
          heading="RxForms"
          tags={ResultsTags.rxForms}
          bg="bg-people-group"
          route="rx-forms"
        />
        <ResultsPost
          heading="Egypt Kuwait Holdings"
          tags={ResultsTags.ekh}
          bg="bg-ekh"
          route="egypt-kuwait-holdings"
        />
      </div>
    </main>
  );
};

export default ResultsPage;
