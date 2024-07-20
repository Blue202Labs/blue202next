import { PageHero } from "../components/PageHero";
import rightArrow from "/public/icons/right-arrow.svg";
import checkMark from "/public/icons/checkMark.svg";
import { Heading } from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { Approach } from "../components/OurApproach";
import fintechMockup from "/public/images/fintech-mockup.png";

const StartupDevelopment = () => {
  return (
    <>
      <section className="relative h-[40rem] pt-20">
        <Image
          alt="Device app mockups"
          className="z-10 absolute h-[40rem] object-cover"
          src={fintechMockup}
        />
        <div className="absolute z-20 w-full h-full bg-gradient-to-tr from-black opacity-15 to-[60%]"></div>
        <div className="z-30 relative top-20 flex flex-col h-full justify-center p-40">
          <h1 className="text-6xl bg-white rounded-2xl px-12 py-10 drop-shadow-md font-body-sans text-slate-800">
            Build the next unicorn with Blue202. 🚀
          </h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto flex flex-col gap-32 px-4 py-20 pb-48 text-slate-700">
        <section className="pt-36 flex flex-col justify-center text-center gap-8">
          <h2 className="text-4xl">Got an idea? Let's build it together.</h2>
          <h3 className="text-2xl font-light max-w-3xl mx-auto">
            Our startup development package offers everything you need to get
            your idea off the ground.
          </h3>
          <Link
            href="/contact"
            className="z-30 bg-cyan-400 text-slate-700 mt-8 py-3 px-8 rounded-full drop-shadow-lg hover:bg-cyan-500 font-semibold font-body-sans w-fit mx-auto"
          >
            Contact Us
          </Link>
        </section>
        <section className="drop-shadow-lg bg-white border border-gray-200 w-full lg:h-[28rem] rounded-xl flex flex-col gap-10 my-10">
          <div className="flex-col lg:flex-row flex lg:gap-10 justify-between h-full">
            <p
              className="font-body-sans font-semibold text-2xl lg:text-3xl text-white
              h-full bg-cover bg-right rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl bg-blue-abstract p-8 lg:p-10 lg:pt-20 min-h-20 min-w-96"
            >
              The all-in-one package for your entrepreneurial dreams.
            </p>
            <p className="lg:text-lg text-slate-700 pt-20 pr-10 font-light">
              We are thrilled to offer an end-to-end service for all
              entrepreneurs who are eager to get their idea out into the world.
              We know the struggle of finding a technical cofounder, and
              that&apos;s exactly why we decided to curated this package.
              <br></br>
              <br></br>With the Blue202 Startup Development Package, you recieve{" "}
              <b>everything you need</b> to launch your buisiness idea, from
              ideation to prototyping and deployment, and even support in
              developing your buisiness plan and investor pitches.
            </p>
          </div>
        </section>
        <section>
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
                  <span className="font-semibold">Great value:</span> Let&apos;s
                  keep the spending to the VCs 😉
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Heading>Our Approach:</Heading>
          <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 justify-center gap-8 py-10">
            <Approach heading="Consultation" index={1}>
              We start with a detailed consultation to understand your
              buisiness&apos;s requirements and goals. We love to hear about all
              your visions and ideas.
            </Approach>
            <Approach heading="Buisiness Development" index={2}>
              We will provide expert insights along with a detailed buisiness
              plan to help you improve your idea and strategy.
            </Approach>
            <Approach heading="MVP Design and Development" index={3}>
              Before starting development, we will give you the opportunity to
              review the plan and request any changes. Once you give the
              &apos;OK&apos;, our developers will bring the design to life.
            </Approach>
            <Approach heading="Pitch Support" index={3}>
              We will design a strategic pitch deck, aligned with your brand
              story and cause.
            </Approach>
          </div>
        </section>
      </div>
    </>
  );
};

export default StartupDevelopment;
