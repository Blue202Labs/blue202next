import Image from "next/image";
import { ResultsHeader } from "../Header";
import { ResultsTags } from "../data";
import rightArrow from "/public/icons/right-arrow.svg";
import aspenGroup from "/public/clients/tag-color.png";
import Link from "next/link";

const AspenPage = () => {
  return (
    <article>
      <ResultsHeader
        heading="Aspen Dental"
        bg="bg-people-computer"
        tags={ResultsTags.aspen}
      />
      <div className="max-w-3xl mx-auto pt-20 pb-40 px-6 text-lg text-slate-600 flex flex-col gap-14">
        <h2 className="text-2xl font-semibold text-slate-800">
          Developing Secure Healthcare Applications
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="pt-6 w-1/2">
            <Image
              className="w-full"
              src={aspenGroup}
              alt="The Aspen Group Logo"
            />
          </div>
          <p className="p-8">
            The Aspen Group (TAG) manages over 1,083 dental clinics in the
            United States.
            <br></br>
            <br></br>
            With so much sensitive patient data, TAG needed a secure way to
            transmit sensitive prescription data to printing companies, and to
            have this process managed through a user-friendly employee portal.
          </p>
        </div>
        <p className="text-xl font-medium">
          The primary objective was to develop a platform that allowed
          healthcare professionals to transmit prescription data to printing
          companies, addressing the issues of data integrity and security
          encountered with traditional communication methods.
        </p>
        <p>
          We developed a secure, authenticated API to manage the communications
          between the offices and the printing companies, enabling a direct and
          reliable channel for data exchange. The entire system was hosted on
          HIPAA-compliant servers, guaranteeing the highest standards of data
          protection and privacy.
          <br></br>
          <br></br>
          To secure the system we implemented comprehensive security measures.
          Encryption protocols were employed to safeguard data during
          transmission, and strict access controls were put in place to regulate
          user permissions, defending against unauthorized access and potential
          breaches. The AspenDental Portal served to streamline and secure the
          communication workflows, reducing the possibility for error, all while
          following strict industry regulations.
        </p>
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

export default AspenPage;
