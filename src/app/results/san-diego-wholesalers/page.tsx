import Image from "next/image";
import { ResultsHeader } from "../Header";
import { ResultsTags } from "../data";
import checkMark from "/public/icons/checkMark.svg";
import rightArrow from "/public/icons/right-arrow.svg";
import Link from "next/link";

const SanDiegoWholesalersPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="San Diego Wholesalers"
        bg="bg-logistics"
        tags={ResultsTags.sanDiego}
      />
      <div className="max-w-5xl mx-auto pt-20 pb-56 px-6 text-lg text-slate-600 flex flex-col gap-14">
        <div className="flex flex-col max-w-3xl mx-auto gap-16 items-center md:items-start">
          <h2 className="text-2xl font-semibold text-slate-800">
            Developing Inventory/Finance Management and CRM Tools
          </h2>
          <p>
            We were enlisted by San Diego Wholesalers to develop an integrated
            system that managed inventory and financial management, and a
            Customer-Relationship Management (
            <a
              className="font-medium text-slate-400 hover:text-slate-700"
              href="/solutions/crm"
            >
              CRM
            </a>
            ) software, designed to meet the company&apos;s unique requirements.
          </p>
          <section>
            <div className="flex flex-col justify-between max-w-4xl mx-auto h-full pt-20 pb-24 px-10 gap-14 md:gap-20">
              <div className="flex flex-col gap-4 md:flex-row justify-between">
                <h4 className="font-bold text-2xl md:w-2/5">
                  Inventory Management Tool
                </h4>
                <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                  Real-time tracking of inventory levels and automated
                  restocking processes- all in a user-friendly interface.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row justify-between">
                <h4 className="font-bold text-2xl md:w-2/5">
                  Financial Management System
                </h4>
                <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                  Conduct invoicing, expense tracking and financial reporting.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row justify-between">
                <h4 className="font-bold text-2xl md:w-2/5">
                  Customer-Relationship Management
                </h4>
                <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                  Keep track of contacts, manage leads and enhance communication
                  with clients, all in a centralized process.
                </p>
              </div>
            </div>
          </section>
        </div>
        <section className="drop-shadow-lg bg-white border border-gray-200 w-full lg:h-[28rem] rounded-xl flex flex-col gap-10 my-10">
          <div className="flex-col lg:flex-row flex lg:gap-10 justify-between h-full">
            <p
              className="font-body-sans font-semibold text-2xl lg:text-3xl text-white
              h-full bg-cover bg-right rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl bg-blue-abstract p-8 lg:p-10 lg:pt-20 min-h-20 md:min-w-96"
            >
              Why choose a custom CRM?
            </p>
            <div className="flex flex-col gap-8 lg:text-lg text-slate-700 justify-center py-10">
              <div className="flex flex-col gap-6 text-base px-8 lg:px-10">
                <div className="flex flex-row gap-4 items-start">
                  <Image
                    width={24}
                    src={checkMark}
                    alt="Green check mark"
                  ></Image>
                  <p>
                    <span className="font-semibold">
                      Tailored to your needs:
                    </span>{" "}
                    Incorporate features essential to your industry&apos;s
                    specifications.
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Image
                    width={24}
                    src={checkMark}
                    alt="Green check mark"
                  ></Image>
                  <p>
                    <span className="font-semibold">Increased sales:</span>{" "}
                    Drive more sales by offering a personalised experience
                    empowered by better customer data management.
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Image
                    width={24}
                    src={checkMark}
                    alt="Green check mark"
                  ></Image>
                  <p>
                    <span className="font-semibold">Scalability:</span> A custom
                    solution can evolve as your needs grow, and allow you to
                    incorporate new features
                  </p>
                </div>
                <div className="flex flex-row gap-4 items-start">
                  <Image
                    width={24}
                    src={checkMark}
                    alt="Green check mark"
                  ></Image>
                  <p>
                    <span className="font-semibold">Data Privacy:</span>{" "}
                    implement your own security preferences that keep access
                    permissions aligned with your security policies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full flex flex-col items-end hover:underline text-base">
          <Link className="flex flex-row gap-2 w-fit" href="/solutions/crm">
            <div>Read more about our bespoke CRM offerings</div>
            <Image src={rightArrow} alt="Right arrow icon" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default SanDiegoWholesalersPage;
