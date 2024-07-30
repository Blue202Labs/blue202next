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
      <section className="relative h-screen md:h-[50rem] pt-10 md:pt-20">
        <Image
          alt="Device app mockups"
          className="z-10 absolute h-screen md:h-[50rem] object-cover"
          src={fintechMockup}
        />
        <div className="absolute z-20 w-full h-full bg-gradient-to-tr from-white md:from-black md:opacity-15 to-[60%]"></div>
        <div className="z-30 relative top-20 flex flex-col h-full justify-end md:justify-center p-8 pb-36 md:p-40">
          <h1 className="text-6xl md:min-w-96 font-bold w-fit mx-auto md:text-6xl md:bg-white rounded-3xl md:px-12 py-10 drop-shadow-md font-body-sans text-slate-800">
            Build the next unicorn with Blue202. 🚀
          </h1>
        </div>
      </section>
      <div className="max-w-5xl mx-auto flex flex-col gap-32 px-4 py-20 pb-48 text-slate-700">
        <section className="pt-36 flex flex-col justify-center text-center gap-8">
          <h2 className="text-4xl">
            Got an idea? Let&apos;s build it together.
          </h2>
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
              h-full bg-cover bg-right rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl bg-blue-abstract p-8 lg:p-10 lg:pt-20 min-h-20 md:min-w-96"
            >
              The all-in-one package for your entrepreneurial dreams.
            </p>
            <p className="lg:text-lg text-slate-700 p-10 md:pt-20 pr-10 font-light">
              We are thrilled to offer an end-to-end service for all
              entrepreneurs who are eager to get their idea out into the world.
              We know the struggle of finding a technical cofounder, and
              that&apos;s exactly why we decided to curated this package.
              <br></br>
              <br></br>With the Blue202 Startup Development Package, you recieve{" "}
              <b>everything you need</b> to launch your business idea, from
              ideation to prototyping and deployment, and even support in
              developing your business plan and investor pitches.
            </p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row md:h-[40rem] gap-8 py-20">
          <div className="border w-full rounded-2xl drop-shadow-sm bg-white flex flex-col py-10 px-6">
            <h2 className="font-medium text-2xl pb-2 place-self-center">
              Product Development
            </h2>
            <div className="w-full border-b"></div>
            <p className="py-6">
              Our experienced Startup Development Team will evolve your business
              plan to refine your idea and product.
            </p>
            <ul className="list-disc pl-10">
              <li>Recieve valuable insights from industry experts</li>
              <li>Get a detailed market analysis and strategy</li>
              <li>Define your financial projections and needs</li>
            </ul>
          </div>
          <div className="border w-full rounded-2xl drop-shadow-sm bg-white flex flex-col py-10 px-6">
            <h2 className="font-medium text-2xl pb-2 place-self-center">
              MVP Development
            </h2>
            <div className="w-full border-b"></div>
            <p className="py-6">
              Our MVP development services are designed to transform your
              concepts into functional products quickly and efficiently,
              allowing you to test and iterate rapidly in the market.
            </p>
            <Link
              className="flex flex-row gap-2 w-fit font-semibold hover:gap-4"
              href="/solutions/bespoke-software"
            >
              <div>Read more</div>
              <Image width={16} src={rightArrow} alt="Right arrow icon" />
            </Link>
          </div>
          <div className="border w-full rounded-2xl drop-shadow-sm bg-white flex flex-col py-10 px-6">
            <h2 className="font-medium text-2xl pb-2 place-self-center">
              Product Presentation
            </h2>
            <div className="w-full border-b"></div>
            <p className="py-6">
              This part of the package includes your own custom website to
              showcase your product as well as a pitch deck to use for your
              investor pitches, depending on your investment strategies.
            </p>
            <div>
              Depending on your needs, you can also add-on{" "}
              <Link
                href="/solutions/digital-marketing"
                className="font-semibold hover:text-slate-500"
              >
                digital marketing services
              </Link>
              , such as content creation and marketing strategy development.
            </div>
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
              business&apos;s requirements and goals. We love to hear about all
              your visions and ideas.
            </Approach>
            <Approach heading="Business Development" index={2}>
              We will provide expert insights along with a detailed business
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
