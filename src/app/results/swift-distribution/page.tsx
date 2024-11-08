import { ResultsHeader } from "../components/Header";
import { ResultsTags } from "../data";

import { ResultsLink } from "../components/ResultsLink";
import swift from "/public/images/swift/swift-stats.png";
import { Gallery } from "../components/Gallery";
import { swiftData } from "../../../../public/images/swift";
import { WebDesignLink, WebDevelopmentLink } from "../components/SolutionsLink";

const SwiftPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Swift Distribution"
        bg="bg-sahily"
        tags={ResultsTags.swift}
      />
      <div className="flex flex-col gap-20 pt-20 pb-64 max-w-5xl mx-auto text-slate-600">
        <div className="flex flex-col gap-8 text-base max-w-3xl mx-auto px-4">
          <ResultsLink
            heading="Website"
            bg={swift}
            route="https://swiftdist.com"
          />
          <p className="text-xl font-semibold text-slate-800 pt-12">
            We designed and developed a stunning website for Swift Distribution,
            an Amazon eCommerce solution provider.
          </p>
          <p className="pb-20">
            Swift approached us with the task of upgrading their website to a
            clean, modern site with thoughtful design and animations. We
            designed their logo and created an eye-catching website that offers
            an immersive, and interactive experience.
          </p>
          <div className="border rounded-lg p-10 pb-16">
            <h2 className="font-semibold md:text-xl pb-8 underline">
              The task:
            </h2>
            <ul className="md:pl-8 list-disc font-body-sans">
              <li>
                Showcase their services and run wild to design a website that
                would turn heads.
              </li>
              <li>
                Update the current website, optimizing SEO and discoverability.
              </li>
              <li>Implement engaging animations and design.</li>
            </ul>
          </div>
          <Gallery className="py-20" imageData={swiftData} />
          <WebDevelopmentLink />
          <WebDesignLink />
        </div>
      </div>
    </article>
  );
};

export default SwiftPage;
