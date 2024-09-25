import Image from "next/image";
import { ResultsHeader } from "../components/Header";
import { ResultsTags } from "../data";
import Link from "next/link";
import rightArrow from "/public/icons/right-arrow.svg";

const ZyntexPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Zyntex Group"
        bg="bg-people-table"
        tags={ResultsTags.zyntex}
      />
      <div className="max-w-3xl mx-auto pt-20 pb-56 px-6 text-lg text-slate-600 flex flex-col gap-10">
        <p className="text-slate-900 font-medium">
          We partnered with The Zyntex Group, a real estate company, on business
          development and marketing strategy. Our analysts worked directly with
          Zyntex to understand their industry challenges and assist in devising
          a comprehensive plan.
        </p>
        <p>
          Our tailored approach to Business Development involved an in-depth
          analysis of The Zyntex Group&apos;s current operations, market
          positioning, and growth objectives. Through one-on-one sessions with
          their team, we identified strategic areas for expansion, optimizing
          internal processes, and potential strategic partnerships. The outcome
          was a bespoke Business Development plan that served as a roadmap for
          Zyntex Group&apos;s sustained growth and success.
        </p>
        <p>
          Through a detailed assessment of their target audience, market trends,
          and competitive landscape, we crafted a focused marketing strategy
          encompassing digital and traditional channels, ensuring maximum
          visibility, lead generation, and brand positioning for The Zyntex
          Group.
        </p>
        <h3 className="font-medium text-xl">
          The process provided a clear direction for sustained growth, enabling
          The Zyntex Group to not only meet but exceed their objectives in the
          dynamic and challenging realty sector.
        </h3>
        <div className="w-full flex flex-col items-end hover:underline text-base pt-8">
          <Link
            className="flex flex-row gap-2 w-fit"
            href="/solutions/digital-marketing"
          >
            <div>Read more about our digital marketing services</div>
            <Image src={rightArrow} alt="Right arrow icon" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ZyntexPage;
