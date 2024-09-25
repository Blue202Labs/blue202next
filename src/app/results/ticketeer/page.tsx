import Link from "next/link";
import { ResultsHeader } from "../components/Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import Image from "next/image";
import ticketeerSubscriptions from "/public/images/ticketeer/ticketeer-subscriptions.png";
import { ResultsLink } from "../components/ResultsLink";
import { Gallery } from "../components/Gallery";
import { ticketeerData } from "../../../../public/images/ticketeer";
import {
  BespokeSoftwareLink,
  WebDevelopmentLink,
} from "../components/SolutionsLink";

const TicketeerPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Ticketeer"
        bg="bg-ticketeer"
        tags={ResultsTags.ticketeer}
      />
      <div className="flex flex-col gap-20 pt-20 pb-64 max-w-5xl mx-auto text-slate-600">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4">
          <ResultsLink
            heading="Website"
            bg={ticketeerSubscriptions}
            route="https://theticketeer.com"
          />
          <p className="text-xl font-semibold text-slate-800 pt-12">
            We teamed up with the Ticketeer SaaS event management service to
            build a website to manage their subscribers and showcase their
            product.
          </p>
          <p className="">
            We created a user-friendly, responsive site to sell their software
            product. The solution used the Stripe payment API and delivered an
            admin panel to manage the website content and different subscription
            plans. Subscribed users have access to a dashboard where they can
            configure their payment and subscription settings.
          </p>
          <div className="flex flex-row flex-wrap gap-4 py-10">
            {[
              "React",
              "JavaScript",
              "MongoDB",
              "NodeJS",
              "Stripe",
              "SendGrid",
            ].map((tech, i) => (
              <div key={`tech-${i}`} className="px-4 py-2 rounded-lg border">
                {tech}
              </div>
            ))}
          </div>
          <div className="border rounded-lg p-10 pb-16">
            <h2 className="font-semibold text-xl pb-8 underline">The task:</h2>
            <ul className="pl-8 list-disc font-body-sans">
              <li>
                Update the current website, optimizing SEO, design and
                discoverability.
              </li>
              <li>Integrate Stripe to get payments and subscriptions.</li>
              <li>Securely store user data in a database.</li>
              <li>
                Develop an admin panel and CMS to manage users and content.
              </li>
              <li>
                Host and deploy the infrastructure on AWS, and create managed
                CI/CD pipelines.
              </li>
            </ul>
          </div>
          <Gallery className="py-20" imageData={ticketeerData} />
          <WebDevelopmentLink />
          <BespokeSoftwareLink />
        </div>
      </div>
    </article>
  );
};

export default TicketeerPage;
