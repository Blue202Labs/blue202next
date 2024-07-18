import { Ultra } from "next/font/google";
import { PageHero } from "./components/PageHero";
import Link from "next/link";
import { Anchor } from "../components/Anchor";

const SolutionsPage = () => {
  return (
    <div className="bg-slate-100">
      <PageHero
        heading="Bring your vision to life"
        description="Have a look through some of our most popular services"
      />
      <div className="max-w-4xl mx-auto md:py-10 flex flex-col gap-10 pb-40">
        <div className="flex flex-col justify-between h-full pt-20 pb-24 px-10 gap-10 md:gap-10 md:p-20">
          <div className="flex flex-col gap-4 h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
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
          <div className="flex flex-col gap-4 h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
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
          <div className="flex flex-col gap-4 h-96 md:flex-row justify-between bg-white p-10 pb-20 md:p-20 rounded-xl drop-shadow-sm border">
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
  );
};

export default SolutionsPage;
