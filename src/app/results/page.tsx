import { ResultsPost } from "./components/Post";
import { ResultsTags } from "./data";
import sahilyTableMockup from "/public/images/sahily-mockup-table.png";
import aspenDental from "/public/images/Aspen-Dental-scaled.jpeg";
import upsPortal from "/public/images/ups-store/ups-portal.jpeg";
import zyntexGroup from "/public/images/people-table.jpg";
import sizzler from "/public/images/sizzlers/sizzler-hero.png";
import sanDiego from "/public/images/logistics.jpg";
import sahily from "/public/images/sahily/sahily-lp.png";
import ticketeer from "/public/images/ticketeer/ticketeer-hero.png";
import rxForms from "/public/images/rxforms/rxforms-hero.png";
import ekh from "/public/images/ekh.jpg";
import Image from "next/image";
import { BorderBeam } from "../components/BorderBeam";

const ResultsPage = () => {
  return (
    <div>
      <div className="relative z-30 w-full h-[40rem] md:h-[60rem] text-slate-800 pt-10">
        <Image
          className="absolute z-20 w-full h-full object-cover opacity-40"
          src={sahilyTableMockup}
          alt="Stylized render of an app on a white table"
        />
        <div
          className="flex flex-col justify-center 
      items-center text-center gap-4 h-full"
        >
          <h1 className="z-30 mt-10 mx-auto text-5xl md:text-8xl bg-left-bottom font-body-sans text-[#1a0faa] font-extrabold">
            Our Work
          </h1>
          <p className="z-30 px-8 lg:px-0 lg:max-w-2xl text-lg lg:text-2xl font-light">
            We&apos;ll let it speak for itself.
          </p>
          <a
            href="/contact"
            className="z-30 bg-cyan-400 text-slate-700 text-sm md:text-base mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans"
          >
            Contact Us
          </a>
        </div>
        <BorderBeam size={100} />
      </div>
      <div className="-top-52 relative z-40 flex flex-col md:grid md:grid-cols-2 max-w-6xl mx-auto gap-8 py-24 px-4 overflow-x-hidden">
        <ResultsPost
          heading="The UPS Store Employee Portal"
          route="ups-store"
          className="col-span-2"
          tags={ResultsTags.ups}
          bg={upsPortal}
          big={true}
        />
        <ResultsPost
          heading="Sahily App"
          route="sahily-app"
          tags={ResultsTags.sahily}
          bg={sahily}
        />
        <ResultsPost
          heading="Ticketeer"
          route="ticketeer"
          tags={ResultsTags.ticketeer}
          bg={ticketeer}
        />
        <ResultsPost
          heading="Sizzler Egypt"
          tags={ResultsTags.sizzler}
          bg={sizzler}
          route="sizzler-egypt"
          className="col-span-2"
          big={true}
        />
        <ResultsPost
          heading="Aspen Dental"
          route="aspen-dental"
          tags={ResultsTags.aspen}
          bg={aspenDental}
        />
        <ResultsPost
          heading="San Diego Wholesalers"
          tags={ResultsTags.sanDiego}
          bg={sanDiego}
          route="san-diego-wholesalers"
          className=""
        />
        <ResultsPost
          heading="RxForms"
          tags={ResultsTags.rxForms}
          bg={rxForms}
          route="rx-forms"
        />
        <ResultsPost
          heading="Egypt Kuwait Holdings"
          tags={ResultsTags.ekh}
          bg={ekh}
          route="egypt-kuwait-holdings"
        />
        <ResultsPost
          heading="Zyntex Group"
          route="zyntex-group"
          tags={ResultsTags.zyntex}
          bg={zyntexGroup}
        />
      </div>
    </div>
  );
};

export default ResultsPage;
