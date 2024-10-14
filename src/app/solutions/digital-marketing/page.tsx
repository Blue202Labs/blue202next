import { Heading } from "../../components/Heading";
import { PageHero } from "../components/PageHero";
import { Metadata } from "next";
import { breadCrumbList } from "../schemaOrg";
import { schemaWebpage } from "@/app/schemaOrg";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description:
    "Boost your online presence today! Receive a customized action plan designed to effectively reach and engage your target audience",
  openGraph: {
    title: "Digital Marketing Services",
    description:
      "Boost your online presence today! Receive a customized action plan designed to effectively reach and engage your target audience",
  },
};

const DigitalMarketing = () => {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadCrumbList("digital-marketing")),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              schemaWebpage(
                "Social Media Post Creation Packages",
                "We will design posts for your social media platforms on a weekly basis to boost sales and engagement.",
                "/solutions/digital-marketing"
              )
            ),
          }}
        />
      </head>
      <PageHero
        heading="Boost traffic, leads and revenue."
        description="Upgrade your digital marketing strategy today."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20 pt-20">
        <section>
          <Heading>Digital Marketing Strategy:</Heading>
          <div className="flex flex-col justify-between max-w-4xl mx-auto h-full pt-20 pb-24 gap-20 px-8">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <h4 className="font-bold text-2xl md:w-2/5">SEO Audit</h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Get advanced insights and analytics into your web SEO, traffic
                and customer behaviors.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <h4 className="font-bold text-2xl md:w-2/5">
                Website Review & Upgrade
              </h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                We&apos;ll review your current online presence and propose
                changes and recommendations which we are prepared to implement
                at your request.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <h4 className="font-bold text-2xl md:w-2/5">Analytics Setup</h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                We can setup advanced analytics to monitor your site traffic,
                equipping you with the tools you need for success.
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <h4 className="font-bold text-2xl md:w-2/5">
                Social Media Campaign
              </h4>
              <p className="md:w-1/2 text-slate-600 font-body-sans text-xl">
                Receive a social media post campaign and roadmap, designed and
                prepared by our talented team.
              </p>
            </div>
          </div>
        </section>
        <section className="px-4">
          <div className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[26rem] rounded-xl flex flex-col gap-10">
            <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
              <p
                className="font-body-sans font-semibold text-3xl text-white
              h-full bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-blue-abstract bg-center p-8 md:p-10 md:pt-20 min-h-40 md:min-w-96"
              >
                Blue202 to lead your digital transformation.
              </p>
              <div className="flex flex-col gap-8 text-lg text-slate-700 p-8 pb-20 pt-10 md:pt-20">
                <p>
                  Our Digital Marketing Growth Package is designed to accelerate
                  your online presence, drive targeted traffic, and boost your
                  business&apos;s growth through tailored strategies and
                  cutting-edge techniques. We will provide a detailed analysis
                  and audit of your current presence, market research and
                  evaluation into your most relevant customers, and tailor an
                  approach to redevelop your digital brand to best target these
                  individuals. We offer all services as a comprehensive package
                  or individually, based on your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-8 md:px-0 my-20 mb-48 font-body-sans max-w-2xl mx-auto">
          <div className="flex flex-row gap-6 place-items-end pl-24">
            <div className="h-10 w-8 bg-gray-300"></div>
            <div className="h-20 w-8 bg-gray-300"></div>
            <div className="h-28 w-8 bg-gray-300"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-medium text-center">
            Ready to take your business to the next level?
          </h3>
          <p className="font-default text-gray-600 py-8 md:text-lg font-light text-center ">
            Upgrade your online presence today and receive a detailed,
            customized action plan designed to effectively reach and engage your
            target audience. If you seek growth—{" "}
            <b className="text-blue-800">you’ve found the right place.</b>
          </p>
          <div className="w-fit mx-auto pt-8">
            <a
              href="/contact"
              className="bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalMarketing;
