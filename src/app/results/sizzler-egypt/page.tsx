import Link from "next/link";
import { ResultsHeader } from "../Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";

const SizzlerPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Sizzler Egypt"
        bg="bg-steak"
        tags={ResultsTags.sizzler}
      />
      <div className="flex flex-col gap-20 pt-20 pb-64 max-w-5xl mx-auto text-slate-600">
        <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x-[1px] max-w-4xl mx-auto py-10 justify-center">
          <div className="p-10 w-80 flex flex-col">
            <div className="text-3xl font-semibold text-slate-800">38,000+</div>
            <div className="font-body-sans text-xl font-light">
              Orders delivered
            </div>
            <div className="font-thin text-sm">On the system we developed.</div>
          </div>
          <div className="p-10 w-72 flex flex-col">
            <div className="text-3xl font-semibold text-slate-800">Top 10</div>
            <div className="font-body-sans text-xl font-ulght">SEO Ranking</div>
            <div className="font-thin text-sm">
              On related keywords in Egypt.
            </div>
          </div>
          <div className="p-10 w-72 flex flex-col">
            <div className="text-3xl font-semibold text-slate-800">1200%</div>
            <div className="font-body-sans text-xl font-ulght">
              Visitor Increase
            </div>
            <div className="font-thin text-sm">
              Since we took on the project.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 text-lg max-w-3xl mx-auto px-4">
          <p className="text-xl font-semibold text-slate-800">
            We partnered with Sizzler Steakhouse in the Middle East to build a
            successful eCommerce, food-ordering website.
          </p>
          <p className="pb-20">
            We created a user-friendly website, high-seo ranking website that
            reflected the Sizzler brand and developed an online ordering system
            to maximise the business&apos;s reach.
          </p>
          <div className="border rounded-lg p-10 pb-16">
            <h2 className="font-semibold text-xl pb-8 underline">The task:</h2>
            <ul className="pl-8 list-disc font-body-sans">
              <li>
                Update the current website, optimising SEO and discoverabilty.
              </li>
              <li>
                Create a food ordering storefront, with integrated payments
              </li>
              <li>
                Develop a backend system to foward incoming orders and to the
                nearest branch
              </li>
              <li>Optimise and map delivery routes</li>
              <li>
                Provide a digital marketing strategy and social media campaign
              </li>
            </ul>
          </div>
          <p className="py-16">
            We developed a custom backend system that assigned orders to the
            nearest Sizzler branch using geolocation, optimizing delivery routes
            to save on fees and ensure orders are delivered promptly. Targeted
            campaigns across social media and email drove traffic to the website
            and boosted brand visibility within the Middle Eastern F&B industry,
            attracting 500 users just in the first hour. The eCommerce platform
            increased online ordering significantly, whilst providing a
            centralised hub for all of Sizzler&apos;s business. Strategic
            marketing along with an effective website positioned Sizzler
            Steakhouse as a leader in the regional F&B market.
          </p>
          <div className="w-full flex flex-col items-end hover:underline text-base text-right">
            <Link
              className="flex flex-row gap-2 w-fit"
              href="/solutions/bespoke-software"
            >
              <div>Read more about our bespoke software offerings</div>
              <Image src={rightArrow} alt="Right arrow icon" />
            </Link>
          </div>
          <div className="w-full flex flex-col items-end hover:underline text-base text-right">
            <Link
              className="flex flex-row gap-2 w-fit"
              href="/solutions/digital-marketing"
            >
              <div>Read more about our digital marketing services</div>
              <Image src={rightArrow} alt="Right arrow icon" />
            </Link>
          </div>
          <div className="w-full flex flex-col items-end hover:underline text-base text-right">
            <Link
              className="flex flex-row gap-2 w-fit"
              href="/solutions/websites"
            >
              <div>Read more about our web design solutions</div>
              <Image src={rightArrow} alt="Right arrow icon" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SizzlerPage;
