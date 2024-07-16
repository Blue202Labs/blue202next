import Image from "next/image";
import { ResultsHeader } from "../Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import Link from "next/link";

const UPSStorePage = () => {
  return (
    <article>
      <ResultsHeader
        heading="The UPS Store"
        bg="bg-ups-truck"
        tags={ResultsTags.ups}
      />
      <div className="max-w-3xl mx-auto pt-20 pb-56 px-6 text-lg text-slate-600 flex flex-col gap-14">
        <h2 className="text-2xl font-semibold text-slate-800">
          The UPS Store Employee Portal:{" "}
          <span className="font-normal">
            a comprehensive dashboard designed to empower employees, ensuring
            each store is set up for success.
          </span>
        </h2>
        <section className="flex flex-col gap-8">
          <p>
            Trusted by UPS to develop an employee management system designed to
            centralize information whilst also providing utilities to ensure the
            operations at each branch runs smoothly. The UPS store has over
            5,268 locations across the United States and Canada.
          </p>
          <h3>
            We successfully implemented the following features in the
            employee-facing dashboard:
          </h3>
          <div className="flex flex-col justify-between max-w-4xl mx-auto h-full pt-20 pb-24 px-10 gap-14 md:gap-20">
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">Knowledge Base</h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Developed an information reservoir for employees, with
                role-based data access.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">
                Learning Management System
              </h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Facilitated the training and onboarding of employees, tracking
                their progress and course completion.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">Ticketing Portal</h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Provided a consistent avenue for employees to submit requests
                for inventory restocks or maintenance.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:flex-row justify-between">
              <h4 className="font-bold text-2xl md:w-2/5">
                Anonymous Feedback Submission
              </h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Implemented a portal for employees to anonymously submit
                complaints or praises.
              </p>
            </div>
          </div>
        </section>
        <p>
          To streamline operations company-wide, we also implemented an Activity
          Page and automated daily reports.
        </p>
        <section className="flex flex-col md:flex-row gap-8 md:divide-x-[1px]">
          <div className="md:pr-8 md:w-1/2">
            <h3 className="text-xl font-semibold pb-2">Activity Page</h3>
            <p>
              Designed to track and augment user engagement while also serving
              as an effective channel for company-wide updates, acting as a
              real-time bulletin board for important announcements and policy
              changes.
            </p>
          </div>
          <div className="md:pl-8 md:w-1/2">
            <h3 className="text-xl font-semibold pb-2">End of Day Reporting</h3>
            <p>
              A system that generates automated daily reports which are sent to
              the relevant management team, offering a comprehensive overview of
              a branch's daily activities.
            </p>
          </div>
        </section>
        <div className="w-full flex flex-col items-end hover:underline text-base pt-8">
          <Link
            className="flex flex-row gap-2 w-fit"
            href="/solutions/bespoke-software"
          >
            <div>Read more about our bespoke software offerings</div>
            <Image src={rightArrow} alt="Right arrow icon" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UPSStorePage;
