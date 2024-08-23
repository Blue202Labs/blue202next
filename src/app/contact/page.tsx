import { Contact } from "../components/Contact";
import CalendlyEmbed from "../components/CalendlyEmbed";
import { InlineWidget, PopupWidget } from "react-calendly";
import { NeonGradientCard } from "../components/NeonGradientCard";
import rightArrow from "/public/icons/right-arrow-grey.svg";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="py-36 h-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-10 pb-32 px-6 md:px-0">
        <div className="md:mr-14 flex flex-col gap-6 pl-4">
          <h3 className="text-2xl font-semibold text-slate-700">
            Set up a 30 minute <span className="text-blue-600">free</span>{" "}
            consultation and:
          </h3>
          <ul className="pl-4 max-w-72">
            <li className="flex flex-row gap-2">
              <Image width={18} alt="" src={rightArrow} />
              Discuss your needs
            </li>
            <li className="flex flex-row gap-2 items-start">
              <Image className="pt-1.5" width={18} alt="" src={rightArrow} />
              Receive relevant technical insights
            </li>
            <li className="flex flex-row gap-2 items-start">
              <Image className="pt-1.5" width={18} alt="" src={rightArrow} />
              Get a detailed proposal on how we can best help you
            </li>
          </ul>
          <h2 className="max-w-3xl mx-auto text-4xl font-semibold font-body-sans pt-20 text-slate-900">
            Ready to transform your business?
          </h2>
          <div className="flex flex-row gap-2">
            <span className="text-4xl">👉</span>
            <CalendlyEmbed />
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
