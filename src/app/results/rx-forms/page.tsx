import Image from "next/image";
import { ResultsHeader } from "../Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import Link from "next/link";

const SanDiegoWholesalersPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="RxForms"
        bg="bg-people-group"
        tags={ResultsTags.rxForms}
      />
      <div className="max-w-5xl mx-auto pt-20 pb-56 px-6 text-lg text-slate-600 flex flex-col gap-14">
        <div className="flex flex-col max-w-3xl mx-auto gap-10 items-center md:items-start">
          <p className="text-xl font-medium">
            Founded in 1988, RxForms emerged as a pioneering Prescription
            Printing website, earning recognition from regulatory bodies like
            the DEA and DOJ. We were entrusted to lead their digital
            infrastructure transformation.
          </p>
          <p>
            We successfuly developed an eCommerce system that allowed the
            company to standardize online ordering processes. We implemented and
            deployed a custom web interface which allowed for a live preview of
            prescription labels, which allows for customers to edit and preview
            the resulting labels in real-time. As the system involved healthcare
            products, we ensured compliance with strict industry regulations.
            The digital solution serves to reduce errors in orders whilst also
            streamlining the whole process.
          </p>
        </div>
        <div className="w-full flex flex-col items-end hover:underline text-base">
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

export default SanDiegoWholesalersPage;
