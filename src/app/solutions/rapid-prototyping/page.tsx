import { PageHero } from "../components/PageHero";
import {
  TechStack,
  android,
  flutter,
  ios,
  javaScript,
  react,
} from "../components/TechStack";
import checkMark from "/public/icons/checkMark.svg";
import { Heading } from "../../components/Heading";
import Image from "next/image";

const MvpDevelopment = () => {
  return (
    <>
      <PageHero
        heading="Rapid and Reliable Prototyping."
        description="For when you just need to get it done, now."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20 px-4 pb-20">
        <TechStack tech={[ios, android, react, flutter, javaScript]} />
        <section className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[26rem] rounded-xl flex flex-col gap-10">
          <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
            <p
              className="font-body-sans font-semibold text-2xl md:text-3xl text-white
              h-full bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-blue-abstract bg-center p-8 md:p-10 md:pt-20 min-h-40 md:min-w-96"
            >
              Prototyping can validate your idea and save your money.
            </p>
            <div className="flex flex-col gap-8 md:text-lg text-slate-700 p-8 pb-20 pt-10 md:pt-20">
              <p>
                Through prototyping you can quickly transform your concept into
                a tangible model, allowing you to test functionality and get
                feedback early in the development process. This approach helps
                identify potential issues and areas for improvement before
                investing significant time and resources into full-scale
                production. With a prototype, you can refine your design,
                enhance user experience, and ensure that the product meets
                market demands.
              </p>
            </div>
          </div>
        </section>
        <section className="my-16">
          <Heading>We provide:</Heading>
          <div className="flex flex-col gap-8 lg:text-xl text-slate-700 pt-10 max-w-3xl mx-auto">
            <div className="flex flex-col gap-6 md:text-xl px-8 lg:px-10 pb-10">
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Speedy delivery:</span>{" "}
                  We&apos;ll get it done fast so you can get your idea off the
                  page and onto your fingertips ASAP.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Expert developers:</span> We
                  know what we are doing.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Great value:</span>{" "}
                  Competitive rates without compromising on quality.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MvpDevelopment;
