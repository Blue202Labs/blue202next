import Image from "next/image";
import { ResultsHeader } from "../components/Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import Link from "next/link";

const EgyptKuwaitHoldingsPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Egypt Kuwait Holdings"
        bg="bg-ekh"
        tags={ResultsTags.ekh}
      />
      <div className="max-w-5xl mx-auto pt-20 pb-56 px-6 text-lg text-slate-600 flex flex-col gap-14">
        <div className="flex flex-col max-w-3xl mx-auto gap-10 items-center md:items-start">
          <p>
            We were enlisted by Egypt-Kuwait Holdings to conduct an audit of
            their website and internal office systems. The objective was to
            identify and solve andy existing security risks and find points for
            optimization. Our approach involved a series of software tests and
            assessments, producing a detailed technical report that provided
            areas for improvement, potential vulnerabilities and bottlenecks.
          </p>
          <p>
            We assessed their data management protocols, system integrations,
            current cybersecurity measures and overall operational
            effectiveness.
          </p>
          <div className="w-full flex flex-col items-end hover:underline pt-8 text-base">
            <Link className="flex flex-row gap-2 w-fit" href="/contact">
              <div>Get your software audited</div>
              <Image src={rightArrow} alt="Right arrow icon" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EgyptKuwaitHoldingsPage;
