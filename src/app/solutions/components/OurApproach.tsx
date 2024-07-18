import { ReactNode } from "react";
import { Heading } from "../../components/Heading";

export const Approach: React.FC<{
  index: number;
  heading: string;
  children: ReactNode;
}> = ({ index, heading, children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col gap-4 border border-gray-100 p-6 pr-0 min-h-56 mx-3 md:mx-0">
      <div className="flex flex-row gap-4 items-center">
        <div className="bg-blue-accent rounded-full text-center font-medium p-2 w-10 text-white font-mono">
          {index}
        </div>
        <h4 className="text-xl font-semibold">{heading}</h4>
      </div>
      <p className="text-gray-600 pr-8 pl-12 pb-4">{children}</p>
    </div>
  );
};

export const WebApproach = () => {
  return (
    <section className="my-20">
      <Heading>Our Approach:</Heading>
      <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 justify-center gap-8 py-10">
        <Approach heading="Consultation" index={1}>
          We start with a detailed consultation to understand your
          buisiness&apos;s requirements and goals. We love to hear about all
          your visions and ideas.
        </Approach>
        <Approach heading="Design" index={2}>
          Our designers will create a design tailored to your goals and desired
          branding, and formulate a website aligned with your digital marketing
          strategy.
        </Approach>
        <Approach heading="Review" index={3}>
          Before starting development, we will give you the opportunity to
          review the design, request any changes and give feedback.
        </Approach>
        <Approach heading="Development" index={4}>
          Our developers will bring the design to life through robust and
          scalable code.
        </Approach>
      </div>
    </section>
  );
};

export const SoftwareApproach = () => {
  return (
    <section>
      <Heading>Our Approach:</Heading>
      <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 justify-center gap-8 py-10">
        <Approach heading="Consultation" index={1}>
          We start with a detailed consultation to understand your
          buisiness&apos;s requirements and goals. We love to hear about all
          your visions and ideas.
        </Approach>
        <Approach heading="Architecture Design" index={2}>
          Our engineers will formulate a technical proposal that encompasses the
          technologies we reccomend, the proposed software architecture, the
          development plan and timeline.
        </Approach>
        <Approach heading="Review" index={3}>
          Before starting development, we will give you the opportunity to
          review the plan, request any changes and give feedback.
        </Approach>
        <Approach heading="Development" index={4}>
          Our developers will bring the design to life through robust and
          scalable code.
        </Approach>
        <Approach heading="Testing" index={5}>
          We will thoroughly test the software and provide you with a testing
          framework to ensure the software can be well maintained and
          functionality assured.
        </Approach>
        <Approach heading="Deployment" index={6}>
          Should you choose us to assist you with deployment, we will host and
          maintain your solution while also offering continuous support.
        </Approach>
      </div>
    </section>
  );
};
