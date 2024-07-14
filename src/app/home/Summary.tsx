import { CSSProperties, ReactNode } from "react";
import deal from "/public/images/deal-london.svg";
import ideaBranstorm from "/public/images/idea-brainstorm-london.svg";
import prototyping from "/public/images/prototyping-london.svg";
import webDevelopment from "/public/images/web-development-london-resized.svg";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import Image from "next/image";

export const Summary = () => {
  return (
    <section className="max-w-7xl mx-auto h-full md:h-[30rem] my-24 md:my-40">
      <div className="mx-auto text-center px-10 md:px-0">
        <h3 className="font-body-sans font-semibold text-3xl md:text-4xl text-slate-700">
          Web solutions for every buisiness need.
        </h3>
        <div className="flex flex-col md:flex-row md:py-20 divide-y-2 md:divide-y-0 md:divide-x-2">
          <AboutCard image={deal} heading="Competitive Rates">
            Delivering high value at an affordable cost.
          </AboutCard>
          <AboutCard image={prototyping} heading="MVP Prototyping">
            Taking your ideas out of the page and onto your screens.
          </AboutCard>
          <AboutCard image={ideaBranstorm} heading="Enterprise Web Apps">
            If it runs on a browser, we got it handled.
          </AboutCard>
          <AboutCard image={webDevelopment} heading="Website Development">
            Long story short: we love to make pretty things.
          </AboutCard>
        </div>
        <a
          href="#services"
          className="flex flex-col mx-auto w-fit items-center pt-8 md:pt-0"
        >
          <div className="w-fit md:text-xl bg-blue-700 rounded-xl px-6 py-2 text-white border-2 border-black hover:bg-blue-800 active:bg-blue-800">
            Learn more
          </div>
        </a>
      </div>
    </section>
  );
};

const AboutCard: React.FC<{
  image: string;
  heading: string;
  children: ReactNode;
}> = ({ image, heading, children }) => {
  const height = useCheckMobileScreen() ? "100px" : "120px";

  return (
    <div className="px-10 py-10 md:py-4 md:w-[20rem] md:h-72 text-left gap-2 flex flex-col place-items-center">
      <Image
        src={image}
        style={{ height: height, width: "fit" } as CSSProperties}
        alt={`Graphic representing ${heading}`}
      ></Image>
      <div className="flex flex-col text-center gap-1">
        <h4 className="text-xl font-medium text-blue-800 pt-3 font-mono">
          {heading}
        </h4>
        <p className="font-light text-center text-slate-700">{children}</p>
      </div>
    </div>
  );
};
