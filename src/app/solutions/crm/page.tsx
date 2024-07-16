import { Heading } from "../../components/Heading";
import { Approach } from "../components/OurApproach";
import { PageHero } from "../components/PageHero";
import {
  TechStack,
  aws,
  express,
  fastify,
  javaScript,
  nextjs,
  node,
  php,
  react,
  sql,
  typeScript,
} from "../components/TechStack";
import checkMark from "/public/icons/checkMark.svg";
import { SoftwarePrinciples } from "../components/Principles";
import Image from "next/image";
import { ReviewCard } from "../../components/ReviewCard";

const CRM = () => {
  return (
    <>
      <PageHero
        heading="Transform Your Business with Cutting-Edge CRM Solutions"
        description="Boost Engagement, Drive Sales, and Elevate Customer Satisfaction!"
      />
      <div className="max-w-7xl mx-auto flex flex-col gap-20 pb-40">
        <TechStack
          tech={[
            javaScript,
            typeScript,
            react,
            node,
            express,
            fastify,
            sql,
            nextjs,
            php,
            aws,
          ]}
          andMore={true}
        />
        <div className="flex flex-col p-4 lg:p-10 max-w-5xl mx-auto gap-32 h-full">
          <section className="flex flex-col gap-10">
            <Heading>Custom CRM:</Heading>
            <p className="px-4 py-4 text-lg max-w-3xl mx-auto">
              For industries with complex sales model, pre-made CRM solutions
              may not be adequate. Custom CRM solutions are tailored systems
              designed to meet the specific needs and processes of a business,
              offering greater flexibility and functionality than off-the-shelf
              options. By addressing unique business challenges and goals,
              custom CRM solutions help optimize customer interactions, improve
              efficiency, and drive better decision-making. This personalized
              approach ensures that the CRM system grows and evolves with the
              business, delivering sustained value and competitive advantage.
            </p>
            <section className="drop-shadow-lg bg-white border border-gray-200 w-full lg:h-[28rem] rounded-xl flex flex-col gap-10 my-10">
              <div className="flex-col lg:flex-row flex lg:gap-10 justify-between h-full">
                <p
                  className="font-body-sans font-semibold text-2xl lg:text-3xl text-white
              h-full bg-cover bg-right rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl bg-blue-abstract p-8 lg:p-10 lg:pt-20 min-h-20 min-w-96"
                >
                  Why choose a custom CRM?
                </p>
                <div className="flex flex-col gap-8 lg:text-lg text-slate-700 justify-center py-10">
                  <div className="flex flex-col gap-6 text-base px-8 lg:px-10">
                    <div className="flex flex-row gap-4 items-start">
                      <Image
                        width={24}
                        src={checkMark}
                        alt="Green check mark"
                      ></Image>
                      <p>
                        <span className="font-semibold">
                          Tailored to your needs:
                        </span>{" "}
                        Incorporate features essential to your industry&apos;s
                        specifications.
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-start">
                      <Image
                        width={24}
                        src={checkMark}
                        alt="Green check mark"
                      ></Image>
                      <p>
                        <span className="font-semibold">Increased sales:</span>{" "}
                        Drive more sales by offering a personalised experience
                        empowered by better customer data management.
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-start">
                      <Image
                        width={24}
                        src={checkMark}
                        alt="Green check mark"
                      ></Image>
                      <p>
                        <span className="font-semibold">Scalability:</span> A
                        custom solution can evolve as your needs grow, and allow
                        you to incorporate new features
                      </p>
                    </div>
                    <div className="flex flex-row gap-4 items-start">
                      <Image
                        width={24}
                        src={checkMark}
                        alt="Green check mark"
                      ></Image>
                      <p>
                        <span className="font-semibold">Data Privacy:</span>{" "}
                        implement your own security preferences that keep access
                        permissions aligned with your security policies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pb-10">
              <div className="pb-20 pt-12">
                <Heading>What our customers say:</Heading>
              </div>
              <ReviewCard
                author="Youssef Beyram"
                company="Co-Founder at San Diego Wholesalers"
                className="border rounded-2xl"
              >
                <p className="lg:text-lg font-normal font-body-sans text-slate-600">
                  Blue202 revolutionized our operations at San Diego
                  Wholesalers! Their bespoke CRM solution and Inventory
                  Management System streamlined our processes impeccably.{" "}
                  <br></br> <br></br>
                  Exceptional team, innovative solutions, and a{" "}
                  <span className="font-semibold text-blue-900">
                    game-changer
                  </span>{" "}
                  for our business. Highly recommend their expertise!
                </p>
              </ReviewCard>
            </section>
          </section>
          <section>
            <Heading>Our Approach:</Heading>
            <div className="flex flex-col lg:grid lg:grid-flow-row lg:grid-cols-2 justify-center gap-8 py-10 pt-16">
              <Approach index={1} heading="Consultation">
                We start with a detailed consultation to understand your
                buisiness&apos;s requirements and goals.
              </Approach>
              <Approach index={2} heading="Proposal">
                Our engineers will formulate a technical proposal detailing the
                technologies and development plan, giving you the opportunity to
                provide your feedback and request any changes.
              </Approach>
              <Approach index={3} heading="Design">
                We will develop a design for the software architecture and UI,
                incorporating any integrations you may request.
              </Approach>
              <Approach index={3} heading="Development">
                Our developers will bring the design to life through robust and
                scalable code. We will also provide hosting and maintanance
                solutions at your request.
              </Approach>
            </div>
          </section>
          <SoftwarePrinciples></SoftwarePrinciples>
        </div>
      </div>
    </>
  );
};

export default CRM;
