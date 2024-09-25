import Link from "next/link";
import { ResultsHeader } from "../components/Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";

import { ResultsLink } from "../components/ResultsLink";
import sahily from "/public/images/sahily/sahily-lp.png";
import { Gallery } from "../components/Gallery";
import { sahilyData } from "../../../../public/images/sahily";
import { WebDesignLink, WebDevelopmentLink } from "../components/SolutionsLink";

const SizzlerPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Sahily App"
        bg="bg-sahily"
        tags={ResultsTags.sahily}
      />
      <div className="flex flex-col gap-20 pt-20 pb-64 max-w-5xl mx-auto text-slate-600">
        <div className="flex flex-col gap-8 text-base max-w-3xl mx-auto px-4">
          <ResultsLink
            heading="Landing Page"
            bg={sahily}
            route="https://sahilyapp.com"
          />
          <p className="text-xl font-semibold text-slate-800 pt-12">
            We partnered with the startup Sahily to develop a modern landing
            page.
          </p>
          <p className="pb-20">
            We created a user-friendly, responsive site to attract interest into
            the startup and give them a starting point to collect interest and
            generate newsletter contacts, alongside working on the design and
            product concept for their MVP.
          </p>
          <div className="border rounded-lg p-10 pb-16">
            <h2 className="font-semibold md:text-xl pb-8 underline">
              The task:
            </h2>
            <ul className="md:pl-8 list-disc font-body-sans">
              <li>
                Update the current website, optimizing SEO and discoverability.
              </li>
              <li>Showcase and generate interest for their upcoming app.</li>
              <li>Implement engaging animations and design.</li>
            </ul>
          </div>
          <Gallery className="py-20" imageData={sahilyData} />
          <WebDevelopmentLink />
          <WebDesignLink />
        </div>
      </div>
    </article>
  );
};

export default SizzlerPage;
