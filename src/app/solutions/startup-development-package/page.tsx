import { PageHero } from "../components/PageHero";
import rightArrow from "/public/icons/right-arrow.svg";
import checkMark from "/public/icons/checkMark.svg";
import { Heading } from "../../components/Heading";
import Image from "next/image";
import Link from "next/link";
import { Approach } from "../components/OurApproach";

const StartupDevelopment = () => {
  return (
    <>
      <PageHero
        heading="Got an idea? Let's build it together."
        description="Our startup development package offers everything you need to get your idea off the ground."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-32 px-4 py-20 pb-48 text-slate-700">
        <section className="flex flex-col md:flex-row md:h-[30rem] gap-8 pt-10">
          <div className="border w-full rounded-2xl drop-shadow-md bg-white flex flex-col py-10 px-6">
            <h2 className="font-medium text-2xl pb-2 place-self-center">
              Product Development
            </h2>
            <div className="w-full border-b"></div>
            <p className="py-6">
              Our experienced Startup Development Team will evolve your
              buisiness plan to refine your idea and product.
            </p>
            <ul className="list-disc pl-10">
              <li>Recieve valuable insights from industry experts</li>
              <li>Get a detailed market analysis and strategy</li>
              <li>Define your financial projections and needs</li>
            </ul>
          </div>
          <div className="border w-full rounded-2xl drop-shadow-md bg-white flex flex-col py-10 px-6">
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
          <div className="border w-full rounded-2xl drop-shadow-md bg-white flex flex-col py-10 px-6">
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
          <h2 className="font-semibold text-3xl w-fit mx-auto font-body-sans">
            An all-in-one package for your entrepreneurial dreams.
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:font-light py-10 px-6">
            We are thrilled to offer an end-to-end service for all entrepreneurs
            who want to get their idea out into the world. We know the struggle
            of finding a technical cofounder, and that's exactly why we decided
            to curated this package. With the Blue202 Startup Development
            Package, you recieve everything you need to launch your buisiness
            idea, from ideation to prototyping and deployment, and even support
            in developing your buisiness plan and investor pitches.
          </p>
        </section>
        <section>
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
              review the plan and request any changes. Once you give the 'OK',
              our developers will bring the design to life.
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
