import { PageHero } from "./components/PageHero";
import { Anchor } from "../components/Anchor";
import { Metadata } from "next";
import opengraphImage from "/public/images/opengraph-image.jpg";
import { BreadcrumbList, WithContext } from "schema-dts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blue202labs.com"),
  title: "Our Web Solutions",
  description:
    "View our range of Web Development and Mobile App Development Services.",
  openGraph: {
    title: "Our Web Solutions",
    description:
      "View our range of Web Development and Mobile App Development Services",
    images: opengraphImage.src,
  },
};

const breadCrumbList: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://blue202labs.com/solutions/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://blue202labs.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solutions",
    },
  ],
};

const SolutionsPage = () => {
  return (
    <>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbList) }}
        />
      </head>
      <div className="bg-slate-100">
        <PageHero
          heading="Bring your vision to life"
          description="Have a look through some of our most popular services"
        />
        <div className="max-w-4xl mx-auto md:py-10 flex flex-col gap-10 pb-40">
          <div className="flex flex-col justify-between h-full pt-20 pb-24 px-10 gap-10 md:gap-10 md:p-20">
            <div className="flex flex-col gap-4 min-h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
              <div className="flex flex-col gap-6 md:w-1/2 pr-6">
                <h4 className="font-bold text-2xl py-2 md:py-0">Web Apps</h4>
                <p className="text-lg text-slate-500">
                  Powered by the web, make anything and everything.
                </p>
              </div>
              <div className="text-slate-600 font-body-sans text-xl flex flex-col gap-2 md:w-1/2 pt-8 md:pt-0 md:pl-10 border-t-2 md:border-t-0 border-t-blue-400 md:border-l-4 border-l-blue-500 h-full">
                <Anchor route="/solutions/bespoke-software">
                  Bespoke software
                </Anchor>
                <Anchor route="/solutions/crm">CRM</Anchor>
                <Anchor route="/solutions/api">API development</Anchor>
                <Anchor route="/solutions/hosting">Hosting</Anchor>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
              <div className="flex flex-col gap-6 md:w-1/2 pr-6">
                <h4 className="font-bold text-2xl py-2 md:py-0">
                  For Startups
                </h4>
                <p className="text-lg text-slate-500">
                  Our passion is bringing innovative ideas to life.
                </p>
              </div>
              <div className="text-slate-600 font-body-sans text-xl flex flex-col gap-2 md:w-1/2 pt-8 md:pt-0 md:pl-10 border-t-2 md:border-t-0 border-t-blue-400 md:border-l-4 border-l-blue-500 h-full">
                <Anchor route="/solutions/startup-development-package">
                  Startup Development Package
                </Anchor>
                <Anchor route="/solutions/mvp-development">
                  MVP Development
                </Anchor>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
              <div className="flex flex-col gap-6 md:w-1/2 pr-6">
                <h4 className="font-bold text-2xl py-2 md:py-0">Websites</h4>
                <p className="text-lg text-slate-500">
                  We love making beautiful, responsive websites.
                </p>
              </div>
              <div className="text-slate-600 font-body-sans text-xl flex flex-col gap-2 md:w-1/2 pt-8 md:pt-0 md:pl-10 border-t-2 md:border-t-0 border-t-blue-400 md:border-l-4 border-l-blue-500 h-full">
                <Anchor route="/solutions/websites">Custom websites</Anchor>
                <Anchor route="/solutions/wordpress">Wordpress sites</Anchor>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
              <div className="flex flex-col gap-6 md:w-1/2 pr-6">
                <h4 className="font-bold text-2xl py-2 md:py-0">
                  Mobile Development
                </h4>
                <p className="text-lg text-slate-500">Why stop at websites?</p>
              </div>
              <div className="text-slate-600 font-body-sans text-xl flex flex-col gap-2 md:w-1/2 pt-8 md:pt-0 md:pl-10 border-t-2 md:border-t-0 border-t-blue-400 md:border-l-4 border-l-blue-500 h-full">
                <Anchor route="/solutions/mobile-app-development">
                  Mobile App Development
                </Anchor>
                <Anchor route="/solutions/rapid-prototyping">
                  Rapid Prototyping
                </Anchor>
              </div>
            </div>
            <div className="flex flex-col gap-4 min-h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
              <div className="flex flex-col gap-6 md:w-1/2 pr-6">
                <h4 className="font-bold text-2xl py-2 md:py-0">
                  UI/UX & Marketing
                </h4>
                <p className="text-lg text-slate-500">
                  Boost traffic, leads and revenue. We lead digital
                  transformations.
                </p>
              </div>
              <div className="text-slate-600 font-body-sans text-xl flex flex-col gap-2 md:w-1/2 pt-8 md:pt-0 md:pl-10 border-t-2 md:border-t-0 border-t-blue-400 md:border-l-4 border-l-blue-500 h-full">
                <Anchor route="/solutions/web-design">Web design</Anchor>
                <Anchor route="/solutions/digital-marketing">
                  Digital marketing strategy
                </Anchor>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsPage;
