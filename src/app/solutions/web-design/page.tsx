import { Heading } from "../../components/Heading";
import { Approach } from "../components/OurApproach";
import { PageHero } from "../components/PageHero";
import { Principle } from "../components/Principles";
import prototyping from "/public/images/prototyping-london.svg";
import seo from "/public/images/idea-brainstorm-london.svg";
import plan from "/public/images/plan-london.svg";
import {
  TechStack,
  canva,
  figma,
  javaScript,
  react,
  typeScript,
} from "../components/TechStack";

const WebDesign = () => {
  return (
    <>
      <PageHero
        heading="Elevate your brand with captivating web design."
        description="Visually stunning and user-friendly websites that make your brand stand out."
      />
      <div className="max-w-5xl mx-auto flex flex-col gap-20 pb-20">
        <TechStack tech={[figma, canva, react, javaScript, typeScript]} />
        <section>
          <Heading>Bespoke Web Design:</Heading>
          <p className="max-w-3xl mx-auto px-8 pt-12 text-lg text-slate-800">
            Our web design service is dedicated to taking your brand to new
            heights by creating visually stunning, user-friendly websites that
            captivate and engage your audience. We understand that your website
            is often the first impression customers have of your business, so we
            focus on crafting designs that reflect your unique identity and
            values. Our team of experienced designers and developers collaborate
            with you to ensure your website is not only beautiful but also
            functional, responsive, and optimized for search engines.
          </p>
        </section>
        <section className="my-20">
          <Heading>Our Approach:</Heading>
          <div className="flex flex-col md:grid md:grid-flow-row md:grid-cols-2 justify-center gap-8 py-10">
            <Approach heading="Consultation" index={1}>
              We start with a detailed consultation to understand your
              business&apos;s requirements and goals. We love to hear about all
              your visions and ideas.
            </Approach>
            <Approach heading="Design" index={2}>
              Our designers will create a design tailored to your goals and
              desired branding, and formulate a website aligned with your
              digital marketing strategy.
            </Approach>
            <Approach heading="Review" index={3}>
              Review the design, request any changes and give feedback.
            </Approach>
          </div>
        </section>
        <section>
          <Heading>Our Principles:</Heading>
          <div className="py-20 flex flex-col gap-10 max-w-3xl mx-auto">
            <Principle img={prototyping} heading="Responsive design">
              With over 60% of people accessing the web through their mobile
              phones, we ensure that all sites we build are responsive to ensure
              engaging user experiences across all devices- all without
              compromising on style and quality.
            </Principle>
            <Principle img={plan} heading="Beautiful UI/UX">
              We take pride in crafting seamless, visually stunning experiences.
              Every detail, animation, and component is meticulously designed to
              ensure excellence in every website we create.
            </Principle>
            <Principle img={seo} heading="SEO Optimisation">
              Let&apos;s get your company to the top of the search results! We
              know all the tricks to give your website the boost it needs.
            </Principle>
          </div>
        </section>
      </div>
    </>
  );
};

export default WebDesign;
