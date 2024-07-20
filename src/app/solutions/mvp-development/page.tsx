import { PageHero } from "../components/PageHero";
import {
  TechStack,
  express,
  fastify,
  flutter,
  javaScript,
  nextjs,
  node,
  php,
  react,
  sql,
  typeScript,
} from "../components/TechStack";
import checkMark from "/public/icons/checkMark.svg";
import { Heading } from "../../components/Heading";
import Image from "next/image";

const MvpDevelopment = () => {
  return (
    <>
      <PageHero
        heading="Got an idea? Let's build it together."
        description=""
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20 px-4 pb-20">
        <TechStack
          andMore={true}
          tech={[
            javaScript,
            typeScript,
            react,
            flutter,
            node,
            express,
            fastify,
            sql,
            nextjs,
            php,
          ]}
        />
        <section className="drop-shadow-md bg-white border border-gray-200 w-full md:h-[26rem] rounded-xl flex flex-col gap-10">
          <div className="flex-col md:flex-row flex md:gap-10 justify-between h-full">
            <p
              className="font-body-sans font-semibold text-2xl md:text-3xl text-white
              h-full bg-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl bg-blue-abstract bg-center p-8 md:p-10 md:pt-20 min-h-40 md:min-w-96"
            >
              End-to-end MVP development services, from planning to deployment.
            </p>
            <div className="flex flex-col gap-8 md:text-lg text-slate-700 p-8 pb-20 pt-10 md:pt-20">
              <p>
                Need some help to prototype your idea? Our MVP development
                services are designed to transform your concepts into functional
                products quickly and efficiently, allowing you to test and
                iterate rapidly in the market.
              </p>
              <h3 className="font-medium">
                Partner with us to turn your ideas into reality.
              </h3>
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
                  <span className="font-semibold">Speedy delivery:</span> We'll
                  get it done fast so you can get your idea off the page and
                  onto your fingertips ASAP.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Support:</span> Our
                  experienced Startup Development Team is avaliable to give you
                  advice on your product and MVP.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Iterative process:</span>{" "}
                  Together we will work back-and-forth, refining and enhancing
                  your idea through continuous feedback and iterations.
                </p>
              </div>
              <div className="flex flex-row gap-4 items-start">
                <Image width={24} src={checkMark} alt="Check mark icon"></Image>
                <p>
                  <span className="font-semibold">Great value:</span> Let's keep
                  the spending to the VCs 😉
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
